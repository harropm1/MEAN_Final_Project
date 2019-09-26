"use strict";

$(function ()
{
    //if the current user is logged in and an admin, it shows/hides different nav links
    if (localStorage.getItem('loggedIn') == 'yes' && localStorage.getItem('isAdmin') == "1")
    {
        $("#admin").show();
        $("#login").hide();
        $("#signup").hide();
        $("#logout").show();
        $("#update").show();
    }
    //if they aren't an admin, it reroutes to leagues. if they aren't signed in, leagues rereoutes to the login page
    else 
    {
        document.location.href = "/leagues";
    }

    //this is what happens on the logout
    $('#logout').on('click', () =>
    {
        localStorage.setItem("loggedIn", "no");
        document.location.href = "/";
    });

    //ajax call to create the table of non-admin users
    $.getJSON(`http://localhost:3000/admin/members`, function (data)
    {
        createUsersTable(data);
    });
});

//this table takes the data passed from SQL and creates a table of non-admin users
function createUsersTable(user)
{
    for (let i = 0; i < user.length; i++)
    {
        let username = user[i].USERNAME;
        let email = user[i].EMAIL;

        let htmlString = `
            <tr>
                <td>${username}</td>
                <td>${email}</td>
            </tr>`;
        $("#tableBody").append(htmlString);
    }
}