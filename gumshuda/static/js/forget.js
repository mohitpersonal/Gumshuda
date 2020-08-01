function validatemail() {
    var letterNumber = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var email = document.email_Send_form.email.value;
    if (email == null || email == "") {
        document.getElementById("email").classList.remove("has-success");
        document.getElementById('label_forget_password').style.display = 'block';
        document.getElementById('label_forget_password1').style.display = 'none';
        document.getElementById("email").classList.add("has-error");
        return false;
    } else {
        if (email.match(letterNumber)) {
            document.getElementById('label_forget_password1').style.display = 'none';
            document.getElementById('label_forget_password').style.display = 'none';
            document.getElementById("email").classList.add("has-success");

            return true;
        } else {
            document.getElementById("email").classList.remove("has-success");
            document.getElementById('label_forget_password1').style.display = 'block';
            document.getElementById('label_forget_password').style.display = 'none';
            document.getElementById("email").classList.add("has-error");

            return false;
        }
    }
}

$("#email").focusout(function () {
    if ($(this).hasClass("has-success")) {
        $(this).removeClass("has-success");
        $(this).removeClass("has-error");
    }
})

var msg_suc = document.getElementById("mail_suc");

setTimeout(function () {
    msg_suc.style.display = "none";
}, 5000);


var mail_none = document.getElementById("mail_err");

setTimeout(function () {
    mail_none.style.display = "none";
}, 3000);