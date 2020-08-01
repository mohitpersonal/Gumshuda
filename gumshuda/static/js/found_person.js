function MissingPersonName_Found(){
    var letternumber = /^[a-zA-Z]+$/;
    console.log("hhh")
    var first_name=$("#inputFirstName_found").val();
    if(first_name.length == '' || first_name.length == null) {
        $("#inputFirstName_found").removeClass("has-success");
        $("#inputFirstName_found").addClass("has-error");
        $("#label_frst_name1_found").text("This Field is required");
        
        return false;
    }
    else{
        if (first_name.length >15 || first_name.length <3){
            $("#inputFirstName_found").removeClass("has-success");
            $("#inputFirstName_found").addClass("has-error");
            $("#label_frst_name1_found").text("It only contains 3 to 15 characters");
            return false;
        }
        else{
            if(first_name.match(letternumber)){
                $("#inputFirstName_found").addClass("has-success");
                $("#label_frst_name1_found").text("");
                return true;
            }
            else{
                $("#inputFirstName_found").removeClass("has-success");
                $("#inputFirstName_found").addClass("has-error");
                $("#label_frst_name1_found").text("It only contains 3 to 15 characters");
                return false;
            }
        }
    }
}
$("#inputFirstName_found").focusout(function () {
    if ($(this).hasClass("has-success")) {
        $(this).removeClass("has-success");
        $(this).removeClass("has-error");
    }
})


////

function AgeCheck_Found(){
    var letternumber = /^[a-zA-Z]+$/;
    console.log("hhh")
    var first_name=$("#ageinputid_found").val();
    if(first_name.length == '' || first_name.length == null) {
        $("#ageinputid_found").removeClass("has-success");
        $("#ageinputid_found").addClass("has-error");
        $("#age_label_found").text("This Field is required");
        
        return false;
    }
    else{
        $("#ageinputid_found").addClass("has-success");
        $("#age_label_found").text("");
        return true;
    }

}
$("#ageinputid_found").focusout(function () {
    if ($(this).hasClass("has-success")) {
        $(this).removeClass("has-success");
        $(this).removeClass("has-error");
    }
})
///
function StreetCheck_Found(){
    var letternumber = /^[a-zA-Z]+$/;
    console.log("hhh")
    var first_name=$("#street_check_found").val();
    if(first_name.length == '' || first_name.length == null) {
        $("#street_check_found").removeClass("has-success");
        $("#street_check_found").addClass("has-error");
        $("#streetcheck_label_found").text("This Field is required");
        
        return false;
    }
    else{
        $("#street_check_found").addClass("has-success");
        $("#streetcheck_label_found").text("");
        return true;
    }

}
$("#street_check_found").focusout(function () {
    if ($(this).hasClass("has-success")) {
        $(this).removeClass("has-success");
        $(this).removeClass("has-error");
    }
})

//
function AdreesFormCheck_Found(){
    var letternumber = /^[a-zA-Z]+$/;
    console.log("hhh")
    var first_name=$("#Addresscheck_found").val();
    if(first_name.length == '' || first_name.length == null) {
        $("#Addresscheck_found").removeClass("has-success");
        $("#Addresscheck_found").addClass("has-error");
        $("#address_check_label_found").text("This Field is required");
        
        return false;
    }
    else{
        $("#Addresscheck_found").addClass("has-success");
        $("#address_check_label_found").text("");
        return true;
    }

}
$("#Addresscheck_found").focusout(function () {
    if ($(this).hasClass("has-success")) {
        $(this).removeClass("has-success");
        $(this).removeClass("has-error");
    }
})

/////////

function CityCheckFun_Found(){
    var letternumber = /^[a-zA-Z]+$/;
    console.log("hhh")
    var first_name=$("#city_check_found").val();
    if(first_name.length == '' || first_name.length == null) {
        $("#city_check_found").removeClass("has-success");
        $("#city_check_found").addClass("has-error");
        $("#city_label_found").text("This Field is required");
        
        return false;
    }
    else{
        $("#city_check_found").addClass("has-success");
        $("#city_label_found").text("");
        return true;
    }

}
$("#city_check_found").focusout(function () {
    if ($(this).hasClass("has-success")) {
        $(this).removeClass("has-success");
        $(this).removeClass("has-error");
    }
})

