$(function ()
{
    //login form post
    $('#loginForm').on('submit', (e) =>
    {
        e.preventDefault();

        let data = {
            "USERNAME": $('#USERNAME').val(),
            "PASSWORD": $('#PASSWORD').val()
        };

        $.post("http://localhost:3000/users/login", data, function ()
        {
        })
            .done(function (res)
            {
                if (res.ID)
                {
                    localStorage.setItem('userId', `${res.ID}`);
                    localStorage.setItem('isAdmin', `${res.ISADMIN}`);
                    localStorage.setItem("loggedIn", "yes");
                    document.location.href = "/leagues";
                }
                else 
                {
                    $("#msgDiv").html('Invalid Credentials! Please refresh the page and try again.');
                    $('#msgDiv').addClass('alert-danger');
                    $('#username').focus();
                }
            })
            .fail(function (e)
            {
                if (e.status === 401)
                {
                    $('#msgDiv').html('Account locked!');
                }
                else if (e.status === 403)
                {
                    $('#msgDiv').html('Invalid Credentials! Please try again.');
                }
                else
                {
                    $('#msgDiv').html(`Error: ${e.status}`);
                }

                $('#msgDiv').addClass('alert-danger');
                $('#username').focus();
            });
        $('#msgDiv').show();
    });

    //register form post, username, email, password
    $("#registerForm").on("submit", (e) =>
    {
        e.preventDefault();

        var isAdmin = $("#ISADMIN").val();
        if (isAdmin)
        {
            isAdmin = 1;
        } else
        {
            isAdmin = 0;
        }

        let data = {
            "username": $("#USERNAME").val(),
            "email": $("#EMAIL").val(),
            "password": $("#PASSWORD").val(),
            "isadmin": isAdmin
        };

        $.post("http://localhost:3000/users/register", data, function ()
        {
        })
            .done(function (res)
            {
                if (res.ID)
                {
                    document.location.href = "/users/login";
                }
                else 
                {
                    $("#msgDiv").html("That username or password is already in use. Please use a different username/password.")
                    $('#msgDiv').addClass('alert-danger');
                    $('#username').focus();
                }
            })
            .fail(function ()
            {
                $("#msgDiv").html("That username or password is already in use. Please use a different username/password.")
                $('#msgDiv').addClass('alert-danger');
                $('#username').focus();
            })
    })
});