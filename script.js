const pwShow = document.querySelector(".show");
createPw = document.querySelector("#createPw");
confirmPw = document.querySelector("#confirmPw");
alerttIcon = document.querySelector(".errorIcon");
alertText = document.querySelector(".text");
submitbtn = document.querySelector("#button");

pwShow.addEventListener("click", ()=>{
 if((createPw.type === "password") &&(confirmPw.type === "password")){
    createPw.type = "text";
    confirmPw.type = "text";
    pwShow.classList.replace("fa-eye-slash","fa-eye") ;
 }else {
    createPw.type = "password";
    confirmPw.type = "password";
    pwShow.classList.replace("fa-eye","fa-eye-slash") 
 }
}) ;

createPw.addEventListener("input",()=>{
   let inputvalue= createPw.value.trim();

if(inputvalue.length>= 8){
    confirmPw.removeAttribute("disabled");
    submitbtn.removeAttribute("disabled");
    submitbtn.classlist.add("active");

}else{
    confirmPw.setAttribute("disabled,true");
    submitbtn.setAttribute("disabled,true");
    submitbtn.classlist.remove("active");
    confirmPw.value = "";
    alertText.innerText = "Enter at least 8 characters ";
    alertText.style.color ="#a6a6a6" ;

}

} );

