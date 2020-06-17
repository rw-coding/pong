/**********************
 * filename: ScoreBoard.js
 * author: Will Johnson
 * description: 
 * 
 */

export default class ScoreBoard {

    // class props
    _playerOneScore;
    _playerOneScore;

    constructor() {
        let canvas = document.getElementById("canvas");
        let scoreBoard = canvas.getContext("2d");
        scoreboard();
        // create instances of the parts
        function scoreboard() {
            scoreBoard.fillRect(225, 0, 210, 100);
            scoreBoard.fillStyle = "skyblue";
            scoreBoard.strokeText('0', 100, 100);
            scoreBoard.strokeText('0', 150, 100);
        }

        console.log("scoreBoard created");

    }

}