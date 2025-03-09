document.querySelector('.abrir').addEventListener('click', (e) => {
    e.preventDefault();

    // Mostrar SweetAlert
    Swal.fire({
        title: "Estamos esperando un bebé",
        icon: "success",
        backdrop: false, // Evita que oscurezca el fondo
    });

    // Detectar si es un evento táctil (móvil) o de ratón (PC)
    let x = e.clientX || (e.touches && e.touches[0].clientX);
    let y = e.clientY || (e.touches && e.touches[0].clientY);

    for (let i = 0; i < 40; i++) {
        let emoji = document.createElement('span');
        emoji.classList.add('emoji');

        let emojisFelicidad = ['😊', '🎉', '🥳', '🎊'];
        emoji.textContent = emojisFelicidad[Math.floor(Math.random() * emojisFelicidad.length)];

        document.body.appendChild(emoji);

        // Posicionar los emojis
        let offsetX = Math.random() * -100 - 50;
        let offsetY = Math.random() * 200 - 50;
        emoji.style.left = `${x + offsetX}px`;
        emoji.style.top = `${y + offsetY}px`;

        // Animación
        emoji.animate([
            { transform: "translateY(0px) scale(1)", opacity: 1 },
            { transform: "translateY(-150px) scale(1.5)", opacity: 1 },
            { transform: "translateY(50px) scale(0)", opacity: 0 }
        ], {
            duration: 2000,
            easing: "ease-in-out"
        });

        // Eliminar después de la animación
        setTimeout(() => emoji.remove(), 2000);
    }
});

