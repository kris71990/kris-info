(function() {
  const navMenu = document.getElementById('nav');
  const langMenu = document.getElementById('language-selection');
  const aboutLinksP = document.getElementById('links');
  const elementsMainSection = document.getElementsByTagName('section');
  const elementsHeaderLi = document.querySelectorAll('nav a');

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
  
    let targetLang = e.target.textContent.toLowerCase();
  
    const langChoicesA = document.querySelectorAll('#language-selection a');
    const langChoicesLi = document.querySelectorAll('#language-selection li');
    const projectDivs = document.querySelectorAll('#project-view > div');
  
    if (targetLang === 'c/c++') targetLang = 'c';

    langChoicesA.forEach((choice) => {
      if (choice.textContent === e.target.textContent) {
        choice.classList.add('selected')
      } else {
        choice.classList.remove('selected')
      }
    })

    projectDivs.forEach((project) => {
      let classes = project.classList;

      if (targetLang === 'all') {
        classes.remove('hidden')
        classes.remove('visible');
        return;
      }

      if (classes.contains(targetLang)) {
        if (classes.contains('hidden')) classes.remove('hidden')
        classes.add('visible')
      } else {
        if (classes.contains('visible')) classes.remove('visible')
        classes.add('hidden')
      }
    })
  }, false);
})();
