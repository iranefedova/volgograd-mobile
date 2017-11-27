$(function(){

    $('.burger').on('click',function(){
        $(this).toggleClass('open');
        $(this).next().slideToggle(300);
    });

    $('.btn').on('click',function(){
        $(this).toggleClass('open');
        $(this).next().slideToggle(300);
    });


    $('a.root-item').on('click',function(e){
        e.preventDefault();
        $(this).next().slideToggle(300);
    });

    $('.toggle-item').on('click',function(){
        $(this).next().slideToggle(300);
    });

//    $( "#datepicker, .datepicker" ).datepicker( $.datepicker.regional[ "ru" ] );


    $('select').styler();

});