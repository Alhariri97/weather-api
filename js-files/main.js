document.getElementById("submit").addEventListener("click", () => {
  getagain();
});

async function getagain() {
  const appiKey = "6e258d21e22a90bd2433eda7e3e9daf0";
  const city = document.getElementById("search").value;
  if (city) {
    try {
      const weatherRespons = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appiKey}`
      );
      if (weatherRespons.ok) {
        dataWether = await weatherRespons.json();
        let temp = Math.floor(dataWether.main.temp - 273.15);
        let feels = Math.floor(dataWether.main.feels_like - 273.15);
        let max = Math.floor(dataWether.main.temp_max - 273.15);
        let min = Math.floor(dataWether.main.temp_min - 273.15);
        let src = `http://openweathermap.org/img/w/${dataWether.weather[0].icon}.png`;
        document.getElementById("output").innerHTML += `
      <div class="col-5 data">
      <span id="del" class="del">Delete </span>
        <h2>City: ${dataWether.name}, ${dataWether.sys.country}</h2>
        <p>${dataWether.weather[0].main}</p>
        <p>Current Temp in ${dataWether.name} is ${temp}&#8451;, it feels like ${feels}&#8451; , <span> The Max Temp is ${max}&#8451; </apan>, and <span> The Min Temp is ${min}&#8451;</apan></p>
        <p></p>
        <span> ${dataWether.weather[0].description}</span>
        <img src="${src}" alt="" >
      </div>`;
      } else {
        document.getElementById("message").innerHTML =
          "Come On mate Give a valid name :)";
        show();
      }
    } catch (err) {
      console.log(err);
    }
  } else {
    document.getElementById("message").innerHTML =
      "Don't you want to add a City Name !?";
    show();
  }
}

document.addEventListener("click", (e) => {
  if (e.target.className === "del") {
    e.target.parentElement.style.display = "none";
  }
});

var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

function show() {
  modal.style.display = "block";
}
span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
