const isMovePossible = (arr) => {
  const [x, y] = arr;

  const possibleMoves = [
    [x + 2, y + 1],
    [x + 2, y - 1],
    [x - 2, y + 1],
    [x - 2, y - 1],
    [x + 1, y + 2],
    [x + 1, y - 2],
    [x - 1, y + 2],
    [x - 1, y - 2],
  ];

  return possibleMoves.filter(([x, y]) => x >= 0 && x < 8 && y >= 0 && y < 8); // Filter the moves that can go out of the board
};

const transformString = (arr) => {
  return arr.join("");
};

console.log(transformString([3, 3]));

function knightMoves(start, end) {
  const args = [...start, ...end];

  for (let i = 0; i < args.length; i++) {
    if (args[i] < 0 || args[i] > 7) {
      throw new Error("Invalid move!");
    }
  }

  const queue = [start];
  const visited = new Map();
  const prev = new Map();

  visited.set(transformString(start), true);
  prev.set(transformString(start), null);

  while (queue.length > 0) {
    const first = queue.shift();

    if (transformString(first) === transformString(end)) {
      // Initialize path
      const path = [];
      let node = first;

      while (node !== null) { // While the value of node is not null, iterate over the map that has the previous moves
        path.unshift(node); // Adds the value of node in the beginning of the array - The first entered is going to be the last
        node = prev.get(transformString(node)); // Get the value of previous node from the previous map
        console.log("node: ", node)
      }
      console.log(
        `You made it in ${path.length - 1} ${
          path.length == 2 ? "move" : "moves"
        }! Here's your path:`
      );
      for (let i = 0; i < path.length; i++) {
        console.log(`[${path[i]}]\n`);
      }
      return path;
    }

    const moves = isMovePossible(first);

    for (const move of moves) {
      const moveKey = transformString(move);  
      if (!visited.has(moveKey)) { // If the visited map does not have movekey, push to queue
        queue.push(move);
        visited.set(moveKey, true); // every node visited is added with the value of truth
        prev.set(moveKey, first); // Puts the move in the previous map, with the value of the first, e. g., the item that is deqeued from queue
    }
  }
}

  console.log("I am here!");
  return null;
}

knightMoves([3, 3], [4, 3]);
