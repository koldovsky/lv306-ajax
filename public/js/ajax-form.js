$('form input[type=submit]').click(sendForm);

function sendForm(e) {
    if ($('form')[0].checkValidity()) {
        e.preventDefault();
        $.ajax({
            url: "email/koldovsky@gmail.com", 
            method: "POST",
            data: {
                name: $('#form-name').val(),
                email: $('#form-email').val()
            },
            dataType: "json"
        })
         .done( $('#message').html('<b>Thank you!</b>') );
    }
}

