const signUp = document.getElementById("sign-up")
const hidebtn = document.getElementById("symbol")
const singUpbtn = document.getElementById("sign-up-btn")
setTimeout(function(){
    signUp.style.display = "flex"
}, 3000)
hidebtn.addEventListener("click", function(){
    signUp.style.display = "none"
})
singUpbtn.addEventListener("click" ,function(){
    signUp.style.display = "flex"
} )