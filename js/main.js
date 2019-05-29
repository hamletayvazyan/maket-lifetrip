$(document).ready(function () {
    var main = $('main'),
        img = $('#image1'),img2 = $('#image2'),img3 = $('#image3'),img4 = $('#image4'),
        xPrev,yPrev,
        offset = img.offset(),
        sec1 = $('#sec1'),sec2 = $('#sec2'),sec3 = $('#sec3'),sec4 = $('#sec4');
    main.bind('mousewheel', function(e){
        e.stopPropagation();
        e.preventDefault();
        if(e.originalEvent.wheelDelta /120 > 0) {
            if(e.target.id == 'image2'){
                toPrevSection();
                img.css({'transform':'scale(1.08)'});
            }
        }
        else{
            if(e.target.id == 'image1'){
                img.css({'transform':'scale(5)'});
                setTimeout(toNextSection,500);
            }
        }
    });
    function toNextSection(){
        $('#sec1').removeClass('active');
        $('#sec2').addClass('active');
    }
    function toPrevSection(){
        $('#sec2').removeClass('active');
        $('#sec1').addClass('active');
    }
    function rmclass(){
        $('#sec1 > img').removeClass('lance');
    }
    function rmclass(){
        $('#sec1 > img').removeClass('lance');
    }
    main.mousemove(function (e) {
        if(xPrev<e.pageX) {
            img.css({'right':'30px'});
            // img2.css({'right':'30px'});
        }
        else {
            img.css({'right':'5px'});
            // img2.css({'right':'5px'});
        }
        if(yPrev>e.pageY) {
            img.css({'top':'25px'});
            // img2.css({'top':'25px'});
        }
        else {
            img.css({'top':'5px'});
            // img2.css({'top':'5px'});
        }
        // xPrev<e.pageX ? setTimeout(img.css({'right':'30px'}),500) : setTimeout(img.css({'right':'3px'}),500);
        // yPrev<e.pageY ? setTimeout(img.css({'top':'5px'}),500) : setTimeout(img.css({'top':'25px'}),500);
        xPrev=e.pageX;
        yPrev=e.pageY;
    });


});
