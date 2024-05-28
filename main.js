// @ input dom
const titleCont = document.getElementById("titleCont");
const sendtoCont = document.getElementById("sendToCont");
const messCont = document.getElementById("messCont");
const greetC = document.getElementById("greetC");
const closingC = document.getElementById("closingC");
const stampC = document.getElementById("stampC");
const amlC = document.getElementById("amlC");
const ahmC = document.getElementById("ahmC");
// @ output dom
const titleFv = document.querySelector(".titleContf");
const sendtoFv = document.querySelector(".sendToContf");
const messFv = document.querySelector(".messContf");
const greetFv = document.querySelector(".greetCont");
const closingFv = document.querySelector(".closingCont");
const stampFv = document.querySelector(".stampC");
const amlFv = document.querySelector(".amlC");
const ahmFv = document.querySelector(".ahmC");
// @ btn
const printbtn = document.getElementById("generate");
const passBtn = document.getElementById("passBtn");
// @ secuirty
const weakPass = document.getElementById("weakPass");
const weakQ = document.querySelector(".weakQ");
const passValue = document.getElementById("passValue");
let admin = false;

function typeData() {
  // retrive values
  let titleValue = titleCont.innerText;
  let sendtoValue = sendtoCont.innerText;
  let messValue = messCont.innerText;
  let greetValue = greetC.checked;
  let closingValue = closingC.checked;
  let stampValue = stampC.checked;
  let amlCValue = amlC.checked;
  let ahmCValue = ahmC.checked;
  // use the values
  titleFv.textContent = titleValue;
  sendtoFv.textContent = sendtoValue;
  messFv.textContent = messValue;
  // text visableity
  if (titleValue.trim() !== "" && titleValue.replaceAll(/\s/g, "").length > 2) {
    titleFv.style.display = "flex";
  } else {
    titleFv.style.display = "none";
  }
  if (
    sendtoValue.trim() !== "" &&
    sendtoValue.replaceAll(/\s/g, "").length > 2
  ) {
    sendtoFv.style.display = "flex";
  } else {
    sendtoFv.style.display = "none";
  }
  if (messValue.trim() !== "" && messValue.replaceAll(/\s/g, "").length > 2) {
    messFv.style.display = "flex";
  } else {
    messFv.style.display = "none";
  }

  // chechbox visableity
  greetValue
    ? (greetFv.style.display = "flex")
    : (greetFv.style.display = "none");
  closingValue
    ? (closingFv.style.display = "flex")
    : (closingFv.style.display = "none");
  stampValue
    ? (stampFv.src = "img/001__2_-removebg-preview.png")
    : (stampFv.src = "");
  amlCValue
    ? (amlFv.src = "img/امضاء__2_-removebg-preview.png")
    : (amlFv.src = "");
  ahmCValue
    ? (ahmFv.src = "img/photo_2022-10-27_01-50-10-removebg-preview.png")
    : (ahmFv.src = "");
}

printbtn.addEventListener("click", function () {
  if (admin == true) {
    typeData();
    window.print();
  }
});

passBtn.addEventListener("click", function () {
  if (passValue.value === "amola") {
    weakPass.style.display = "none";
    weakQ.style.display = "none";
    admin = true;
  }
});

// alt print
// function PrintElem(elem)
// {
//     var mywindow = window.open('', 'PRINT', 'height=400,width=600');

//     mywindow.document.write('<html><head><title>' + document.title  + '</title>');
//     mywindow.document.write('</head><body >');
//     mywindow.document.write('<h1>' + document.title  + '</h1>');
//     mywindow.document.write(document.getElementById(elem).innerHTML);
//     mywindow.document.write('</body></html>');

//     mywindow.document.close(); // necessary for IE >= 10
//     mywindow.focus(); // necessary for IE >= 10*/

//     mywindow.print();
//     mywindow.close();

//     return true;
// }
