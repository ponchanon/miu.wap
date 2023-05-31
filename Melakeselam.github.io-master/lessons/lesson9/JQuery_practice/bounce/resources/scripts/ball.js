( function(){
    let ballVelocity = 0;
    function update() {
        ballVelocity += 1;
        console.log(ballVelocity);
        if (parseInt($("#ball").css('top'))+$("#ball").height() > $(window).height()) {
          ballVelocity *= -0.9;
        }
        $("#ball").css('top', function(idx, old) {
          return parseInt(old) + ballVelocity + 'px';
        });
    } 
    
    $(function(){
        $("#ball").css('left','50vw');
        setInterval(update,20);
    });

}
)();