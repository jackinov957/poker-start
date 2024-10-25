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

// Function to deal community cards (simplified)
function dealCommunityCards() {
    return ["Card1", "Card2", "Card3"]; // Placeholder for actual card values
}

// Function to display community cards
function displayCommunityCards() {
    const cardContainer = document.getElementById("community-cards");
    cardContainer.innerHTML = communityCards.join(", ");
}

// Function to show messages
function showMessage(msg) {
    document.getElementById("message").innerText = msg;
}

// Function to reset the game
function resetGame() {
    communityCards = [];
    updateChips();
}

// Event listeners
document.getElementById("bet-button").addEventListener("click", bet);
document.getElementById("fold-button").addEventListener("click", fold);

// Initial update
updateChips();
