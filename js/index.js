var navMenu = document.getElementById('nav');
var langMenu = document.getElementById('language-selection');

navMenu.addEventListener('click', function(e) {
  if (e.target.localName !== 'a') return;

  var elementsHeaderLi = document.querySelectorAll('nav a');
  var elementsMainSection = document.getElementsByTagName('section');

  for (var i = 0; i < elementsHeaderLi.length; i++) {
    if (elementsHeaderLi[i] === e.target) {
      e.target.parentNode.className = 'selected';
      elementsMainSection[i].className = 'visible';

      
    } else {
      elementsHeaderLi[i].parentNode.className = '';
      elementsMainSection[i].className = 'hidden';
    }
  }
}, false);

langMenu.addEventListener('click', function(e) {
  if (e.target.localName !== 'a') return;

  var targetLang = e.target.textContent.toLowerCase();
  var langChoicesA = document.querySelectorAll('#language-selection a');
  var langChoicesLi = document.querySelectorAll('#language-selection li');
  var langDivs = document.querySelectorAll('section.visible > div');

  if (targetLang === 'c/c++') targetLang = 'c';
  console.log(targetLang);

  for (var j = 0; j < langDivs.length; j++) {
    if (langChoicesA[j].textContent === 'C/C++') {
      langDivs[j].className = 'c';
    } else {
      langDivs[j].className = langChoicesA[j].textContent.toLowerCase();
    }

    if (langDivs[j].className !== targetLang) {
      langChoicesLi[j].className = '';
      langDivs[j].className = 'hidden';
    } else {
      langChoicesLi[j].className = 'selected';
      langDivs[j].className += ' visible';
    }
  }
}, false);
