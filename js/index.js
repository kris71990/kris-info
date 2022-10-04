(function() {
  var navMenu = document.getElementById('nav');
  var langMenu = document.getElementById('language-selection');
  var aboutLinksP = document.getElementById('links');
  var elementsMainSection = document.getElementsByTagName('section');
  var elementsHeaderLi = document.querySelectorAll('nav a');

  aboutLinksP.addEventListener('click', function(e) {
    if (e.target.localName !== 'a') return;
    
    switch (e.target.textContent) {
      case 'areas of expertise':
        elementsMainSection[1].className = 'hidden';
        elementsHeaderLi[1].parentNode.className = '';
        elementsHeaderLi[2].parentNode.className = 'selected';
        elementsMainSection[2].className = 'visible';
        return;
      case 'projects':
        elementsMainSection[1].className = 'hidden';
        elementsHeaderLi[1].parentNode.className = '';
        elementsHeaderLi[3].parentNode.className = 'selected';
        elementsMainSection[3].className = 'visible';
    }
  }, false);
  
  navMenu.addEventListener('click', function(e) {
    if (e.target.localName !== 'a') return;
  
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
    var projectDivs = document.querySelectorAll('#project-view > div');

    console.log(targetLang)
    console.log(langChoicesA)
    console.log(langChoicesLi)
    console.log(projectDivs)
  
    if (targetLang === 'c/c++') targetLang = 'c';
  
    for (var j = 0; j < projectDivs.length; j++) {
      // if (langChoicesA[j + 1].textContent === 'C/C++') {
      //   projectDivs[j].className = 'c';
      // } else {
      //   projectDivs[j].className = langChoicesA[j + 1].textContent.toLowerCase();
      // }

      // 
  
      if (targetLang === 'all') {
        langChoicesLi[0].className = 'selected';
        langChoicesLi[j + 1].className = '';
        projectDivs[j].className += ' visible';
        continue;
      }
  
      if (!projectDivs[j].classList.contains(targetLang)) {
        langChoicesLi[j + 1].className = '';
        projectDivs[j].className = 'hidden';
      } else {
        langChoicesLi[0].className = '';
        langChoicesLi[j + 1].className = 'selected';
        projectDivs[j].className += ' visible';
      }
    }
  }, false);
})();
