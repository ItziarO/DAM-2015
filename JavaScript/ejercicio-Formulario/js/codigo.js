window.onload= function(){



    function validar(event){

            var nombre = document.getElementById("#resgistro_nombre");
            var apellido = document.getElementById("#resgistro_apellido");
            var email = document.getElementById("#registro_email");
            var contrasena = document.getElementById("#registro_password");
            var comentario = document.getElementById("#registro_comentarios");

            if(nombre == "" || apellido == "" || email == ""){

                    console.log("Complete los campos obligatorios");

            }
            else{
                var mail = /^(\w+)((\.|-|_)(\w+))*@(\w+)(\.\w{2,})+$/;

                if(email != mail){
                    console.log("escriba un email válido");
                }

            }

            if(contrasena>6){
                console.log("La contraseña debe tener como mínimo 6 caracteres");
            }

    }
              //Llamar a la function validar

}));
