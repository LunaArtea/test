const tables = {
  M1: {
    title: "Mesa M1 · 4 pax",
    badge: "Finalizando",
    risk: true,
    guest: "Sin asignar",
    wait: "10-15 min",
    protected: "M3 · Ortiz · 20:00",
    recommendation:
      "Esperar a que terminen postres antes de prometer la mesa. Puede servir para un walk-in de 4 pax si la cuenta sale antes de las 20:00.",
  },
  M2: {
    title: "Mesa M2 · 2 pax",
    badge: "Uso seguro",
    risk: false,
    guest: "Luna · reserva 19:45",
    wait: "15-20 min",
    protected: "M3 · Ortiz · 20:00",
    recommendation:
      "Asignar a Luna (2 pax). La mesa no afecta reservas próximas y reduce el tiempo de espera de una reserva ya llegada.",
  },
  M3: {
    title: "Mesa M3 · 4 pax",
    badge: "Proteger",
    risk: true,
    guest: "Ortiz · reserva 20:00",
    wait: "No ofrecer",
    protected: "M3 · Ortiz · 20:00",
    recommendation:
      "Mantener bloqueada para Ortiz. Si llega un walk-in de 4 pax, sugerir M6 solo si acepta una ventana corta o esperar a M1.",
  },
  M4: {
    title: "Mesa M4 · 6 pax",
    badge: "Preparar",
    risk: false,
    guest: "Nakamura · walk-in",
    wait: "6-10 min",
    protected: "Martín · 20:15 · 6 pax",
    recommendation:
      "Avisar cocina/sala para acelerar preparación. Es la mejor alternativa para grupos grandes antes de la reserva de las 20:15.",
  },
  M5: {
    title: "Mesa M5 · 8 pax",
    badge: "Ocupada",
    risk: true,
    guest: "Sin asignar",
    wait: "30-35 min",
    protected: "Martín · 20:15 · 6 pax",
    recommendation:
      "No usar como promesa inmediata. El grupo sigue en plato principal y la estimación es demasiado incierta para recepción.",
  },
  M6: {
    title: "Mesa M6 · 4 pax",
    badge: "Ventana corta",
    risk: true,
    guest: "Rivas · walk-in",
    wait: "0-5 min",
    protected: "M3 · Ortiz · 20:00",
    recommendation:
      "Asignar solo si el grupo acepta una experiencia de 45 minutos. Mejor opción: mantener Rivas con espera estimada de 15-20 min.",
  },
  M7: {
    title: "Mesa M7 · 2 pax",
    badge: "Ocupada",
    risk: false,
    guest: "Sin asignar",
    wait: "20-25 min",
    protected: "M8 · Vega · 19:55",
    recommendation:
      "Mesa todavía en entrantes. No cambiar la estimación general; Vega tiene M8 protegida y Luna puede ir a M2.",
  },
  M8: {
    title: "Mesa M8 · 2 pax",
    badge: "Proteger",
    risk: true,
    guest: "Vega · reserva 19:55",
    wait: "No ofrecer",
    protected: "M8 · Vega · 19:55",
    recommendation:
      "Bloquear para Vega. La reserva llega en menos de 15 minutos y no conviene sentar walk-ins aunque la mesa se vea libre.",
  },
  M9: {
    title: "Mesa M9 · 6 pax",
    badge: "Uso seguro",
    risk: false,
    guest: "Nakamura · walk-in",
    wait: "0-5 min",
    protected: "Martín · 20:15 · 6 pax",
    recommendation:
      "Asignar a Nakamura si se confirma que Martín puede usar M4/M5 más tarde. Es la forma más rápida de bajar la espera de grupos grandes.",
  },
  M10: {
    title: "Mesa M10 · 4 pax",
    badge: "Finalizando",
    risk: false,
    guest: "Rivas · walk-in",
    wait: "8-12 min",
    protected: "M3 · Ortiz · 20:00",
    recommendation:
      "Puede ser la siguiente mesa para Rivas. Marcar 'cuenta pedida' ayuda a dar una estimación honesta sin bloquear M3.",
  },
};

const guests = {
  Rivas: {
    selectedGuest: "Rivas · walk-in 4 pax",
    waitEstimate: "15-20 min",
    protectedReservation: "M3 · Ortiz · 20:00",
  },
  Luna: {
    selectedGuest: "Luna · reserva 19:45",
    waitEstimate: "0-5 min",
    protectedReservation: "M8 · Vega · 19:55",
  },
  Nakamura: {
    selectedGuest: "Nakamura · walk-in 6 pax",
    waitEstimate: "20-25 min",
    protectedReservation: "Martín · 20:15 · 6 pax",
  },
  Ortiz: {
    selectedGuest: "Ortiz · reserva 20:00",
    waitEstimate: "Mesa protegida",
    protectedReservation: "M3 · Ortiz · 20:00",
  },
};

const title = document.getElementById("decision-title");
const badge = document.getElementById("riskBadge");
const recommendation = document.getElementById("recommendationText");
const selectedGuest = document.getElementById("selectedGuest");
const waitEstimate = document.getElementById("waitEstimate");
const protectedReservation = document.getElementById("protectedReservation");

document.querySelectorAll(".table").forEach((tableButton) => {
  tableButton.addEventListener("click", () => {
    const table = tables[tableButton.dataset.table];

    document.querySelectorAll(".table").forEach((item) => item.classList.remove("is-selected"));
    tableButton.classList.add("is-selected");

    title.textContent = table.title;
    badge.textContent = table.badge;
    badge.classList.toggle("badge--risk", table.risk);
    badge.classList.toggle("badge--safe", !table.risk);
    recommendation.textContent = table.recommendation;
    selectedGuest.textContent = table.guest;
    waitEstimate.textContent = table.wait;
    protectedReservation.textContent = table.protected;
  });
});

document.querySelectorAll(".guest").forEach((guestCard) => {
  guestCard.addEventListener("click", () => {
    const guest = guests[guestCard.dataset.guest];

    document.querySelectorAll(".guest").forEach((item) => item.classList.remove("guest--selected"));
    guestCard.classList.add("guest--selected");

    selectedGuest.textContent = guest.selectedGuest;
    waitEstimate.textContent = guest.waitEstimate;
    protectedReservation.textContent = guest.protectedReservation;
  });
});
