// Small JS for gallery lightbox, smooth nav, and audio track switching
document.addEventListener('DOMContentLoaded',()=>{
  // Background music control
  const bgMusic = document.getElementById('bgMusic');
  const bgMuteBtn = document.getElementById('bgMuteBtn');
  let isMuted = false;

  if(bgMusic && bgMuteBtn){
    // Try to autoplay
    bgMusic.play().catch(()=>{});
    
    bgMuteBtn.addEventListener('click',()=>{
      if(isMuted){
        bgMusic.play().catch(()=>{});
        bgMuteBtn.classList.remove('muted');
        bgMuteBtn.textContent = '🔊';
        bgMuteBtn.title = 'Mute background music';
        isMuted = false;
      }else{
        bgMusic.pause();
        bgMuteBtn.classList.add('muted');
        bgMuteBtn.textContent = '🔇';
        bgMuteBtn.title = 'Unmute background music';
        isMuted = true;
      }
      localStorage.setItem('bgMusicMuted', isMuted);
    });

    // Load preference
    if(localStorage.getItem('bgMusicMuted') === 'true'){
      bgMusic.pause();
      bgMuteBtn.classList.add('muted');
      bgMuteBtn.textContent = '🔇';
      isMuted = true;
    }
  }

  // smooth nav
  document.querySelectorAll('.site-nav a').forEach(a=>{
    a.addEventListener('click',e=>{
      e.preventDefault();document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'});
    });
  });

  // gallery -> lightbox
  const gallery = document.getElementById('gallery');
  const lightbox = document.getElementById('lightbox');
  const lbImage = document.getElementById('lbImage');
  const lbCaption = document.getElementById('lbCaption');
  const lbClose = document.getElementById('lbClose');

  gallery?.addEventListener('click', e=>{
    const img = e.target.closest('img');
    if(!img) return;
    lbImage.src = img.src; lbImage.alt = img.alt || '';
    lbCaption.textContent = img.dataset.name || img.alt || '';
    lightbox.setAttribute('aria-hidden','false');
  });
  function closeLB(){ lightbox.setAttribute('aria-hidden','true'); lbImage.src=''; }
  lbClose.addEventListener('click',closeLB);
  lightbox.addEventListener('click',e=>{ if(e.target===lightbox) closeLB(); });
  document.addEventListener('keydown',e=>{ if(e.key==='Escape') closeLB(); });

  // audio track switching
  const player = document.getElementById('player');
  const trackList = document.getElementById('trackList');
  if(trackList && player){
    trackList.addEventListener('click', e=>{
      const li = e.target.closest('li'); if(!li) return;
      const src = li.dataset.src; if(!src) return;
      // update active
      trackList.querySelectorAll('li').forEach(x=>x.classList.remove('active'));
      li.classList.add('active');
      player.src = src; player.play().catch(()=>{});
    });
  }

  // music track switching
  const musicPlayer = document.getElementById('musicPlayer');
  const musicList = document.getElementById('musicList');
  if(musicList && musicPlayer){
    musicList.addEventListener('click', e=>{
      const li = e.target.closest('li'); if(!li) return;
      const src = li.dataset.src; if(!src) return;
      // update active
      musicList.querySelectorAll('li').forEach(x=>x.classList.remove('active'));
      li.classList.add('active');
      musicPlayer.src = src; musicPlayer.play().catch(()=>{});
    });
  }
});