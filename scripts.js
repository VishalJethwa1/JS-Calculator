function zero(){
    if(document.getElementById("inp").value == ""){
        document.getElementById("inp").value == "" 
    }
    else{
        document.getElementById("inp").value += "0";
    }
}

function one(){
    document.getElementById("inp").value += "1";
}

function two(){
    document.getElementById("inp").value += "2";
}

function three(){
    document.getElementById("inp").value += "3";
}

function four(){
    document.getElementById("inp").value += "4";
}

function five(){
    document.getElementById("inp").value += "5";
}

function six(){
    document.getElementById("inp").value += "6";
}

function seven(){
    document.getElementById("inp").value += "7";
}

function eigth(){
    document.getElementById("inp").value += "8";
}

function nine(){
    document.getElementById("inp").value += "9"; //this will be concatenated with the value already exist in input field 
}

function point(){
    document.getElementById("inp").value += "."; //this will be concatenated with the value already exist in input field 
}

let operator;
let input1;
function plus(){
        input1 = parseFloat(document.getElementById("inp").value); //getting value from input field to store in this variable
        document.getElementById("inp").value = ""; // on clicking plus button, value exist in input field, will be stored in input1 variable and input field will be empty
        if(document.getElementById("plus").click = true){
            operator = "+";
        }
}

function minus(){
        input1 = parseFloat(document.getElementById("inp").value); //getting value from input field to store in this variable
        document.getElementById("inp").value = ""; // on clicking plus button, value exist in input field, will be stored in input1 variable and input field will be empty
        if(document.getElementById("minus").click = true){
            operator = "-";
        }
}

function mul(){
        input1 = parseFloat(document.getElementById("inp").value); //getting value from input field to store in this variable
        document.getElementById("inp").value = ""; // on clicking plus button, value exist in input field, will be stored in input1 variable and input field will be empty
        if(document.getElementById("mul").click = true){
            operator = "*";
        }
}

function div(){
        input1 = parseFloat(document.getElementById("inp").value); //getting value from input field to store in this variable
        document.getElementById("inp").value = ""; // on clicking plus button, value exist in input field, will be stored in input1 variable and input field will be empty
        if(document.getElementById("div").click = true){
            operator = "/";
        }
}

let input2;
function equal(){
    if(input1 != null){
                input2 = parseFloat(document.getElementById("inp").value);
                document.getElementById("inp").value = "";
    }
}

function result(){
    var firstOperand = input1, secondOperand = input2;
    var res;
    if(firstOperand != null && secondOperand != null && operator == "+"){
        res = firstOperand + secondOperand;
        document.getElementById("result").innerHTML = res;
} else if(firstOperand != null && secondOperand != null && operator == "-"){
    res = firstOperand - secondOperand;
        document.getElementById("result").innerHTML = res;
} else if(firstOperand != null && secondOperand != null && operator == "*"){
    res = firstOperand * secondOperand;
        document.getElementById("result").innerHTML = res;
} else if(firstOperand != null && secondOperand != null && operator == "/"){
    res = firstOperand / secondOperand;
        document.getElementById("result").innerHTML = res;
}
}

function clr(){
    document.getElementById("inp").value = "";
    operator = "";
    document.getElementById("result").innerText = "";
}


document.getElementById("main").addEventListener("keydown", function(event){
    var x = event.key;
    if(x == 0){
            if(document.getElementById("inp").value == ""){
            document.getElementById("inp").value == ""; 
        }
        else{
            document.getElementById("inp").value += "0";
        }
    } else if (x == 1){
        document.getElementById("inp").value += "1";
    } else if (x == 2){
        document.getElementById("inp").value += "2";
    } else if (x == 3){
        document.getElementById("inp").value += "3";
    } else if (x == 4){
        document.getElementById("inp").value += "4";
    } else if (x == 5){
        document.getElementById("inp").value += "5";
    } else if (x == 6){
        document.getElementById("inp").value += "6";
    } else if (x == 7){
        document.getElementById("inp").value += "7";
    } else if (x == 8){
        document.getElementById("inp").value += "8";
    } else if (x == 9){
        document.getElementById("inp").value += "9";
    } else if (x == "."){
        document.getElementById("inp").value += ".";
    } else if (x == "+"){
        input1 = parseFloat(document.getElementById("inp").value); //getting value from input field to store in this variable
        document.getElementById("inp").value = ""; // on clicking plus button, value exist in input field, will be stored in input1 variable and input field will be empty
        if(document.getElementById("plus").click = true){
            operator = "+";
        }
    } else if (x == "-"){
        input1 = parseFloat(document.getElementById("inp").value); //getting value from input field to store in this variable
        document.getElementById("inp").value = ""; // on clicking plus button, value exist in input field, will be stored in input1 variable and input field will be empty
        if(document.getElementById("minus").click = true){
            operator = "-";
        }
    } else if (x == "*"){
        input1 = parseFloat(document.getElementById("inp").value); //getting value from input field to store in this variable
        document.getElementById("inp").value = ""; // on clicking plus button, value exist in input field, will be stored in input1 variable and input field will be empty
        if(document.getElementById("mul").click = true){
            operator = "*";
        }
    } else if (x == "/"){
        input1 = parseFloat(document.getElementById("inp").value); //getting value from input field to store in this variable
        document.getElementById("inp").value = ""; // on clicking plus button, value exist in input field, will be stored in input1 variable and input field will be empty
        if(document.getElementById("div").click = true){
            operator = "/";
        }
    } else if (x == "Enter" || x == "="){
        if(input1 != null){
                input2 = parseFloat(document.getElementById("inp").value);
                document.getElementById("inp").value = "";
                result();
    }
    } else if (x == "Delete" || x == "Backspace"){
        document.getElementById("inp").value = "";
    operator = "";
    document.getElementById("result").innerText = "";
    }
});