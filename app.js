$(document).ready(function() {
    $("#searchInput").on("input", function() {
      var searchText = $(this).val().toLowerCase();
  
      // Restablecer estilos
      $(".buscador").html(function (_, html) {
        return html.replace(/<span class="highlight">(.*?)<\/span>/g, '$1');
      });
  
      // Oculta todos los elementos y elimina la clase de resaltado
      $(".buscador").hide().removeClass("highlight");
      
      // Muestra solo los elementos que coinciden con la búsqueda y agrega la clase de resaltado
      $(".buscador:contains('" + searchText + "')").show().each(function() {
        var $element = $(this);
        $element.html(function(_, html) {
          return html.replace(new RegExp('(' + searchText + ')', 'ig'), '<span class="highlight">$1</span>');
        });
      });
    });
  });
  
  // Función para verificar si un elemento contiene un texto
  (function($) {
    $.extend($.expr[":"], {
      "contains": function(elem, i, match, array) {
        return (
          (elem.textContent || elem.innerText || "")
            .toLowerCase()
            .indexOf((match[3] || "").toLowerCase()) >= 0
        );
      }
    });
  })(jQuery);
  