let logo = document.querySelector('.logo')
let nav = document.querySelector('nav')
let content = document.querySelector('.content')

window.onscroll = () => {
  let y = window.scrollY
  if(y>=300){
    logo.style.flex = 1
    nav.style.position = 'fixed'
    nav.style.top = '0px'

  }else{
    logo.style.flex =  0
    nav.style.position = 'absolute'
    nav.style.top = '300px'

  }
}
