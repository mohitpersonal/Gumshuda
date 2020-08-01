
// // validation for first_name field

function Firstname_Edit_by_Customer(){
    var letternumber = /^[a-zA-Z]+$/;
    console.log("hhh")
    var first_name=$("#cust_firstt_name").val();
    if(first_name.length == '' || first_name.length == null) {
        $("#cust_firstt_name").removeClass("has-success");
        $("#cust_firstt_name").addClass("has-error");
        $("#cust_edit_firstname_real_label").text("This Field is required");
        
        return false;
    }
    else{
        if (first_name.length >15 || first_name.length <3){
            $("#cust_firstt_name").removeClass("has-success");
            $("#cust_firstt_name").addClass("has-error");
            $("#cust_edit_firstname_real_label").text("It only contains 3 to 15 characters");
            return false;
        }
        else{
            if(first_name.match(letternumber)){
                $("#cust_firstt_name").addClass("has-success");
                $("#cust_edit_firstname_real_label").text("");
                return true;
            }
            else{
                $("#cust_firstt_name").removeClass("has-success");
                $("#cust_firstt_name").addClass("has-error");
                $("#cust_edit_firstname_real_label").text("It only contains 3 to 15 characters");
                return false;
            }
        }
    }
}
$("#cust_firstt_name").focusout(function () {
    if ($(this).hasClass("has-success")) {
        $(this).removeClass("has-success");
        $(this).removeClass("has-error");
    }
})

// // validation for middle_name field

function Middle_name_edit_by_Customer(){
    var middle_name=$("#customer_edit_middle_name").val();
    if (middle_name.length >15){
        $("#customer_edit_middle_name").removeClass("has-success");
        $("#customer_edit_middle_name").addClass("has-error");
        $("#cust_edit_middlename_real_label").text("It only contains upto 15 characters");
        return false;
        }
    else{
        $("#customer_edit_middle_name").addClass("has-success");
        $("#cust_edit_middlename_real_label").text("");
        return true;
    }
}

$("#customer_edit_middle_name").focusout(function () {
    if ($(this).hasClass("has-success")) {
        $(this).removeClass("has-success");
        $(this).removeClass("has-error");
    }
})



// // validation for last_name field
function lastname_valid_edit_by_Customer(){
    var letterNumber = /^[a-zA-Z]+$/;
    console.log("hhh")
    var lastname=$("#customer_lastt_name").val();
    if(lastname.length == '' || lastname.length == null) {
        $("#customer_lastt_name").removeClass("has-success");
        $("#customer_lastt_name").addClass("has-error");
        $("#cust_edit_lastname_real_label").text("This Field is required");
        return false;
    }
    else{
        if (lastname.length >15 || lastname.length <3){
            $("#customer_lastt_name").removeClass("has-success");
            $("#customer_lastt_name").addClass("has-error");
            $("#cust_edit_lastname_real_label").text("It only contains 3 to 15 characters");
            return false;
        }
        else{
            if(lastname.match(letterNumber)){
                $("#customer_lastt_name").addClass("has-success");
                $("#cust_edit_lastname_real_label").text("");
                return true;
            }
            else{
                $("#customer_lastt_name").removeClass("has-success");
                $("#customer_lastt_name").addClass("has-error");
                $("#cust_edit_lastname_real_label").text("It only contains 3 to 15 characters");
                return false;
            }
        }
    }
}

$("#customer_lastt_name").focusout(function () {
    if ($(this).hasClass("has-success")) {
        $(this).removeClass("has-success");
        $(this).removeClass("has-error");
    }
})



$("#customer_updateform_personal").submit(function(e){
    if (Firstname_Edit_by_Customer() && lastname_valid_edit_by_Customer() && Middle_name_edit_by_Customer() == true) {
        e.preventDefault();
        var form = $(this);
        var data=form.serialize();
        var Url = form.attr('action');
        $.ajax({
            type:'POST',
            url:Url,
            data:data,
            success: function(response){
                console.log(response)
                console.log(typeof(response))
                data=JSON.parse(response)
                $("#cust_firstt_name").val(data['first_name'])
                $("#customer_lastt_name").val(data['last_name'])
                $("#customer_edit_middle_name").val(data['middlename'])
                $("#cust_mobile_number").val(data['phone'])
                $("#cust_email").val(data['email'])
                $("#ajax_personal_customer_sucess").text(data['message'])
                $('#ajax_personal_customer_sucess').css("display", "block");
                var msg_ajax = document.getElementById("ajax_personal_customer_sucess");
                setTimeout(function () {
                    $(msg_ajax).css("display", "none");
                }, 2000);

            },
            error: function(){
                $("#ajax_personal_customer_err").text(data['message'])
                $('#ajax_personal_customer_err').css("display", "block");
                var msg_ajax_err = document.getElementById("ajax_personal_customer_err");
                setTimeout(function () {
                    $(msg_ajax_err).css("display", "none");
                }, 2000);
            }
        })
    }else{
        Firstname_Edit_by_Customer();
        lastname_valid_edit_by_Customer();
        Middle_name_edit_by_Customer();
        return false;    
    }
})







