        // Lógica de tema claro/oscuro
        const btn = document.getElementById('themeToggle');
        btn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            if (currentTheme === 'dark') {
                document.documentElement.setAttribute('data-theme', 'light');
                btn.textContent = 'Modo Oscuro';
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                btn.textContent = 'Modo Claro';
            }
        });
// Lógica de pestañas para móvil
        document.body.setAttribute('data-active-day', 'lunes');

        function switchDay(day) {
            document.body.setAttribute('data-active-day', day);
            const buttons = document.querySelectorAll('.tab-btn');
            buttons.forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
        }