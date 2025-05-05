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

export const formatDate = (departureDate) => {
  const date = new Date(departureDate);
  const day = date.getDate();
  const year = date.getFullYear();
  let weekDay = date.toLocaleDateString("es-ES", {
    weekday: "long",
  });
  weekDay = weekDay.charAt(0).toUpperCase() + weekDay.slice(1);
  const month = date.toLocaleDateString("es-ES", { month: "long" });
  return { weekDay, formatedDate: `${day + 1} ${month} ${year}` };
};
