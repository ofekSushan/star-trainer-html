let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");

let progressValue = 0; // מחליט מאיפה העיגול השני הירוק מתחיל 
let progressEndValue =90; // מחליט מאיפה העיגול השני הירוק עוצר 
let speed = 10;

let progress = setInterval(() => {
  if(progressEndValue==0){
    clearInterval(progress);

    valueContainer.textContent = `${progressValue}`;
  progressBar.style.background = `conic-gradient(
      #4d5bf9 ${progressValue * 3.6}deg,
      #cadcff ${progressValue * 3.6}deg
  )`;

    return;
  }

  progressValue++;
  valueContainer.textContent = `${progressValue}`;
  progressBar.style.background = `conic-gradient(
      #3B6124 ${progressValue * 3.6}deg,
      #cadcff ${progressValue * 3.6}deg
  )`;
  
  if (progressValue == progressEndValue) {
    clearInterval(progress);
  }
}, speed);
