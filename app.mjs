//validation state of the form to determine the network provider 
function startApp(){
    const number = document.getElementById('phone-number').value
    let img = document.createElement('img')
        if(number==""){
            document.getElementById('messages').innerText = '*Please Enter a Digit'
            return false
        }
        if(isNaN(number)){
            document.getElementById('messages').innerText = '*Enter a Digit'
            return false
        }
        if(number.length > 11 || number.length < 11){
            document.getElementById('messages').innerText = '*Incomplete Digit'
            return false
        }
        if(number.charAt(3) == 5){
         img.src = './logos/glo.png'
                 let span = document.getElementById('msg-img')  
                        span.appendChild(img)
          document.getElementById('msg-img').classList.add = 'img'
                           return false
        }
        if(number.charAt(3) == 3 || number.charAt(3) == 6){
          img.src = './logos/mtn logo.png'
                 let span = document.getElementById('msg-img')  
                        span.appendChild(img)
          document.getElementById('msg-img').classList.add = 'img'
                           return false
        }
        if(number.charAt(3) == 2){
             img.src = './logos/airtel.png'
                 let span = document.getElementById('msg-img')  
                        span.appendChild(img)
          document.getElementById('msg-img').classList.add = 'img'
                           return true           
        }
  //work on the timeout later
        setTimeout(() => {messages.remove()}, 5000);
        setTimeout(() => {msg-img.remove()}, 9000);
}  
  
  // ======= DO NOT EDIT ============== //
  export default startApp;
  // ======= EEND DO NOT EDIT ========= //
           