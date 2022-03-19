const img = document.querySelector('img')
const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const button = document.querySelector('button')
const h1 = document.querySelector('h1')

const lightOn = () => {
    img.removeAttribute('src')
    img.setAttribute('src','on.png')
    document.body.style.backgroundImage = 'url("toy.jpeg")'
    btn2.style.backgroundColor = "rgb(100, 100, 100)"
    
}

const lightOff = () => {
    img.removeAttribute('src')
    img.setAttribute('src','off.png')
    document.body.style.backgroundImage = 'none'
    document.body.style.backgroundColor = 'rgb(46, 45, 45)'
}

const change = () => {
    btn1.classList.toggle('show')
    btn2.classList.toggle('show')
    h1.classList.toggle('show')
    
}




btn1.addEventListener('click', lightOn)
btn1.addEventListener('click', change)
btn2.addEventListener('click', lightOff)
btn2.addEventListener('click', change)