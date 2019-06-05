$(document).ready(function() {
    // bind 'myForm' and provide a simple callback function
    $("#create-form").ajaxForm({
      url: "http://localhost:8080/createuser",
      type: "post",
      // En caso de éxito, se redirige a index.html
      success: function(res) {
        console.log(res);
      },
      // En caso de error por validación, se muestra el mensaje de error en el contenedor para tal fin
      error: function(response, status, xhr) {
        if (response.status == 422) {
          console.log(response.responseText);
        }
      }
    });
})



