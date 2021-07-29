var menuOpen1 = document.querySelector(".menu-open-icon");
var menuClose1 = document.querySelector(".menu-close-icon");
var hamburgerMenu1 = document.querySelector(".hamburger-menu");



menuOpen1.addEventListener("click", function () {
  menuOpen1.style.display = "none";
  menuClose1.style.display = "block";
  hamburgerMenu1.style.display = "grid";
});

menuClose1.addEventListener("click", function () {
  menuOpen1.style.display = "block";
  menuClose1.style.display = "none";
  hamburgerMenu1.style.display = "none";
});

var linkAbout = document.querySelector(".link-1b");
var linkServices = document.querySelector(".link-2b");
var linkSkills = document.querySelector(".link-3b");
var linkProjects = document.querySelector(".link-4b");
var linkPlans = document.querySelector(".link-5b");
var linkTeam = document.querySelector(".link-6b");
var linkContact = document.querySelector(".link-7b");
var linkStart = document.querySelector(".link-8b");

linkAbout.addEventListener("click", function () {
  menuOpen1.style.display = "block";
  hamburgerMenu1.style.display = "none";
});

linkServices.addEventListener("click", function () {
  menuOpen1.style.display = "block";
  hamburgerMenu1.style.display = "none";
});

linkSkills.addEventListener("click", function () {
  menuOpen1.style.display = "block";
  hamburgerMenu1.style.display = "none";
});

linkProjects.addEventListener("click", function () {
  menuOpen1.style.display = "block";
  hamburgerMenu1.style.display = "none";
});

linkPlans.addEventListener("click", function () {
  menuOpen1.style.display = "block";
  hamburgerMenu1.style.display = "none";
});

linkTeam.addEventListener("click", function () {
  menuOpen1.style.display = "block";
  hamburgerMenu1.style.display = "none";
});

linkContact.addEventListener("click", function () {
  menuOpen1.style.display = "block";
  hamburgerMenu1.style.display = "none";
});

linkStart.addEventListener("click", function () {
  menuOpen1.style.display = "block";
  hamburgerMenu1.style.display = "none";
});

var plansCont1 = document.querySelector(".plans-cont1");
var cont1Progress = document.querySelector(".cont1-progress");

var plansCont2 = document.querySelector(".plans-cont2");
var cont2Progress = document.querySelector(".cont2-progress");

var plansCont3 = document.querySelector(".plans-cont3");
var cont3Progress = document.querySelector(".cont3-progress");

plansCont1.addEventListener("mouseover", function () {
  cont1Progress.style.display = "block";
});
plansCont1.addEventListener("mouseout", function () {
  cont1Progress.style.display = "none";
});
plansCont2.addEventListener("mouseover", function () {
  cont2Progress.style.display = "block";
});
plansCont2.addEventListener("mouseout", function () {
  cont2Progress.style.display = "none";
});
plansCont3.addEventListener("mouseover", function () {
  cont3Progress.style.display = "block";
});
plansCont3.addEventListener("mouseout", function () {
  cont3Progress.style.display = "none";
});

var team1 = document.querySelector(".t-cont1");
var team2 = document.querySelector(".t-cont2");
var team3 = document.querySelector(".t-cont3");
var team4 = document.querySelector(".t-cont4");
var team5 = document.querySelector(".t-cont5");
var team6 = document.querySelector(".t-cont6");
var team7 = document.querySelector(".t-cont7");

var hover1 = document.querySelector(".team1-overbackground");
var hover2 = document.querySelector(".team2-overbackground");
var hover3 = document.querySelector(".team3-overbackground");
var hover4 = document.querySelector(".team4-overbackground");
var hover5 = document.querySelector(".team5-overbackground");
var hover6 = document.querySelector(".team6-overbackground");
var hover7 = document.querySelector(".team7-overbackground");

team1.addEventListener("mouseover", function () {
  hover1.style.display = "block";
});
team1.addEventListener("mouseout", function () {
  hover1.style.display = "none";
});
hover1.addEventListener("mouseover", function () {
  hover1.style.display = "block";
});
hover1.addEventListener("mouseout", function () {
  hover1.style.display = "none";
});

team2.addEventListener("mouseover", function () {
  hover2.style.display = "block";
});
team2.addEventListener("mouseout", function () {
  hover2.style.display = "none";
});
hover2.addEventListener("mouseover", function () {
  hover2.style.display = "block";
});
hover2.addEventListener("mouseout", function () {
  hover2.style.display = "none";
});

team3.addEventListener("mouseover", function () {
  hover3.style.display = "block";
});
team3.addEventListener("mouseout", function () {
  hover3.style.display = "none";
});
hover3.addEventListener("mouseover", function () {
  hover3.style.display = "block";
});
hover3.addEventListener("mouseout", function () {
  hover3.style.display = "none";
});

team4.addEventListener("mouseover", function () {
  hover4.style.display = "block";
});
team4.addEventListener("mouseout", function () {
  hover4.style.display = "none";
});
hover4.addEventListener("mouseover", function () {
  hover4.style.display = "block";
});
hover4.addEventListener("mouseout", function () {
  hover4.style.display = "none";
});

team5.addEventListener("mouseover", function () {
  hover5.style.display = "block";
});
team5.addEventListener("mouseout", function () {
  hover5.style.display = "none";
});
hover5.addEventListener("mouseover", function () {
  hover5.style.display = "block";
});
hover5.addEventListener("mouseout", function () {
  hover5.style.display = "none";
});

team6.addEventListener("mouseover", function () {
  hover6.style.display = "block";
});
team6.addEventListener("mouseout", function () {
  hover6.style.display = "none";
});
hover6.addEventListener("mouseover", function () {
  hover6.style.display = "block";
});
hover6.addEventListener("mouseout", function () {
  hover6.style.display = "none";
});

team7.addEventListener("mouseover", function () {
  hover7.style.display = "block";
});
team7.addEventListener("mouseout", function () {
  hover7.style.display = "none";
});
hover7.addEventListener("mouseover", function () {
  hover7.style.display = "block";
});
hover7.addEventListener("mouseout", function () {
  hover7.style.display = "none";
});
