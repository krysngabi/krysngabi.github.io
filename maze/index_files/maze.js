(function () {
    "use strict"
    let timerid = null;
    let lostGame = false;
    let illegal = false;;
    $(function () {
        $(".boundary").mouseover(youLost);
        $("#maze").mouseleave(illegalMove);
        $("#start").mouseover(start);
        $("#end").mouseover(finish);
    });

    let youLost = function (event) {
        $(".boundary").addClass("youlose");
        if (!lostGame) {
            if (!timerid) {
                setTimeout(function () {
                    alert("You Lost The Game!! Press enter to Start Over.");
                }, 50)
            }
        }
        clearTimeout(timerid);
        timerid = null;
        lostGame = true;
    }

    let start = function () {
        $(".boundary").removeClass("youlose");
        lostGame = false;
        illegal = false;
    }
    let finish = function () {
        if (!lostGame && !illegal) {
            setTimeout(function () {
                alert("You won the Game!!!");
            }, 50)
        }

    }
    let illegalMove = function () {
        illegal = true;
    }
})();

