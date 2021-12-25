$(document).ready(function() {
    $("#but1").click(function() {
        $("#ul1").toggle(500);

    });
});
$(document).ready(function() {
    $("#but2").click(function() {
        $("#ul2").toggle(500);
    });
});
$(document).ready(function() {
    $("#but3").click(function() {
        $("#ul3").toggle(500);

    });
});
$(document).ready(function() {
    $("#but4").click(function() {
        $("#ul4").toggle(500);
    });
});
$(document).ready(function() {
    $("#but5").click(function() {
        $("#ul5").toggle(500);

    });
});
$(document).ready(function() {
    $("#but6").click(function() {
        $("#ul6").toggle(500);
    });
});


var typeList = document.getElementsByClassName("type");
var valueList = document.getElementsByClassName("value");
var changeList1 = document.getElementsByClassName("change1");
var changeList2 = document.getElementsByClassName("change2");
var changeList3 = document.getElementsByClassName("change3");
var changeList4 = document.getElementsByClassName("change4");

function changeValute0(n) {
    typeList[n].textContent = "$ ";
    valueList[n].textContent /= 450;
    changeList1[n].style.display = "none";
    changeList2[n].style.display = "block";
    console.log(1);
}

function changeValute1(n) {
    typeList[n].textContent = "€ ";
    var temp = valueList[n].textContent;
    valueList[n].textContent = temp * 450 / 500;
    changeList2[n].style.display = "none";
    changeList3[n].style.display = "block";
    console.log(2);
}

function changeValute2(n) {
    typeList[n].textContent = "₽ ";
    var temp = valueList[n].textContent;
    valueList[n].textContent = temp * 490 / 5;
    changeList3[n].style.display = "none";
    changeList4[n].style.display = "block";
    console.log(3);
}