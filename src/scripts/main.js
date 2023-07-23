"use stricts";

console.log('This project was made by antozr in github');

/// make the function to change data / style 
import data from '../assets/data/data.json';

console.table(data);
/// ADD data to the page

let allPreviousHr = document.querySelectorAll('.previousHr');

/// previousHrs data 
let i = 0;

function dataChange(dateTime){
    
    allPreviousHr.forEach((el)=>{

        let allDataEl = data[i].timeframes;
        if(dateTime == 'daily'){
            el.innerText = allDataEl.daily.previous;
        }else if (dateTime == 'weekly'){
            el.innerText = allDataEl.weekly.previous;
        }else if(dateTime == 'monthly'){
            el.innerText = allDataEl.monthly.previous;
        };
        
        if ( i == allPreviousHr.length){
            i = 0;
        }else{
            i++;
        }
    });
};

dataChange('daily');




var actifStateDay = 'daily';
let allBtnLink = document.querySelectorAll('.card__link');

function removeActifLink(e){

    allBtnLink.forEach((e)=>{
        e.classList.remove('card__link--actif');
    })
};

allBtnLink.forEach((el)=>{
  

    el.addEventListener('click', ()=>{
        removeActifLink();
        el.classList.add('card__link--actif');
        console.log(el.innerText);
        actifStateDay= el.innerText.toLowerCase();
        console.log(actifStateDay);
        dataChange(el.innerText.toLowerCase());
    })
});


