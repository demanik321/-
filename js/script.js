var $test, $testtwo;
$test = -1;
$testtwo = -1;
$('.header').toggleClass('expand').nextUntil('tr.header').slideToggle(100);
$('.header').click(function() {
    $(this).toggleClass('expand').nextUntil('tr.header').slideToggle(100);
    $test *= (-1);
});
$('.headertwo').toggleClass('expand').nextUntil('tr.headertwo').slideToggle(100);
$('.headertwo').click(function() {
    $(this).toggleClass('expand').nextUntil('tr.headertwo').slideToggle(100);
    $testtwo *= (-1);
});
var $i, $z;
$i = -1;
$('.header').click(function() {
    $i *= (-1);
    if ($i < 0) {
        $z = 0;
    } else {
        $z = 1;
    }
    $('#select').css("-webkit-transform", "rotate(" + $z * 90 + "deg)");
});
var $itwo, $ztwo;
$itwo = -1;
$('.headertwo').click(function() {
    $itwo *= (-1);
    if ($itwo < 0) {
        $ztwo = 0;
    } else {
        $ztwo = 1;
    }
    $('#selecttwo').css("-webkit-transform", "rotate(" + $ztwo * 90 + "deg)");
});

function tableSearch() {
    var phrase = document.getElementById('search-text');
    var table = document.getElementById('price');
    var regPhrase = new RegExp(phrase.value, 'i');
    var flag = false;
    if ($test == 1) {
        for (var i = 1; i < table.rows.length; i++) {
            flag = false;
            for (var j = table.rows[i].cells.length - 1; j >= 0; j--) {
                flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
                if (flag) break;
            }
            if (flag) {
                table.rows[i].style.display = "";
            } else {
                table.rows[i].style.display = "none";
            }

        }
    }
    var phrasetwo = document.getElementById('search-text');
    var tabletwo = document.getElementById('pricetwo');
    var regPhrasetwo = new RegExp(phrasetwo.value, 'i');
    var flagtwo = false;
    if ($testtwo == 1) {
        for (var i = 1; i < tabletwo.rows.length; i++) {
            flagtwo = false;
            for (var j = tabletwo.rows[i].cells.length - 1; j >= 0; j--) {
                flagtwo = regPhrasetwo.test(tabletwo.rows[i].cells[j].innerHTML);
                if (flagtwo) break;
            }
            if (flagtwo) {
                tabletwo.rows[i].style.display = "";
            } else {
                tabletwo.rows[i].style.display = "none";
            }

        }
    }
}
$(document).ready(function() {
    $("#ikor").on("click", "a", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1000);
    });
});