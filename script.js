const config = {
  name: "Nour",
  message: "Happy birthday, Nour. I hope this year gives you more reasons to smile, more moments worth remembering, and a lot of things you didn't even know you wanted. And yes, I spent actual time making this instead of just sending you a \"happy birthday\" message at 12:00 AM.",
  signature: "— Mohamed"
};

document.getElementById("nameTop").textContent = config.name;
document.getElementById("message").textContent = config.message;
document.querySelector(".signature").textContent = config.signature;

const hero = document.getElementById("hero");
const story = document.getElementById("story");
const openBtn = document.getElementById("openBtn");
const againBtn = document.getElementById("againBtn");

function revealOnScroll(){
  document.querySelectorAll(".reveal").forEach(el=>{
    const r=el.getBoundingClientRect();
    if(r.top < innerHeight*.88) el.classList.add("visible");
  });
}

openBtn.addEventListener("click",()=>{
  hero.classList.add("fadeout");
  setTimeout(()=>{
    hero.style.display="none";
    story.classList.remove("hidden");
    revealOnScroll();
    story.scrollIntoView({behavior:"smooth"});
  },650);
});

againBtn.addEventListener("click",()=>{
  window.scrollTo({top:0,behavior:"smooth"});
  setTimeout(()=>{
    story.classList.add("hidden");
    hero.style.display="flex";
    requestAnimationFrame(()=>hero.classList.remove("fadeout"));
  },500);
});

addEventListener("scroll",revealOnScroll);
revealOnScroll();
