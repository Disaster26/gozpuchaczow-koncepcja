(function(){
var h=document.documentElement,K="goz-ula";
function zap(){try{localStorage.setItem(K,JSON.stringify({t:h.classList.contains("t2")?"t2":h.classList.contains("t1")?"t1":"",k:h.classList.contains("kontrast")}))}catch(e){}}
function odsw(){var t=h.classList.contains("t2")?"t2":h.classList.contains("t1")?"t1":"";
document.querySelectorAll("[data-t]").forEach(function(b){b.setAttribute("aria-pressed",b.getAttribute("data-t")===t?"true":"false")});
document.querySelectorAll("[data-k]").forEach(function(b){b.setAttribute("aria-pressed",h.classList.contains("kontrast")?"true":"false")})}
document.querySelectorAll("[data-t]").forEach(function(b){b.addEventListener("click",function(){h.classList.remove("t1","t2");var t=b.getAttribute("data-t");if(t)h.classList.add(t);zap();odsw()})});
document.querySelectorAll("[data-k]").forEach(function(b){b.addEventListener("click",function(){h.classList.toggle("kontrast");zap();odsw()})});
odsw();
var mb=document.querySelector(".mnu-btn"),nav=document.getElementById("nav");
function zamknij(){nav.classList.remove("on");mb.setAttribute("aria-expanded","false");document.body.style.overflow=""}
if(mb){mb.addEventListener("click",function(){var o=!nav.classList.contains("on");nav.classList.toggle("on",o);mb.setAttribute("aria-expanded",o?"true":"false");document.body.style.overflow=o?"hidden":"";if(o){var a=nav.querySelector("a");if(a)a.focus()}});
document.addEventListener("keydown",function(e){if(e.key==="Escape"&&nav.classList.contains("on")){zamknij();mb.focus()}});
nav.querySelectorAll("a").forEach(function(a){a.addEventListener("click",zamknij)})}
// dzisiejszy dzien w tabeli godzin
var d=new Date().getDay();
if(d>=1&&d<=5){document.querySelectorAll("[data-dzien='"+d+"']").forEach(function(c){c.classList.add("dzis")});
var th=document.querySelector("thead th[data-dzien='"+d+"']");if(th){var s=document.createElement("span");s.className="dzis-l";s.textContent="dziś";th.appendChild(s)}}
// karty przewijane przyciskami
document.querySelectorAll("[data-przew]").forEach(function(b){b.addEventListener("click",function(){var k=document.getElementById(b.getAttribute("data-przew")),c=k.querySelector(".karta");var w=c?c.getBoundingClientRect().width+16:300;k.scrollBy({left:b.hasAttribute("data-l")?-w:w,behavior:"smooth"})})});
// mapa po kliknieciu
var mp=document.getElementById("mapa-btn");
if(mp)mp.addEventListener("click",function(){var f=document.createElement("iframe");f.src="https://www.google.com/maps?q=Gminny+O%C5%9Brodek+Zdrowia+Partyzant%C3%B3w+9+21-013+Puchacz%C3%B3w&output=embed";f.title="Mapa dojazdu: ul. Partyzantów 9, Puchaczów";f.loading="lazy";f.referrerPolicy="no-referrer-when-downgrade";var m=document.getElementById("mapa");m.innerHTML="";m.appendChild(f)});
// formularz pokazowy
var fm=document.getElementById("form");
if(fm)fm.addEventListener("submit",function(e){e.preventDefault();var o=document.getElementById("form-msg");if(!fm.checkValidity()){fm.reportValidity();return}o.textContent="To podgląd strony - po wdrożeniu wiadomość trafi na adres przychodnia@gozpuchaczow.pl.";o.focus()});
var ck=document.getElementById("cok");
if(ck)ck.addEventListener("click",function(){try{localStorage.setItem("goz-cookies","1")}catch(e){}document.getElementById("cookies").hidden=true});
})();
