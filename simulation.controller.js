import {supabase} from '../config/supabase.js'

let today = {
  date: new Date().toDateString(),
  steps: 0,
  distance: 0,
  calories: 0,
};

function updateSteps() {

  if (today.date !== new Date().toDateString()) {
    today.date = new Date().toDateString();
    today.steps = 0;
    today.distance = 0;
    today.calories = 0;
  }

 
  const addedSteps = Math.floor(Math.random() * 10) + 5;

  today.steps += addedSteps;

 
  today.distance = Number((today.steps * 0.0008).toFixed(2));

  
  today.calories = Math.round(today.steps * 0.04);
}


setInterval(updateSteps, 5000);


export const getToday = (req, res) => {
  res.json(today);
};


