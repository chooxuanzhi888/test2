// Object to track scanned pieces
const scannedPieces = {};

// Function to update the puzzle piece
function updatePuzzle(pieceId, imageUrl) {
    const piece = document.getElementById(pieceId);
    if (piece && scannedPieces[pieceId]) {
        piece.innerHTML = `<img src="${imageUrl}" alt="Puzzle Piece">`;
    }
}

// Simulate QR code scan and reveal pieces
function scanPiece(pieceNumber) {
    const pieceId = `piece_${pieceNumber}`;
    const imageUrl = `https://raw.githubusercontent.com/your-username/test2/main/${pieceNumber}.png`;

    // Mark the piece as scanned
    scannedPieces[pieceId] = true;

    // Update the puzzle grid
    updatePuzzle(pieceId, imageUrl);
}

// Initialize all pieces as empty
function initializePuzzle() {
    for (let i = 1; i <= 16; i++) {
        scannedPieces[`piece_${i}`] = false; // Initially, no piece is scanned
    }
}

// Initialize the puzzle on page load
initializePuzzle();

// Simulate scanning of puzzle pieces
setTimeout(() => scanPiece(1), 1000); // Example: Simulate scan for piece 1
setTimeout(() => scanPiece(2), 2000); // Example: Simulate scan for piece 2
// Add more scans as needed
