const board = [];

const isMovePossible = (arr) => {
    const [x, y] = arr;
    const map1 = new Map();

    const possibleMoves = [[x+2, y+1], [x+2, y-1],
    [x-2, y+1], [x-2, y-1],
    [x+1, y+2], [x+1, y-2],
    [x-1, y+2], [x-1, y-2]] 

    for (let i = 0; i < possibleMoves.length; i++) {
        map1.set(`${i}`, possibleMoves[i]);
    }

    return map1;
}

// Montagem do tabuleiro
// for (let i = 0; i <= 7; i++) {
//     board[i] = [];
//     for (let j = 0; j <= 7; j++) {
//         board[i].push([i, j]);
//     }
// }

// console.table(board);

function knightMoves(arr1, arr2) {
    const args = [...arr1, ...arr2];
    
    for (let i = 0; i < args.length; i++) {
        if (args[i] < 0 || args[i] > 7) {
            throw new Error("Invalid move!")
        }
    }

    const queue = [arr1];

    while (queue.length > 0) {
        const first = queue.shift();
        const moves = isMovePossible(first);
        console.log(moves)

    }
}

knightMoves([3, 3], [4, 5]);




isMovePossible([3, 5]);