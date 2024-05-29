"use strict";

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");

if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const latitude = position.coords.latitude;
      const { longitude } = position.coords;
      const coords = [latitude, longitude];
      console.log(
        `https://www.google.it/maps/@${latitude},${longitude},14z?entry=ttu`
      );

      const map = L.map("map").setView(coords, 13);

      L.tileLayer("https://b.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map);

      function onMapClick(e) {
        const { lat, lng } = e.latlng;

        L.marker([lat, lng])
          .addTo(map)
          .bindPopup(
            L.popup({
              maxWidth: 250,
              minWidth: 100,
              autoClose: false,
              closeOnClick: false,
              className: "running-popup"
              /*  content: '<img width="200px" src="./Mapty-architecture-part-1.png" >' */
            })
          )
          .setPopupContent('Workout')
          .openPopup();
        /* L.popup().setLatLng([lat, lng]).setContent("Workout").openOn(map); */
      }

      map.on("click", onMapClick);
    },
    function () {
      alert("Could not get your position");
    }
  );
