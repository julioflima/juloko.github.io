            var emailTo = "julio_flima@hotmail.com";
var subjectTo = "CV Git";
var tokenTo = "a56cb4a3-c166-4d96-b5ec-40345a5b311b"
var field = "You have to fill the field ";
var fieldTwo = 'You have to fill the field email correctly, including and "@" and a"domain.example"';;


function onSubmit() {
    if ($("#name").val() === "") {
        warningAlert(field + "name")
        setTimeout(function () {
            $(".alert").alert('close');
        }, 2000);
        return false;

    }
    if ($("#email").val() === "") {
        warningAlert(field + "email")
        setTimeout(function () {
            $(".alert").alert('close');
        }, 2000);
        return false;

    }
    if ($("#message").val() === "") {
        warningAlert(field + "message")
        setTimeout(function () {
            $(".alert").alert('close');
        }, 2000);
        return false;
    }

    if (validationEmail($("#email").val())) {
        console.log("email OK");
    } else {
        warningAlert(fieldTwo)
        setTimeout(function () {
            $(".alert").alert('close');
        }, 2000);
        return false;
    }
}

function validationEmail(str) {
    if (str.search("@") > 0) {
        var res = str.split("@");
        var resTwo = res[1].split(".");
        if (res[1] != "" && resTwo[0] != "" && resTwo[1] != "") {
            console.log("email OK");
            return true;
        } else {
            return false;
        }
    }
}

function warningAlert(str) {
    $("#alerting").html('\
    <div class="alert alert-warning alert-dismissible fade show" role="alert">\
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">\
        <span aria-hidden="true">&times;</span>\
    </button>\
    <strong>Warning!</strong> ' + str + '.\
</div>');
}