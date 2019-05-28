// wait for the DOM to be loaded
$(document).ready(function() {
  // bind 'myForm' and provide a simple callback function
  $("#crear-post").ajaxForm({
    url: "http://localhost:8080/posts",
    type: "post",
    // En caso de éxito, se redirige a index.html
    beforeSubmit: function(arr, $form, options) {
      // The array of form data takes the following form:
      // [ { name: 'username', value: 'jresig' }, { name: 'password', value: 'secret' } ]
      console.log("no enviar");
      return false; //to cancel submit
    },
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
  // Si
});
