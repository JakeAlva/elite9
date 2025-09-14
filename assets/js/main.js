const b=document.getElementById('mobileMenuBtn');const m=document.getElementById('mobileMenu');if(b&&m){b.onclick=()=>m.classList.toggle('hidden');}

// Simple collage carousel (no dependencies)
(function(){
  const el = document.getElementById('collageCarousel');
  if(!el) return;
  const wrap = document.getElementById('collageWrap');
  const prev = el.querySelector('.prev');
  const next = el.querySelector('.next');
  const dots = el.querySelector('.dots');
  const slides = [
  "assets/images/collage/slide-01.jpg",
  "assets/images/collage/slide-02.jpg",
  "assets/images/collage/slide-03.jpg",
  "assets/images/collage/slide-04.jpg",
  "assets/images/collage/slide-05.jpg",
  "assets/images/collage/slide-06.jpg",
  "assets/images/collage/slide-07.jpg",
  "assets/images/collage/slide-08.jpg",
  "assets/images/collage/slide-09.jpg",
  "assets/images/collage/slide-10.jpg"
];
  let i = 0, img;
  function render(index){
    i = (index + slides.length) % slides.length;
    if(!img){
      img = document.createElement('img');
      img.className = "absolute inset-0 w-full h-full object-contain p-4 transition-opacity duration-300";
      wrap.innerHTML = "";
      wrap.appendChild(img);
    }
    img.style.opacity = 0;
    // preload
    const tmp = new Image();
    tmp.onload = () => {
      img.src = slides[i];
      img.alt = "Elite Rackz product " + (i+1);
      img.style.opacity = 1;
    };
    tmp.src = slides[i];
    // dots
    dots.innerHTML = "";
    slides.forEach((_, idx)=>{
      const d = document.createElement('button');
      d.className = "h-2 w-2 rounded-full " + (idx===i ? "bg-slate-800" : "bg-slate-400/70");
      d.onclick = ()=>render(idx);
      dots.appendChild(d);
    });
  }
  prev && (prev.onclick = ()=>render(i-1));
  next && (next.onclick = ()=>render(i+1));
  render(0);
  // optional auto-rotate
  let t = setInterval(()=>render(i+1), 5000);
  el.addEventListener('mouseenter', ()=>clearInterval(t));
  el.addEventListener('mouseleave', ()=>{ t = setInterval(()=>render(i+1), 5000); });
})();
