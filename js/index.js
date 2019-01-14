document.addEventListener('click', function(e) {
  if (e.target.localName !== 'a') return;

  var elementsLi = document.getElementsByTagName('a');

  for (var i = 0; i < elementsLi.length; i++) {
    if (elementsLi[i] === e.target) {
      e.target.parentNode.className = 'selected';
    } else {
      elementsLi[i].parentNode.className = '';
    }
  }
}, false);
