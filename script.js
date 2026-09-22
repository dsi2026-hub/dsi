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