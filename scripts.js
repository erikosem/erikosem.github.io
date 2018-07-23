// function openNav() {
// 	document.getElementById("thisSidemenu").style.width ="100%";

// }

// function closeNav() {
// 	document.getElementById("thisSidemenu").style.width="0";
// }


    $(document).ready(function() {
        $('#showmenu').click(function() {
                $('.menu').slideToggle("down");
        });
    });