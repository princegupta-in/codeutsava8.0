document.getElementById('enterButton').addEventListener('click', function () {
    document.getElementById('preloader').classList.add('flip');
    document.getElementById('mainContent').classList.add('show');
    setTimeout(function () {
        document.getElementById('preloader').classList.add('hidden');
    }, 1000);
});