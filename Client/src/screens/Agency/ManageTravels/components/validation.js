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
};
