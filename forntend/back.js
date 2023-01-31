
const scrollToContact=document.querySelector(".main-contact");
const contactEle=document.querySelector(".contact");
const scrollToHome=document.querySelector(".main-logo");
const homeEle=document.querySelector("#home");
const headerEle=document.querySelector(".header");
const menuIcons=document.querySelector(".menu-icons");
const navBtn=document.querySelector(".navbar-list");



scrollToContact.addEventListener('click',()=>{
    contactEle.scrollIntoView({behavior:"smooth"})
});

scrollToHome.addEventListener("click",()=>{
    homeEle.scrollIntoView({behavior:"smooth"})

})


// ****************************************************
//   RESPONSIVE NAVBAR

menuIcons.addEventListener("click", ()=>{
    headerEle.classList.toggle("active")
});


navBtn.addEventListener("click",()=>{
    headerEle.classList.remove("active")
});