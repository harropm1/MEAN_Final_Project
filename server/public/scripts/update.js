"use strict";

$(function ()
{
    let userInfo;
    $.getJSON(`http://localhost:3000/users/getUser/${localStorage.getItem("userId")}`, function(data)
    {
        userInfo = data;
        addUserDetailsToPage(userInfo);
    });

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

    //this is what happens when the user clicks on logout
    $('#logout').on('click', () =>
    {
        localStorage.setItem("loggedIn", "no");
    });

    $("#updateForm").on("submit", (e) =>
    {
        e.preventDefault();
        var isAdmin = $("#ISADMIN").val();
        if (isAdmin) 
        {
            isAdmin = 1;
        } 
        else 
        {
            isAdmin = 0;
        }
        $.ajax(
            {
                url: `http://localhost:3000/users/update/${localStorage.getItem("userId")}`,
                method: 'PUT',
                data: `${$("#updateForm").serialize()}`,
                //this is "success" because for some reason, "done" does not work for me
                success: function ()
                {
                    location.reload(true);
                    //this needs a message to display when the page reloads, or a delay for the refresh
                },
                //this is "error" because for some reason, "fail" does not work for me
                error: function ()
                {
                    $("#msgDiv").html("Something went wrong. Please try again");
                }
            }
        )
    })

    $("#remove").on("click", function ()
    {
        $.ajax(
            {
                url: `http://localhost:3000/users/delete/${localStorage.getItem("userId")}`,
                method: 'DELETE',
                //this is "success" because for some reason, "done" does not work for me
                success: function () 
                {
                    location.href = `/`;
                    localStorage.setItem("loggedIn", "no");
                },
                //this is "error" because for some reason, "fail" does not work for me
                error: function ()
                {
                    location.href = `http://localhost:3000/users/update/${localStorage.getItem("userId")}`;
                }
            });
    });
});

function addUserDetailsToPage(user)
{
    $("#USERNAME").val(user.USERNAME);
    $("#EMAIL").val(user.EMAIL);
    $("#PASSWORD").val(user.PASSWORD);
    $(`input[name='ISADMIN'][value='${user.ISADMIN}']`).prop("checked", true);
}