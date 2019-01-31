document.getElementById("button-gen").onclick = function() {
    var string = acquireString();
    document.getElementById("result").value = gen(string);
};

function acquireString(){
    var string = "";
    var checks = document.getElementsByClassName("form-check-input");
    for (let index = 0; index < checks.length; index++) {
        const check = checks[index];
        var check_id = check.getAttribute("id");
        var text_ele = document.getElementById(check_id.replace("check-","text-"));
        var text_id = text_ele.getAttribute("id");

        if(check.checked){
            string += text_ele.value;
        }
    }

    return string;
}

function gen(string){
    var length = Number(document.getElementById("text-length").value);
    var result = '';
    for (var i = 0; i < length; i++) {
        result += string.charAt(Math.floor(Math.random() * string.length));
    }
    return result;
}

document.getElementById("button-copy").onclick = function() {
    copy();
};

function copy() {
    var result = document.getElementById("result");
    result.select();
    document.execCommand("Copy");
}