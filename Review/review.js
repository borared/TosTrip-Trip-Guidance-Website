// Sample review data for TosTrip
const reviewsData = [
    {
        id: 1,
        name: "Sarah Williams",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        date: "June 28, 2024",
        rating: 5,
        title: "Best Trip Planning Experience Ever!",
        text: "TosTrip made planning my European vacation a breeze. The itinerary suggestions were spot-on, and the ability to customize every detail was fantastic. Saved me hours of research!",
        helpful: 32,
        isHelpful: false
    },
    {
        id: 2,
        name: "David Chen",
        avatar: "https://randomuser.me/api/portraits/men/22.jpg",
        date: "June 25, 2024",
        rating: 4.5,
        title: "Incredible Destination Recommendations",
        text: "As someone who travels frequently, TosTrip's AI-powered destination recommendations were surprisingly accurate. Found hidden gems I would have never discovered on my own!",
        helpful: 28,
        isHelpful: false
    },
    {
        id: 3,
        name: "Emma Rodriguez",
        avatar: "https://randomuser.me/api/portraits/women/33.jpg",
        date: "June 20, 2024",
        rating: 5,
        title: "Perfect Family Vacation Planner",
        text: "Planning a family trip with kids was always stressful until I found TosTrip. The family-friendly filters and activity suggestions made our Disney World vacation magical and stress-free!",
        helpful: 41,
        isHelpful: false
    },
    {
        id: 4,
        name: "James Wilson",
        avatar: "https://randomuser.me/api/portraits/men/65.jpg",
        date: "June 18, 2024",
        rating: 4,
        title: "Budget Travel Made Easy",
        text: "TosTrip's budget tracking feature saved me over $500 on my Southeast Asia trip. The price comparisons and local tips helped me experience luxury on a backpacker's budget!",
        helpful: 35,
        isHelpful: false
    },
    {
        id: 5,
        name: "Lisa Thompson",
        avatar: "https://randomuser.me/api/portraits/women/26.jpg",
        date: "June 15, 2024",
        rating: 5,
        title: "Solo Traveler's Best Friend",
        text: "As a solo female traveler, safety is my priority. TosTrip's safety ratings and female-friendly accommodation recommendations gave me peace of mind throughout my Japan trip.",
        helpful: 39,
        isHelpful: false
    },
    {
        id: 6,
        name: "Robert Kim",
        avatar: "https://randomuser.me/api/portraits/men/55.jpg",
        date: "June 10, 2024",
        rating: 4.5,
        title: "Business Travel Simplified",
        text: "TosTrip's corporate travel features are game-changing. Automated expense tracking, optimal flight routes, and productivity-focused hotel selections saved our company time and money.",
        helpful: 27,
        isHelpful: false
    },
    {
        id: 7,
        name: "Amanda Lee",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
        date: "June 5, 2024",
        rating: 5,
        title: "Adventure Trip Perfection",
        text: "From hiking trails to scuba diving spots, TosTrip curated the perfect adventure itinerary for our Costa Rica trip. The local guide recommendations were exceptional!",
        helpful: 44,
        isHelpful: false
    },
    {
        id: 8,
        name: "Thomas Baker",
        avatar: "https://randomuser.me/api/portraits/men/77.jpg",
        date: "May 30, 2024",
        rating: 4,
        title: "Group Trip Coordination Made Simple",
        text: "Organizing a 10-person bachelor party was chaos until we used TosTrip. The group planning features, vote systems, and shared itinerary kept everyone on the same page!",
        helpful: 31,
        isHelpful: false
    }
];

// Original featured review data for TosTrip
const originalFeaturedReview = {
    id: 0,
    name: "Michael Johnson",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    date: "June 15, 2024",
    rating: 5,
    title: "Revolutionized How I Travel!",
    text: "TosTrip completely transformed my travel experience. The intelligent itinerary builder created a perfect 2-week Italy trip that balanced sightseeing, relaxation, and authentic local experiences. The real-time updates and local recommendations were invaluable!",
    helpful: 56,
    isHelpful: false,
    isFeatured: true
};

// DOM Elements
const reviewsGrid = document.getElementById('reviews-grid');
const sortSelect = document.getElementById('sort-select');
const loadMoreBtn = document.getElementById('load-more');

