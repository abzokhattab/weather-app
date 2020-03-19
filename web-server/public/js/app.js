console.log('Client side javascript file is loaded!')

const loc =document.querySelector('form')
const search= document.querySelector('input')
const msg1= document.querySelector('#msg 1')
const msg2= document.querySelector('#msg2')

msg1.textContent='Loading...'

loc.addEventListener('submit',(e)=>{
    e.preventDefault();
    const location = search.value


    fetch('http://localhost:3000/weather/?address='+location).then((Response)=>{
        Response.json().then((data)=>{
            if (data.error){
                msg1.textContent=data.error
                
            }else {
               msg1.textContent=data.location
               msg2.textContent=data.forecast

            }
        })
    }) }) 