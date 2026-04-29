const signUp = document.getElementById("sign-up")
const hidebtn = document.getElementById("symbol")
const formData = document.getElementById("card") 
const submitbtn = document.getElementById("submit")
let newData = new FormData(formData)
setTimeout(function(){
    signUp.style.display = "flex"
}, 3000)
hidebtn.addEventListener("click", function(){
    signUp.style.display = "none"
})
submitbtn.addEventListener("click" , function(){
    console.log(newData)
    name = newData.get("firstName")
    signUp.innerHTML = `
    <h1>Thank you ${name} </h1>
    <p>we are loading the page now .....`
    setTimeout(function(){
        signUp.innerHTML = `<h1>Successful sign up Thank you`
        

    } , 1500)
    


})

