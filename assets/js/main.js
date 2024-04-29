const scriptURL = 'https://script.google.com/macros/s/AKfycbwLKQcghwKvfh_ZlhWeluC07U-rlS2Nm0LrwXdMcgu_0-_7coGnjB_LbcKAyh3MxULC/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response =>{
        msg.innerHTML = "Thank You For Subscribing!"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
