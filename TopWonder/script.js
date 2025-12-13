// Destination data with detailed information
const destinations = [
    {
        id: 1,
        name: "Angkor Wat",
        description: "Angkor Wat is a vast temple complex in Siem Reap, Cambodia, and the largest religious monument in the world by land area. Originally constructed in the early 12th century as a Hindu temple dedicated to the god Vishnu by King Suryavarman II, it gradually transformed into a Buddhist temple by the end of the century. The temple is renowned for its grand scale, exquisite bas-reliefs, and iconic lotus-bud towers. It is built from sandstone and laterite and represents the pinnacle of Khmer architecture. A UNESCO World Heritage Site, Angkor Wat is a national symbol of Cambodia, appearing on its flag.",
        location: "Siem Reap, Cambodia",
        image: "https://res.cloudinary.com/dkshzwacm/image/upload/v1764169614/a_v3lidv.jpg",
        price: "$1,899",
        highlights: [
            "Witness sunrise over the iconic temple towers",
            "Explore the intricate bas-relief galleries depicting Hindu epics",
            "Visit the nearby temple of Ta Prohm, embraced by giant tree roots",
            "Climb to the top level of the central temple structure",
            "Discover the Bayon Temple with its enigmatic smiling stone faces"
        ],
        bestTime: "November to February (cool and dry season)",
        flightTime: "20-24 hrs from New York to Siem Reap (via major hubs)",
        culture: "Khmer, Hindu-Buddhist",
        currency: "Cambodian Riel (KHR), US Dollar (USD) widely accepted"
    },
    {
        id: 2,
        name: "Great Wall of China",
        description: "The Great Wall of China is one of the greatest wonders of the world, stretching over 13,000 miles across northern China. Built over centuries starting from the 7th century BC, its construction continued through various dynasties to protect Chinese states from invasions by nomadic groups. The most famous sections were built during the Ming Dynasty (1368–1644). The wall is not a single continuous structure but a series of walls and fortifications built along mountain ridges.",
        location: "Northern China, spanning from Shanhaiguan to Jiayuguan",
        image: "https://res.cloudinary.com/dkshzwacm/image/upload/v1765636544/image_2025-12-13_21-34-52_lzvb2n.png",
        price: "$2,499",
        highlights: [
            "Walk along the restored sections at Badaling or Mutianyu",
            "Visit the Jinshanling section for a less crowded, more authentic experience",
            "See the wall snake across steep mountain ridges at Simatai",
            "Explore watchtowers that served as military communication points",
            "Hike the Jiankou section known for its wild, unrestored beauty"
        ],
        bestTime: "April to May, September to October",
        flightTime: "11-14 hrs from New York to Beijing",
        culture: "Chinese, historical",
        currency: "Chinese Yuan (CNY)"
    },
    {
        id: 3,
        name: "Colosseum, Rome",
        description: "The Colosseum, originally known as the Flavian Amphitheatre, is an iconic symbol of Imperial Rome and the largest amphitheater ever built. Constructed between AD 70-80 under emperors Vespasian and Titus, it could hold between 50,000 and 80,000 spectators who came to watch gladiatorial contests, animal hunts, and mock sea battles. Despite damage from earthquakes and stone-robbers, it remains a magnificent testament to Roman engineering and architecture.",
        location: "Rome, Italy",
        image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        price: "$2,199",
        highlights: [
            "Walk through the underground hypogeum where gladiators and animals waited",
            "Stand on the arena floor where historic battles took place",
            "Explore the different seating levels for various social classes",
            "Visit the nearby Roman Forum and Palatine Hill",
            "See the Arch of Constantine just outside the Colosseum"
        ],
        bestTime: "April-June, September-October",
        flightTime: "8-10 hrs from New York to Rome",
        culture: "Roman, Italian",
        currency: "Euro (€)"
    },
    {
        id: 4,
        name: "Chichen Itza",
        description: "Chichen Itza was a major focal point in the Northern Maya Lowlands from the Late Classic through the Terminal Classic and into the early Postclassic period. The site exhibits a multitude of architectural styles, reminiscent of styles seen in central Mexico and of the Puuc and Chenes styles of the Northern Maya lowlands. The most famous structure is El Castillo (The Temple of Kukulcan), which during the spring and autumn equinoxes, the setting sun casts shadows that create the appearance of a serpent descending the pyramid.",
        location: "Yucatán Peninsula, Mexico",
        image: "https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        price: "$1,899",
        highlights: [
            "Climb El Castillo pyramid (viewing only, climbing not permitted)",
            "See the Great Ball Court, the largest in Mesoamerica",
            "Visit the Temple of the Warriors with its Chac Mool statue",
            "Explore the Sacred Cenote used for rituals and sacrifices",
            "Witness the Equinox phenomenon (March 20/21 and September 22/23)"
        ],
        bestTime: "November to April",
        flightTime: "4-6 hrs from New York to Cancun",
        culture: "Maya, Mexican",
        currency: "Mexican Peso (MXN)"
    },
    {
        id: 5,
        name: "Machu Picchu",
        description: "Machu Picchu is a 15th-century Inca citadel located on a mountain ridge 7,970 feet above sea level. Often mistakenly referred to as the 'Lost City of the Incas', it is the most familiar icon of Inca civilization. Built around 1450 but abandoned a century later during the Spanish Conquest, it remained unknown to the outside world until American historian Hiram Bingham brought it to international attention in 1911. The site is divided into agricultural and urban areas, featuring temples, palaces, and over 150 buildings.",
        location: "Andes Mountains, Peru",
        image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        price: "$2,799",
        highlights: [
            "Watch sunrise over the ruins from the Sun Gate (Inti Punku)",
            "Climb Huayna Picchu for breathtaking panoramic views",
            "Visit the Temple of the Sun and Royal Tomb",
            "See the Intihuatana stone, an ancient astronomical clock",
            "Walk the Inca Trail to reach the citadel"
        ],
        bestTime: "May to September (dry season)",
        flightTime: "8-10 hrs from New York to Lima, plus train/bus",
        culture: "Inca, Peruvian",
        currency: "Peruvian Sol (PEN)"
    },
    {
        id: 6,
        name: "Taj Mahal",
        description: "The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, India. It was commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favorite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself. The tomb is the centerpiece of a 42-acre complex, which includes a mosque and a guest house, and is set in formal gardens bounded on three sides by a crenellated wall. Construction took over 20 years and employed 20,000 artisans.",
        location: "Agra, Uttar Pradesh, India",
        image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        price: "$2,599",
        highlights: [
            "See the changing colors at sunrise and sunset",
            "Admire the intricate pietra dura (stone inlay) work",
            "Visit the symmetrical mosque and guest house",
            "Explore the gardens with their perfect symmetry",
            "See the reflection in the Yamuna River"
        ],
        bestTime: "October to March",
        flightTime: "14-16 hrs from New York to Delhi",
        culture: "Mughal, Indian",
        currency: "Indian Rupee (INR)"
    },
    {
        id: 7,
        name: "Christ the Redeemer",
        description: "Christ the Redeemer is an Art Deco statue of Jesus Christ in Rio de Janeiro, Brazil, created by French sculptor Paul Landowski and built by Brazilian engineer Heitor da Silva Costa, in collaboration with French engineer Albert Caquot. The face was created by Romanian sculptor Gheorghe Leonida. The statue stands 98 feet tall, with horizontally outstretched arms spanning 92 feet. It is made of reinforced concrete and soapstone, and weighs approximately 635 metric tons. It is a symbol of Christianity across the world and an icon of Rio and Brazil.",
        location: "Mount Corcovado, Rio de Janeiro, Brazil",
        image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        price: "$2,399",
        highlights: [
            "Take the cog train through Tijuca Forest to reach the statue",
            "Enjoy panoramic views of Rio, Sugarloaf Mountain, and Copacabana Beach",
            "Visit the chapel at the base of the statue",
            "See the statue illuminated at night",
            "Combine with a visit to Sugarloaf Mountain"
        ],
        bestTime: "December to March (summer)",
        flightTime: "9-11 hrs from New York to Rio de Janeiro",
        culture: "Brazilian, Christian",
        currency: "Brazilian Real (BRL)"
    },
    {
        id: 8,
        name: "Petra, Jordan",
        description: "Petra, known as the 'Rose City' for its pink sandstone cliffs, is an archaeological wonder carved directly into rock faces by the Nabataeans over 2,000 years ago. This ancient city was a crucial trading hub linking silk and spice routes between China, India, and Arabia with Egypt, Greece, and Rome. Lost to the Western world for centuries, it was rediscovered in 1812 and is now a UNESCO World Heritage Site and one of the New Seven Wonders of the World.",
        location: "Ma'an Governorate, southern Jordan",
        image: "https://res.cloudinary.com/dkshzwacm/image/upload/v1765636670/Petra-7-Wonders-of-the-World_xapzmn.jpg",
        price: "$2,899",
        highlights: [
            "Walk through the narrow Siq canyon to reveal the Treasury (Al-Khazneh)",
            "Climb 800 steps to the magnificent Monastery (Ad-Deir)",
            "Explore the Royal Tombs with their intricate facades",
            "Visit the Roman Theater carved into the mountainside",
            "See the Street of Facades with rows of Nabataean tombs"
        ],
        bestTime: "March to May, September to November",
        flightTime: "11-13 hrs from New York to Amman",
        culture: "Nabataean, Arab",
        currency: "Jordanian Dinar (JOD)"
    }
];

