 let homeCount = 0
 let guestCount = 0
 
 let screenHome = document.getElementById('screen-home')
 let screenGuest = document.getElementById('screen-guest')
 let newEl = document.getElementById('new-el')
 
 
 function homeIncre1(){
    homeCount += 1
    screenHome.textContent = homeCount  
 }
 
 
 function homeIncre2(){
     homeCount += 2
     screenHome.textContent = homeCount
 }
 
 function homeIncre3(){
     homeCount +=3
     screenHome.textContent = homeCount
 }
 
 
 function guestIncre1(){
     guestCount += 1
     screenGuest.textContent = guestCount
 }
 
 function guestIncre2(){
     guestCount += 2
     screenGuest.textContent = guestCount
 }
 
 function guestIncre3(){
     guestCount += 3
     screenGuest.textContent = guestCount
 }
    
function newGame(){
  screenHome.textContent = 0
  screenGuest.textContent = 0
  homeCount = 0
  guestCount = 0
}
 