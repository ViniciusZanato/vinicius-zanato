document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.querySelector('.toggle');
    const hours = new Date().getHours();
    const savedMode = localStorage.getItem('dark-mode');

    if (savedMode === 'enabled') {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
        toggle.checked = true;
    }
    else if (savedMode === 'disabled') {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
        toggle.checked = false;
    }
    else {
        if (hours >= 19 || hours < 7) {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
            toggle.checked = true;
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
            localStorage.setItem('dark-mode', 'disabled');
        }
    }

    toggle.addEventListener('change', function () {
        if (toggle.checked) {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
            localStorage.setItem('dark-mode', 'disabled');
        }
    });
});