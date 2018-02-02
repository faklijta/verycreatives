'use strict';

function ajax (method, url, data, callback) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        var requestAPI = JSON.parse(xhr.response);
        callback(requestAPI);
      }
    });
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
};

function drawBall {
  var display = document.querySelector('display')
  var ball = document.createElement("figure").classList.add('ball')
  display.appendChild(ball)
}
var button = document.querySelector('button');
button.addEventListener('click', function () {
  var url = 'http://localhost:3000/';
  ajax('GET', url, null, drawBall)
});

