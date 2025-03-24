// Array of puzzle piece image URLs
const puzzlePieces = [
    "https://raw.githubusercontent.com/chooxuanzhi888/test2/main/1.png",
    "https://raw.githubusercontent.com/chooxuanzhi888/test2/main/2.png",
    "https://raw.githubusercontent.com/chooxuanzhi888/test2/main/3.png",
    "https://raw.githubusercontent.com/chooxuanzhi888/test2/main/4.png",
    "https://raw.githubusercontent.com/chooxuanzhi888/test2/main/5.png",
    "https://raw.githubusercontent.com/chooxuanzhi888/test2/main/6.png",
    "https://raw.githubusercontent.com/chooxuanzhi888/test2/main/7.png",
    "https://raw.githubusercontent.com/chooxuanzhi888/test2/main/8.png",
    "https://raw.githubusercontent.com/chooxuanzhi888/test2/main/9.png",
    "https://raw.githubusercontent.com/chooxuanzhi888/test2/main/10.png",
    "https://raw.githubusercontent.com/chooxuanzhi888/test2/main/11.png",
    "https://raw.githubusercontent.com/chooxuanzhi888/test2/main/12.png",
    "https://raw.githubusercontent.com/chooxuanzhi888/test2/main/13.png",
    "https://raw.githubusercontent.com/chooxuanzhi888/test2/main/14.png",
    "https://raw.githubusercontent.com/chooxuanzhi888/test2/main/15.png",
    "https://raw.githubusercontent.com/chooxuanzhi888/test2/main/16.png"
];

// Dynamically load puzzle pieces
const puzzleContainer = document.getElementById('puzzle-container');
puzzlePieces.forEach(url => {
    const piece = document.createElement('div');
    piece.className = 'piece';
    piece.innerHTML = `<img src="${url}" alt="Puzzle Piece">`;
    puzzleContainer.appendChild(piece);
});
