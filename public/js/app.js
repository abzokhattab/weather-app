console.log('Client side javascript file is loaded!')

const loc =document.querySelector('form')
const search= document.querySelector('input')
const msg1= document.querySelector('#msg1')
const msg2= document.querySelector('#msg2')


loc.addEventListener('submit',(e)=>{
    e.preventDefault();
    msg1.textContent='Loading...'

    const location = search.value


    fetch('/weather/?address='+location).then((Response)=>{
        Response.json().then((data)=>{
            if (data.error){
                msg1.textContent=data.error
                
            }else {
               msg1.textContent=data.location
               msg2.textContent=data.forecast

            }
        })
    }) }) 