(function(){
  var s=document.querySelector('.slider'); if(!s) return;
  var slides=s.querySelectorAll('.slide'), dots=s.querySelector('.dots'), i=0, t;
  var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  slides.forEach(function(_,n){var b=document.createElement('button');b.setAttribute('aria-label','Слайд '+(n+1));b.onclick=function(){go(n)};dots.appendChild(b)});
  function go(n){i=(n+slides.length)%slides.length;slides.forEach(function(el,k){el.classList.toggle('on',k===i)});
    dots.querySelectorAll('button').forEach(function(b,k){b.classList.toggle('on',k===i)});restart()}
  function restart(){clearInterval(t);if(!reduce)t=setInterval(function(){go(i+1)},5500)}
  s.querySelector('.prev').onclick=function(){go(i-1)};
  s.querySelector('.next').onclick=function(){go(i+1)};
  go(0);
})();
