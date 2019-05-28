window.addEventListener('keydown', function(e){
  var audio = document.querySelector('audio[data-key="'+ e.keyCode +'"]');
  var key = document.querySelector('.key[data-key="'+ e.keyCode +'"]');
  if(!audio || !key) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
  setTimeout(function() {key.classList.remove('playing');}, 200);
});