document.addEventListener('click', function(e) {
  if (e.target.localName !== 'a') return;

  var elementsLi = document.getElementsByTagName('a');
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
  
  // var route = e.target.textContent.toLowerCase();
  // if (route.includes(' ')) {
  //   route = route.split(' ')[0]
  // }

  // var contentToggled = document.getElementById('body').innerHTML;
  // window.history.pushState({ 'html' : contentToggled }, e.target.textContent, '/' + route);
  // window.onpopstate = function(e) {
  //   if (e.state) {
  //     document.getElementById('body').innerHTML = e.state.html;
  //   }
  // }
  // console.log(history);
}, false);
