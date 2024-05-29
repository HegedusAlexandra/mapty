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

      var marker = L.marker(coords).addTo(map);      
      var popup = L.popup()
        .setLatLng(coords)
        .setContent("I am a standalone popup.")
        .openOn(map);

    function onMapClick(e) {
        alert("You clicked the map at " + e.latlng);
    }
    
    map.on('click', onMapClick);
    },
    function () {
      alert("Could not get your position");
    }
  );
