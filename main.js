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
let admin = false

function typeData() {
    // retrive values
    let titleValue = titleCont.textContent
    let sendtoValue = sendtoCont.textContent
    let messValue = messCont.textContent
    let greetValue = greetC.checked
    let closingValue = closingC.checked
    let stampValue = stampC.checked
    let amlCValue = amlC.checked
    let ahmCValue = ahmC.checked
    // use the values
    titleFv.textContent = titleValue
    sendtoFv.textContent = sendtoValue
    messFv.textContent = messValue
    greetValue ? greetFv.style.display = "block" : greetFv.style.display = "none"
    closingValue ? closingFv.style.display = "block" : closingFv.style.display = "none"
    stampValue ? stampFv.src = "img/001__2_-removebg-preview.png" : stampFv.src = ""
    amlCValue ? amlFv.src = "img/امضاء__2_-removebg-preview.png" : amlFv.src = ""
    ahmCValue ? ahmFv.src = "img/photo_2022-10-27_01-50-10-removebg-preview.png" : ahmFv.src = ""
}

printbtn.addEventListener("click", function () {
    if (admin == true) {
        typeData()
        window.print();
    }
});

passBtn.addEventListener("click", function () {
    if (passValue.value === "Amola") {
        weakPass.style.display = "none"
        weakQ.style.display = "none"
        admin = true
    }
});








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