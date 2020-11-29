const textSlides = document.querySelector('.text-slide .text-content ul');
const Slides = document.querySelectorAll('.text-slide .text-content ul li');
const closeMenu = document.querySelector('.nav-menu ul li.close');
const navmenu= document.querySelector('.nav-menu ul');
const bar = document.querySelector('.bar');
const leftTree = document.querySelectorAll('.left-tree ul.nav > li label');
const leaf = document.querySelectorAll('.left-tree ul.nav > li ul')

console.log(leaf);

closeMenu.addEventListener('click',()=>{
    navmenu.classList.remove('active-menu');
})

bar.addEventListener('click',()=>{
    navmenu.classList.add('active-menu');
})

const auto = ()=>{
    var cur = 0 ; 
    
    const timing = setInterval(()=>{
        if(cur == Slides.length-1){
            cur=0;
            textSlides.style.transform = `translateX(75%)`;
        }else{
            cur++;
            textSlides.style.transform = `translateX(${cur*-25}%)`;
            
        }
    },2000)        
}
auto();

// $("label").click(function(){
//     $("#leaf").slideToggle(); 
// })
// toggle nav-left
for (let i = 0; i < leftTree.length; i++) {
    leftTree[i].addEventListener('click',function(){
        
    })   
}
// --------------------------------------

$(".sidebar-resp p").on('click',function(){
    $(".left-tree").slideToggle();
});

