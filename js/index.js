document.addEventListener('click', function(e) {
  if (e.target.localName !== 'a') return;

  var elementsLi = document.querySelectorAll('nav a');
  var elementsMainSection = document.getElementsByTagName('section');

  for (var i = 0; i < elementsLi.length; i++) {
    if (elementsLi[i] === e.target) {
      e.target.parentNode.className = 'selected';
      elementsMainSection[i].className = 'visible';

      
    } else {
      elementsLi[i].parentNode.className = '';
      elementsMainSection[i].className = 'hidden';
    }
  }
}, false);
