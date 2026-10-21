function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
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
  function myFunction1() {
    var dots = document.getElementById("dots1");
    var moreText = document.getElementById("more1");
    var btnText = document.getElementById("myBtn1");
  
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
  function myFunction2() {
    var dots = document.getElementById("dots2");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("myBtn2");
  
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
  function myFunction3() {
    var dots = document.getElementById("dots3");
    var moreText = document.getElementById("more3");
    var btnText = document.getElementById("myBtn3");
  
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
  function myFunction4() {
    var dots = document.getElementById("dots4");
    var moreText = document.getElementById("more4");
    var btnText = document.getElementById("myBtn4");
  
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
  function myFunction5() {
    var dots = document.getElementById("dots5");
    var moreText = document.getElementById("more5");
    var btnText = document.getElementById("myBtn5");
  
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

  
//dropbutton
  document.querySelector('.toggle-button').addEventListener('click', function() {
    const nutritionFacts = document.querySelector('.nutrition-facts');
    if (nutritionFacts.style.display === 'block') {
        nutritionFacts.style.display = 'none';
    } else {
        nutritionFacts.style.display = 'block';
    }
});
document.querySelector('.toggle-button1').addEventListener('click', function() {
  const nutritionFacts = document.querySelector('.nutrition-facts1');
  if (nutritionFacts.style.display === 'block') {
      nutritionFacts.style.display = 'none';
  } else {
      nutritionFacts.style.display = 'block';
  }
});
document.querySelector('.toggle-button2').addEventListener('click', function() {
  const nutritionFacts = document.querySelector('.nutrition-facts2');
  if (nutritionFacts.style.display === 'block') {
      nutritionFacts.style.display = 'none';
  } else {
      nutritionFacts.style.display = 'block';
  }
});
document.querySelector('.toggle-button3').addEventListener('click', function() {
  const nutritionFacts = document.querySelector('.nutrition-facts3');
  if (nutritionFacts.style.display === 'block') {
      nutritionFacts.style.display = 'none';
  } else {
      nutritionFacts.style.display = 'block';
  }
});
document.querySelector('.toggle-button4').addEventListener('click', function() {
  const nutritionFacts = document.querySelector('.nutrition-facts4');
  if (nutritionFacts.style.display === 'block') {
      nutritionFacts.style.display = 'none';
  } else {
      nutritionFacts.style.display = 'block';
  }
});
document.querySelector('.toggle-button5').addEventListener('click', function() {
  const nutritionFacts = document.querySelector('.nutrition-facts5');
  if (nutritionFacts.style.display === 'block') {
      nutritionFacts.style.display = 'none';
  } else {
      nutritionFacts.style.display = 'block';
  }
});
