
let next = document.querySelector(".next"); 
let prev = document.querySelector(".prev");
let border =document.querySelector(".border");
let arranges = document.querySelectorAll(".arrange");
let valueArrange=1;
let valueWidth=0;
let valueWidthP=1;
next.addEventListener('click',()=>{
    valueArrange++;
    valueWidth++;
    arranges.forEach(arrange=>{
        if(valueArrange==arrange.getAttribute('id')){
         arrange.classList.add('active');
         border.classList.add('active');
         border.style.width=33*valueWidth +"%";}    
    })
    verify();
})

prev.addEventListener('click',()=>{
    
    valueWidth--;
    arranges.forEach(arrange=>{
   if(valueArrange==arrange.getAttribute('id')){
            
         arrange.setAttribute('class','arrange');
         valueArrange--;
         border.style.width=33*valueWidth +"%";
        }
    })
    verify();
   

})
 function verify(){
    if(valueArrange === 1) {
        prev.disabled = true
    } else if(valueArrange === 4) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }

 }
