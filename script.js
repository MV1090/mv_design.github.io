// This is where you can add any interactivity, if needed
document.addEventListener('DOMContentLoaded', function() {
    console.log("Website Loaded");

    // All project items
    const items = document.querySelectorAll('.item-list'); 
    let currentIndex = 0;

    // Show the first item initially
    if (items.length > 0) {
        items[currentIndex].classList.add('active');
    }
    
    // "Next" button functionality
    const nextButton = document.getElementById('next');
    if (nextButton) {
        nextButton.addEventListener('click', function() {
            items[currentIndex].classList.remove('active'); // Hide current item
            currentIndex = (currentIndex + 1) % items.length; // Loop to first item after last
            items[currentIndex].classList.add('active'); // Show next item
        });
    }

    // "Previous" button functionality
    const prevButton = document.getElementById('prev');
    if (prevButton) {
        prevButton.addEventListener('click', function() {
            items[currentIndex].classList.remove('active'); // Hide current item
            currentIndex = (currentIndex - 1 + items.length) % items.length; // Loop to last item after first
            items[currentIndex].classList.add('active'); // Show previous item
        });
    }

    // Select all project containers (you can use class or id to target)
    const projectContainers = document.querySelectorAll('.project-images');
    
    projectContainers.forEach(project => {
        // Get the main image for this specific project container
        const mainImage = project.querySelector('.main-image');
        
        // Get all thumbnails within this container
        const thumbnails = project.querySelectorAll('.thumbnail');
        
        var temp;
        // Add click event listeners to each thumbnail
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', () => {
                // Swap the source of the main image to the clicked thumbnail's source
                temp = mainImage.src;
                mainImage.src = thumbnail.src;
                thumbnail.src = temp;
            });
        });
    });

});


window.onload = function() {
    const header = document.querySelector('.header');
    header.classList.add('visible');
    const section = document.querySelector('.section');
    section.classList.add('visible');
  };
