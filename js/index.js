
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