// DOM elements
const cardsWrapper = document.querySelector('.cards-wrapper');
const descriptionSection = document.getElementById('description-section');
const indicatorsContainer = document.querySelector('.indicators');
const body = document.body;

// State variables
let currentIndex = 0;
let autoPlayInterval;

// Initialize the app
function init() {
    createCards();
    createIndicators();
    updateCards();
    updateDescription();
    updateBackground();
    startAutoPlay();

    // Add keyboard navigation
    document.addEventListener('keydown', handleKeyPress);
}

// Create destination cards
function createCards() {
    destinations.forEach((destination, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.dataset.index = index;

        card.innerHTML = `
            <img src="${destination.image}" alt="${destination.name}">
            <div class="card-overlay">
                <h3>${destination.name}</h3>
                <div class="card-price">From ${destination.price}</div>
            </div>
        `;

        card.addEventListener('click', () => {
            goToCard(index);
        });

        cardsWrapper.appendChild(card);
    });
}

// Create indicator dots
function createIndicators() {
    destinations.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.className = 'indicator';
        if (index === currentIndex) indicator.classList.add('active');
        indicator.dataset.index = index;

        indicator.addEventListener('click', () => {
            goToCard(index);
        });

        indicatorsContainer.appendChild(indicator);
    });
}

// Update card positions and states
function updateCards() {
    const cards = document.querySelectorAll('.card');
    const indicators = document.querySelectorAll('.indicator');

    cards.forEach((card, index) => {
        // Reset all cards
        card.className = 'card';

        // Calculate position
        let position = index - currentIndex;

        // Apply appropriate class based on position
        if (position === 0) {
            card.classList.add('active');
        } else if (position === -1 || (currentIndex === 0 && index === destinations.length - 1)) {
            card.classList.add('prev');
        } else if (position === 1 || (currentIndex === destinations.length - 1 && index === 0)) {
            card.classList.add('next');
        } else {
            card.classList.add('hidden');
        }
    });

    // Update indicators
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}

