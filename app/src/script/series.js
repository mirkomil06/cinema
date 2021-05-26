fetch('https://vue-cinema-api.herokuapp.com/api/info').then(response => response.json()).then(data => {
    let images = document.querySelectorAll('.series__img')
    let titles = document.querySelectorAll('.series__info-title')
    let texts = document.querySelectorAll('.series__info-text')

    for (let i = 0; i < data.length; i++) {
        images[i].setAttribute('src', data[i].img)
        titles[i].innerText = data[i].title
        texts[i].innerText = data[i].text
    }
})