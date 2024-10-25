// Basic game variables
let playerChips = 20000;
let botChips = 20000;
const betAmount = 1000;
let communityCards = [];

// Function to update the displayed chips
function updateChips() {
    document.getElementById("player-chips").innerText = playerChips;
}

// Function to handle betting
function bet() {
    if (playerChips < betAmount) {
        alert("Not enough chips to bet!");
        return;
    }

    playerChips -= betAmount;
    botChips -= betAmount; // Bot goes all-in
    communityCards = dealCommunityCards(); // Deal community cards

    updateChips();
    displayCommunityCards();
    showMessage("You bet " + betAmount + " chips. Bot went all in!");
}

// Function to handle folding
function fold() {
    showMessage("You folded. Bot wins this round!");
    resetGame();
}

// Function to deal community cards
function dealCommunityCards() {
    // Randomly select 3 community cards from the deck
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
    shuffleArray(cardNames);
    return cardNames.slice(0, 3); // Return the top three cards as community cards
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
        img.src = `images/${card}.png`; // Update path as necessary
        img.alt = card; // Alt text for accessibility
        img.style.width = "70px"; // Adjust width as necessary
        img.style.margin = "5px"; // Spacing between cards
        cardContainer.appendChild(img);
    });
}

// Function to show messages
function showMessage(msg) {
    document.getElementById("message").innerText = msg;
}

// Function to reset the game
function resetGame() {
    communityCards = [];
    updateChips();
    document.getElementById("community-cards").innerHTML = ""; // Clear displayed cards
}

// Event listeners
document.getElementById("bet-button").addEventListener("click", bet);
document.getElementById("fold-button").addEventListener("click", fold);

// Initial update
updateChips();
