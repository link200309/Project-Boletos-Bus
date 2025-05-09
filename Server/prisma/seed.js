import { PrismaClient } from "../src/generated/prisma/index.js";

const prisma = new PrismaClient();

async function main() {
  await prisma.viaje.deleteMany();
  await prisma.chofer.deleteMany();
  await prisma.configuracion_Pago.deleteMany();
  await prisma.ruta.deleteMany();
  await prisma.asiento.deleteMany();
  await prisma.bus.deleteMany();
  await prisma.usuario.deleteMany();
  await prisma.agencia.deleteMany();

  const usuario = await prisma.usuario.create({
    data: {
      correo_electronico: "agencia@transcopacabana.bo",
      contraseña: "segura123",
      numero_celular: 71234567,
      agencia: {
        create: {
          nombre_agencia: "Trans Copacabana",
          tipo_sociedad: "SRL",
          NIT: "1234567890",
          departamento: "La Paz",
          ciudad: "El Alto",
          direccion: "Av. Juan Pablo II #100",
          estado: "Activo",
        },
      },
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
      id_agencia: usuario.id_usuario,
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

  const rutas = await prisma.ruta.createMany({
    data: [
      {
        origen: "La Paz",
        parada_intermedia: "Oruro",
        destino: "Cochabamba",
        distancia: "380km",
        tiempo_estimado: "7",
        camino: "Asfaltado",
      },
      {
        origen: "Santa Cruz",
        parada_intermedia: "Montero",
        destino: "Cochabamba",
        distancia: "480km",
        tiempo_estimado: "9",
        camino: "Asfaltado",
      },
      {
        origen: "Sucre",
        parada_intermedia: "Potosí",
        destino: "Oruro",
        distancia: "350km",
        tiempo_estimado: "6",
        camino: "Asfaltado",
      },
      {
        origen: "Tarija",
        parada_intermedia: "Camiri",
        destino: "Santa Cruz",
        distancia: "410km",
        tiempo_estimado: "8",
        camino: "Asfaltado",
      },
    ],
  });

  const rutasCreadas = await prisma.ruta.findMany();

  const pago = await prisma.configuracion_Pago.create({
    data: {
      ruta_codigo_qr: "https://pagos.bo/qr/abc123",
      fecha_creacion: new Date(),
      estado: "Activo",
      id_agencia: usuario.id_usuario,
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
      id_agencia: usuario.id_usuario,
    },
  });

  const fechas = ["2025-05-10", "2025-05-11", "2025-05-12", "2025-05-13"];
  for (let i = 0; i < 4; i++) {
    await prisma.viaje.create({
      data: {
        fecha_salida: new Date(`${fechas[i]}T00:00:00Z`),
        hora_salida_programada: "08:00:00",
        hora_salida_real: "08:00:00",
        costo: 80.5 + i * 5,
        id_bus: bus.id_bus,
        id_ruta: rutasCreadas[i].id_ruta,
        id_chofer: chofer.id_chofer,
        id_pago: pago.id_pago,
      },
    });
  }

  console.log("Datos insertados exitosamente.");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
