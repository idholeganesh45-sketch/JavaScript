const form = document.querySelector('form')
form.addEventListener('submit', function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)

    const result = document.querySelector('#result')

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `Please give a valid height ${height}`
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please give a valid height ${weight}`
    }

    const bmi = ((weight/(height*height))*10000).toFixed(2)
    result.innerHTML =`<span>${bmi}</span>`

    const message = document.querySelector('#message')


    if(bmi < 18.6){
        message.innerHTML = `You are under weight...`
    }
    else if(bmi >= 18.6 && bmi < 24.9) {
        message.innerHTML = `<span> Your Wieght is Normal ...</span>`
    }
    else if(bmi >= 24.9){
        message.innerHTML = `You are Over Weight...` 
    }
 })


