function toggleMode(){
  const html = document.documentElement
  html.classList.toggle("light")
  const img = document.querySelector("#profile img")
 
 
 if(html.classList.contains('light')) {
    
    img.setAttribute("src", "./assets/fotor-20240526114616.png")
    img.setAttribute('alt','Imagem com óculos')

  } else {
    img.setAttribute("src", "./assets/fotor-20240526115143.png")
    img.setAttribute("alt", "Foto de perfil")
  }

//pegar tag img

//substituir a img


}