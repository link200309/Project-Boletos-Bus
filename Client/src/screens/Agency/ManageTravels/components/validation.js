export const validator = {
  fechaSalida: {
    required: {
      value: true,
      message: "La fecha de salida es requerido",
    },
    min: {
      value: new Date().toISOString().split("T")[0],
      message: "Debe ser una fecha futura",
    },
    max: {
      value: "2026-06-25",
      message: "No debe ser una fecha posterior a 2026-06-25",
    },
  },
  costo: {
    required: {
      value: true,
      message: "El costo es requerido",
    },
    min: {
      value: 0,
      message: "No debe ser un costo negativo",
    },
    max: {
      value: 1000000,
      message: "No debe ser un costo mayor a 1,000,000",
    },
  },

  origen: {
    required: {
      value: true,
      message: "El origen es requerido",
    },
    maxLength: {
      value: 50,
      message: "El origen no debe ser mayor a 50 caracteres",
    },
    minLength: {
      value: 3,
      message: "El origen debe tener al menos 3 caracteres",
    },
    validate: {
      noMultipleSpaces: (value) =>
        !/\s{2,}/.test(value) ||
        "No se permiten múltiples espacios en blanco consecutivos",
    },
  },

  destino: {
    required: {
      value: true,
      message: "El destino es requerido",
    },
    maxLength: {
      value: 50,
      message: "El destino no debe ser mayor a 50 caracteres",
    },
    minLength: {
      value: 3,
      message: "El destino debe tener al menos 3 caracteres",
    },
    validate: {
      noMultipleSpaces: (value) =>
        !/\s{2,}/.test(value) ||
        "No se permiten múltiples espacios en blanco consecutivos",
    },
  },
  paradaIntermedia: {
    required: {
      value: true,
      message: "La parada intermedia es requerido",
    },
    maxLength: {
      value: 50,
      message: "La parada intermedia no debe ser mayor a 50 caracteres",
    },
    minLength: {
      value: 3,
      message: "La parada intermedia debe tener al menos 3 caracteres",
    },
    validate: {
      noMultipleSpaces: (value) =>
        !/\s{2,}/.test(value) ||
        "No se permiten múltiples espacios en blanco consecutivos",
    },
  },
  distancia: {
    required: {
      value: true,
      message: "La distancia es requerido",
    },
    maxLength: {
      value: 30,
      message: "La distancia no debe ser mayor a 30 caracteres",
    },
    minLength: {
      value: 2,
      message: "La distancia debe tener al menos 2 caracteres",
    },
    validate: {
      noMultipleSpaces: (value) =>
        !/\s{2,}/.test(value) ||
        "No se permiten múltiples espacios en blanco consecutivos",
    },
  },
  tiempoEstimado: {
    required: {
      value: true,
      message: "El tiempo estimado es requerido",
    },
    maxLength: {
      value: 20,
      message: "El tiempo estimado no debe ser mayor a 20 caracteres",
    },
    minLength: {
      value: 2,
      message: "El tiempo estimado debe tener al menos 2 caracteres",
    },
    validate: {
      noMultipleSpaces: (value) =>
        !/\s{2,}/.test(value) ||
        "No se permiten múltiples espacios en blanco consecutivos",
    },
  },
  descripcion: {
    required: {
      value: true,
      message: "La descripción del camino es requerido",
    },
    maxLength: {
      value: 100,
      message: "La descripción del camino no debe ser mayor a 100 caracteres",
    },
    minLength: {
      value: 2,
      message: "La descripcion del camino debe tener al menos 2 caracteres",
    },
    validate: {
      noMultipleSpaces: (value) =>
        !/\s{2,}/.test(value) ||
        "No se permiten múltiples espacios en blanco consecutivos",
    },
  },
};
