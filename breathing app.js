const container = document.querySelector('.container')
const text = document.querySelector('#text')

const totaltime = 7500
const breathetime = (totaltime / 5) * 2
const holdtime = totaltime / 5

breatheAnimation()

function breatheAnimation() {
    text.innerHTML = 'Breath in!'
    container.className = 'container grow'

    setTimeout(() => {
        text.innerText = 'Hold'

        setTimeout(() => {
            text.innerText = 'Breathe out!'
            container.className = 'container shrink'
        }, holdtime)
    }, breathetime)
}

setInterval(() => {

}, breatheAnimation, totaltime);
