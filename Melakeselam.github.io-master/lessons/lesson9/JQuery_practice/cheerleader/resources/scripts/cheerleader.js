$(function() {
    function cheer(e){
        $("<li>")
            .text(String.fromCharCode(e.which).toUpperCase() + "!")
            .appendTo($("#cheers"));
        setTimeout(removeCheer, 2000);   
    }
    function removeCheer(){
        $("#cheers > li").remove();
    }
    $(document).keypress(cheer);
}
);