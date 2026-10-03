// Birthday date: October 4, 2026
const BIRTHDAY_DATE = "2026-10-04T00:00:00";

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const countdownScreen = document.getElementById("countdownScreen");
const openBtn = document.getElementById("openBtn");

function updateCountdown(){
  const target = new Date(BIRTHDAY_DATE).getTime();
  const now = Date.now();
  let diff = target - now;

  // If the date has passed, show the next October 4.
  if(diff < 0){
    const next = new Date();
    next.setFullYear(next.getFullYear() + 1, 9, 4);
    next.setHours(0,0,0,0);
    diff = next.getTime() - now;
  }

  const days = Math.floor(diff / 86400000);
  diff %= 86400000;
  const hours = Math.floor(diff / 3600000);
  diff %= 3600000;
  const minutes = Math.floor(diff / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);

  daysEl.textContent = String(days).padStart(2,"0");
  hoursEl.textContent = String(hours).padStart(2,"0");
  minutesEl.textContent = String(minutes).padStart(2,"0");
  secondsEl.textContent = String(seconds).padStart(2,"0");
}
updateCountdown();
setInterval(updateCountdown,1000);

openBtn.addEventListener("click",()=>{
  countdownScreen.classList.add("hide");
  window.scrollTo({top:0,behavior:"smooth"});
  const music=document.getElementById("music");
  music.play().catch(()=>{});
});

document.querySelectorAll("[data-target]").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.getElementById(btn.dataset.target).scrollIntoView({behavior:"smooth"});
  });
});

const musicBtn=document.getElementById("musicBtn");
const music=document.getElementById("music");
musicBtn.addEventListener("click",()=>{
  if(music.paused){
    music.play().catch(()=>{});
    musicBtn.textContent="❚❚";
  }else{
    music.pause();
    musicBtn.textContent="♪";
  }
});
