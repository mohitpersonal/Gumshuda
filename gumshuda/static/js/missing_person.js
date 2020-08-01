function MissingPersonName(){
    var letternumber = /^[a-zA-Z]+$/;
    console.log("hhh")
    var first_name=$("#inputFirstName").val();
    if(first_name.length == '' || first_name.length == null) {
        $("#inputFirstName").removeClass("has-success");
        $("#inputFirstName").addClass("has-error");
        $("#label_frst_name1").text("This Field is required");
        
        return false;
    }
    else{
        if (first_name.length >15 || first_name.length <3){
            $("#inputFirstName").removeClass("has-success");
            $("#inputFirstName").addClass("has-error");
            $("#label_frst_name1").text("It only contains 3 to 15 characters");
            return false;
        }
        else{
            if(first_name.match(letternumber)){
                $("#inputFirstName").addClass("has-success");
                $("#label_frst_name1").text("");
                return true;
            }
            else{
                $("#inputFirstName").removeClass("has-success");
                $("#inputFirstName").addClass("has-error");
                $("#label_frst_name1").text("It only contains 3 to 15 characters");
                return false;
            }
        }
    }
}
$("#inputFirstName").focusout(function () {
    if ($(this).hasClass("has-success")) {
        $(this).removeClass("has-success");
        $(this).removeClass("has-error");
    }
})


////

function AgeCheck(){
    var letternumber = /^[a-zA-Z]+$/;
    console.log("hhh")
    var first_name=$("#ageinputid").val();
    if(first_name.length == '' || first_name.length == null) {
        $("#ageinputid").removeClass("has-success");
        $("#ageinputid").addClass("has-error");
        $("#age_label").text("This Field is required");
        
        return false;
    }
    else{
        $("#ageinputid").addClass("has-success");
        $("#age_label").text("");
        return true;
    }

}
$("#ageinputid").focusout(function () {
    if ($(this).hasClass("has-success")) {
        $(this).removeClass("has-success");
        $(this).removeClass("has-error");
    }
})
///
function StreetCheck(){
    var letternumber = /^[a-zA-Z]+$/;
    console.log("hhh")
    var first_name=$("#street_check").val();
    if(first_name.length == '' || first_name.length == null) {
        $("#street_check").removeClass("has-success");
        $("#street_check").addClass("has-error");
        $("#streetcheck_label").text("This Field is required");
        
        return false;
    }
    else{
        $("#street_check").addClass("has-success");
        $("#streetcheck_label").text("");
        return true;
    }

}
$("#street_check").focusout(function () {
    if ($(this).hasClass("has-success")) {
        $(this).removeClass("has-success");
        $(this).removeClass("has-error");
    }
})

//
function AdreesFormCheck(){
    var letternumber = /^[a-zA-Z]+$/;
    console.log("hhh")
    var first_name=$("#Addresscheck").val();
    if(first_name.length == '' || first_name.length == null) {
        $("#Addresscheck").removeClass("has-success");
        $("#Addresscheck").addClass("has-error");
        $("#address_check_label").text("This Field is required");
        
        return false;
    }
    else{
        $("#Addresscheck").addClass("has-success");
        $("#address_check_label").text("");
        return true;
    }

}
$("#Addresscheck").focusout(function () {
    if ($(this).hasClass("has-success")) {
        $(this).removeClass("has-success");
        $(this).removeClass("has-error");
    }
})

/////////

function CityCheckFun(){
    var letternumber = /^[a-zA-Z]+$/;
    console.log("hhh")
    var first_name=$("#city_check").val();
    if(first_name.length == '' || first_name.length == null) {
        $("#city_check").removeClass("has-success");
        $("#city_check").addClass("has-error");
        $("#city_label").text("This Field is required");
        
        return false;
    }
    else{
        $("#city_check").addClass("has-success");
        $("#city_label").text("");
        return true;
    }

}
$("#city_check").focusout(function () {
    if ($(this).hasClass("has-success")) {
        $(this).removeClass("has-success");
        $(this).removeClass("has-error");
    }
})

