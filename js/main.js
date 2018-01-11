$(function () {

    //попап авторизации на форуме
    function displayForumAuth() {
        $('.js-forum-auth').on('click', function () {
            $('.b-forum-auth').toggleClass('active');
            return false;
        });

        $('.js-forum-auth-close').on('click', function () {
            $('.b-forum-auth').removeClass('active');
        });

        $(document).on('click', function (event) {
            if ($(event.target).closest(".js-forum-auth, .b-forum-auth").length) return;
            $('.b-forum-auth').removeClass('active');
            event.stopPropagation();
        });
    };
    displayForumAuth();

    $('.burger').on('click', function () {
        $(this).toggleClass('open');
        $(this).next().slideToggle(300);
    });

    $('.btn').on('click', function () {
        $(this).toggleClass('open');
        $(this).next().slideToggle(300);
    });


    $('a.root-item').on('click', function (e) {
        e.preventDefault();
        $(this).next().slideToggle(300);
    });

    $('.toggle-item').on('click', function () {
        $(this).next().slideToggle(300);
    });

    $('#Map area:first').on('click', function () {
        $('#incomes-block').slideDown(300);
        $('#costs-block').slideUp(300);
    });

    $('#Map area:last').on('click', function () {
        $('#costs-block').slideDown(300);
        $('#incomes-block').slideUp(300);
    });

    $('.costs-1').on('click', function () {
        $('#costs-2').slideUp(300);
        $('#costs-3').slideUp(300);
        $('#costs-1').slideDown(300);
    });

    $('.costs-2').on('click', function () {
        $('#costs-1').slideUp(300);
        $('#costs-3').slideUp(300);
        $('#costs-2').slideDown(300);
    });

    $('.costs-3').on('click', function () {
        $('#costs-2').slideUp(300);
        $('#costs-1').slideUp(300);
        $('#costs-3').slideDown(300);
    });
    
    $('.schedule-button').on('click', function () {
        $('.schedule-button').removeClass('active');
        $(this).addClass("active");
        $('.show-block:visible').slideUp(300);
        number = this.id;
        $("#point_" + number).slideDown(300);
    });
    
    $('.alfavit li a').on('click', function () {
        $('.alfavit li a').removeClass('active');
        $(this).addClass("active");
    });

    $('select').styler();
    
        $(".label-accordion").on("click", function () {
        $(this).closest('ul').find('ul:first').slideToggle();
    });

    $("#select_list_of_files").change(function () {
        if ($(this).val() == 0) {
            $('li').removeClass("year-hide");
            $('.accordion-menu').find('ul').show();
        } else {
            $('.all_years').addClass("year-hide");
            $('.year-' + $(this).val()).removeClass("year-hide");
            $('.accordion-menu').each(function () {
                if (($(this).find('ul').find('li').length - $(this).find('ul').find('li.year-hide').length) == 0) {
                    $(this).find('ul').hide();
                } else {
                    $(this).find('ul').show();
                }
            });
        }
    });
    
    $("#datepicker, .datepicker").datepicker($.datepicker.regional["ru"]);
    
    $("#main-factors").tableHeadFixer({"head" : true, "left" : 1}); 
    
    $("#fixTable, #fixTable2").tableHeadFixer({
        "head": true,
        "left": 1
    });

    $(".square-minus").on("click", function () {
        $id = $(this).attr('id');
        if ($("#hide-" + $id).css('display') != 'none') {
            $(this).find('.minus:first').removeClass('minus').addClass('plus');
            $("li#hide-" + $id).each(function () {
                $(this).slideToggle();
            });
            /*if ($("#hide-sub-" + $id).css('display') != 'none')
          		{
          			$("#hide-sub-" + $id).prev('li').find('.minus:first').removeClass('minus').addClass('plus');
          			$("li#hide-sub-" + $id).each(function() {
            				$( this ).slideToggle(); 
          			});
          		}*/
            $id = $("li#hide-" + $id).find(".square-minus").attr("id");
            while ($id) {
                if ($("#hide-" + $id).css('display') != 'none') {
                    $("#hide-" + $id).prev('li').find('.minus:first').removeClass('minus').addClass('plus');
                    $("li#hide-" + $id).each(function () {
                        $(this).slideToggle();
                    });
                }
                $id = $("li#hide-" + $id).find(".square-minus").attr("id");
            }

        } else {
            $(this).find('.plus:first').removeClass('plus').addClass('minus');
            $("li#hide-" + $id).each(function () {
                $(this).slideToggle();
            });
            if ($("#hide-sub-" + $id).css('display') != 'none') {
                $("#hide-sub-" + $id).prev('li').find('.minus:first').removeClass('minus').addClass('plus');
                $("li#hide-sub-" + $id).each(function () {
                    $(this).slideToggle();
                });
            }
        }
    });

    $('.spoiler').click(function () {
        var $parent = $(this).parent("td").parent(".first");
        var $sp = $(this);
        $(this).toggleClass("fa-angle-right").toggleClass("fa-angle-down");

        if ($parent.length < 1) {
            $parent = $(this).parent("td").parent(".second");
            $parent.nextUntil(".second, .first").slideToggle(200);
            return;
        }

        $parent.nextUntil(".first", ".fourth").hide(100);
        $parent.nextUntil(".first", ".third").hide(100);
        $parent.nextUntil(".first", ".second").slideToggle(200);
        $parent.nextUntil(".first", ".second").each(function () {
            $(this).children("td:first").children("i").removeClass("fa-angle-down").addClass("fa-angle-right");
        });
    });

    function displayContentAccordion(accordion) { //для ситуации "аккордеоны внутри аккордеона"
        var hideBlocks = accordion.find('[data-accordion-content]');
        var curHideEl;
        $.each(hideBlocks, function () {
            if(accordion.is($(this).parent()[0])) {
                curHideEl = $(this);
            }
        });
        accordion.hasClass('open') ? curHideEl.slideDown(250): curHideEl.slideUp(250);
    }

    function displayAccordion() {
        $('body').on('click', '[data-accordion-link]', function (e) {
            e.preventDefault();
            var  currentAccordion = $(this).closest('[data-accordion]');
            currentAccordion.toggleClass('open');
            displayContentAccordion(currentAccordion);
        });
    }

    displayAccordion();
});