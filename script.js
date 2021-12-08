document.addEventListener("DOMContentLoaded", () => {
  clockApp();
  setInterval(clockApp, 1000);
});

function clockApp() {
  let currentDate = new Date();

  let getHours = currentDate.getHours();

  let getMinutes = currentDate.getMinutes();

  let getSeconds = currentDate.getSeconds();

  if (getHours < 10) {
    getHours = `0${getHours}`;
  }
  if (getMinutes < 10) {
    getMinutes = `0${getMinutes}`;
  }
  if (getSeconds < 10) {
    getSeconds = `0${getSeconds}`;
  }
  if (getHours > 13) {
    getHours = getHours - 12;
  }

  document.querySelector("#hours").innerHTML = getHours + ":";
  document.querySelector("#minutes").innerHTML = getMinutes + ":";
  document.querySelector("#seconds").innerHTML = getSeconds;
}
