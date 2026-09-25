const pages=[...document.querySelectorAll(".page")];
function go(id){pages.forEach(p=>p.classList.toggle("active",p.id===id));}
document.querySelectorAll("[data-go]").forEach(b=>b.addEventListener("click",()=>go(b.dataset.go)));
document.getElementById("restart").addEventListener("click",()=>go("p0"));
