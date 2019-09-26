"use strict";

/*This ready function does two things. 1. it calls locations to dynamically load a dropdown.
* 2. it loads all of the teams, if the user clicked that button.
*
* @param - data - in each case, this refers to the data from the server.js
*/
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
    //if they aren't logged in, redirect them to the login page
    else 
    {
        document.location.href = "/users/login";
    }

    //if the user clicks the logout nav link, do this
    $('#logout').on('click', () =>
    {
        localStorage.setItem("loggedIn", "no");
        document.location.href = "/";
    });

    let league;

    $("thead").hide();
    $("#addTeam").hide();

    //see 1 above
    $.getJSON("/leagues/data", function (data)
    {
        league = data;
        for (let i = 0; i < league.length; i++)
        {
            let newOption = $("<option>", { text: league[i].Name, value: league[i].Code })
            $("#locationSelect").append(newOption);
        }
    });

    //see 2 above
    let allTeams;
    $("#viewAll").on("click", function ()
    {
        $("thead").show();
        $("#addTeam").show();
        $.getJSON("/teams/data", function (data)
        {
            allTeams = data;
            $("#tableBody").empty();
            createSearchByLocationTable(allTeams);
        });
    });
});