///////////// Adress tab


$('#postcode_lookup_adress_customer').getAddress({
    api_key: 'Y2ztPZYj2ky935e1BfSwYA21911',
    output_fields: {
        line_1: '#cust_first_line',
        line_2: '#cust_2nd_line',
        line_3: '#cust_third_line',
        post_town: '#cust_post_town',
        postcode: '#cust_postal_code'
    }
})

$(document).on('change', '#getaddress_dropdown', function () {
    var new_value = $(this).val()
    if (new_value == 'open') {
        $("#getaddress_dropdown").css("display", "block");
    } else {
        $("#getaddress_dropdown").css("display", "none");
    }
})



/// Validations


function Address_line1_edit_by_customer(){
    console.log("hhh")
    var adresss_line=$("#cust_first_line").val();
    if(adresss_line.length == '' || adresss_line.length == null) {
        $("#cust_first_line").removeClass("has-success");
        $("#cust_first_line").addClass("has-error");
        $("#cust_edit_adres_lin_1").text("This Field is required");
        return false;
    }
    else{
        if (adresss_line.length >55 || adresss_line.length <3){
            $("#cust_first_line").removeClass("has-success");
            $("#cust_first_line").addClass("has-error");
            $("#cust_edit_adres_lin_1").text("It only contains 3 to 55 characters");
            return false;
        }
        else{
            $("#cust_first_line").addClass("has-success");
            $("#cust_edit_adres_lin_1").text("");
            return true;
        }
    }
}




// validation for contact field
function Add_Contacts_edit_by_Customer(){
    var letternumber = /^[+0-9 ]*$/;
    console.log("hhh")
    var phone_number=$("#cust_2nd_line").val();
    if(phone_number.length == '' || phone_number.length == null) {
        $("#cust_2nd_line").removeClass("has-success");
        $("#cust_2nd_line").addClass("has-error");
        $("#customer_edit_adres_lin_2_label").text("This Field is required");
        return false;
    }
    else{
        if (phone_number.length >20 || phone_number.length <6){
            $("#cust_2nd_line").removeClass("has-success");
            $("#cust_2nd_line").addClass("has-error");
            $("#customer_edit_adres_lin_2_label").text("It only contains 6 to 20 numbers");
            return false;
        }
        else{
            if(phone_number.match(letternumber)){
                $("#cust_2nd_line").addClass("has-success");
                $("#customer_edit_adres_lin_2_label").text("");
                return true;
            }
            else{
                $("#cust_2nd_line").removeClass("has-success");
                $("#cust_2nd_line").addClass("has-error");
                $("#customer_edit_adres_lin_2_label").text("It contains only numbers");
                return false;
            }
        }
    }
}

$("#cust_2nd_line").focusout(function () {
    if ($(this).hasClass("has-success")) {
        $(this).removeClass("has-success");
        $(this).removeClass("has-error");
    }
})



// country validation

function Country_edit_by_customer(){
    console.log("hhh")
    var adresss_line2=$("#cust_third_line").val();
    if(adresss_line2.length == '' || adresss_line2.length == null) {
        $("#cust_third_line").removeClass("has-success");
        $("#cust_third_line").addClass("has-error");
        $("#customer_edit_country_label").text("This Field is required");
        return false;
    }
    else{
    if (adresss_line2.length >20){
        $("#cust_third_line").removeClass("has-success");
        $("#cust_third_line").addClass("has-error");
        $("#customer_edit_country_label").text("It only contains upto 20 characters");
        return false;
        }
    else{
        $("#cust_third_line").addClass("has-success");
        $("#customer_edit_country_label").text("");
        return true;
    }
}
}

$("#cust_third_line").focusout(function () {
    if ($(this).hasClass("has-success")) {
        $(this).removeClass("has-success");
        $(this).removeClass("has-error");
    }
})



// validation for City

