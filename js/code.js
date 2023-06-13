function openCatalog() {
    var element = document.getElementById("catalog");
    var currentText = element.innerHTML;
    var newText = (currentText === "КАТАЛОГ▴") ? "КАТАЛОГ▾" : "КАТАЛОГ▴";
    element.innerHTML = newText;
    var modal = document.getElementById("catalogMenu"); 
    var menu = document.getElementById("mainMenu"); 
    if (menu.style.display === "block" || menu.style.display === "") 
        menu.style.display = "none";
    if (modal.style.display === "none" || modal.style.display === "") {
        modal.style.display = "block";
    } else {
        modal.style.display = "none";
    }
};

var mainMenumodal = document.getElementById("mainMenu");
var openModalBtn = document.getElementById("mainMenuOpen");

function openMainModal () {
    var modal = document.getElementById("mainMenu"); 
    var menu = document.getElementById("catalogMenu"); 
    if (menu.style.display === "block" || menu.style.display === "") 
        menu.style.display = "none";
    if (modal.style.display === "none" || modal.style.display === "") {
        modal.style.display = "block";
    } else {
        modal.style.display = "none";
    }
};

function closeMainModal () {
    var mainMenu = document.getElementById("mainMenu"); 
    mainMenu.style.display = "none";
    catalogMenu.style.display = "none";
};

function positionOneOpen(){
    var main = document.getElementById("mainPage");
    var elem = document.getElementById("positionOne");
    var modal = document.getElementById("catalogMenu");
    modal.style.display = "none";
    main.style.display = "none";
    elem.style.display = "block";
};

function positionTwoOpen(){
    var main = document.getElementById("mainPage");
    var elem = document.getElementById("positionTwo");
    var modal = document.getElementById("catalogMenu");
    modal.style.display = "none";
    main.style.display = "none";
    elem.style.display = "block";
};

function positionThreeOpen(){
    var main = document.getElementById("mainPage");
    var elem = document.getElementById("positionThree");
    var modal = document.getElementById("catalogMenu");
    modal.style.display = "none";
    main.style.display = "none";
    elem.style.display = "block";
};

function positionFourOpen(){
    var main = document.getElementById("mainPage");
    var elem = document.getElementById("positionFour");
    var modal = document.getElementById("catalogMenu");
    modal.style.display = "none";
    main.style.display = "none";
    elem.style.display = "block";
};

function positionFiveOpen(){
    var main = document.getElementById("mainPage");
    var elem = document.getElementById("positionFive");
    var modal = document.getElementById("catalogMenu");
    modal.style.display = "none";
    main.style.display = "none";
    elem.style.display = "block";
};

function openMainPage(){
    var main = document.getElementById("mainPage");
    var login = document.getElementById("login");
    var admin = document.getElementById("adminPage");
    var elem1 = document.getElementById("positionOne");
    var elem2 = document.getElementById("positionTwo");
    var elem3 = document.getElementById("positionThree");
    var elem4 = document.getElementById("positionFour");
    var elem5 = document.getElementById("positionFive");
    login.style.display = "none";
    admin.style.display = "none";
    elem1.style.display = "none";
    elem2.style.display = "none";
    elem3.style.display = "none";
    elem4.style.display = "none";
    elem5.style.display = "none";
    main.style.display = "block";
};

function openLogin(){
    var main = document.getElementById("mainPage");
    var login = document.getElementById("login");
    main.style.display = "none";
    login.style.display = "block";
};

function onKzClick() {;
    window.location.href = "indexkz.html";
  };

  function onRuClick() {;
    window.location.href = "index.html";
  };
  
function login() {
  var login = document.getElementById("loginText");
  var parol = document.getElementById("parolText");
  var loginPage = document.getElementById("login");
  var admin = document.getElementById("adminPage");
  if (login.value == "") {
    login.style.border = "red solid 1px";
  }
  else{
    login.style.border = "black solid 1px";
  }
  if (parol.value == "") {
    parol.style.border = "red solid 1px";
  }
  else{
    parol.style.border = "black solid 1px";
  }
  if (login.value == "admin" && parol.value == "qwerty123"){
    loginPage.style.display = "none";
    admin.style.display = "block";
  }
  else{
    document.getElementById("underLoginText").style.display = "block";
  }
}

  