document.addEventListener('DOMContentLoaded', function() {
    // Scroll animation
    window.addEventListener('scroll', function() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(function(element) {
            if (element.getBoundingClientRect().top < window.innerHeight) {
                element.classList.add('animated');
            }
        });
    });

    // Room data for hotels
    const roomsData = [
        { type: 'Deluxe Suite', description: 'Luxurious suite with stunning views and premium amenities.', cost: '$250 per night', amenities: 'Free Wi-Fi, Breakfast included, Pool access, Fitness center' },
        { type: 'Standard Room', description: 'Comfortable and affordable room.', cost: '$150 per night', amenities: 'Free Wi-Fi, Breakfast included' },
        { type: 'Family Suite', description: 'Spacious suite perfect for families.', cost: '$300 per night', amenities: 'Free Wi-Fi, Breakfast included, Pool access, Fitness center, Kitchenette' },
        { type: 'Executive Room', description: 'Elegant room with workspace.', cost: '$200 per night', amenities: 'Free Wi-Fi, Breakfast included, Workspace' },
        { type: 'Presidential Suite', description: 'Top-tier suite with premium features.', cost: '$500 per night', amenities: 'Free Wi-Fi, Breakfast included, Pool access, Fitness center, Private balcony' },
        { type: 'Junior Suite', description: 'Junior suite with extra space.', cost: '$220 per night', amenities: 'Free Wi-Fi, Breakfast included, Pool access' },
        { type: 'Single Room', description: 'Perfect for solo travelers.', cost: '$100 per night', amenities: 'Free Wi-Fi, Breakfast included' },
        { type: 'Double Room', description: 'Ideal for two guests.', cost: '$180 per night', amenities: 'Free Wi-Fi, Breakfast included' },
        { type: 'Studio', description: 'Open-plan room with kitchenette.', cost: '$200 per night', amenities: 'Free Wi-Fi, Breakfast included, Kitchenette' },
        { type: 'Penthouse Suite', description: 'Exclusive suite with luxurious features.', cost: '$600 per night', amenities: 'Free Wi-Fi, Breakfast included, Pool access, Fitness center, Private balcony, Jacuzzi' }
    ];

    // Hotel data for each state
    const hotelsData = {
        'Alabama': [
            { name: 'Montgomery Haven', city: 'Montgomery', rooms: roomsData, image: 'https://placehold.co/400' },
            { name: 'Birmingham Bliss', city: 'Birmingham', rooms: roomsData, image: 'https://placehold.co/400' }
        ],
        'Alaska': [
            { name: 'Juneau Junction', city: 'Juneau', rooms: roomsData, image: 'https://placehold.co/400' },
            { name: 'Anchorage Oasis', city: 'Anchorage', rooms: roomsData, image: 'https://placehold.co/400' }
        ],
        'Arizona': [
            { name: 'Phoenix Pavilion', city: 'Phoenix', rooms: roomsData, image: 'https://placehold.co/400' },
            { name: 'Tucson Tranquility', city: 'Tucson', rooms: roomsData, image: 'https://placehold.co/400' }
        ],
        'Arkansas': [
            { name: 'Little Rock Lodge', city: 'Little Rock', rooms: roomsData, image: 'https://placehold.co/400' },
            { name: 'Fayetteville Fort', city: 'Fayetteville', rooms: roomsData, image: 'https://placehold.co/400' }
        ],
        'California': [
            { name: 'Sacramento Central', city: 'Sacramento', rooms: roomsData, image: 'https://placehold.co/400' },
            { name: 'LA Luxury Inn', city: 'Los Angeles', rooms: roomsData, image: 'https://placehold.co/400' }
        ],
        'Colorado': [
            { name: 'Denver Delight', city: 'Denver', rooms: roomsData, image: 'https://placehold.co/400' },
            { name: 'Boulder Bliss', city: 'Boulder', rooms: roomsData, image: 'https://placehold.co/400' }
        ],
        'Connecticut': [
            { name: 'Hartford Haven', city: 'Hartford', rooms: roomsData, image: 'https://placehold.co/400' },
            { name: 'New Haven Nook', city: 'New Haven', rooms: roomsData, image: 'https://placehold.co/400' }
        ],
        'Delaware': [
            { name: 'Dover Dwellings', city: 'Dover', rooms: roomsData, image: 'https://placehold.co/400' },
            { name: 'Wilmington Wonder', city: 'Wilmington', rooms: roomsData, image: 'https://placehold.co/400' }
        ],
        'Florida': [
            { name: 'Tallahassee Treat', city: 'Tallahassee', rooms: roomsData, image: 'https://placehold.co/400' },
            { name: 'Miami Marvel', city: 'Miami', rooms: roomsData, image: 'https://placehold.co/400' }
        ],
        'Georgia': [
            { name: 'Atlanta Ambiance', city: 'Atlanta', rooms: roomsData, image: 'https://placehold.co/400' },
            { name: 'Savannah Serenity', city: 'Savannah', rooms: roomsData, image: 'https://placehold.co/400' }
        ],
        'Hawaii': [
            { name: 'Honolulu Harmony', city: 'Honolulu', rooms: roomsData, image: 'https://placehold.co/400' },
            { name: 'Hilo Haven', city: 'Hilo', rooms: roomsData, image: 'https://placehold.co/400' }
        ],
        'Idaho': [
            { name: 'Boise Bliss', city: 'Boise', rooms: roomsData, image: 'https://placehold.co/400' },
            { name: 'Idaho Falls Inn', city: 'Idaho Falls', rooms: roomsData, image: 'https://placehold.co/400' }
        ],
        'Illinois': [
            { name: 'Springfield Suites', city: 'Springfield', rooms: roomsData, image: 'https://placehold.co/400' },
            { name: 'Chicago Central', city: 'Chicago', rooms: roomsData, image: 'https://placehold.co/400' }
        ],
        'Indiana': [
            { name: 'Indianapolis Inn', city: 'Indianapolis', rooms: roomsData, image: 'https://placehold.co/400' },
            { name: 'Fort Wayne Fort', city: 'Fort Wayne', rooms: roomsData, image: 'https://placehold.co/400' }
        ],
        'Iowa': [
            { name: 'Des Moines Delight', city: 'Des Moines', rooms: roomsData, image: 'https://placehold.co/400' },
            { name: 'Cedar Rapids Rest', city: 'Cedar Rapids', rooms: roomsData, image: 'https://placehold.co/400' }
        ],
        'Kansas': [
            { name: 'Topeka Tranquil', city: 'Topeka', rooms: roomsData, image: 'https://placehold.co/400' },
            { name: 'Wichita Wonder', city: 'Wichita', rooms: roomsData, image: 'https://placehold.co/400' }
        ],
        'Kentucky': [
            { name: 'Frankfort Fort', city: 'Frankfort', rooms: roomsData, image: 'https://placehold.co/400' },
            { name: 'Louisville Lodge', city: 'Louisville', rooms: roomsData, image: 'https://placehold.co/400' }
        ],
        'Louisiana': [
            { name: 'Baton Rouge Retreat', city: 'Baton Rouge', rooms: roomsData, image: 'https://placehold.co/400' },
            { name: 'New Orleans Oasis', city: 'New Orleans', rooms: roomsData, image: 'https://placehold.co/400' }
        ],
        'Maine': [
            { name: 'Augusta Ambiance', city: 'Augusta', rooms: roomsData, image: 'https://placehold.co/400' },
            { name: 'Portland Place', city: 'Portland', rooms: roomsData, image: 'https://placehold.co/400' }
        ],
        'Maryland': [
            { name: 'Annapolis Abode', city: 'Annapolis', rooms: roomsData, image: 'https://placehold.co/400' },
            { name: 'Baltimore Bliss', city: 'Baltimore', rooms: roomsData, image: 'https://placehold.co/400' }
        ],
        'Massachusetts': [
            { name: 'Boston Bliss', city: 'Boston', rooms: roomsData, image: 'https://placehold.co/400' },
            { name: 'Worcester Wonder', city: 'Worcester', rooms: roomsData, image: 'https://placehold.co/400' }
        ],
        'Michigan': [
            { name: 'Lansing Lodge', city: 'Lansing', rooms: roomsData, image: 'https://placehold.co/400' },
            { name: 'Detroit Delight', city: 'Detroit', rooms: roomsData, image: 'https://placehold.co/400' }
        ],
        'Minnesota': [
            { name: 'Saint Paul Suites', city: 'Saint Paul', rooms: roomsData, image: 'https://placehold.co/400' },
            { name: 'Minneapolis Marvel', city: 'Minneapolis', rooms: roomsData, image: 'https://placehold.co/400' }
        ],
        'Mississippi': [
            { name: 'Jackson Jewel', city: 'Jackson', rooms: roomsData, image: 'https://placehold.co/400' },
            { name: 'Gulfport Grand', city: 'Gulfport', rooms: roomsData, image: 'https://placehold.co/400' }
        ],
        'Missouri': [
            { name: 'Jefferson City Joy', city: 'Jefferson City', rooms: roomsData, image: 'https://placehold.co/400' },
            { name: 'Kansas City Comfort', city: 'Kansas City', rooms: roomsData, image: 'https://placehold.co/400' }
        ],
        'Montana': [
            { name: 'Helena Haven', city: 'Helena', rooms: roomsData, image: 'https://placehold.co/400' },
            { name: 'Billings Bliss', city: 'Billings', rooms: roomsData, image: 'https://placehold.co/400' }
        ],
        'Nebraska': [
            { name: 'Lincoln Luxury', city: 'Lincoln', rooms: roomsData, image: 'https://placehold.co/400' },
            { name: 'Omaha Oasis', city: 'Omaha', rooms: roomsData, image: 'https://placehold.co/400' }
        ],
        'Nevada': [
            { name: 'Carson City Comfort', city: 'Carson City', rooms: roomsData, image: 'https://placehold.co/400' },
            { name: 'Las Vegas Luxury', city: 'Las Vegas', rooms: roomsData, image: 'https://placehold.co/400' }
        ],
        'New Hampshire': [
            { name: 'Concord Comfort', city: 'Concord', rooms: roomsData, image: 'https://placehold.co/400' },
            { name: 'Manchester Marvel', city: 'Manchester', rooms: roomsData, image: 'https://placehold.co/400' }
        ],
        'New Jersey': [
            { name: 'Trenton Treat', city: 'Trenton', rooms: roomsData, image: 'https://placehold.co/400' },
            { name: 'Newark Nook', city: 'Newark', rooms: roomsData, image: 'https://placehold.co/400' }
        ],
        'New Mexico': [
            { name: 'Santa Fe Serenity', city: 'Santa Fe', rooms: roomsData, image: 'https://placehold.co/400' },
            { name: 'Albuquerque Abode', city: 'Albuquerque', rooms: roomsData, image: 'https://placehold.co/400' }
        ],
        'New York': [
            { name: 'Albany Premier', city: 'Albany', rooms: roomsData, image: 'https://placehold.co/400' },
            { name: 'NYC Grand Hotel', city: 'New York City', rooms: roomsData, image: 'https://placehold.co/400' }
        ],
        'North Carolina': [
            { name: 'Raleigh Retreat', city: 'Raleigh', rooms: roomsData, image: 'https://placehold.co/400' },
            { name: 'Charlotte Comfort', city: 'Charlotte', rooms: roomsData, image: 'https://placehold.co/400' }
        ],
        'North Dakota': [
            { name: 'Bismarck Bliss', city: 'Bismarck', rooms: roomsData, image: 'https://placehold.co/400' },
            { name: 'Fargo Fort', city: 'Fargo', rooms: roomsData, image: 'https://placehold.co/400' }
        ],
        'Ohio': [
            { name: 'Columbus Comfort', city: 'Columbus', rooms: roomsData, image: 'https://placehold.co/400' },
            { name: 'Cleveland Comfort', city: 'Cleveland', rooms: roomsData, image: 'https://placehold.co/400' }
        ],
        'Oklahoma': [
            { name: 'Oklahoma City Oasis', city: 'Oklahoma City', rooms: roomsData, image: 'https://placehold.co/400' },
            { name: 'Tulsa Tranquil', city: 'Tulsa', rooms: roomsData, image: 'https://placehold.co/400' }
        ],
        'Oregon': [
            { name: 'Salem Serenity', city: 'Salem', rooms: roomsData, image: 'https://placehold.co/400' },
            { name: 'Portland Place', city: 'Portland', rooms: roomsData, image: 'https://placehold.co/400' }
        ],
        'Pennsylvania': [
            { name: 'Harrisburg Haven', city: 'Harrisburg', rooms: roomsData, image: 'https://placehold.co/400' },
            { name: 'Philadelphia Fort', city: 'Philadelphia', rooms: roomsData, image: 'https://placehold.co/400' }
        ],
        'Rhode Island': [
            { name: 'Providence Premier', city: 'Providence', rooms: roomsData, image: 'https://placehold.co/400' },
            { name: 'Warwick Wonder', city: 'Warwick', rooms: roomsData, image: 'https://placehold.co/400' }
        ],
        'South Carolina': [
            { name: 'Columbia Comfort', city: 'Columbia', rooms: roomsData, image: 'https://placehold.co/400' },
            { name: 'Charleston Charm', city: 'Charleston', rooms: roomsData, image: 'https://placehold.co/400' }
        ],
        'South Dakota': [
            { name: 'Pierre Place', city: 'Pierre', rooms: roomsData, image: 'https://placehold.co/400' },
            { name: 'Sioux Falls Serenity', city: 'Sioux Falls', rooms: roomsData, image: 'https://placehold.co/400' }
        ],
        'Tennessee': [
            { name: 'Nashville Nest', city: 'Nashville', rooms: roomsData, image: 'https://placehold.co/400' },
            { name: 'Memphis Marvel', city: 'Memphis', rooms: roomsData, image: 'https://placehold.co/400' }
        ],
        'Texas': [
            { name: 'Austin Retreat', city: 'Austin', rooms: roomsData, image: 'https://placehold.co/400' },
            { name: 'Houston Heights', city: 'Houston', rooms: roomsData, image: 'https://placehold.co/400' }
        ],
        'Utah': [
            { name: 'Salt Lake Serenity', city: 'Salt Lake City', rooms: roomsData, image: 'https://placehold.co/400' },
            { name: 'Provo Place', city: 'Provo', rooms: roomsData, image: 'https://placehold.co/400' }
        ],
        'Vermont': [
            { name: 'Montpelier Marvel', city: 'Montpelier', rooms: roomsData, image: 'https://placehold.co/400' },
            { name: 'Burlington Bliss', city: 'Burlington', rooms: roomsData, image: 'https://placehold.co/400' }
        ],
        'Virginia': [
            { name: 'Richmond Retreat', city: 'Richmond', rooms: roomsData, image: 'https://placehold.co/400' },
            { name: 'Virginia Beach Villas', city: 'Virginia Beach', rooms: roomsData, image: 'https://placehold.co/400' }
        ],
        'Washington': [
            { name: 'Olympia Oasis', city: 'Olympia', rooms: roomsData, image: 'https://placehold.co/400' },
            { name: 'Seattle Suites', city: 'Seattle', rooms: roomsData, image: 'https://placehold.co/400' }
        ],
        'West Virginia': [
            { name: 'Charleston Charm', city: 'Charleston', rooms: roomsData, image: 'https://placehold.co/400' },
            { name: 'Huntington Haven', city: 'Huntington', rooms: roomsData, image: 'https://placehold.co/400' }
        ],
        'Wisconsin': [
            { name: 'Madison Marvel', city: 'Madison', rooms: roomsData, image: 'https://placehold.co/400' },
            { name: 'Milwaukee Miracle', city: 'Milwaukee', rooms: roomsData, image: 'https://placehold.co/400' }
        ],
        'Wyoming': [
            { name: 'Cheyenne Comfort', city: 'Cheyenne', rooms: roomsData, image: 'https://placehold.co/400' },
            { name: 'Casper Charm', city: 'Casper', rooms: roomsData, image: 'https://placehold.co/400' }
        ]
    };

    // Function to display hotel chains based on selected state
    const stateSelect = document.querySelector('#stateSelect');
    const searchBtn = document.querySelector('#search-btn');
    const destinationsContainer = document.querySelector('#destinations-container');
    
    searchBtn.addEventListener('click', function() {
        const selectedState = stateSelect.value;
        if (selectedState !== 'Select Destination') {
            sessionStorage.setItem('selectedState', selectedState);
            window.location.href = 'hotels.html';
        }
    });

    destinationsContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('clickable') || event.target.classList.contains('book-now-btn')) {
            const selectedState = event.target.getAttribute('data-state');
            sessionStorage.setItem('selectedState', selectedState);
            window.location.href = 'hotels.html';
        }
    });

    if (window.location.pathname.includes('hotels.html')) {
        const selectedState = sessionStorage.getItem('selectedState');
        const hotelsContainer = document.querySelector('#hotels-container');
        if (selectedState) {
            document.querySelector('#selected-state').textContent = selectedState;
            displayHotels(selectedState, hotelsContainer);
        } else {
            displayAllHotels(hotelsContainer);
        }
    }

    if (window.location.pathname.includes('rooms.html')) {
        const hotelName = sessionStorage.getItem('selectedHotel');
        const roomContainer = document.querySelector('#rooms-container');
        displayRooms(hotelName, roomContainer);
    }

    function displayAllHotels(container) {
        container.innerHTML = '';

        for (const state in hotelsData) {
            hotelsData[state].forEach(hotel => {
                const hotelElement = document.createElement('div');
                hotelElement.classList.add('col-md-12', 'animate-on-scroll', 'mb-3');
                hotelElement.innerHTML = `
                    <div class="card">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="${hotel.image}" class="img-fluid rounded-start" alt="${hotel.name}">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">${hotel.name} (${hotel.city}, ${state})</h5>
                                    <button class="btn btn-primary book-now" data-hotel="${hotel.name}">Book Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                container.appendChild(hotelElement);
            });
        }

        document.querySelectorAll('.book-now').forEach(button => {
            button.addEventListener('click', function() {
                const selectedHotel = this.getAttribute('data-hotel');
                sessionStorage.setItem('selectedHotel', selectedHotel);
                window.location.href = 'rooms.html';
            });
        });
    }

    function displayHotels(state, container) {
        container.innerHTML = '';

        if (hotelsData[state]) {
            hotelsData[state].forEach(hotel => {
                const hotelElement = document.createElement('div');
                hotelElement.classList.add('col-md-12', 'animate-on-scroll', 'mb-3');
                hotelElement.innerHTML = `
                    <div class="card">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="${hotel.image}" class="img-fluid rounded-start" alt="${hotel.name}">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">${hotel.name} (${hotel.city})</h5>
                                    <button class="btn btn-primary book-now" data-hotel="${hotel.name}">Book Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                container.appendChild(hotelElement);
            });

            document.querySelectorAll('.book-now').forEach(button => {
                button.addEventListener('click', function() {
                    const selectedHotel = this.getAttribute('data-hotel');
                    sessionStorage.setItem('selectedHotel', selectedHotel);
                    window.location.href = 'rooms.html';
                });
            });
        } else {
            container.innerHTML = '<p class="text-center">No hotels found for the selected destination.</p>';
        }
    }

    function displayRooms(hotelName, container) {
        container.innerHTML = '';

        for (const state in hotelsData) {
            const hotel = hotelsData[state].find(hotel => hotel.name === hotelName);
            if (hotel) {
                hotel.rooms.forEach(room => {
                    const roomElement = document.createElement('div');
                    roomElement.classList.add('col-md-6', 'animate-on-scroll', 'mb-3');
                    roomElement.innerHTML = `
                        <div class="card">
                            <img src="https://placehold.co/600x400" class="card-img-top" alt="${room.type}">
                            <div class="card-body">
                                <h5 class="card-title">${room.type}</h5>
                                <p class="card-text">${room.description}</p>
                                <ul class="list-unstyled">
                                    <li><strong>Cost:</strong> ${room.cost}</li>
                                    <li><strong>Amenities:</strong> ${room.amenities}</li>
                                </ul>
                                <button class="btn btn-primary">Book Now</button>
                            </div>
                        </div>
                    `;
                    container.appendChild(roomElement);
                });
                break;
            }
        }
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const bookNowButtons = document.querySelectorAll('.book-now');

    bookNowButtons.forEach(button => {
        button.addEventListener('click', function () {
            const hotelName = this.getAttribute('data-hotel');
            sessionStorage.setItem('selectedHotel', hotelName);
            window.location.href = 'rooms.html';
        });
    });
});
