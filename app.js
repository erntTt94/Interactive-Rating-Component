const button = document.querySelector('#submit');
const selectedRating = document.querySelector('span');
const ratingButton = document.querySelectorAll('.ratingButton');


//rating selection
ratingButton.forEach((btn) => {
   btn.addEventListener('click', function() {
      btn.classList.add('active');
   })
})




//visability display on/off | selected button added to the rating
button.addEventListener('click', function() {
   const ratingStateButton = document.querySelector(".ratingState");
   ratingStateButton.style.display = "none";
   const thankYouState = document.querySelector('.thankYouState');
   thankYouState.classList.remove('visible');
   const active = document.querySelector('.active');
   selectedRating.innerText = active.innerText;

});


 


