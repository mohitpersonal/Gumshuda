function show() {
    var x = document.getElementById("psw");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}


function show1() {
    var x = document.getElementById("confpsw");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function checkpassword() {
    var password = document.set_password.password.value;
    if (password.length == null || password.length == "") {
        document.getElementById("psw").classList.remove("has-success");
        document.getElementById('label_password').style.display = 'block';
        document.getElementById('label_password1').style.display = 'none';
        document.getElementById("psw").classList.add("has-error");
    } else {
        if (password.length > 18 || password.length < 6) {
            document.getElementById("psw").classList.remove("has-success");
            document.getElementById('label_password1').style.display = 'block';
            document.getElementById('label_password').style.display = 'none';
            document.getElementById("psw").classList.add("has-error");
            return false;
        } else {
            document.getElementById('label_password').style.display = 'none';
            document.getElementById("psw").classList.add("has-success");

            document.getElementById('label_password1').style.display = 'none';
            return true;
        }
    }
}

$("#psw").focusout(function () {
    if ($(this).hasClass("has-success")) {
        $(this).removeClass("has-success");
        $(this).removeClass("has-error");
    }
})

function confpassword() {
    var password = document.set_password.password.value;

    var confirm_password = document.set_password.confirm_password.value;
    if (confirm_password.length == null || confirm_password.length == "") {
        document.getElementById("confpsw").classList.remove("has-success");
        document.getElementById('label_confirm_password').style.display = 'block';
        document.getElementById('label_confirm_password1').style.display = 'none';
        document.getElementById('label_confirm_password2').style.display = 'none';
        document.getElementById("confpsw").classList.add("has-error");
        return false;
    } else {
        if (confirm_password.length > 18 || confirm_password.length < 6) {
            document.getElementById("confpsw").classList.remove("has-success");
            document.getElementById('label_confirm_password1').style.display = 'block';
            document.getElementById('label_confirm_password').style.display = 'none';
            document.getElementById('label_confirm_password2').style.display = 'none';
            document.getElementById("confpsw").classList.add("has-error");
            return false;
        } else {
            if (confirm_password != password) {
                document.getElementById("confpsw").classList.remove("has-success");
                document.getElementById('label_confirm_password').style.display = 'none';
                document.getElementById('label_confirm_password1').style.display = 'none';
                document.getElementById('label_confirm_password2').style.display = 'block';
                document.getElementById("confpsw").classList.add("has-error");
                return false;
            } else {
                document.getElementById('label_confirm_password2').style.display = 'none';
                document.getElementById('label_confirm_password').style.display = 'none';
                document.getElementById('label_confirm_password1').style.display = 'none';
                document.getElementById("confpsw").classList.add("has-success");


                return true;
            }
        }
    }
}

$("#confpsw").focusout(function () {
    if ($(this).hasClass("has-success")) {
        $(this).removeClass("has-success");
        $(this).removeClass("has-error");
    }
})


function checkotp() {
    var otp = document.set_password.otp.value;
    if (otp.length == '' || otp.length == null) {
        document.getElementById("otp").classList.remove("has-success");
        document.getElementById('label_verification_code').style.display = 'block';
        document.getElementById("otp").classList.add("has-error");
        return false;
    } else {
        document.getElementById('label_verification_code').style.display = 'none';
        document.getElementById("otp").classList.add("has-success");
        return true;
    }

}

$("#otp").focusout(function () {
    if ($(this).hasClass("has-success")) {
        $(this).removeClass("has-success");
        $(this).removeClass("has-error");
    }
})

function DoAllset() {
    if (checkpassword() && confpassword() && checkotp() == true) {
        return true;
    } else {
        checkpassword();
        confpassword();
        checkotp();
        return false;
    }
}

var msg_suc = document.getElementById("set_psw_suc");

setTimeout(function () {
    msg_suc.style.display = "none";
}, 5000);


var mail_none = document.getElementById("set_psw_err");

setTimeout(function () {
    mail_none.style.display = "none";
}, 3000);