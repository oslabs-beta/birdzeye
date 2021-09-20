<template>   
  <div></div>
</template>

<script>

export default {

}
</script>

<style scoped>
  
</style>



// <html>
//  <head>
//  </head>
//  <body>
//   <h3>Click on the tabs below:</h3>
//   <div class="tab">
//     <button class="tablinks" onclick="clickHandle(event, 'Cat')">Cat</button>
//     <button class="tablinks" onclick="clickHandle(event, 'Bear')">Bear</button>
//     <button class="tablinks" onclick="clickHandle(event, 'Dog')">Dog</button>
//   </div>

//   <div id="Cat" class="tabcontent">
//     <h3>Meowww.</h3>
//   </div>

//   <div id="Bear" class="tabcontent">
//     <h3>Rawrrr.</h3>
//   </div>

//   <div id="Dog" class="tabcontent">
//     <h3>Bork Bork.</h3>
// </div>

// <script>
// function clickHandle(evt, animalName) {
//   let i, tabcontent, tablinks;

//   // This is to clear the previous clicked content.
//   tabcontent = document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }

//   // Set the tab to be "active".
//   tablinks = document.getElementsByClassName("tablinks");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(" active", "");
//   }

//   // Display the clicked tab and set it to active.
//   document.getElementById(animalName).style.display = "block";
//   evt.currentTarget.className += " active";
// }
// </script>

//  </body>
// </html>