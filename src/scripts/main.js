"use stricts";

console.log("This project was made by antozr in github");

/// make the function to change data / style
import data from "../assets/data/data.json";

console.table(data);
/// ADD data to the page

let allPreviousHr = document.querySelectorAll(".previousHr");
let allCurrentHr = document.querySelectorAll(".currentHr");
let allTitleAc = document.querySelectorAll(".titleAc");

/// previousHrs data

function dataChange(dateTime) {
  let i = 0;
  allPreviousHr.forEach((el) => {
    let allDataEl = data[i].timeframes;
    if (dateTime == "daily") {
      el.innerText = allDataEl.daily.previous;
    } else if (dateTime == "weekly") {
      el.innerText = allDataEl.weekly.previous;
    } else if (dateTime == "monthly") {
      el.innerText = allDataEl.monthly.previous;
    }

    if (i == allPreviousHr.length) {
      i = 0;
    } else {
      i++;
    }
  });
  let j = 0;
  allCurrentHr.forEach((el) => {
    let allDataEl = data[j].timeframes;
    if (dateTime == "daily") {
      el.innerText = allDataEl.daily.current;
    } else if (dateTime == "weekly") {
      el.innerText = allDataEl.weekly.current;
    } else if (dateTime == "monthly") {
      el.innerText = allDataEl.monthly.current;
    }

    if (j == allPreviousHr.length) {
      j = 0;
    } else {
      j++;
    }
  });
  let k = 0;
  allTitleAc.forEach((el) => {
    el.innerText = data[k].title;
    if (k == allPreviousHr.length) {
      k = 0;
    } else {
      k++;
    }
  });
}

dataChange("daily");

var actifStateDay = "daily";
let allBtnLink = document.querySelectorAll(".card__link");

function removeActifLink(e) {
  allBtnLink.forEach((e) => {
    e.classList.remove("card__link--actif");
  });
}

allBtnLink.forEach((el) => {
  el.addEventListener("click", () => {
    removeActifLink();
    el.classList.add("card__link--actif");
    
    actifStateDay = el.innerText.toLowerCase();
    
    dataChange(el.innerText.toLowerCase());
  });
});
