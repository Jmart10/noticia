let boton = document.getElementsByClassName('boton')[0];



boton.addEventListener('click', (e) => {
    e.preventDefault();

    Swal.fire({
        title: "Estamos embarazados",
        icon: "success",
        draggable: true
      });
});