let clock1 = document.getElementById('time');
let cur_date=document.getElementById('date');
const deg = 6;
     let hr = document.querySelector('#hr');
     let min = document.querySelector('#min');
     let sec = document.querySelector('#sec');

setInterval(() => {
  let date = new Date();
  let d = new Date();
//   eturns a string with a language sensitive representation of the time portion of this date
//   for more information visit https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString
  clock1.innerHTML = date.toLocaleTimeString();


let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let hh = d.getHours() * 30;
let mm = d.getMinutes() * deg;
let ss = d.getSeconds() * deg;

// This arrangement can be altered based on how we want the date's format to appear.
let currentDate = `${day}-${month}-${year}`;
cur_date.innerHTML=currentDate;

hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
min.style.transform = `rotateZ(${mm}deg)`;
sec.style.transform = `rotateZ(${ss}deg)`;


}, 1000);

