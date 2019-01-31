var string = "";

var checks = document.getElementsByClassName("form-check-input");
for (let index = 0; index < checks.length; index++) {
    const check = checks[index];
    var check_id = check.getAttribute("id");
    var text_ele = document.getElementById(check_id.replace("check-","text-"));
    var text_id = text_ele.getAttribute("id");

    if(check.getAttribute("checked") == "checked"){
        string += text_ele.value;
    }
}

console.log(string);







function gen(string){
    // string = 'abcdefghijklmnopqrstuvwxyz';
    var length = Number(document.getElementById("text-length"));
    var result = '';
    for (var i = 0; i < length; i++) {
        result += string.charAt(Math.floor(Math.random() * string.length));
    }
    return result;
}