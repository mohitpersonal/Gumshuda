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




function validatefirst() {
    var letterNumber = /^[a-zA-Z]+$/;
    var first_name = document.myform.first_name.value;
    if (first_name.length == null || first_name.length == '') {
        document.getElementById("fisrt_name").classList.remove("has-success");
        document.getElementById("fisrt_name").classList.add("has-error");
        document.getElementById('label_frst_name').style.display = 'block';
        document.getElementById('label_frst_name1').style.display = 'none';
        return false;
    } else {
        if (first_name.length > 15 || first_name.length < 3) {
            document.getElementById("fisrt_name").classList.remove("has-success");
            document.getElementById("fisrt_name").classList.add("has-error");
            document.getElementById('label_frst_name1').style.display = 'block';
            document.getElementById('label_frst_name').style.display = 'none';
            return false;
        } else {
            if (first_name.match(letterNumber)) {
                document.getElementById("fisrt_name").classList.add("has-success");
                document.getElementById('label_frst_name').style.display = 'none';
                document.getElementById('label_frst_name1').style.display = 'none';
                return true;
            } else {
                document.getElementById("fisrt_name").classList.remove("has-success");
                document.getElementById("fisrt_name").classList.add("has-error");
                document.getElementById('label_frst_name').style.display = 'none';
                document.getElementById('label_frst_name1').style.display = 'block';
                return false;
            }
        }
    }
}

$("#fisrt_name").focusout(function () {
    if ($(this).hasClass("has-success")) {
        $(this).removeClass("has-success");
        $(this).removeClass("has-error");
    }
})

function validatelast() {
    var letterNumber = /^[a-zA-Z]+$/;
    var last_name = document.myform.last_name.value;
    if (last_name.length == null || last_name.length == '') {
        document.getElementById("last_name").classList.remove("has-success");
        document.getElementById("last_name").classList.add("has-error");
        document.getElementById('label_lst_name').style.display = 'block';
        document.getElementById('label_lst_name1').style.display = 'none';
        return false;
    } else {
        if (last_name.length > 15 || last_name.length < 3) {
            document.getElementById("last_name").classList.remove("has-success");
            document.getElementById("last_name").classList.add("has-error");
            document.getElementById('label_lst_name1').style.display = 'block';
            document.getElementById('label_lst_name').style.display = 'none';
            return false;
        } else {
            if (last_name.match(letterNumber)) {
                document.getElementById("last_name").classList.add("has-success");
                document.getElementById('label_lst_name').style.display = 'none';
                document.getElementById('label_lst_name1').style.display = 'none';
                return true;
            } else {
                document.getElementById("last_name").classList.remove("has-success");
                document.getElementById("last_name").classList.add("has-error");
                document.getElementById('label_lst_name').style.display = 'none';
                document.getElementById('label_lst_name1').style.display = 'block';
                return false;
            }
        }
    }
}

$("#last_name").focusout(function () {
    if ($(this).hasClass("has-success")) {
        $(this).removeClass("has-success");
        $(this).removeClass("has-error");
    }
})