function city_edit_by_customer(){
    var city_val=$("#cust_post_town").val();
    if (city_val.length >50){
        $("#cust_post_town").removeClass("has-success");
        $("#cust_post_town").addClass("has-error");
        $("#customer_edit_city_by").text("It only contains upto 50 characters");
        return false;
    }
    else{
        $("#cust_post_town").addClass("has-success");
        $("#customer_edit_city_by").text("");
        return true;
    }
    }

$("#cust_post_town").focusout(function () {
    if ($(this).hasClass("has-success")) {
        $(this).removeClass("has-success");
        $(this).removeClass("has-error");
    }
})
// validation for Postcode

function postcode_edit_by_customer(){
    console.log("hhh")
    var postcode_var=$("#cust_postal_code").val();
    if(postcode_var.length == '' || postcode_var.length == null) {
        $("#cust_postal_code").removeClass("has-success");
        $("#cust_postal_code").addClass("has-error");
        $("#customer_edit_postalcode").text("This Field is required");
        return false;
    }
    else{
        if (postcode_var.length >12 || postcode_var.length <6){
            $("#cust_postal_code").removeClass("has-success");
            $("#cust_postal_code").addClass("has-error");
            $("#customer_edit_postalcode").text("It only contains 6 to 12 characters");
            return false;
        }
        else{
            $("#cust_postal_code").addClass("has-success");
            $("#customer_edit_postalcode").text("");
            return true;
        }
    }
}
$("#cust_postal_code").focusout(function () {
    if ($(this).hasClass("has-success")) {
        $(this).removeClass("has-success");
        $(this).removeClass("has-error");
    }
})




$("#update_custmer_adress").submit(function(e){
    if (Address_line1_edit_by_customer() && Add_Contacts_edit_by_Customer() && Country_edit_by_customer() && city_edit_by_customer() &&  postcode_edit_by_customer() == true) {
        e.preventDefault();
        var form = $(this);
        var data=form.serialize();
        var Url = form.attr('action');
        $.ajax({
            type:'POST',
            url:Url,
            data:data,
            success: function(response){
                console.log(response)
                console.log(typeof(response))
                var data=JSON.parse(response)
                $("#cust_first_line").val(data['adress_line1'])
                $("#cust_2nd_line").val(data['adress_line2'])
                $("#cust_third_line").val(data['country'])
                $("#cust_post_town").val(data['city'])
                $("#cust_postal_code").val(data['post_code'])
                $("#ajax_personal_customer_sucess").text(data['message'])
                $('#ajax_personal_customer_sucess').css("display", "block");
                var msg_ajax_sucess = document.getElementById("ajax_personal_customer_sucess");
                setTimeout(function () {
                    $(msg_ajax_sucess).css("display", "none");
                }, 2000);

            },
            error: function(){
                $("#ajax_personal_customer_err").text(data['message'])
                $('#ajax_personal_customer_err').css("display", "block");
                var msg_ajax_err_adress = document.getElementById("ajax_personal_customer_err");
                setTimeout(function () {
                    $(msg_ajax_err_adress).css("display", "none");
                }, 2000);
            }
        })
    }else{
        Address_line1_edit_by_customer();
        Add_Contacts_edit_by_Customer();
        Country_edit_by_customer();
        city_edit_by_customer();
        postcode_edit_by_customer();
        return false;    
    }
})




function Old_customer_Password_by_customer(){
    var old_password=$("#cust_old_psw").val();
    if(old_password.length == '' || old_password.length == null) {
        $("#cust_old_psw").removeClass("has-success");
        $("#cust_old_psw").addClass("has-error");
        $("#customer_edit_old_password").text("This Field is required");
        return false;
    }
    else{
        if(old_password.length > 18 || old_password.length < 6){
            $("#cust_old_psw").removeClass("has-success");
            $("#cust_old_psw").addClass("has-error");
            $("#customer_edit_old_password").text("Password must contains 6 to 18 characters");
            return false;
            }
        else{
            $("#cust_old_psw").addClass("has-success");
            $("#customer_edit_old_password").text("");
            return true;
            }
        }
    }
$("#cust_old_psw").focusout(function () {
    if ($(this).hasClass("has-success")) {
        $(this).removeClass("has-success");
        $(this).removeClass("has-error");
    }
})


// validation for password

