$(function(){

    // 팝업 열기
    $("#goToPageButton").click(function(){
        $(".popup").show()
    })

    // 팝업 닫기
    $(".close, .popup").click(function(){
        $(".popup").hide();
        return false;
    })

    // Go site 링크 클릭 시 새 창으로 해당 링크 열기
    $(".popup a").click(function(event) {
        event.preventDefault(); // 기본 동작 중단
        var url = $(this).attr("href");
        window.open(url, "_blank", "width=1920,height=900"); // 클릭시 새창크기 1920*900
    });
})

