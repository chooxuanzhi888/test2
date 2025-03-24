// Function to update the puzzle piece
function updatePuzzle(pieceId, imageUrl) {
    const piece = document.getElementById(pieceId);
    if (piece) {
        piece.innerHTML = `<img src="${imageUrl}" alt="Puzzle Piece">`;
    }
}

// Example usage: Simulating QR code scan
updatePuzzle("1", "https://raw.githubusercontent.com/chooxuanzhi888/test2/main/1.png");
updatePuzzle("2", "https://raw.githubusercontent.com/chooxuanzhi888/test2/main/2.png");
// Add more updates for other pieces as QR codes are scanned
