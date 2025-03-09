let boton = document.getElementsByClassName('abrir')[0];



boton.addEventListener('click', (e) => {
    e.preventDefault();

    Swal.fire({
        title: "Estamos embarazados",
        icon: "success",
        draggable: true
    });
      for (let i = 0; i < 30; i++) { // Generar 10 emojis
        let emoji = document.createElement('span');
        emoji.classList.add('emoji');

        let emojisFelicidad = ['😊', '🎉', '🥳','🎊'];
        emoji.textContent = emojisFelicidad[Math.floor(Math.random() * emojisFelicidad.length)];

        document.body.appendChild(emoji);

        // Posicionar el emoji cerca del botón
        let x = e.clientX + (Math.random() * 400 - 50);
        let y = e.clientY + (Math.random() * 400 - 50);
        emoji.style.left = `${x}px`;
        emoji.style.top = `${y}px`;

        // Eliminar el emoji después de la animación
        setTimeout(() => {
            emoji.remove();
            
        }, 2000);

        
    }
});
