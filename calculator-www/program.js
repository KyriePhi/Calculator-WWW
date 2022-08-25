var lastkey;
var lastNumber;
function calcutor(key) {
    if (key == "/") {
        var divition = Number(document.getElementById("inside").innerHTML);
        lastkey = "/";
        document.getElementById("inside").innerHTML = "";
        if (last()) {
            lastNumber = lastNumber / divition;
        }
        else {
            lastNumber = divition;
        }
    }
    else if (key == "-") {
        var subtraction = Number(document.getElementById("inside").innerHTML);
        lastkey = "-";
        document.getElementById("inside").innerHTML = "";
        if (last()) {
            lastNumber = lastNumber - subtraction;
        }
        else {
            lastNumber = subtraction;
        }
    }
    else if (key == "+") {
        var sum = Number(document.getElementById("inside").innerHTML);
        lastkey = "+";
        document.getElementById("inside").innerHTML = "";
        if (last()) {
            lastNumber = lastNumber + sum;
        }
        else {
            lastNumber = sum;
        }
    }
    else if (key == "*") {
        var mux = Number(document.getElementById("inside").innerHTML);
        lastkey = "*";
        document.getElementById("inside").innerHTML = "";
        if (last()) {
            lastNumber = lastNumber * mux;
        }
        else {
            lastNumber = mux;
        }
    }
    else if (key=="ac") {
        document.getElementById("inside").innerHTML = '';
        lastNumber = null;
        lastkey = null;
    }
    else if (key == "=") {
        if (lastkey == "/") {
            var divition = Number(document.getElementById("inside").innerHTML);
            lastkey = "/";
            document.getElementById("inside").innerHTML = "";
            if (last()) {
                lastNumber = lastNumber / divition;
            }
            else {
                lastNumber = divition;
            }
        }
        else if (lastkey == "-") {
            var subtraction = Number(document.getElementById("inside").innerHTML);
            lastkey = "-";
            document.getElementById("inside").innerHTML = "";
            if (last()) {
                lastNumber = lastNumber - subtraction;
            }
            else {
                lastNumber = subtraction;
            }
        }
        else if (lastkey == "+") {
            var sum = Number(document.getElementById("inside").innerHTML);
            lastkey = "+";
            document.getElementById("inside").innerHTML = "";
            if (last()) {
                lastNumber = lastNumber + sum;
            }
            else {
                lastNumber = sum;
            }
        }
        else if (lastkey == "*") {
            var mux = Number(document.getElementById("inside").innerHTML);
            lastkey = "*";
            document.getElementById("inside").innerHTML = "";
            if (last()) {
                lastNumber = lastNumber * mux;
            }
            else {
                lastNumber = mux;
            }
        }
        if (last()) {
            document.getElementById("inside").innerHTML = lastNumber.toString();
            lastNumber = null;
        }
        lastkey = "=";
    }
    else {
        if (lastkey == "=") {
            document.getElementById("inside").innerHTML = key;
            lastkey = key;
        }
        else {
            document.getElementById("inside").innerHTML += key;
        }
    }
}
function last() {
    if (lastNumber == null) {
        return false;
    }
    else {
        return true;
    }
}