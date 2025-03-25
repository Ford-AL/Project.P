
function replaceTextWithImage() {
  
    let bodyText = document.body.innerHTML;

  
    let regex = /dc1/g;

  
    let newHtml = bodyText.replace(regex, '<img src="dc.svg" alt="dc" style="width: 50px; height: auto;">');

  
    document.body.innerHTML = newHtml;
}


window.onload = replaceTextWithImage;