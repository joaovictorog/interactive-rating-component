const botoesNota = document.querySelectorAll('.each-button')
const botaoEnviar = document.querySelector('.submit-button')
const corpo = document.querySelector('body')

botoesNota.forEach((nota) => {
    nota.addEventListener('click', () => {
        desselecionaOutraNota()
        selecionaNota(nota)
        enviarNota(nota)
    })
})

function desselecionaOutraNota() {
    botoesNota.forEach((nota) => {
        nota.classList.remove('selected')
    })
}

function selecionaNota(nota) {
    nota.classList.add('selected')
    nota.classList.remove('each-button_hover')
}

function enviarNota(nota) {
    botaoEnviar.addEventListener('click', () => {
        corpo.innerHTML = `
            <main class="container second-container">
            <img class="cell-phone" src="images/illustration-thank-you.svg" alt="Cell phone with a receipt">
            <p class="selected-rating">You selected ${nota.textContent} out of 5</p>
            <h2 class="thanks-message">Thank you!</h2>
            <p class="text">We appreciate you taking the time to give a rating. If you ever need more support, 
            don’t hesitate to get in touch!</p>
            </main>

            <div class="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
            Coded by <a href="#">João Victor</a>.
            </div>
        `
    })
}



