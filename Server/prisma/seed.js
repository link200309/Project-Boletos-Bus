import { PrismaClient } from "../src/generated/prisma/index.js";

const prisma = new PrismaClient();

async function main() {
  // Limpieza
  console.log("Limpiando base de datos...");
  await prisma.viaje.deleteMany();
  await prisma.chofer.deleteMany();
  await prisma.configuracion_Pago.deleteMany();
  await prisma.ruta.deleteMany();
  await prisma.asiento.deleteMany();
  await prisma.bus.deleteMany();
  await prisma.agencia.deleteMany();
  await prisma.usuario.deleteMany();

  // Crear múltiples usuarios y agencias
  console.log("Creando usuarios y agencias...");
  const agencias = [
    {
      nombre_usuario: "transcopacabana",
      correo_electronico: "agencia@transcopacabana.bo",
      contraseña: "segura123",
      numero_celular: 71234567,
      agencia: {
        nombre_agencia: "Trans Copacabana",
        tipo_sociedad: "SRL",
        NIT: "1234567890",
        departamento: "La Paz",
        ciudad: "El Alto",
        direccion: "Av. Juan Pablo II #100",
        estado: "Activo",
      },
    },
    {
      nombre_usuario: "transbolivar",
      correo_electronico: "contacto@transbolivar.bo",
      contraseña: "segura456",
      numero_celular: 72345678,
      agencia: {
        nombre_agencia: "Trans Bolívar Express",
        tipo_sociedad: "SA",
        NIT: "2345678901",
        departamento: "Cochabamba",
        ciudad: "Cochabamba",
        direccion: "Av. Heroínas #250",
        estado: "Activo",
      },
    },
    {
      nombre_usuario: "flotalibertad",
      correo_electronico: "info@flotalibertad.bo",
      contraseña: "segura789",
      numero_celular: 73456789,
      agencia: {
        nombre_agencia: "Flota Libertad",
        tipo_sociedad: "SRL",
        NIT: "3456789012",
        departamento: "Santa Cruz",
        ciudad: "Santa Cruz",
        direccion: "Av. Brasil #180",
        estado: "Activo",
      },
    },
  ];

  const usuariosCreados = [];
  for (const agenciaData of agencias) {
    const usuario = await prisma.usuario.create({
      data: {
        tipo_usuario: "agencia",
        nombre_usuario: agenciaData.nombre_usuario,
        correo_electronico: agenciaData.correo_electronico,
        contraseña: agenciaData.contraseña,
        numero_celular: agenciaData.numero_celular,
        agencia: {
          create: agenciaData.agencia,
        },
      },
      include: { agencia: true },
    });
    usuariosCreados.push(usuario);
  }

  // Crear múltiples buses para cada agencia
  console.log("Creando buses...");
  const buses = [];
  const placas = [
    "1234ABC",
    "5678DEF",
    "9012GHI",
    "3456JKL",
    "7890MNO",
    "1357PQR",
  ];
  const marcas = ["Volvo", "Mercedes-Benz", "Scania", "Iveco", "MAN"];
  const tiposBus = ["CAMA", "SEMI_CAMA", "LEITO", "EJECUTIVO"];

  for (const usuario of usuariosCreados) {
    for (let i = 0; i < 2; i++) {
      const bus = await prisma.bus.create({
        data: {
          placa:
            placas[buses.length] || `${Math.floor(Math.random() * 9999)}XYZ`,
          marca: marcas[Math.floor(Math.random() * marcas.length)],
          modelo: `${2020 + Math.floor(Math.random() * 5)}X`,
          año_modelo: 2020 + Math.floor(Math.random() * 5),
          tipo_bus: tiposBus[Math.floor(Math.random() * tiposBus.length)],
          estado: "Operativo",
          id_agencia: usuario.agencia.id_agencia,
        },
      });
      buses.push(bus);
    }
  }

  // Crear asientos para cada bus
  console.log("Creando asientos...");
  for (const bus of buses) {
    const numAsientos =
      bus.tipo_bus === "CAMA" ? 40 : bus.tipo_bus === "SEMI_CAMA" ? 44 : 48;
    await prisma.asiento.createMany({
      data: Array.from({ length: numAsientos }, (_, i) => ({
        numero: `${i + 1}`,
        ubicacion: i < numAsientos / 2 ? "Superior" : "Inferior",
        estado: Math.random() > 0.1 ? "Disponible" : "Mantenimiento", // 90% disponible
        id_bus: bus.id_bus,
      })),
    });
  }

  // Crear rutas principales
  console.log("Creando rutas...");
  await prisma.ruta.createMany({
    data: [
      {
        origen: "La Paz",
        parada_intermedia: "Cochabamba",
        destino: "Santa Cruz",
        distancia: "700 km",
        tiempo_estimado: "10 h",
        camino: "Asfaltado",
      },
      {
        origen: "Cochabamba",
        parada_intermedia: "Sucre",
        destino: "Tarija",
        distancia: "450 km",
        tiempo_estimado: "8 h",
        camino: "Asfaltado",
      },
      {
        origen: "Santa Cruz",
        parada_intermedia: "Montero",
        destino: "Trinidad",
        distancia: "520 km",
        tiempo_estimado: "7 h",
        camino: "Asfaltado",
      },
      {
        origen: "La Paz",
        parada_intermedia: "Oruro",
        destino: "Potosí",
        distancia: "380 km",
        tiempo_estimado: "6 h",
        camino: "Asfaltado",
      },
      {
        origen: "Sucre",
        parada_intermedia: "Potosí",
        destino: "Uyuni",
        distancia: "320 km",
        tiempo_estimado: "5 h",
        camino: "Ripio",
      },
    ],
  });

  const rutas = await prisma.ruta.findMany();

  // Crear configuraciones de pago para cada agencia
  console.log("Creando configuraciones de pago...");
  const pagos = [];
  for (const usuario of usuariosCreados) {
    const pago = await prisma.configuracion_Pago.create({
      data: {
        ruta_codigo_qr: `https://pagos.bo/qr/${usuario.agencia.nombre_agencia
          .toLowerCase()
          .replace(/\s+/g, "")}${Math.floor(Math.random() * 1000)}`,
        fecha_creacion: new Date(),
        estado: "Activo",
        id_agencia: usuario.agencia.id_agencia,
      },
    });
    pagos.push(pago);
  }

  // Crear múltiples choferes para cada agencia
  console.log("Creando choferes...");
  const nombres = [
    "Juan",
    "Carlos",
    "Miguel",
    "Pedro",
    "Luis",
    "Roberto",
    "Fernando",
    "Diego",
  ];
  const apellidos = [
    "Mamani",
    "Quispe",
    "Condori",
    "Choque",
    "Huanca",
    "Apaza",
    "Flores",
    "Castro",
  ];
  const choferes = [];
  for (const usuario of usuariosCreados) {
    for (let i = 0; i < 3; i++) {
      // 3 choferes por agencia
      const chofer = await prisma.chofer.create({
        data: {
          nombre: nombres[Math.floor(Math.random() * nombres.length)],
          apellido: apellidos[Math.floor(Math.random() * apellidos.length)],
          carnet_identidad: `${Math.floor(Math.random() * 9999999)}${
            ["LP", "CB", "SC", "OR", "PT"][Math.floor(Math.random() * 5)]
          }`,
          numero_celular: `7${Math.floor(Math.random() * 9000000) + 1000000}`,
          categoria_licencia: ["A", "B", "C"][Math.floor(Math.random() * 3)],
          direccion_contacto: `${
            ["Calle", "Avenida", "Pasaje"][Math.floor(Math.random() * 3)]
          } ${Math.floor(Math.random() * 100)} ${
            ["Norte", "Sur", "Este", "Oeste"][Math.floor(Math.random() * 4)]
          }`,
          estado: Math.random() > 0.05 ? "Activo" : "Inactivo", // 95% activo
          id_agencia: usuario.agencia.id_agencia,
        },
      });
      choferes.push(chofer);
    }
  }

  // Crear 10 viajes para cada ruta 
  console.log("Creando viajes...");
  const fechaInicio = new Date("2025-06-11");
  const horasSalida = [
    "06:00:00",
    "08:30:00",
    "11:00:00",
    "14:30:00",
    "17:00:00",
    "20:00:00",
    "22:30:00",
  ];

  for (const ruta of rutas) {
    for (let i = 0; i < 10; i++) {
      // Generar fecha aleatoria entre el 11 de junio y el 31 de agosto de 2025
      const diasAleatorios = Math.floor(Math.random() * 80); // 80 días aproximadamente
      const fechaViaje = new Date(fechaInicio);
      fechaViaje.setDate(fechaInicio.getDate() + diasAleatorios);

      const horaSalida =
        horasSalida[Math.floor(Math.random() * horasSalida.length)];
      const busAleatorio = buses[Math.floor(Math.random() * buses.length)];
      const choferAleatorio =
        choferes[Math.floor(Math.random() * choferes.length)];
      const pagoAleatorio = pagos[Math.floor(Math.random() * pagos.length)];

      // Calcular costo base según distancia y tipo de bus
      const distanciaNum = parseInt(ruta.distancia);
      let costoBase = distanciaNum * 0.15; // 0.15 Bs por km

      if (busAleatorio.tipo_bus === "CAMA") costoBase *= 1.5;
      else if (busAleatorio.tipo_bus === "LEITO") costoBase *= 1.3;
      else if (busAleatorio.tipo_bus === "EJECUTIVO") costoBase *= 1.2;
      // Agregar variación aleatoria
      costoBase += Math.random() * 20 - 10;
      await prisma.viaje.create({
        data: {
          fecha_salida: fechaViaje,
          hora_salida_programada: horaSalida,
          hora_salida_real: horaSalida,
          costo: parseFloat(costoBase.toFixed(2)),
          id_bus: busAleatorio.id_bus,
          id_ruta: ruta.id_ruta,
          id_chofer: choferAleatorio.id_chofer,
          id_pago: pagoAleatorio.id_pago,
        },
      });
    }
  }

  // Crear algunos usuarios pasajeros
  console.log("Creando usuarios pasajeros...");
  const pasajeros = [
    {
      tipo_usuario: "cliente",
      nombre_usuario: "maria.rodriguez",
      correo_electronico: "maria@email.com",
      contraseña: "cliente123",
      numero_celular: 69876543,
    },
    {
      tipo_usuario: "cliente",
      nombre_usuario: "carlos.mendoza",
      correo_electronico: "carlos@email.com",
      contraseña: "cliente456",
      numero_celular: 69765432,
    },
    {
      tipo_usuario: "cliente",
      nombre_usuario: "ana.gutierrez",
      correo_electronico: "ana@email.com",
      contraseña: "cliente789",
      numero_celular: 69654321,
    },
  ];

  for (const pasajero of pasajeros) {
    await prisma.usuario.create({
      data: pasajero,
    });
  }

  console.log("✅ Datos insertados exitosamente:");
  console.log(`- ${usuariosCreados.length} agencias creadas`);
  console.log(`- ${buses.length} buses creados`);
  console.log(`- ${rutas.length} rutas creadas`);
  console.log(`- ${choferes.length} choferes creados`);
  console.log(`- ${rutas.length * 10} viajes creados (10 por ruta)`);
  console.log(`- 3 usuarios pasajeros creados`);
  console.log(`- Asientos creados para todos los buses`);
}

main()
  .catch((e) => {
    console.error("❌ Error durante la inserción:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
