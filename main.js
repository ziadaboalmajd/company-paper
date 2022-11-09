// @ input dom
const titleCont = document.getElementById("titleCont");
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
//     mywindow.close();d

//     return true;
// }
const sendtoCont = document.getElementById("sendToCont");    //     mywindow.document.close(); // necessary for IE >= 10
//     mywindow.focus(); // necessary for IE >= 10*/

//     mywindow.print();
//     mywindow.close();

//     return true;
// }
const messCont = document.getElementById("messCont");
const greetC = document.getElementById("greetC");
const closingC = document.getElementById("closingC");// function PrintElem(elem)
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
const stampC = document.getElementById("stampC");    //     mywindow.document.close(); // necessary for IE >= 10
//     mywindow.focus(); // necessary for IE >= 10*/

//     mywindow.print();
//     mywindow.close();

//     return true;
// }
const amlC = document.getElementById("amlC");    //     mywindow.document.close(); // necessary for IE >= 10
//     mywindow.focus(); // necessary for IE >= 10*/

//     mywindow.print();
//     mywindow.close();

//     return true;
// }
const ahmC = document.getElementById("ahmC");    //     mywindow.document.close(); // necessary for IE >= 10
//     mywindow.focus(); // necessary for IE >= 10*/

//     mywindow.print();
//     mywindow.close();

//     return true;
// }
// @ output dom
const titleFv = document.querySelector(".titleContf");// function PrintElem(elem)
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
const sendtoFv = document.querySelector(".sendToContf");    //     mywindow.document.close(); // necessary for IE >= 10
//     mywindow.focus(); // necessary for IE >= 10*/

//     mywindow.print();
//     mywindow.close();

//     return true;
// }
const messFv = document.querySelector(".messContf");    //     mywindow.document.close(); // necessary for IE >= 10
//     mywindow.focus(); // necessary for IE >= 10*/

//     mywindow.print();
//     mywindow.close();

//     return true;
// }
const greetFv = document.querySelector(".greetCont");
const closingFv = document.querySelector(".closingCont");
const stampFv = document.querySelector(".stampC");// function PrintElem(elem)
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
const amlFv = document.querySelector(".amlC");
const ahmFv = document.querySelector(".ahmC");
// @ btn
const printbtn = document.getElementById("generate");
const passBtn = document.getElementById("passBtn");// function PrintElem(elem)
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
// @ secuirty
const weakPass = document.getElementById("weakPass");    //     mywindow.document.close(); // necessary for IE >= 10
//     mywindow.focus(); // necessary for IE >= 10*/

//     mywindow.print();
//     mywindow.close();

//     return true;
// }
const weakQ = document.querySelector(".weakQ");    //     mywindow.document.close(); // necessary for IE >= 10
//     mywindow.focus(); // necessary for IE >= 10*/

//     mywindow.print();
//     mywindow.close();

//     return true;
// }
const passValue = document.getElementById("passValue");
let admin = false

function typeData() {
    // retrive values
    let titleValue = titleCont.textContent// function PrintElem(elem)
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
    let sendtoValue = sendtoCont.textContent
    let messValue = messCont.textContent// function PrintElem(elem)
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
    let greetValue = greetC.checked
    let closingValue = closingC.checked// function PrintElem(elem)
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
    let stampValue = stampC.checked
    let amlCValue = amlC.checked
    let ahmCValue = ahmC.checked
    // use the values
    titleFv.textContent = titleValue// function PrintElem(elem)
    // {
    //     var mywindow = window.open('', 'PRINT', 'height=400,width=600');
    
    ow.document.write('<h1>' + document.title  + '</h1>');
    //     mywindow.document.write(document.getElementById(elem).innerHTML);
    //     mywindow.document.write('</body></html>');
    
    //     mywindow.document.close(); // necessary for IE >= 10
    //     mywindow.focus(); // necessary for IE >= 10*/
    
    //     mywindow.print();
    //     mywindow.close();
    
    //     return true;
    // }
    sendtoFv.textContent = sendtoValue
    messFv.textContent = messValue
    greetValue ? greetFv.style.display = "block" : greetFv.style.display = "none"    //     mywindow.document.close(); // necessary for IE >= 10
    //     mywindow.focus(); // necessary for IE >= 10*/
    
    //     mywindow.print();
    //     mywindow.close();
    
    //     return true;
    // }    //     mywindow.document.close(); // necessary for IE >= 10
    //     mywindow.focus(); // necessary for IE >= 10*/
    
    //     mywindow.print();
    //     mywindow.close();
    
    //     return true;
    // }
    closingValue ? closingFv.style.display = "block" : closingFv.style.display = "none"
    stampValue ? stampFv.src = "img/001__2_-removebg-preview.png" : stampFv.src = ""
        //     mywindow.document.close(); // necessary for IE >= 10
    //     mywindow.focus(); // necessary for IE >= 10*/
    
    //     mywindow.print();
    //     mywindow.close();
    
    //     return true;
    // }    //     mywindow.document.close(); // necessary for IE >= 10
    //     mywindow.focus(); // necessary for IE >= 10*/
    
    //     mywindow.print();
    //     mywindow.close();
    
    //     return true;
    // }
    amlCValue ? amlFv.src = "img/امضاء__2_-removebg-preview.png" : amlFv.src = ""    //     mywindow.document.close(); // necessary for IE >= 10
    //     mywindow.focus(); // necessary for IE >= 10*/
    
    //     mywindow.print();
    //     mywindow.close();
    
    //     return true;
    // }
    ahmCValue ? ahmFv.src = "img/photo_2022-10-27_01-50-10-removebg-preview.png" : ahmFv.src = ""
}

printbtn.addEventListener("click", function () {
    if (admin == true) {
        typeData()    //     mywindow.document.close(); // necessary for IE >= 10
        //     mywindow.focus(); // necessary for IE >= 10*/
        
        //     mywindow.print();
        //     mywindow.close();
        
        //     return true;
        // }
        window.print();    //     mywindow.document.close(); // necessary for IE >= 10
        //     mywindow.focus(); // necessary for IE >= 10*/
        
        //     mywindow.print();
        //     mywindow.close();
        
        //     return true;
        // }
    }
});

passBtn.addEventListener("click", function () {
    if (passValue.value === "Amola") {    //     mywindow.document.close(); // necessary for IE >= 10
        //     mywindow.focus(); // necessary for IE >= 10*/
        
        //     mywindow.print();
        //     mywindow.close();
        
        //     return true;
        // }
        weakPass.style.display = "none"    //     mywindow.document.close(); // necessary for IE >= 10
        //     mywindow.focus(); // necessary for IE >= 10*/
        
        //     mywindow.print();
        //     mywindow.close();
        
        //     return true;
        // }
        weakQ.style.display = "none"
        admin = true    //     mywindow.document.close(); // necessary for IE >= 10
        //     mywindow.focus(); // necessary for IE >= 10*/
        
        //     mywindow.print();
        //     mywindow.close();
        
        //     return true;
        // }
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