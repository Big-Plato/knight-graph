const board = [];

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

  return possibleMoves.filter(([x, y]) => x >= 0 && x < 8 && y >= 0 && y < 8);
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
  const path = [];

  visited.set(transformString(start), start);
  console.log("Visited: ", visited);

  while (queue.length > 0) {
    const first = queue.shift();
    console.log("first", first);
    console.log("end", end);
    const moves = isMovePossible(first);

    // Checa se o local do cavalo é o mesmo do final
    if (transformString(first) == transformString(end)) {
      return path;
    }

    for (let i = 0; i < moves.length; i++) {
      if (!visited.has(transformString(moves[i]))) {
        console.log(transformString(moves[i]));
        queue.push(moves[i]);
        visited.set(transformString(moves[i]), moves[i]);
        console.log(visited);
        console.log("Path", path);
        path.push(moves[i]);
      }
    }
  }
}

knightMoves([3, 3], [4, 5]);
