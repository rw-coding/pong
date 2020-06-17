/**********************
 * filename: Ball.js
 * author: walker
 * description: base ball class for OOPong
 * 
 */

export default class Ball {
    static _xPos;
    static _yPos;
    static _xVel;
    static _yVel;

    constructor() {
        let canvas = document.getElementById("canvas");
        let theBall = canvas.getContext("2d");
        ball();

        function ball() {
            theBall.fillRect(315, 215, 25, 25);
        }

        console.log("ball has begun existing");
    }

    booped() {

    }
}