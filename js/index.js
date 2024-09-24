
function check(){
  const x=element('phn-no').value;
  if(x.length===11){
   element('nxt-btn').disabled=false;
  }
  else 
  element('nxt-btn').disabled=true;
}

   element('nxt-btn').addEventListener('click',function(){
       element('my_modal').showModal();
   })
 
  for(let i=0;i<40;i++){
toggle(i);
  }
   
  element('continuoue').addEventListener('click',function(){
     element('my_modal').classList.remove('modal-box');
     element('my_modal').style.display='none';
  })
  // element('coupon').value==='MR30' 