/*
 *
 * filename: Paddle.js
 * author:  Aly
 * description:  javascript file for the players' paddles
 * 
 */

export default class Paddle {

    // class props
    _xPos = {};
    _yPos = {};
    _yVel = {};

    constructor() {
        let canvas = document.getElementById("canvas");
        let thePaddles = canvas.getContext("2d");
        paddles();
        // create instances of the parts
        function paddles() {
            thePaddles.fillRect(75, 150, 25, 150);
            thePaddles.fillRect(565, 150, 25, 150);
            thePaddles.fillStyle = "skyblue";
        }

        // Making sure I did things right
        console.log("Paddles done... maybe");
    }

    // position the parts on the canvas
    _upKeyHandler() {


    }

    // positions the ball in the table center and gives it x & y velocity
    _downKeyHandler() {

    }

}