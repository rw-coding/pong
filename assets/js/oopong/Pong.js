/**********************
 * filename: Pong.js
 * author: norris
 * description: base game class for OOPong
 * 
 */

// import dependent classes
import Ball from "./parts/Ball.js";
import Paddle from "./parts/Paddle.js";
import ScoreBoard from "./parts/ScoreBoard.js";

export default class Pong {

    // class props
    _playerOneScore;
    _playerOneScore;
    static _scoreBoard = {};
    static _ball = {};
    static _playerOnePaddle = {};
    static _playerTwoPaddle = {};

    constructor() {

        // create instances of the parts
        console.log("pong ponged");

        Pong._scoreBoard = new ScoreBoard();

        Pong._playerOnePaddle = new Paddle();

        Pong._playerTwoPaddle = new Paddle();

        Pong._ball = new Ball();



    }

    // position the parts on the canvas
    _setTable() {


    }

    // positions the ball in the table center and gives it x & y velocity
    _serveBall() {

    }

}