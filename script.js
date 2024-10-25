// Basic game variables
let playerChips = 20000; // Player starts with 20,000 chips
let botChips = 20000; // Bot starts with 20,000 chips
const betAmount = 1000; // Set a constant bet amount
let communityCards = []; // Array to hold community cards

// Function to update the displayed chips
function updateChips() {
    document.getElementById("player-chips").innerText = playerChips; // Update player chips display
}

// Function to handle betting
function bet() {
    if (playerChips < betAmount) {
        alert("Not enough chips to bet!"); // Alert if not enough chips
        return; // Exit function
    }

    playerChips -= betAmount; // Deduct bet amount from player chips
    botChips -= betAmount; // Deduct bet amount from bot chips (bot goes all-in)
    communityCards = dealCommunityCards(); // Deal community cards

    updateChips(); // Update chips display
    displayCommunityCards(); // Display the community cards
    showMessage("You bet " + betAmount + " chips. Bot went all in!"); // Show message
}

// Function to handle folding
function fold() {
    showMessage("You folded. Bot wins this round!"); // Show message
    resetGame(); // Reset game
}

// Function to deal community cards
function dealCommunityCards() {
    // Array of card names without a folder
    const cardNames = [
        "queen_of_hearts2", "king_of_spades2", "queen_of_spades2",
        "queen_of_diamonds2", "queen_of_clubs2", "king_of_hearts2",
        "king_of_diamonds2", "king_of_clubs2", "jack_of_spades2",
        "jack_of_hearts2", "jack_of_diamonds2", "jack_of_clubs2",
        "ace_of_spades2", "10_of_diamonds", "9_of_diamonds",
        "8_of_diamonds", "7_of_diamonds", "3_of_diamonds",
        "6_of_diamonds", "5_of_diamonds", "4_of_diamonds",
        "2_of_diamonds", "jack_of_diamonds", "queen_of_diamonds",
        "king_of_diamonds", "ace_of_diamonds", "2_of_hearts",
        "3_of_hearts", "4_of_hearts", "5_of_hearts", "6_of_hearts",
        "7_of_hearts", "8_of_hearts", "9_of_hearts", "10_of_hearts",
        "jack_of_hearts", "queen_of_hearts", "king_of_hearts",
        "ace_of_hearts", "2_of_clubs", "3_of_clubs", "4_of_clubs",
        "5_of_clubs", "6_of_clubs", "7_of_clubs", "8_of_clubs",
        "10_of_clubs", "9_of_clubs", "red_joker", "black_joker",
        "jack_of_clubs", "queen_of_clubs", "king_of_clubs",
        "ace_of_clubs", "10_of_spades", "9_of_spades", "8_of_spades",
        "7_of_spades", "6_of_spades", "5_of_spades", "4_of_spades",
        "2_of_spades", "3_of_spades", "jack_of_spades",
        "queen_of_spades", "king_of_spades", "ace_of_spades"
    ];

    // Shuffle the card names array and return the first three cards
    shuffleArray(cardNames); // Shuffle the cards
    return cardNames.slice(0, 3); // Return the first three cards as community cards
}

// Function to shuffle an array (Fisher-Yates shuffle)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}

// Function to display community cards
function displayCommunityCards() {
    const cardContainer = document.getElementById("community-cards");
    cardContainer.innerHTML = ""; // Clear previous cards

    communityCards.forEach(card => {
        const img = document.createElement("img");
        img.src = `${card}.png`; // Image path without folder
        img.alt = card; // Alt text for accessibility
        img.style.width = "70px"; // Set image width
        img.style.margin = "5px"; // Spacing between cards
        cardContainer.appendChild(img); // Append image to container
    });
}

// Function to show messages
function showMessage(msg) {
    document.getElementById("message").innerText = msg; // Display message
}

// Function to reset the game
function resetGame() {
    communityCards = []; // Clear community cards
    updateChips(); // Update chips display
    document.getElementById("community-cards").innerHTML = ""; // Clear displayed cards
}

// Event listeners
document.getElementById("bet-button").addEventListener("click", bet); // Bet button
document.getElementById("fold-button").addEventListener("click", fold); // Fold button

// Initial update
updateChips(); // Update chips on load

