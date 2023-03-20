function navegadorStatus() {
  const idioma = navigator.language;

  navigator.cookieEnabled ? console.log("As cookies do seu navegador estão habilitadas") : console.log("As cookies do seu navegador não estão habilitadas");

  const cookiesHab = navigator.cookieEnabled;
  console.log(`Estado de cookies: ${cookiesHab}`)

  navigator.onLine ? console.log("Seu navegador dispõe de conexão a Internet") : console.log("Seu navegador não dispõe de conexão a Internet");

  const internetHab = navigator;
  console.log(`Estado de Internet: ${internetHab.onLine}`)


  console.log(`O idioma do seu navegador é: (${idioma})`)
}
navegadorStatus();