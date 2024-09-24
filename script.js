$('.portfolio-button').mousedown(function(){
    timeout = setInterval(function(){
        window.scrollBy(0,-1);
    }, 0);

    return false;
});

document.getElementById('facebook').addEventListener('click', function() {
      this.classList.add('animate-click');
      setTimeout(() => this.classList.remove('animate-click'), 300); // Revert after animation
    });
    
    document.getElementById('twitter').addEventListener('click', function() {
      this.classList.add('animate-click');
      setTimeout(() => this.classList.remove('animate-click'), 300);
    });