function Customer_Password_by_customer(){
    var old_password=$("#cust_new_psw").val();
    if(old_password.length == '' || old_password.length == null) {
        $("#cust_new_psw").removeClass("has-success");
        $("#cust_new_psw").addClass("has-error");
        $("#custor_edit_new_password").text("This Field is required");
        return false;
    }
    else{
        if(old_password.length > 18 || old_password.length < 6){
            $("#cust_new_psw").removeClass("has-success");
            $("#cust_new_psw").addClass("has-error");
            $("#custor_edit_new_password").text("Password must contains 6 to 18 characters");
            return false;
            }
        else{
            $("#cust_new_psw").addClass("has-success");
            $("#custor_edit_new_password").text("");
            return true;
            }
        }
    }
$("#cust_new_psw").focusout(function () {
    if ($(this).hasClass("has-success")) {
        $(this).removeClass("has-success");
        $(this).removeClass("has-error");
    }
})


// validation for confirm password

function Confirm_password_cust_by_customer(){
    var conf_password=$("#cust_confirm_ps").val();
    var password=$("#cust_new_psw").val();
    if(conf_password.length == '' || conf_password.length == null) {
        $("#cust_confirm_ps").removeClass("has-success");
        $("#cust_confirm_ps").addClass("has-error");
        $("#custor_edit_confirm_new_password").text("This Field is required");
        return false;
    }
    else{
        if(conf_password.length > 18 || conf_password.length < 6){
            $("#cust_confirm_ps").removeClass("has-success");
            $("#cust_confirm_ps").addClass("has-error");
            $("#custor_edit_confirm_new_password").text("Password must contains 6 to 18 characters");
            return false;
            }
        else{
            if (conf_password != password){
                $("#cust_confirm_ps").removeClass("has-success");
                $("#cust_confirm_ps").addClass("has-error");
                $("#custor_edit_confirm_new_password").text("Password is not matched");
                return false;
            }
            else{
                $("#cust_confirm_ps").addClass("has-success");
                $("#custor_edit_confirm_new_password").text("");
                return true;
            }
        }
    }
}
$("#cust_confirm_ps").focusout(function () {
    if ($(this).hasClass("has-success")) {
        $(this).removeClass("has-success");
        $(this).removeClass("has-error");
    }
})



function show_by_customer() {
    var x = document.getElementById("cust_new_psw");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}


function sho1_by_customer() {
    var x = document.getElementById("cust_confirm_ps");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}






////////////// Model show


function Model_Show_Customer() {
    if (Old_customer_Password_by_customer() && Customer_Password_by_customer() && Confirm_password_cust_by_customer() == true) {
        $("#customer_reset_password_himself_model").modal('show');
        return true;
    } else {
        Old_customer_Password_by_customer();
        Customer_Password_by_customer();
        Confirm_password_cust_by_customer();
        return false;
    }
}


//////////// Form Refresh

$(document).on('click', '#btn_yes_by_customer', function(){
    $("#cust_confirm_ps").val('');
    $("#cust_new_psw").val('');
    $("#cust_old_psw").val('');
    $("#cust_confirm_ps").removeClass("has-success");
    $("#cust_new_psw").removeClass("has-success");
    $("#cust_old_psw").removeClass("has-success");
    $("#cust_old_psw").removeClass("has-error");
    $("#cust_confirm_ps").removeClass("has-error");
    $("#cust_new_psw").removeClass("has-error");
    


})


////////// Ajax request to old password

$('#btn_yes_by_customer').click(function (e) {
    if (Old_customer_Password_by_customer() && Customer_Password_by_customer() && Confirm_password_cust_by_customer() == true) {
        e.preventDefault();
        var form = $('#cust_change_pasw');
        var data = (form).serialize();
        var Url = form.attr('action');
        $.ajax({
            type: 'POST',
            data: data,
            url: Url,
            success: function (response) {
                console.log(response)
                var data = JSON.parse(response)
                if (data["status"] == 'fail') {
                    $("#customer_reset_password_himself_model").modal('hide');
                    $("#ajax_personal_customer_err").text(data["message"]);
                    $('#ajax_personal_customer_err').css("display", "block");
                    var msg_ajax_err_psw = document.getElementById("ajax_personal_customer_err");
                    setTimeout(function () {
                        $(msg_ajax_err_psw).css("display", "none");
                    }, 2000);
                } else {

                    window.location.href = "/login/";
                    $("#customer_reset_password_himself_model").modal('hide');
                }


            },
            error: function () {
                console.log('Error occurs!');
            }
        });
    } else {
        Old_customer_Password_by_customer();
        Customer_Password_by_customer();
        Confirm_password_cust_by_customer();
        return false;
    }
})


