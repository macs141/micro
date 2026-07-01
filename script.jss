document.addEventListener("DOMContentLoaded",()=>{

const card=document.querySelector(".profile-card");

card.animate(

[
{opacity:0,transform:"translateY(40px)"},
{opacity:1,transform:"translateY(0px)"}
],

{
duration:900,
fill:"forwards"
}

);

console.log("Employee Directory Demo Loaded");

});
