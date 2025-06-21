export const formatTime = (time, tiempo_estimado) => {
  const [hours, minutes, seconds] = time.split(":").map(Number);
  const now = new Date();
  const horaSalida = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    hours,
    minutes,
    seconds || 0
  );
  const horas = Math.floor(tiempo_estimado);
  const minutos = Math.round((tiempo_estimado % 1) * 100);
  const horaLlegada = new Date(
    horaSalida.getTime() + (horas * 60 + minutos) * 60 * 1000
  );
  const hh = horaLlegada.getHours().toString().padStart(2, "0");
  const mm = horaLlegada.getMinutes().toString().padStart(2, "0");
  return `${hh}:${mm}`;
};

// Formatear fecha de salida del viaje a un objeto con día de la semana y fecha formateada
export const formatDate = (departureDate) => {
  const date = new Date(departureDate);
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();
  let weekDay = date.toLocaleDateString("es-ES", {
    weekday: "long",
    timeZone: "UTC",
  });
  weekDay = weekDay.charAt(0).toUpperCase() + weekDay.slice(1);
  const month = date.toLocaleDateString("es-ES", {
    month: "long",
    timeZone: "UTC",
  });
  return { weekDay, formatedDate: `${day} ${month} ${year}` };
};

// Formatear fecha ISO 8601 a dd/mm/yyyy para vista
export const formatFechaParaVista = (isoDateStr) => {
  if (!isoDateStr) return "";
  const date = new Date(isoDateStr);
  const dd = String(date.getDate() + 1).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
};

//Convertir dd/mm/yyyy a formato ISO 8601 yyyy-mm-ddTHH:MM:SSZ
export const convertDateToISO = (dateString) => {
  if (!dateString) return new Date().toISOString();
  try {
    if (/\d{4}-\d{2}-\d{2}T?/.test(dateString)) {
      const date = new Date(dateString);
      return isNaN(date) ? new Date().toISOString() : date.toISOString();
    }
    const parts = dateString.split("/");
    if (parts.length === 3) {
      const [day, month, year] = parts.map((p) => parseInt(p, 10));
      const date = new Date(Date.UTC(year, month - 1, day));
      return isNaN(date) ? new Date().toISOString() : date.toISOString();
    }
    return new Date().toISOString();
  } catch (error) {
    console.error("Error converting date:", error);
    return new Date().toISOString();
  }
};

export const formatearFechaHora = (fechaISO) => {
  const fecha = new Date(fechaISO);
  return fecha.toLocaleString("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const calcularEdad = (fechaNacimiento) => {
  const hoy = new Date();
  const nacimiento = new Date(fechaNacimiento);
  let edad = hoy.getFullYear() - nacimiento.getFullYear();
  const mes = hoy.getMonth() - nacimiento.getMonth();

  if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
    edad--;
  }
  return edad;
};
