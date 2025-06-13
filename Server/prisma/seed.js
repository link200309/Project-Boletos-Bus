import { PrismaClient } from "../src/generated/prisma/index.js";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  await prisma.reserva.deleteMany();
  await prisma.viaje.deleteMany();
  await prisma.chofer.deleteMany();
  await prisma.configuracion_Pago.deleteMany();
  await prisma.ruta.deleteMany();
  await prisma.asiento.deleteMany();
  await prisma.bus.deleteMany();
  await prisma.pasajero.deleteMany();
  await prisma.agencia.deleteMany();
  await prisma.usuario.deleteMany();

  const contraseñaHasheada = await bcrypt.hash("12345678", 10);

  const usuarioAgencia = await prisma.usuario.create({
    data: {
      tipo_usuario: "agencia",
      nombre: "Juan Carlos",
      apellido: "Mendoza",
      ci: "1234567LP",
      correo_electronico: "agencia@gmail.com",
      contraseña: contraseñaHasheada,
      numero_celular: 71234567,
    },
  });

  const agencia = await prisma.agencia.create({
    data: {
      id_agencia: usuarioAgencia.id_usuario,
      nombre_agencia: "Trans Copacabana",
      tipo_sociedad: "SRL",
      NIT: "1234567890",
      departamento: "La Paz",
      ciudad: "El Alto",
      direccion: "Av. Juan Pablo II #100",
      estado: "Activo",
      correo_electronico_agencia: "contacto@transcopacabana.bo",
      numero_celular_agencia: 71234567,
      nombre_representante: "Juan Carlos",
      apellido_representante: "Mendoza",
      ci_representante: "1234567LP",
      celular_representante: "71234567",
    },
  });

  const usuarioPasajero = await prisma.usuario.create({
    data: {
      tipo_usuario: "cliente",
      nombre: "María",
      apellido: "García",
      ci: "9876543CB",
      correo_electronico: "maria@gmail.com",
      contraseña: "password123",
      numero_celular: 78912345,
    },
  });

  const pasajero = await prisma.pasajero.create({
    data: {
      id_pasajero: usuarioPasajero.id_usuario,
      fecha_nacimiento: new Date("1990-05-15"),
    },
  });

  const bus = await prisma.bus.create({
    data: {
      placa: "1234ABC",
      marca: "Volvo",
      modelo: "2022X",
      año_modelo: 2022,
      tipo_bus: "CAMA",
      estado: "Operativo",
      id_agencia: agencia.id_agencia,
    },
  });

  await prisma.asiento.createMany({
    data: Array.from({ length: 40 }, (_, i) => ({
      numero: `${i + 1}`,
      ubicacion: i < 20 ? "Superior" : "Inferior",
      estado: "Disponible",
      id_bus: bus.id_bus,
    })),
  });

  await prisma.ruta.createMany({
    data: [
      {
        origen: "La Paz",
        parada_intermedia: "Oruro",
        destino: "Cochabamba",
        distancia: "380km",
        tiempo_estimado: "7",
        camino: "Asfaltado",
        id_agencia: agencia.id_agencia,
      },
      {
        origen: "Santa Cruz",
        parada_intermedia: "Montero",
        destino: "Cochabamba",
        distancia: "480km",
        tiempo_estimado: "9",
        camino: "Asfaltado",
        id_agencia: agencia.id_agencia,
      },
      {
        origen: "Sucre",
        parada_intermedia: "Potosí",
        destino: "Oruro",
        distancia: "350km",
        tiempo_estimado: "6",
        camino: "Asfaltado",
        id_agencia: agencia.id_agencia,
      },
      {
        origen: "Tarija",
        parada_intermedia: "Camiri",
        destino: "Santa Cruz",
        distancia: "410km",
        tiempo_estimado: "8",
        camino: "Asfaltado",
        id_agencia: agencia.id_agencia,
      },
    ],
  });

  const rutas = await prisma.ruta.findMany();

  const pago = await prisma.configuracion_Pago.create({
    data: {
      ruta_codigo_qr: "https://pagos.bo/qr/abc123",
      fecha_creacion: new Date(),
      estado: "Activo",
      id_agencia: agencia.id_agencia,
    },
  });

  const chofer = await prisma.chofer.create({
    data: {
      nombre: "Juan",
      apellido: "Mamani",
      carnet_identidad: "1234567LP",
      numero_celular: "78945612",
      categoria_licencia: "B",
      direccion_contacto: "Calle 12 de Octubre, El Alto",
      estado: "Activo",
      id_agencia: agencia.id_agencia,
    },
  });

  const fechas = [
    "2025-07-10",
    "2025-07-11",
    "2025-07-12",
    "2025-07-13",
    "2025-07-14",
    "2025-07-15",
    "2025-07-16",
    "2025-07-17",
    "2025-07-18",
    "2025-07-19",
    "2025-07-20",
    "2025-07-21",
    "2025-07-22",
    "2025-07-23",
    "2025-07-24",
    "2025-07-25",
    "2025-07-26",
  ];
  const viajes = [];

  for (let i = 0; i < fechas.length; i++) {
    const viaje = await prisma.viaje.create({
      data: {
        fecha_salida: new Date(`${fechas[i]}T08:00:00Z`),
        hora_salida_programada: "08:00:00",
        hora_salida_real: "08:00:00",
        costo: 80.5 + i * 5,
        id_bus: bus.id_bus,
        id_ruta: rutas[i % rutas.length].id_ruta,
        id_chofer: chofer.id_chofer,
        id_pago: pago.id_pago,
      },
    });
    viajes.push(viaje);
  }

  let asientoDisponible = await prisma.asiento.findFirst({
    where: {
      id_bus: bus.id_bus,
      estado: "Disponible",
    },
  });

  await prisma.reserva.create({
    data: {
      id_pasajero: pasajero.id_pasajero,
      id_viaje: viajes[0].id_viaje,
      id_asiento: asientoDisponible?.id_asiento ?? null,
      estado: "confirmado",
      comprobante: "COMP-001",
    },
  });

  if (asientoDisponible) {
    await prisma.asiento.update({
      where: { id_asiento: asientoDisponible.id_asiento },
      data: { estado: "Reservado" },
    });
  }

  asientoDisponible = await prisma.asiento.findFirst({
    where: {
      id_bus: bus.id_bus,
      estado: "Disponible",
    },
  });

  await prisma.reserva.create({
    data: {
      id_pasajero: pasajero.id_pasajero,
      id_viaje: viajes[1].id_viaje,
      id_asiento: asientoDisponible?.id_asiento ?? null,
      estado: "pendiente",
    },
  });

  if (asientoDisponible) {
    await prisma.asiento.update({
      where: { id_asiento: asientoDisponible.id_asiento },
      data: { estado: "Reservado" },
    });
  }

  console.log("Datos insertados exitosamente.");
  console.log(`Usuario agencia creado: ${usuarioAgencia.id_usuario}`);
  console.log(`Agencia creada: ${agencia.id_agencia}`);
  console.log(`Usuario pasajero creado: ${usuarioPasajero.id_usuario}`);
  console.log(`Pasajero creado: ${pasajero.id_pasajero}`);
  console.log(`Viajes creados: ${viajes.length}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
