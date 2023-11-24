document.addEventListener('DOMContentLoaded', function () {
    let audioElementAnterior;
    const contenedor = document.getElementById("container");

    // Agrega un eventListener al contenedor de imágenes usando "event delegation"
    contenedor.addEventListener('click', function (event) {
    
        //Si había un audio anterior, lo para
        if(audioElementAnterior){
            audioElementAnterior.pause();
        }

      const elementoClickeable = event.target.closest('.galleryItem');
  
      if (elementoClickeable) {
        // Obtiene la ruta de la canción desde el atributo "song"
        const rutaCancion = elementoClickeable.getAttribute('song');
        
        // Crea un nuevo elemento de audio dinámicamente
        const audioElement = new Audio(rutaCancion);
        
        // Reproduce la canción
        audioElement.play();

        //Guarda la cancion para pararla si se pulsa otra
        audioElementAnterior = audioElement;
      }
    });
  });
  