
let mybutton = document.getElementById("MyButton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
function myFunction6() {
  var dots = document.getElementById("dots6");
  var moreText = document.getElementById("more6");
  var btnText = document.getElementById("myBtn6");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "View Recipes";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
function myFunction7() {
  var dots = document.getElementById("dots7");
  var moreText = document.getElementById("more7");
  var btnText = document.getElementById("myBtn7");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "View Recipes";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
function myFunction8() {
  var dots = document.getElementById("dots8");
  var moreText = document.getElementById("more8");
  var btnText = document.getElementById("myBtn8");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "View Recipes";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
function myFunction9() {
  var dots = document.getElementById("dots9");
  var moreText = document.getElementById("more9");
  var btnText = document.getElementById("myBtn9");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "View Recipes";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
function myFunction10() {
  var dots = document.getElementById("dots10");
  var moreText = document.getElementById("more10");
  var btnText = document.getElementById("myBtn10");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "View Recipes";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}


document.querySelector('.toggle-button6').addEventListener('click', function() {
  const nutritionFacts = document.querySelector('.nutrition-facts6');
  if (nutritionFacts.style.display === 'block') {
      nutritionFacts.style.display = 'none';
  } else {
      nutritionFacts.style.display = 'block';
  }
});
document.querySelector('.toggle-button7').addEventListener('click', function() {
  const nutritionFacts = document.querySelector('.nutrition-facts7');
  if (nutritionFacts.style.display === 'block') {
      nutritionFacts.style.display = 'none';
  } else {
      nutritionFacts.style.display = 'block';
  }
});
document.querySelector('.toggle-button8').addEventListener('click', function() {
  const nutritionFacts = document.querySelector('.nutrition-facts8');
  if (nutritionFacts.style.display === 'block') {
      nutritionFacts.style.display = 'none';
  } else {
      nutritionFacts.style.display = 'block';
  }
});
document.querySelector('.toggle-button9').addEventListener('click', function() {
  const nutritionFacts = document.querySelector('.nutrition-facts9');
  if (nutritionFacts.style.display === 'block') {
      nutritionFacts.style.display = 'none';
  } else {
      nutritionFacts.style.display = 'block';
  }
});
document.querySelector('.toggle-button10').addEventListener('click', function() {
  const nutritionFacts = document.querySelector('.nutrition-facts10');
  if (nutritionFacts.style.display === 'block') {
      nutritionFacts.style.display = 'none';
  } else {
      nutritionFacts.style.display = 'block';
  }
});
