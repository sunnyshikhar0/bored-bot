/**
Challenge: 

- Make the styling more exciting once an activity idea comes 
back from the Bored API
    - Resources: DOM element "classList" property, uigradients.com, 
      Google Fonts, color.adobe.com
    - Some ideas:
      - Change the title from "BoredBot" to something more exciting!
      - Change the background to something less drab.
      - Bonus: Animate something on the screen to move around and add more 
        excitement to the page
*/

document.getElementById("get-activity").addEventListener("click", function() {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
      document.getElementById("activity").textContent = data.activity
      
      document.querySelector('body').classList.add('after-activity')
      document.querySelector('#get-activity').classList.add('after-activity-btn')
      document.querySelector('h1').textContent = "Let's RockRock 🧨" 
      document.querySelector('h4').classList.add('after-activity-subTitle')
      
    })
})