// Featured review elements
const featuredUserAvatar = document.querySelector('.featured-card .user-avatar');
const featuredUserName = document.querySelector('.featured-card .user-name');
const featuredTripDate = document.querySelector('.featured-card .trip-date');
const featuredRatingStars = document.querySelector('.featured-card .stars');
const featuredRatingValue = document.querySelector('.featured-card .rating-value');
const featuredReviewTitle = document.querySelector('.featured-card .review-title');
const featuredReviewText = document.querySelector('.featured-card .review-text');
const featuredHelpfulCount = document.querySelector('.featured-card .helpful-count');
const featuredReviewDate = document.querySelector('.featured-card .review-date');

// Application State
let displayedReviews = 4;
let currentSort = 'recent';
let allReviews = [
    originalFeaturedReview,
    ...reviewsData.map(review => ({ ...review, isFeatured: false }))
];

// Function to generate star rating HTML
function generateStars(rating) {
    let starsHTML = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            starsHTML += '<i class="fas fa-star"></i>';
        } else if (hasHalfStar && i === fullStars + 1) {
            starsHTML += '<i class="fas fa-star-half-alt"></i>';
        } else {
            starsHTML += '<i class="far fa-star"></i>';
        }
    }
    
    return starsHTML;
}

// Function to get current featured review
function getCurrentFeaturedReview() {
    return allReviews.find(review => review.isFeatured);
}

// Function to update featured review display
function updateFeaturedReviewDisplay(review) {
    featuredUserAvatar.src = review.avatar;
    featuredUserName.textContent = review.name;
    featuredTripDate.textContent = `Trip Date: ${review.date}`;
    featuredRatingStars.innerHTML = generateStars(review.rating);
    featuredRatingValue.textContent = `${review.rating}/5`;
    featuredReviewTitle.textContent = review.title;
    featuredReviewText.textContent = review.text;
    featuredHelpfulCount.innerHTML = `<i class="fas fa-thumbs-up"></i> ${review.helpful} people found this helpful`;
    featuredReviewDate.textContent = `Posted: ${getCurrentDate()}`;
}

// Function to create a review card
function createReviewCard(review) {
    const card = document.createElement('div');
    card.className = 'review-card';
    card.dataset.id = review.id;
    
    // Add cursor pointer to indicate clickability (except for featured review)
    if (!review.isFeatured) {
        card.style.cursor = 'pointer';
    }
    
    card.innerHTML = `
        <div class="review-card-header">
            <div class="review-card-user">
                <img src="${review.avatar}" alt="${review.name}" class="review-card-avatar">
                <div>
                    <div class="review-card-name">${review.name}</div>
                    <div class="review-card-date">${review.date}</div>
                </div>
            </div>
            <div class="review-card-rating">
                ${generateStars(review.rating)}
            </div>
        </div>
        <h4 class="review-card-title">${review.title}</h4>
        <p class="review-card-text">${review.text}</p>
        <div class="review-card-footer">
            <div class="review-card-helpful">
                <i class="fas fa-thumbs-up ${review.isHelpful ? 'active' : ''}" data-id="${review.id}"></i>
                <span class="helpful-count">${review.helpful} found this helpful</span>
            </div>
            <div class="review-card-rating-value">${review.rating}/5</div>
        </div>
    `;
    
    return card;
}

// Function to swap reviews
function swapReviews(clickedReviewId) {
    const currentFeaturedReview = getCurrentFeaturedReview();
    const clickedReview = allReviews.find(review => review.id === clickedReviewId);
    
    // Don't swap if clicking on current featured review
    if (clickedReview.isFeatured) return;
    
    // Update the isFeatured flags
    currentFeaturedReview.isFeatured = false;
    clickedReview.isFeatured = true;
    
    // Update the featured review display
    updateFeaturedReviewDisplay(clickedReview);
    
    // Re-render the grid
    renderReviews();
    
    // Add visual feedback
    const featuredCard = document.querySelector('.featured-card');
    featuredCard.style.boxShadow = '0 0 0 2px #3498db';
    setTimeout(() => {
        featuredCard.style.boxShadow = '';
    }, 500);
}

// Function to handle review card click
function handleReviewCardClick(e) {
    // Don't trigger swap if clicking on thumbs-up icon
    if (e.target.classList.contains('fa-thumbs-up')) {
        return;
    }
    
    // Find the clicked card
    let card = e.target;
    while (card && !card.classList.contains('review-card')) {
        card = card.parentElement;
    }
    
    if (!card) return;
    
    const reviewId = parseInt(card.dataset.id);
    
    // Swap the reviews
    swapReviews(reviewId);
}

