document.addEventListener('DOMContentLoaded', function () {
    const bookRoomBtns = document.querySelectorAll('.book-room-btn');
    const bookingModal = new bootstrap.Modal(document.getElementById('bookingModal'));
    const bookingForm = document.getElementById('bookingForm');
    const totalCostInput = document.getElementById('totalCost');
    const calculateCostBtn = document.getElementById('calculateCostBtn');
    const roomTypeInput = document.getElementById('roomType');

    let selectedRoomType = '';

    bookRoomBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            selectedRoomType = btn.getAttribute('data-room');
            roomTypeInput.value = selectedRoomType;
            bookingModal.show();
        });
    });

    calculateCostBtn.addEventListener('click', () => {
        const checkInDate = new Date(document.getElementById('checkInDate').value);
        const checkOutDate = new Date(document.getElementById('checkOutDate').value);
        const roomType = roomTypeInput.value;

        if (checkInDate && checkOutDate && roomType) {
            const timeDifference = checkOutDate - checkInDate;
            const days = timeDifference / (1000 * 3600 * 24);

            let costPerNight = 0;
            if (roomType === 'Deluxe Room') costPerNight = 150;
            if (roomType === 'Suite') costPerNight = 250;
            if (roomType === 'Standard Room') costPerNight = 100;
            if (roomType === 'Family Suite') costPerNight = 300;
            if (roomType === 'Presidential Suite') costPerNight = 500;
            if (roomType === 'Single Room') costPerNight = 80;
            if (roomType === 'Double Room') costPerNight = 180;
            if (roomType === 'Honeymoon Suite') costPerNight = 350;
            if (roomType === 'Business Suite') costPerNight = 220;
            if (roomType === 'Luxury Room') costPerNight = 400;
            if (roomType === 'Penthouse Suite') costPerNight = 600;
            if (roomType === 'Eco Room') costPerNight = 130;

            const totalCost = days * costPerNight;
            totalCostInput.value = `$${totalCost.toFixed(2)}`;
        }
    });

    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simulate payment and generate confirmation number
        const confirmationNumber = `CONF${Math.floor(Math.random() * 1000000)}`;
        
        // Display confirmation message
        alert(`Payment successful! Your confirmation number is: ${confirmationNumber}`);
        
        // Close modal
        bookingModal.hide();
        
        // Reset form
        bookingForm.reset();
        totalCostInput.value = '';
    });
});