//////


function ProvinceCheck_Found(){
    var letternumber = /^[a-zA-Z]+$/;
    console.log("hhh")
    var first_name=$("#provinceCheck_found").val();
    if(first_name.length == '' || first_name.length == null) {
        $("#provinceCheck_found").removeClass("has-success");
        $("#provinceCheck_found").addClass("has-error");
        $("#province_label_found").text("This Field is required");
        
        return false;
    }
    else{
        $("#provinceCheck_found").addClass("has-success");
        $("#province_label_found").text("");
        return true;
    }

}
$("#provinceCheck_found").focusout(function () {
    if ($(this).hasClass("has-success")) {
        $(this).removeClass("has-success");
        $(this).removeClass("has-error");
    }
})



////////////////



function ContactNumber_Found(){
    var letternumber = /^[a-zA-Z]+$/;
    console.log("hhh")
    var first_name=$("#contxt_number_found").val();
    if(first_name.length == '' || first_name.length == null) {
        $("#contxt_number_found").removeClass("has-success");
        $("#contxt_number_found").addClass("has-error");
        $("#contact_number_label_found").text("This Field is required");
        
        return false;
    }
    else{
        $("#contxt_number_found").addClass("has-success");
        $("#contact_number_label_found").text("");
        return true;
    }

}
$("#contxt_number_found").focusout(function () {
    if ($(this).hasClass("has-success")) {
        $(this).removeClass("has-success");
        $(this).removeClass("has-error");
    }
})

/////


function DescriptionCheck_Found(){
    var letternumber = /^[a-zA-Z]+$/;
    console.log("hhh")
    var first_name=$("#textarea_Desc_found").val();
    if(first_name.length == '' || first_name.length == null) {
        $("#textarea_Desc_found").removeClass("has-success");
        $("#textarea_Desc_found").addClass("has-error");
        $("#description_label_found").text("This Field is required");
        
        return false;
    }
    else{
        $("#textarea_Desc_found").addClass("has-success");
        $("#description_label_found").text("");
        return true;
    }

}
$("#textarea_Desc_found").focusout(function () {
    if ($(this).hasClass("has-success")) {
        $(this).removeClass("has-success");
        $(this).removeClass("has-error");
    }
})
///////


function checkImage_Found(){
    var image_val = $("#getFile1_found").val();
    if (image_val == '' || image_val == null){
        $("#images_sec_check_label_found").text("required");
        return false;
    }
    else{
        $("#images_sec_check_label_found").text("")
        return true;
    }
}
////////
$("#add_missing_person_found").on('submit', function(){
    if (MissingPersonName_Found() && AgeCheck_Found() && StreetCheck_Found() && AdreesFormCheck_Found() && CityCheckFun_Found() && ProvinceCheck_Found() && ContactNumber_Found() && DescriptionCheck_Found() && checkImage_Found() == true){
        alert("hhhhh_Foundhhhhhhhhh")
        return true;
    }
    else{
        MissingPersonName_Found();
        AgeCheck_Found();
        StreetCheck_Found();
        AdreesFormCheck_Found();
        CityCheckFun_Found();
        ProvinceCheck_Found();
        ContactNumber_Found();
        DescriptionCheck_Found();
        checkImage_Found();
        return false;
    }
})

///////////



function readURLMySecond_Found(input) {
   if (input.files && input.files[0]) {
      var reader = new FileReader();
      var getimgfield = $(input).closest('div').
      next('div').find('img');
      $("#display_none_found").hide();
      reader.onload = function(e) {
         $("#blah2_found").show();
         $('#blah2_found').attr('src', e.target.result).width(200).height(200);
      }
      reader.readAsDataURL(input.files[0]);
   }
}

//////////


   var image = $("#getFile1_found");
   let img = new Image();

   img.onload = () => {
      console.log(img.width)
      if (img.width > 4500 || img.height > 3000){
         $("#images_sec_check_label_found").text("Invalid Image Required width :- 4500 and height :- 3000")
         image.val("");
         return false;
      }
      
   }


////