// Update description section
// In the updateDescription() function, make it more compact:
function updateDescription() {
    const destination = destinations[currentIndex];
    
    // Create a shorter description
    const shortDescription = destination.description.length > 200 
        ? destination.description.substring(0, 200) + '...'
        : destination.description;
    
    // Take only 3 highlights
    const displayHighlights = destination.highlights.slice(0, 3);
    
    descriptionSection.innerHTML = `
        <h2 class="destination-title">${destination.name}</h2>
        
        <div class="destination-location">
            <i class="fas fa-map-marker-alt"></i>
            <span>${destination.location}</span>
        </div>
        
        <p class="description-text">${shortDescription}</p>
        
        <div class="highlight-section">
            <h3 class="highlight-title">
                <i class="fas fa-star"></i>
                Must-See Experiences
            </h3>
            <ul class="highlight-list">
                ${displayHighlights.map(highlight => `<li>${highlight}</li>`).join('')}
            </ul>
        </div>
        
        <div class="travel-info">
            <div class="info-item">
                <div class="info-label">Best Time</div>
                <div class="info-value">${destination.bestTime}</div>
            </div>
            <div class="info-item">
                <div class="info-label">Flight</div>
                <div class="info-value">${destination.flightTime}</div>
            </div>
            <div class="info-item">
                <div class="info-label">Culture</div>
                <div class="info-value">${destination.culture}</div>
            </div>
            <div class="info-item">
                <div class="info-label">Currency</div>
                <div class="info-value">${destination.currency}</div>
            </div>
        </div>
    `;
}

// Update background image based on current card
function updateBackground() {
    const currentDestination = destinations[currentIndex];
    body.style.backgroundImage = `url('${currentDestination.image}')`;
}

// Go to a specific card
function goToCard(index) {
    currentIndex = index;
    updateCards();
    updateDescription();
    updateBackground();
    resetAutoPlay();
}

// Show next card
function showNextCard() {
    currentIndex = (currentIndex + 1) % destinations.length;
    updateCards();
    updateDescription();
    updateBackground();
    resetAutoPlay();
}

// Show previous card
function showPrevCard() {
    currentIndex = (currentIndex - 1 + destinations.length) % destinations.length;
    updateCards();
    updateDescription();
    updateBackground();
    resetAutoPlay();
}

// Auto-play functionality
function startAutoPlay() {
    autoPlayInterval = setInterval(showNextCard, 6000);
}

function resetAutoPlay() {
    clearInterval(autoPlayInterval);
    startAutoPlay();
}

// Keyboard navigation
function handleKeyPress(e) {
    if (e.key === 'ArrowLeft') {
        showPrevCard();
    } else if (e.key === 'ArrowRight') {
        showNextCard();
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);