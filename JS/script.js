$(function(){

    $("#goToPageButton").click(function(){
        $(".popup").show()
    })
    $(".close, .popup").click(function(){
        $(".popup").hide();
        return false;
    })
})
