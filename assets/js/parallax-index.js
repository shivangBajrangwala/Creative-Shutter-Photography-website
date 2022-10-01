var rellax = new Rellax('.rellax');
$(window).on('load resize', function() {
    var win = $(this); //this = window        
    if (win.width() <= 1350) {
        console.log("destroy");
        rellax.destroy();
    } else {
        rellax.refresh();
    }
});