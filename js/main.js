$(document).ready(function () {
    $(".fa-magnifying-glass").click(function () {
        $(".gb-toggle-search").toggle();
        $("input[type='text']").focus();
    });
});