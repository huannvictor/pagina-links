let html = document.querySelector('html')
let checkbox = document.querySelector('#dark')
let deezer = document.querySelector('#deezer')

checkbox.addEventListener('change',()=>{
    html.classList.toggle('dark-mode')
    if(checkbox.checked){
        let srcDark =
        deezer.getAttribute('src').replace('light', 'dark')
        deezer.setAttribute('src', srcDark)
    } else {
        let srcLight =
        deezer.getAttribute('src').replace('dark', 'light')
        deezer.setAttribute('src', srcLight)
    }
})