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
    
    $('#Map area:first').on('click', function(){
        $('#incomes-block').slideDown(300);
        $('#costs-block').slideUp(300);
    });
    
    $('#Map area:last').on('click', function(){
        $('#costs-block').slideDown(300);
        $('#incomes-block').slideUp(300);
    });
    
    $('.costs-1').on('click', function(){
        $('#costs-2').slideUp(300);
        $('#costs-3').slideUp(300);
        $('#costs-1').slideDown(300);
    });
    
    $('.costs-2').on('click', function(){
        $('#costs-1').slideUp(300);
        $('#costs-3').slideUp(300);
        $('#costs-2').slideDown(300);
    });
    
    $('.costs-3').on('click', function(){
        $('#costs-2').slideUp(300);
        $('#costs-1').slideUp(300);
        $('#costs-3').slideDown(300);
    });

//    $( "#datepicker, .datepicker" ).datepicker( $.datepicker.regional[ "ru" ] );


    $('select').styler();

});