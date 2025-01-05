// Hover Effect for Movie Cards with Animation
const movieCards = document.querySelectorAll('.movie-card');

// Add hover effect to each movie card with smooth scaling
movieCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.querySelector('img').style.transform = 'scale(1.1)';
        card.style.transition = 'transform 0.3s ease';
    });

    card.addEventListener('mouseleave', () => {
        card.querySelector('img').style.transform = 'scale(1)';
        card.style.transition = 'transform 0.3s ease';
    });
});

// Simple Modal functionality for movie details (click to open)
const movieCardsWithDetails = document.querySelectorAll('.movie-card');
const modal = document.createElement('div');
modal.classList.add('modal');
modal.innerHTML = `
    <div class="modal-content">
        <span class="close-btn">&times;</span>
        <h2 class="movie-title">Movie Title</h2>
        <p class="movie-description">This is where the movie description will go.</p>
        <button class="btn btn-primary">Watch Now</button>
    </div>
`;
document.body.appendChild(modal);

// Open modal when a movie card is clicked with smooth fade-in animation
movieCardsWithDetails.forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('.movie-title').innerText;
        const description = "This is a sample description for the movie. Add actual movie data here.";
        
        modal.querySelector('.movie-title').innerText = title;
        modal.querySelector('.movie-description').innerText = description;

        modal.style.display = 'block';
        setTimeout(() => {
            modal.classList.add('fade-in');
        }, 10); // Ensures the fade-in class gets applied after the modal is shown
    });
});

// Close modal when clicking the close button with smooth fade-out animation
const closeModal = modal.querySelector('.close-btn');
closeModal.addEventListener('click', () => {
    modal.classList.remove('fade-in');
    modal.classList.add('fade-out');
    setTimeout(() => {
        modal.style.display = 'none';
        modal.classList.remove('fade-out');
    }, 300); // Matches the fade-out duration
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('fade-in');
        modal.classList.add('fade-out');
        setTimeout(() => {
            modal.style.display = 'none';
            modal.classList.remove('fade-out');
        }, 300);
    }
});
