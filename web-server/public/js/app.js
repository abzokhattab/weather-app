console.log('Client side javascript file is loaded!')
fetch('http://localhost:3000/weather/?address=boston').then((Response)=>{
    Response.json().then((data)=>{
        console.log(data.location)
    })
}) 
const loc =document.querySelector('form')
loc.addEventListener('submit',()=>{
    console.log("testing")
})