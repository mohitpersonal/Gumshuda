function show11111() {
    var x = document.getElementById("psw");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function validatemail() {
    
    var email = document.loginform.id_card.value;
    if (email == null || email == "") {
        document.getElementById("id_card").classList.remove("has-success");
        document.getElementById("id_card").classList.add("has-error");
        document.getElementById('label_login_email').style.display = 'block';
        return false;
    } else {
    document.getElementById("email").classList.add("has-success");
    document.getElementById('label_login_email').style.display = 'none';
    return true;
    }
}

$("#email").focusout(function () {
    if ($(this).hasClass("has-success")) {
        $(this).removeClass("has-success");
        $(this).removeClass("has-error");
    }
})

function validatpassword() {
    var password = document.loginform.password.value;
    if (password == null || password == "") {
        document.getElementById("psw").classList.remove("has-success");
        document.getElementById('label_login_password').style.display = 'block';
        document.getElementById("psw").classList.add("has-error");
        return false;
    } else {
        document.getElementById('label_login_password').style.display = 'none';
        document.getElementById("psw").classList.add("has-success");
        return true;
    }
}

$("#psw").focusout(function () {
    if ($(this).hasClass("has-success")) {
        $(this).removeClass("has-success");
        $(this).removeClass("has-error");
    }
})

function Loginfun() {
    if (validatemail() && validatpassword() == true) {
        return true;
    } else {
        validatemail();
        validatpassword();
        return false;
    }
}

var msg_succ = document.getElementById("msg_Sucess_log");

setTimeout(function () {
    msg_succ.style.display = "none";
}, 5000);


var msg_err = document.getElementById("msg_err_log");

setTimeout(function () {
    msg_err.style.display = "none";
}, 2500);


$(document).on('click', '#idpc_dropdown', function () {
    var new_value = $(this).val()
    if (new_value == 'ideal') {
        $("#idpc_dropdown").css("display", "block");
    } else {
        $("#idpc_dropdown").css("display", "none");
    }
});

function hello_me() {
    var c = $("#remember_me");
    if (c.is(":checked")) {
        var u = $('#email').val(); //VALUE OF USERNAME
        var p = $('#psw').val(); //VALUE OF PASSWORD
        localStorage.setItem('email', u); //SETS IN DAYS (10 YEARS)
        localStorage.setItem('password', p); //SETS IN DAYS (10 YEARS)
    } else {
        localStorage.setItem('email', ''); //SETS IN DAYS (10 YEARS)
        localStorage.setItem('password', ''); //SETS IN DAYS (10 YEARS)
    }
}

//NEXT PAGE LOAD, THE USERNAME & PASSWORD WILL BE SHOWN IN THEIR FIELDS
function load_em() {
    var u = localStorage.getItem("email"); //"USERNAME" COOKIE
    var p = localStorage.getItem("password"); //"PASSWORD" COOKIE

    $("#email").val(u); //FILLS WITH "USERNAME" COOKIE
    $("#psw").val(p); //FILLS WITH "PASSWORD" COOKIE
}
