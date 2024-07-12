function toggleMode() {
  const html = document.documentElement

  // if(html.classList.contains('light')) {
    // html.classList.remove('light')
  // } else {
    // html.classList.add('light')
  // }
  html.classList.toggle('light') //troca o fundo A

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if(html.classList.contains('light')) {
  // se tiver light mode, adicionar a imagem light
  img.setAttribute('src', 'Assets/Avatar-light.png')
  } else {
  // se tiver sem light mode, manter a imagem normal
  img.setAttribute('src', 'Assets/avatar.png')
  }

  // substituir o alt da imagem
  if(html.classList.contains('light')) {
  // se tiver light mode, adicionar a frase do modo light
  img.setAttribute('alt', 'Fodo de Luan Felipe, sorrindo usando camisa verde e um óculos vermelho de corrida.')
  } else {
  // se tiver sem light mode, manter a frase normal
  img.setAttribute('alt', 'Fodo de Luan Felipe, sorrindo usando camisa cinza.')
  }
}