//////


function ProvinceCheck(){
    var letternumber = /^[a-zA-Z]+$/;
    console.log("hhh")
    var first_name=$("#provinceCheck").val();
    if(first_name.length == '' || first_name.length == null) {
        $("#provinceCheck").removeClass("has-success");
        $("#provinceCheck").addClass("has-error");
        $("#province_label").text("This Field is required");
        
        return false;
    }
    else{
        $("#provinceCheck").addClass("has-success");
        $("#province_label").text("");
        return true;
    }

}
$("#provinceCheck").focusout(function () {
    if ($(this).hasClass("has-success")) {
        $(this).removeClass("has-success");
        $(this).removeClass("has-error");
    }
})



////////////////



function ContactNumber(){
    var letternumber = /^[a-zA-Z]+$/;
    console.log("hhh")
    var first_name=$("#contxt_number").val();
    if(first_name.length == '' || first_name.length == null) {
        $("#contxt_number").removeClass("has-success");
        $("#contxt_number").addClass("has-error");
        $("#contact_number_label").text("This Field is required");
        
        return false;
    }
    else{
        $("#contxt_number").addClass("has-success");
        $("#contact_number_label").text("");
        return true;
    }

}
$("#contxt_number").focusout(function () {
    if ($(this).hasClass("has-success")) {
        $(this).removeClass("has-success");
        $(this).removeClass("has-error");
    }
})

/////


function DescriptionCheck(){
    var letternumber = /^[a-zA-Z]+$/;
    console.log("hhh")
    var first_name=$("#textarea_Desc").val();
    if(first_name.length == '' || first_name.length == null) {
        $("#textarea_Desc").removeClass("has-success");
        $("#textarea_Desc").addClass("has-error");
        $("#description_label").text("This Field is required");
        
        return false;
    }
    else{
        $("#textarea_Desc").addClass("has-success");
        $("#description_label").text("");
        return true;
    }

}
$("#textarea_Desc").focusout(function () {
    if ($(this).hasClass("has-success")) {
        $(this).removeClass("has-success");
        $(this).removeClass("has-error");
    }
})
///////


function checkImage(){
    var image_val = $("#getFile1").val();
    if (image_val == '' || image_val == null){
        $("#images_sec_check_label").text("required");
        return false;
    }
    else{
        $("#images_sec_check_label").text("")
        return true;
    }
}
////////
$("#add_missing_person").on('submit', function(){
    if (MissingPersonName() && AgeCheck() && StreetCheck() && AdreesFormCheck() && CityCheckFun() && ProvinceCheck() && ContactNumber() && DescriptionCheck() && checkImage() == true){
        alert("hhhhhhhhhhhhhh")
        return true;
    }
    else{
        MissingPersonName();
        AgeCheck();
        StreetCheck();
        AdreesFormCheck();
        CityCheckFun();
        ProvinceCheck();
        ContactNumber();
        DescriptionCheck();
        checkImage();
        return false;
    }
})

///////////



function readURLMySecond(input) {
   if (input.files && input.files[0]) {
      var reader = new FileReader();
      var getimgfield = $(input).closest('div').
      next('div').find('img');
      $("#display_none").hide();
      reader.onload = function(e) {
         $("#blah2").show();
         $('#blah2').attr('src', e.target.result).width(200).height(200);
      }
      reader.readAsDataURL(input.files[0]);
   }
}

//////////


   var image = $("#getFile1");
   let img = new Image();

   img.onload = () => {
      console.log(img.width)
      if (img.width > 4500 || img.height > 3000){
         $("#images_sec_check_label").text("Invalid Image Required width :- 4500 and height :- 3000")
         image.val("");
         return false;
      }
      
   }


////

$('#sign_out_sweet').click(function(){
      swal({
   
         title : "Confirmation",
         text : "Are you sure you want to Logout ?",
         buttons : {
            cancel : true,
            confirm : "Confirm"
         }
   
   
      }).then(val =>{
         
         if (val){
            var url = '/logout/'
            window.location.href = url
           
         }
      })

   })