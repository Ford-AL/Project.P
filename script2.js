
function replaceTextWithImage() {
  
    let bodyText = document.body.innerHTML;

  
    let regex = /XD505/g;

  
    let newHtml = bodyText.replace(regex, '<img src="xd.svg" alt="XD" style="width: 50px; height: auto;">');

  
    document.body.innerHTML = newHtml;
}


window.onload = replaceTextWithImage;