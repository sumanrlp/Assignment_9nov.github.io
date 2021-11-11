
const pi = 22/7
let parameters = {
    height : "20",
    radius : "10"
}

function volume() {
    console.log(Number(pi*parameters.radius*parameters.radius*parameters.height),"mm3")
}

function area() {
    console.log(Number(2*pi*parameters.radius*parameters.radius)+Number(pi*2*parameters.radius*parameters.height), "mm2")
}

volume()
area()

function power() {
    let voltage = window.prompt("Enter a voltage value")
    let current = window.prompt("Enter a current value")
    let pow = Number(voltage*current)
    return pow
}


let volt_button = document.getElementById('volt')
let curr_button = document.getElementById('curr')
let input_screen = document.getElementById('in')

var current_value;
var volt_value;

function volt_button_clicked() {
    volt_value = prompt("Enter voltage value")
   
    
}

function curr_button_clicked() {
    current_value = prompt("Enter current value")
 
    var power_value = Number(current_value*volt_value)
    input_screen.value = power_value
}

volt_button.addEventListener('click',volt_button_clicked)
curr_button.addEventListener('click',curr_button_clicked)