// Function to handle featured card click
function handleFeaturedCardClick(e) {
    // Only trigger if not clicking on helpful icon or helpful count
    if (e.target.classList.contains('fa-thumbs-up') || e.target.closest('.helpful-count')) {
        return;
    }
    
    // Get all non-featured reviews
    const nonFeaturedReviews = allReviews.filter(review => !review.isFeatured);
    
    if (nonFeaturedReviews.length > 0) {
        // Sort non-featured reviews based on current sort setting
        let sortedReviews = [...nonFeaturedReviews];
        
        switch(currentSort) {
            case 'rating':
                sortedReviews.sort((a, b) => b.rating - a.rating);
                break;
            case 'helpful':
                sortedReviews.sort((a, b) => b.helpful - a.helpful);
                break;
            case 'recent':
            default:
                sortedReviews.sort((a, b) => b.id - a.id);
                break;
        }
        
        // Swap with the first non-featured review in the sorted list
        swapReviews(sortedReviews[0].id);
    }
}

// Function to handle helpful clicks
function handleHelpfulClick(e) {
    if (e.target.classList.contains('fa-thumbs-up')) {
        const reviewId = parseInt(e.target.dataset.id);
        const review = allReviews.find(r => r.id === reviewId);
        
        if (review && !review.isHelpful) {
            review.isHelpful = true;
            review.helpful += 1;
            
            // Update the UI
            if (review.isFeatured) {
                // Update featured review display
                featuredHelpfulCount.innerHTML = `<i class="fas fa-thumbs-up"></i> ${review.helpful} people found this helpful`;
            } else {
                // Update grid review
                e.target.classList.add('active');
                const helpfulCount = e.target.nextElementSibling;
                helpfulCount.textContent = `${review.helpful} found this helpful`;
            }
        }
        
        // Visual feedback
        e.target.style.transform = 'scale(1.2)';
        setTimeout(() => {
            e.target.style.transform = 'scale(1)';
        }, 200);
        
        // Prevent the click from triggering the card swap
        e.stopPropagation();
    }
}

// Function to render reviews
function renderReviews() {
    reviewsGrid.innerHTML = '';
    
    // Get all non-featured reviews
    let reviewsToShow = allReviews.filter(review => !review.isFeatured);
    
    // Sort reviews based on current selection
    switch(currentSort) {
        case 'rating':
            reviewsToShow.sort((a, b) => b.rating - a.rating);
            break;
        case 'helpful':
            reviewsToShow.sort((a, b) => b.helpful - a.helpful);
            break;
        case 'recent':
        default:
            reviewsToShow.sort((a, b) => b.id - a.id);
            break;
    }
    
    // Display only the first 'displayedReviews' items
    reviewsToShow = reviewsToShow.slice(0, displayedReviews);
    
    // Create and append review cards
    reviewsToShow.forEach(review => {
        const card = createReviewCard(review);
        reviewsGrid.appendChild(card);
    });
    
    // Show/hide load more button
    const totalNonFeaturedReviews = allReviews.filter(review => !review.isFeatured).length;
    if (displayedReviews >= totalNonFeaturedReviews) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'inline-block';
    }
}

// Function to load more reviews
function loadMoreReviews() {
    displayedReviews += 4;
    renderReviews();
}

// Function to handle sort change
function handleSortChange() {
    currentSort = sortSelect.value;
    displayedReviews = 4; // Reset to initial count
    renderReviews();
}

// Helper function to get current date
function getCurrentDate() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return now.toLocaleDateString('en-US', options);
}

// Initialize the application
function init() {
    // Set initial featured review display
    updateFeaturedReviewDisplay(getCurrentFeaturedReview());
    
    // Render initial reviews
    renderReviews();
    
    // Event delegation for review card clicks
    reviewsGrid.addEventListener('click', handleReviewCardClick);
    
    // Event delegation for helpful clicks
    reviewsGrid.addEventListener('click', handleHelpfulClick);
    
    // Featured review card click handler
    document.querySelector('.featured-card').addEventListener('click', handleFeaturedCardClick);
    
    // Load more button
    loadMoreBtn.addEventListener('click', loadMoreReviews);
    
    // Sort select change
    sortSelect.addEventListener('change', handleSortChange);
}

// Add some animation on page load
window.addEventListener('load', () => {
    document.querySelector('.container').style.opacity = '0';
    document.querySelector('.container').style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        document.querySelector('.container').style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        document.querySelector('.container').style.opacity = '1';
        document.querySelector('.container').style.transform = 'translateY(0)';
        
        // Initialize the application
        init();
    }, 100);
});