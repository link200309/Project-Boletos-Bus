// Función para validar edad
export const validateNIT = (nit) => {
  if (!/^[0-9]{10}$/.test(nit)) {
    return "El NIT debe tener exactamente 10 dígitos";
  }
  return true;
};

export const validateAge = (birthdate) => {
  const today = new Date();
  const birth = new Date(birthdate.split("/").reverse().join("-"));
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age >= 18 || "Debes ser mayor de 18 años para registrarte";
};

export const validateCI = (ci) => {
  if (!/^[0-9]{7,10}$/.test(ci)) {
    return "La cédula debe tener entre 7 y 10 dígitos";
  }
  return true;
};

export const accountValidationRules = {
  name: {
    required: "El nombre es obligatorio",
    minLength: {
      value: 2,
      message: "El nombre debe tener al menos 2 caracteres",
    },
    maxLength: {
      value: 50,
      message: "El nombre no puede exceder 50 caracteres",
    },
    pattern: {
      value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
      message: "El nombre solo puede contener letras y espacios",
    },
  },

  lastName: {
    required: "Los apellidos son obligatorios",
    minLength: {
      value: 2,
      message: "Los apellidos deben tener al menos 2 caracteres",
    },
    maxLength: {
      value: 50,
      message: "Los apellidos no pueden exceder 50 caracteres",
    },
    pattern: {
      value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
      message: "Los apellidos solo pueden contener letras y espacios",
    },
  },

  ci: {
    required: {
      value: true,
      message: "El ci es obligatorio",
    },
    pattern: {
      value: /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ .,;'"`'Üü]*$/,
      message: "Solo se permiten caracteres alfanumericos",
    },
    maxLength: {
      value: 10,
      message: "El ci no debe ser mayor a 10 caracteres",
    },
    minLength: {
      value: 7,
      message: "El ci debe tener al menos 7 caracteres",
    },
    validate: {
      noMultipleSpaces: (value) =>
        !/\s{1,}/.test(value) ||
        "No se permiten espacios en blanco consecutivos",
    },
  },

  birthdate: {
    required: "La fecha de nacimiento es obligatoria",
    pattern: {
      value: /^((19|20)\d\d)-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
      message: "Formato inválido. Use AAAA-MM-DD",
    },
    validate: validateAge,
  },

  cellphone: {
    required: "El número de celular es obligatorio",
    pattern: {
      value: /^[67][0-9]{7}$/,
      message: "Número inválido. Debe iniciar con 6 o 7 y tener 8 dígitos",
    },
  },

  email: {
    required: "El correo electrónico es obligatorio",
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: "Ingrese un correo electrónico válido",
    },
  },
  nameAgency: {
    required: "El nombre de la agencia es obligatorio",
    minLength: {
      value: 3,
      message: "El nombre debe tener al menos 3 caracteres",
    },
    maxLength: {
      value: 50,
      message: "El nombre no puede exceder 50 caracteres",
    },
    pattern: {
      value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9\s\-\.]+$/,
      message: "El nombre contiene caracteres no válidos",
    },
  },
  nit: {
    required: "El NIT es obligatorio",
    validate: validateNIT,
  },
  city: {
    required: "La ciudad es obligatoria",
    minLength: {
      value: 2,
      message: "La ciudad debe tener al menos 2 caracteres",
    },
    maxLength: {
      value: 50,
      message: "La ciudad no puede exceder 50 caracteres",
    },
    pattern: {
      value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
      message: "La ciudad solo puede contener letras y espacios",
    },
  },
  address: {
    required: "La dirección es obligatoria",
    minLength: {
      value: 10,
      message: "La dirección debe tener al menos 10 caracteres",
    },
    maxLength: {
      value: 200,
      message: "La dirección no puede exceder 200 caracteres",
    },
  },
  password: {
    required: "La contraseña es obligatoria",
    minLength: {
      value: 8,
      message: "La contraseña debe tener al menos 8 caracteres",
    },
  },
  confirmPassword: (password) => ({
    required: "Confirme su contraseña",
    validate: (value) => {
      if (value !== password) {
        return "Las contraseñas no coinciden";
      }
      return true;
    },
  }),
};
