function detectreadURLMySecond(input) {
   if (input.files && input.files[0]) {
      var reader = new FileReader();
      var getimgfield = $(input).closest('div').
      next('div').find('img');
      $("#detect_display_none").hide();
      reader.onload = function(e) {
         $("#detect_blah2").show();
         $('#detect_blah2').attr('src', e.target.result).width(200).height(200);
      }
      reader.readAsDataURL(input.files[0]);
   }
}

///////////

function checkImage_Detect(){
    var image_val = $("#detect_getFile1").val();
    if (image_val == '' || image_val == null){
        $("#detect_images_sec_check_label").text("required");
        return false;
    }
    else{
        $("#detect_images_sec_check_label").text("")
        return true;
    }
}

////////////

$(document).on('submit', '#detect_person_form',function(){
    if (checkImage_Detect() == true){
        return true;
    }
    else{
        checkImage_Detect();
        return false;
    }
})