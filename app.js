$(document).ready(function(){
    $("#carga-datos").validate(
        {
            rules:{
                nombre:{
                   required:true,
                   minlength:3
                },
               correo:{
                   required:true,
                   email:true
                },
               telefono:{
                   required:true,
                   number:true
               },
               mensaje:{
                    required:true
               }
           },
           messages:{
               nombre:{
                   required: "Por favor, Complete este campo",
                   minlength: "Ingrese mas de 3 letras"
               },
               correo:{
                   required: "Por favor, Complete este campo",
                   email: "El correo no tiene el formato requerido. Por favor, Ingreselo nuevamente"
               },
               telefono:{
                   required: "Por favor, Complete este campo",
                   number: "Ingrese solo numeros"
               },
               mensaje:{
                required: "Por favor, Complete este campo"
               }

           }
        }
    )
});
    



       

function generarPDF(event){
    event.preventDefault();
    var doc=new jsPDF()
    var nombre= document.getElementById("nombre").value;
    var correo= document.getElementById("correo").value;
    var telefono= document.getElementById("telefono").value;
    var m = document.getElementById("mensaje").value;

    doc.text(20,20, nombre);
    doc.text(20,40,correo);
    doc.text(20,60,telefono);
    doc.text(20,80,m);
    doc.save("Constancia de turno.pdf");
}