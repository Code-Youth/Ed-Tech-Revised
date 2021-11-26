var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var beta = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
function playSound(letter){
    let wawa = alpha.indexOf(letter) 
    console.log(wawa)
    console.log(beta[wawa])
    var letId = document.getElementById(beta[wawa]).play()
}

var numRow = document.getElementById("numRow")
function loadNumbers(){
    for(var i = 1; i<11; i++){
    var div = document.createElement("div")
    div.setAttribute("class", "col-sm-2")
    var number = document.createElement("p")
    number.innerHTML = i
    var audio = document.createElement("audio")
    audio.setAttribute("preload","auto")
    audio.setAttribute("id", "num " + i)
    audio.setAttribute("src","Audio/Numbers/" + i + ".m4a")
    var a = document.createElement("a")
    var eye = document.createElement("i")
    eye.setAttribute("class","fa fa-play-circle fa-2x")
    eye.setAttribute("onclick","playSoundNumbers('" + i + "')") 
    numRow.appendChild(div)
    div.appendChild(number)
    div.appendChild(audio)
    div.appendChild(a)
    a.appendChild(eye)
    }
}

function playSoundNumbers(four){
    document.getElementById("num " + four).play()
}
var c1 = document.getElementById("checks1")
var c2 = document.getElementById("checks2")
var c3 = document.getElementById("checks3")
 // Declaring the checkmark/X //
var c1One = document.getElementById("checks1One")
var c11One = document.getElementById("checks11One")
var c111One = document.getElementById("checks111One")
var c22Two = document.getElementById("checks22Two")
var c222Two = document.getElementById("checks222Two")
var c333Three = document.getElementById("checks333Three")
function checkAnswer(check){           //Checks answer
    let theAnswer = document.getElementById("Wednesday")
    let wrong = document.getElementById("Monday")
    console.log(check.id)
    if(check.id == "Wednesday"){    //Checks to see if button clicked is "Wednesday"
    check.className = "correct"    //Makes correct answer green
    c1One.className = "fa fa-check-circle fa-2x green"
    c11One.className = "fa fa-check-circle fa-2x green"
    c111One.className = "fa fa-check-circle fa-2x green"
}
    else{   //If button clicked is not correct, mark answer green, and clicked button red
        check.className = "incorrect"
        theAnswer.className = "correct"
        c1One.className= "fa fa-times-circle fa-2x red"
        c11One.className= "fa fa-times-circle fa-2x red"
        c111One.className= "fa fa-times-circle fa-2x red"
    }
    console.log(check)
    theAnswer.removeAttribute("onclick") //makes all buttons unclickable
    wrong.removeAttribute("onclick")
    console.log(check)
    c1.style.display = "none"
    openQ2()
}

//same as last function but with more buttons//
function checkAnswer2(check){
    let theAnswer = document.getElementById("Sunday")
    let wrong = document.getElementById("Thursday")
    let wrong2 = document.getElementById("Wednesday")
    console.log(check.id)
    if(check.id == "Sunday"){
    check.className = "correct"
    c22Two.className = "fa fa-check-circle fa-2x green"
    c222Two.className = "fa fa-check-circle fa-2x green"  
  
}
    else{
        check.className = "incorrect"
        theAnswer.className = "correct"
        c22Two.className = "fa fa-times-circle fa-2x red"
        c222Two.className = "fa fa-times-circle fa-2x red"
    }
    c2.style.display = "none"
    openQ3()
    theAnswer.removeAttribute("onclick")
    wrong.removeAttribute("onclick")
    wrong2.removeAttribute("onclick")  
}

function checkAnswer3(check){
    let theAnswer = document.getElementById("Friday")
    let wrong = document.getElementById("Tuesday")
    let wrong2 = document.getElementById("Monday")
    let wrong3 = document.getElementById("Saturday")
    console.log(check.id)
    if(check.id !== "Friday"){
    check.className = "incorrect"
    theAnswer.className = "correct"
    c333Three.className = "fa fa-times-circle fa-2x red"
    }
    else{
        check.className = "correct"
        c333Three.className="fa fa-check-circle fa-2x green"
    }
    theAnswer.removeAttribute("onclick")
    wrong.removeAttribute("onclick")
    wrong2.removeAttribute("onclick")
    wrong3.removeAttribute("onclick")

    myFunction()
}

//functions to display questions as required//
function openQ1(){
    let Q1 = document.getElementById("question1")
    Q1.style.display = "block"
}

function openQ2(){
    let Q2 = document.getElementById("question2")
    Q2.style.display = "block"
}

function openQ3(){
    let Q3 = document.getElementById("question3")
    Q3.style.display = "block"
}

function daySound(sound){
    let noise = document.getElementById(sound)
    console.log(sound)
    console.log(noise)
    noise.play()
}

function jump(field, autoMove){
    console.log(field.value)
if (field.value.length >= field.maxLength){
    document.getElementById(autoMove).focus()
}
}

function s2Check(a,b,c){
    let ans1 = document.getElementById(a)
    let ans2 = document.getElementById(b)
    if(c.value.length >= c.maxLength){
    if(ans1.value !== "W"){
        ans1.className = "fillInBlankCapital red"
    }
    else{
        ans1.className = "fillInBlankCapital green"
    }
    if(ans2.value !== "e"){
        ans2.className = "fillInBlank red"
    }
    else{
        ans2.className = "fillInBlank green"
    }
    if (c.value !== "a"){
        c.className = "fillInBlank red"
    }
    else{
        c.className = ("fillInBlank green")
    }
  var s = document.getElementById("ans1")
  s.style.display = "block"
}
}


// Function for section 4 quiz

function answer1(box) {
    box.style.backgroundColor = 'red';
}

// function answer2(item) {
//     if (item.className='wrong4') {
//     item.className='red';
//     }
//     else if (item.class='right') {
//     item.className='green')
//     }
//     else {
//         return false 
//     }
// }

// The fa icons at the bottom of the sec 4 table
let icon1 = document.querySelector('.icon4_1')
console.log(icon1)
let icon2 = document.querySelector('.icon4_2')

function answer2(item) {
    if (item.className === 'wrong4') {  //If the answer if wrong,
        item.className='backRed';  // background turns red
        icon1.className = 'fa fa-times-circle fa-3x red'
        console.log(icons.className)
    }
    else if (item.className ==='right4') { //If the answer is right,
        item.className='backGreen' //  background turn green
        console.log(item.className)
        console.log(icons.className)
    };
    // if (item.) {                        //Seeing if multiple if statements work

    }
}


