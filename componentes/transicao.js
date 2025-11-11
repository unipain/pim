const jogoBtn = document.getElementById('jogo-btn');

jogoBtn.addEventListener('click', e => {
  e.preventDefault(); 
  const overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.backgroundColor = '#000';
  overlay.style.opacity = 0;
  overlay.style.transition = 'opacity 1s ease';
  overlay.style.zIndex = 9999;
  document.body.appendChild(overlay);

  requestAnimationFrame(() => {
    overlay.style.opacity = 1;
  });

  setTimeout(() => {
    window.location.href = jogoBtn.href;
  }, 1000);
});
