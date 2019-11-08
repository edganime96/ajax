$(document).ready(function () {

   
   $('button').on('click', function(){

      
      $.ajax({
         type: "GET", 
         url: "main.json", 
         success: function (response) {

            
            $.each(response.name, function (indexInArray, valueOfElement) { 

               
               $('#data').append(`<p>${valueOfElement}</p>`);                
            });            
         }
      });
   });
});