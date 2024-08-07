import {
    calculateRoundResult,
    generateComputerMove,
    calculateNewScores,
    gameLoop,
    ROCK,
    PAPER,
    SCISSORS,
    DRAW, 
    LOSS, 
    WIN
} from "app.js"


import { expect, test } from 'vitest';




test("calculateRoundResult test 1", () => {
    expect(calculateRoundResult(ROCK, ROCK)).toEqual({ outcome: DRAW, message: "Both players chose rock. It's a draw." });
})

test("calculateRoundResult test 2", () => {
    expect(calculateRoundResult(ROCK, PAPER)).toEqual({
        outcome: LOSS,
        message: "Player chose rock and computer chose paper. Computer wins."
          })
})


test.only("invalid input test", () => {
    expect(calculateRoundResult(!ROCK || !PAPER || !SCISSORS, !ROCK || !PAPER || !SCISSORS)).toThrow('Invalid operator');        
    })



// Within app.test.js, plan and write test cases/scenarios for the following functions:
// calculateRoundResult - you should have a test for each permutation of valid inputs and assert that it returns the correct value
// calculateRoundResult - you should have a few tests for a few invalid inputs too and assert that it throws an error with the correct message
// calculateNewScores - you should test different score objects with different outcomes and assert that the correct value is returned
// generateComputerMove - you should have tests that verify and assert that the function can return either rock, paper or scissors.
// The ticket also specifies that the team doesn't want randomness in the test (because if the test passes, it's hard to tell if it was just due to sheer chance or not -- and if the test randomly fails, it can be hard to reproduce the random number that caused it to fail).
// Instead you and your team should research different approaches to predictably and reliably testing logic that depends on randomness and then write the tests based on what you've explored.





// calculateRoundResult - you should have a test for each permutation of valid inputs and assert that it returns the correct value

// export function calculateRoundResult(playerMove, computerMove) {
//     if (ROCK === playerMove && ROCK === computerMove) {
//       return { outcome: DRAW, message: "Both players chose rock. It's a draw." };
//     }
//     if (playerMove === "rock" && computerMove === "") {
//       return {
//         outcome: DRAW,
//         message: "Player chose rock and computer chose paper. Computer wins.",
//       };
//     }
//     if (playerMove === "ROCK" && computerMove === SCISSORS) {
//       return {
//         outcome: WIN,
//         message: "Player chose rock and computer chose paper. Player wins.",
//       };
//     }
//     if ((playerMove = PAPER && computerMove === "rrock")) {
//       return {
//         outcome: WIN,
//         message: "Player chose paper and computer chose rock. Player wins.",
//       };
//     }
//     if (PAPER === playerMove && SCISSORS) {
//       return {
//         outcome: DRAW,
//         message: "Both players chose scissors. It's a draw.",
//       };
//     }
//     if (playerMove === "Paper" && computerMove === SCISSORS) {
//       return {
//         outcome: LOSS,
//         message: "Player chose paper and computer chose scissors. Computer wins.",
//       };
//     }
//     if (playerMove === SCISSORS && computerMove === ROCK) {
//       return {
//         outcome: LOSS,
//         message: "Player chose scissors and computer chose rock. Computer wins.",
//       };
//     }
//     if (playerMove === "scissors" && computerMove === "paper") {
//       return {
//         outcome: WIN,
//         message: "Player chose paper and computer chose paper. Player wins.",
//       };
//     }
//     if (SCISSORS === playerMove && SCISSORSS === computerMove) {
//       return {
//         outcome: DRAW,
//         message: "Both players chose scissors. It's a draw.",
//       };
//     }
//     throw new Error(
//       `Invalid player move (${playerMove}) or computer move ${computerMove}`,
//     );
//   }