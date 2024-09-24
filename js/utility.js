

function element(id){
    const m= document.getElementById(id);
    return m;
}

 function element_by_class(className,index){
     const elements=document.getElementsByClassName(className);
      return elements[index];
      
 }
  
 function toggle(index){
 let first_click=true;

 element_by_class('seat',index).addEventListener('click',function(){
 
  if(first_click){
  element_by_class('seat',index).style.backgroundColor='#1DD100';
  element_by_class('seat',index).style.color='white';
  }
  else{
    element_by_class('seat',index).style.backgroundColor='#eff1eecd';
    element_by_class('seat',index).style.color='black';
  }
    first_click=!first_click;
 })
}