// --- CONFIGURATION ---
const BIN_ID = '6959776aae596e708fc2d912'; 
const BIN_URL = `https://api.jsonbin.io/v3/b/${BIN_ID}/latest`;

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('reviews-container');

    fetch(BIN_URL)
        .then(res => res.json())
        .then(data => {
            // JSONBin stores the array inside "record"
            const reviews = data.record; 
            
            container.innerHTML = ''; // Clear loading text

            if (!reviews || reviews.length === 0) {
                container.innerHTML = '<p>No reviews yet.</p>';
                return;
            }

            reviews.forEach(review => {
                const card = document.createElement('div');
                card.classList.add('review-card');

                let stars = '⭐'.repeat(review.rating);
                // Use default avatar if missing
                const avatar = review.avatar_url || 'https://cdn.discordapp.com/embed/avatars/0.png';

                card.innerHTML = `
                    <div class="review-header">
                        <img src="${avatar}" class="review-avatar">
                        <div class="review-info">
                            <h4>${review.username}</h4>
                            <span class="review-date">${review.date}</span>
                        </div>
                    </div>
                    <div class="review-stars" style="color:#FFD700; margin-bottom:10px;">${stars}</div>
                    <p class="review-content" style="color:#ccc; font-style:italic; margin-bottom:20px;">"${review.content}"</p>
                    <div class="verified-badge" style="color:var(--primary-color); font-size:0.8rem;">
                        <i class="fa-solid fa-check-circle"></i> Verified Customer
                    </div>
                `;
                container.appendChild(card);
            });
        })
        .catch(err => {
            console.error(err);
            container.innerHTML = '<p style="color:red;">Error loading reviews.</p>';
        });
});