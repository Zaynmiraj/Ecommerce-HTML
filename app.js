
window.addEventListener('scroll',()=> {
  const cnt = document.getElementById('navbar');
  const sticky = cnt.offsetTop;
 if(window.pageYOffset >= sticky){
  cnt.classList.add('sticky');
 }
})






function content(contentName){
    var i, tablink, tabcontent;

    tabcontent=document.getElementsByClassName('tabcontent');
    for(i= 0; i <tabcontent.length; i++){
        tabcontent[i].style="display:none; transition: all 1s;";
       
    }
    tablink=document.getElementById(contentName).style="display:block; transition:all 1s;";
    
}
document.getElementById("active").click();

function secondContent(second_content){
    var x, tabid, tab_content;
    tab_content =document.getElementsByClassName('tab_content');
    for(x=0; x< tab_content.length; x++){
        tab_content[x].style.display="none"
    }

    tabid=document.getElementById(second_content).style.display="block";
}
document.getElementById("active-2").click();





const addCart=document.querySelectorAll('.cart');
const cartbtn=document.querySelector('.add-cart');

for( addProduct of addCart){
  addProduct.addEventListener('click', (e)=>{
    var add = Number(cartbtn.getAttribute('data-count') || 0);
    cartbtn.setAttribute('data-count', add + 1);
    cartbtn.classList.add('show');
  })
}
