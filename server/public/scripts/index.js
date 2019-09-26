"use strict";

$(function ()
{
    //if the user is logged in
    if (localStorage.getItem('loggedIn') == 'yes')
    {
        //and if that user is an admin, display these nav links
        if (localStorage.getItem('isAdmin') == "1")
        {
            $("#admin").show();
            $("#login").hide();
            $("#signup").hide();
            $("#logout").show();
            $("#update").show();
        }
        //if they're not an admin, display these nav links
        else
        {
            $("#login").hide();
            $("#signup").hide();
            $("#logout").show();
            $("#update").show();
        }
    }

    //if the user clicks the logout nav link, do this, since they're already on the index page
    $('#logout').on('click', () =>
    {
        localStorage.setItem("loggedIn", "no");
    });
});