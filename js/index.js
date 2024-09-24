
function check(){
  const x=element('phn-no').value;
  if(x.length===11){
   element('nxt-btn').disabled=false;
  }
  else 
  element('nxt-btn').disabled=true;
}

 function another(){
     window.location.href='success.html'
 }
   
 
  for(let i=0;i<40;i++){
toggle(i);
  }
   
  element('coupon').value==='MR30' 