function validatemail() {
    var letterNumber = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var email = document.myform.email.value;
    if (email == null || email == "") {
        document.getElementById("email").classList.remove("has-success");
        document.getElementById("email").classList.add("has-error");
        document.getElementById('label_your_email').style.display = 'block';
        document.getElementById('label_your_email1').style.display = 'none';
        return false;
    } else {
        if (email.match(letterNumber)) {
            document.getElementById("email").classList.add("has-success");
            document.getElementById('label_your_email1').style.display = 'none';
            document.getElementById('label_your_email').style.display = 'none';
            return true;
        } else {
            document.getElementById("email").classList.remove("has-success");
            document.getElementById("email").classList.add("has-error");
            document.getElementById('label_your_email1').style.display = 'block';
            document.getElementById('label_your_email').style.display = 'none';
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

function checkpassword() {
    var password = document.myform.password.value;
    if (password.length == null || password.length == "") {
        document.getElementById("psw").classList.remove("has-success");
        document.getElementById("psw").classList.add("has-error");
        document.getElementById('label_password').style.display = 'block';
        document.getElementById('label_password1').style.display = 'none';
    } else {
        if (password.length > 18 || password.length < 6) {
            document.getElementById("psw").classList.remove("has-success");
            document.getElementById("psw").classList.add("has-error");
            document.getElementById('label_password1').style.display = 'block';
            document.getElementById('label_password').style.display = 'none';
            return false;
        } else {
            document.getElementById("psw").classList.add("has-success");
            document.getElementById('label_password').style.display = 'none';
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

function newpassword() {
    var password = document.myform.password.value;

    var confirm_password = document.myform.confirm_password.value;
    if (confirm_password.length == null || confirm_password.length == "") {
        document.getElementById("confpsw").classList.remove("has-success");
        document.getElementById("confpsw").classList.add("has-error");
        document.getElementById('label_confirm_password').style.display = 'block';
        document.getElementById('label_confirm_password1').style.display = 'none';
        document.getElementById('label_confirm_password2').style.display = 'none';
        return false;
    } else {
        if (confirm_password.length > 18 || confirm_password.length < 6) {
            document.getElementById("confpsw").classList.remove("has-success");
            document.getElementById("confpsw").classList.add("has-error");
            document.getElementById('label_confirm_password1').style.display = 'block';
            document.getElementById('label_confirm_password').style.display = 'none';
            document.getElementById('label_confirm_password2').style.display = 'none';
            return false;
        } else {
            if (confirm_password != password) {
                document.getElementById("confpsw").classList.remove("has-success");
                document.getElementById("confpsw").classList.add("has-error");
                document.getElementById('label_confirm_password').style.display = 'none';
                document.getElementById('label_confirm_password1').style.display = 'none';
                document.getElementById('label_confirm_password2').style.display = 'block';
                return false;
            } else {
                document.getElementById("confpsw").classList.add("has-success");
                document.getElementById('label_confirm_password2').style.display = 'none';
                document.getElementById('label_confirm_password').style.display = 'none';
                document.getElementById('label_confirm_password1').style.display = 'none';

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

function validphonee() {
    var letterNumber = /^[+0-9 ]*$/;
    var phone = document.myform.phone.value;

    if (phone == null || phone == "") {
        document.getElementById("phone_number").classList.remove("has-success");
        document.getElementById("phone_number").classList.add("has-error");
        document.getElementById('label_phone_number').style.display = 'block';
        document.getElementById('label_phone_number1').style.display = 'none';
        document.getElementById('label_phone_number2').style.display = 'none';
        return false;
    } else {
        if (phone.match(letterNumber)) {
            if (phone.length > 15 || phone.length < 10) {
                document.getElementById("phone_number").classList.remove("has-success");
                document.getElementById("phone_number").classList.add("has-error");
                document.getElementById('label_phone_number').style.display = 'none';
                document.getElementById('label_phone_number1').style.display = 'block';
                document.getElementById('label_phone_number2').style.display = 'none';
                return false;
            } else {
                document.getElementById("phone_number").classList.add("has-success");
                document.getElementById('label_phone_number1').style.display = 'none';
                document.getElementById('label_phone_number').style.display = 'none';
                document.getElementById('label_phone_number2').style.display = 'none';
                return true;
            }
        } else {
            document.getElementById("phone_number").classList.remove("has-success");
            document.getElementById("phone_number").classList.add("has-error");
            document.getElementById('label_phone_number1').style.display = 'none';
            document.getElementById('label_phone_number').style.display = 'none';
            document.getElementById('label_phone_number2').style.display = 'block';
            return false;
        }
    }
}

$("#phone_number").focusout(function () {
    if ($(this).hasClass("has-success")) {
        $(this).removeClass("has-success");
        $(this).removeClass("has-error");
    }
})







function ValidateIdCard(){
    var email=$("#id_card").val();
    if(email.length == '' || email.length == null) {
        $("#id_card").removeClass("has-success");
        $("#id_card").addClass("has-error");
        $("#labek_id_Card").text("This Field is required");
        return false;
    }
        else{
            $("#id_card").addClass("has-success");
            $("#labek_id_Card").text("");
            return true;
        }
    }

$("#id_card").focusout(function () {
    if ($(this).hasClass("has-success")) {
        $(this).removeClass("has-success");
        $(this).removeClass("has-error");
    }
})

function verify_terms() {
    var agree = document.getElementById("checkbox30");
    if (agree.checked == false) {
        document.getElementById("checkbox30").classList.add("has-error");
        document.getElementById('label_term').style.display = 'block';
        return false;
    } else {
        document.getElementById("checkbox30").classList.add("has-success");
        document.getElementById('label_term').style.display = 'none';
        return true;
    }
}

$("#checkbox30").focusout(function () {
    if ($(this).hasClass("has-success")) {
        $(this).removeClass("has-success");
        $(this).removeClass("has-error");
    }
})

$(document).ready(function () {
    $("#nex_buttton").click(function () {
        if (validatefirst() && validatelast() && ValidateIdCard() == true) {
            $('#my_account').tab('show');
            return true;
        } else {
            ValidateIdCard();
            validatefirst();
            validatelast();
            return false;
        }
    });
});

$(document).ready(function () {
    $("#next_btn2").click(function () {
        if (validatemail() && checkpassword() && newpassword() == true) {
            $('#finally_tt').tab('show');
            return true;

        } else {
            validatemail();
            checkpassword();
            newpassword();
            return false;
        }
    });
});
$(document).ready(function () {
    $("#my_account").click(function () {
        if (validatefirst() && validatelast() && ValidateIdCard() == true) {
            $('#my_account').tab('show');
            return true;
        } else {
            ValidateIdCard();
            validatefirst();
            validatelast();
            return false;
c        }
    });
});

$(document).ready(function () {
    $("#finally_tt").click(function () {
        if (validatefirst() && validatelast() && ValidateIdCard() && validatemail() && checkpassword() && newpassword() == true) {
            $('#finally_tt').tab('show');
            return true;

        } else {
            validatefirst();
            validatelast();
            ValidateIdCard()
            validatemail();
            checkpassword();
            newpassword();
            return false;
        }
    });
});

function DoAllThese() {
    if (ValidateIdCard() && validatemail() && validatefirst() && validatelast() && checkpassword() &&
        newpassword() && validphonee() && verify_terms() == true) {
        return true;
    } else {
        ValidateIdCard();
        validatemail();
        validatefirst();
        validatelast();
        checkpassword();
        newpassword();
        validphonee();
        verify_terms();

        return false;
    }
}


$(document).ready(function () {
    $("#back_btn1").click(function () {
        $('#about_you').tab('show');
    });
});


$(document).ready(function () {
    $("#back_btn2").click(function () {
        $('#my_account').tab('show');
    });
});

var message_ele = document.getElementById("msg_Sucess");

setTimeout(function () {
    $(message_ele).css("display", "none");
}, 7000);

var msg_sign_errer = document.getElementById("msg_sign_err");

setTimeout(function () {
    $(msg_sign_errer).css("display", "none");
}, 2500);