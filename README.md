# Knight's Shortest Path

This project implements a solution to find the shortest path a knight can take on a chessboard from a starting position to an ending position. The solution uses a Breadth-First Search (BFS) algorithm to explore all possible moves of the knight and determines the shortest sequence of moves to reach the destination.

## How It Works

The knight moves in an "L"-shape: two squares in one direction and then one square perpendicular to that direction. The algorithm calculates all possible moves from the starting position and explores each move level by level until it reaches the destination.

### Key Functions

1. **`isMovePossible(arr)`**:
   - Takes the current position of the knight as input.
   - Returns an array of all possible moves within the bounds of the chessboard (8x8 grid).

2. **`transformString(arr)`**:
   - Converts an array of coordinates into a string for easier storage and comparison in maps.

3. **`knightMoves(start, end)`**:
   - Takes the starting and ending positions as input.
   - Uses BFS to find the shortest path from `start` to `end`.
   - Returns the path as an array of coordinates and prints the number of moves and the path.

## Usage

To use the `knightMoves` function, simply call it with the starting and ending coordinates. The coordinates should be within the range `[0, 7]` for both the x and y axes.

```javascript
knightMoves([3, 3], [4, 3]);
```

### Example Output

```
You made it in 3 moves! Here's your path:
[3,3]
[5,4]
[3,5]
[4,3]
```

## License

This project is open-source and available under the MIT License.
