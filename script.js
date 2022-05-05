const text = document.querySelector('.text')
const form = document.querySelector('form')

let mssg = Array.from('Hello, this is the TYPEWRITER ANIMATION!')
let speed = 10
let stored = false

function animate() {
   form.classList.add('disabled')
   for (let i = 0; i < mssg.length; i++) {
      setTimeout(() => {
         if (mssg[i] === ' ') {
            stored = true
            return
         }
         if (mssg[i] !== ' ' && stored) {
            text.innerText = `${text.innerText} ${mssg[i]}`
            stored = false
            return
         }
         text.innerText += mssg[i]
         if (i === mssg.length - 1) {
            form.classList.remove('disabled')
         }
      }, (i + 1) * (11 - speed) * 20)
   }
}

animate()

form.onsubmit = e => {
   e.preventDefault()
   text.innerText = ''
   mssg = Array.from(form.custom.value)
   speed = form.speed.value
   animate()
   form.custom.value = ''
}