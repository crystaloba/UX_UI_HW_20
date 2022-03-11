document.querySelector('#myBtn1');

const myBtn1 = document.getElementById('myBtn1');

// ✅ Change button text on click
myBtn1.addEventListener('click', function handleClick() {
    myBtn1.textContent = 'Added!';
});
document.querySelector('#myBtn2');

const myBtn2 = document.getElementById('myBtn2');

// ✅ Change button text on click
myBtn2.addEventListener('click', function handleClick() {
    myBtn2.textContent = 'Added!';
});
document.querySelector('#myBtn3');

const myBtn3 = document.getElementById('myBtn3');

// ✅ Change button text on click
myBtn3.addEventListener('click', function handleClick() {
    myBtn3.textContent = 'Added!';
});
document.querySelector('#myBtn4');

const myBtn4 = document.getElementById('myBtn4');

// ✅ Change button text on click
myBtn4.addEventListener('click', function handleClick() {
    myBtn4.textContent = 'Added!';
});
document.querySelector('#myBtn5');

const myBtn5 = document.getElementById('myBtn5');

// ✅ Change button text on click
myBtn5.addEventListener('click', function handleClick() {
    myBtn5.textContent = 'Added!';
});
document.querySelector('#myBtn6');

const myBtn6 = document.getElementById('myBtn6');

// ✅ Change button text on click
myBtn6.addEventListener('click', function handleClick() {
    myBtn6.textContent = 'Added!';
});
document.querySelector('#myBtn7');

const myBtn7 = document.getElementById('myBtn7');

// ✅ Change button text on click
myBtn7.addEventListener('click', function handleClick() {
    myBtn7.textContent = 'Added!';
});
document.querySelector('#myBtn8');

const myBtn8 = document.getElementById('myBtn8');

// ✅ Change button text on click
myBtn8.addEventListener('click', function handleClick() {
    myBtn8.textContent = 'Added!';
});
document.querySelector('#myBtn9');

const myBtn9 = document.getElementById('myBtn9');

// ✅ Change button text on click
myBtn9.addEventListener('click', function handleClick() {
    myBtn9.textContent = 'Added!';
});
document.querySelector('#myBtn10');

const myBtn10 = document.getElementById('myBtn10');

// ✅ Change button text on click
myBtn10.addEventListener('click', function handleClick() {
    myBtn10.textContent = 'Added!';
});
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("maDrop").classList.toggle("show");
  }
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.makeDrop')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("haDrop").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.hairDrop')) {
      var dropdowns = document.getElementsByClassName("dropdown-content2");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  