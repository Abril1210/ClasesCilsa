document.getElementById('jackee').addEventListener('change', function() {
    var sinatra = document.getElementById('sinatra');

    if (this.checked) {
        sinatra.classList.add('dark-mode');
    } else {
        sinatra.classList.remove('dark-mode');
    }
}); 