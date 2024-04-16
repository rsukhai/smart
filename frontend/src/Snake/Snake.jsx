import React, { useEffect, useRef, useState } from 'react';

const SnakeGame = () => {
    const canvasRef = useRef(null);
    const foodImageRef = useRef(new Image());
    const [gameOver, setGameOver] = useState(false);
    const [gameInterval, setGameInterval] = useState(null);

    useEffect(() => {
        const blockSize = 25;
        const rows = 20;
        const cols = 20;
        let snakeX = blockSize * 5;
        let snakeY = blockSize * 5;
        let velocityX = 0;
        let velocityY = 0;
        let snakeBody = [];
        let foodX;
        let foodY;

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        canvas.width = cols * blockSize;
        canvas.height = rows * blockSize;
        context.fillStyle = "#333";  // Темно-сірий колір фону для всієї гри
        context.fillRect(0, 0, canvas.width, canvas.height);

        foodImageRef.current.src = './apple_icon.png';
        foodImageRef.current.onload = () => {
            placeFood();
        };

        const placeFood = () => {
            foodX = Math.floor(Math.random() * cols) * blockSize;
            foodY = Math.floor(Math.random() * rows) * blockSize;
            context.drawImage(foodImageRef.current, foodX, foodY, blockSize, blockSize);
        };

        const update = () => {
            if (gameOver) {
                return;
            }

            context.fillStyle = "#333";
            context.fillRect(0, 0, canvas.width, canvas.height);

            context.drawImage(foodImageRef.current, foodX, foodY, blockSize, blockSize);

            if (snakeX === foodX && snakeY === foodY) {
                snakeBody.push([snakeX, snakeY]);
                placeFood();
            }

            snakeBody = snakeBody.map((segment, index) =>
                index === 0 ? [snakeX, snakeY] : snakeBody[index - 1]
            );

            context.fillStyle = "lime";
            snakeX += velocityX * blockSize;
            snakeY += velocityY * blockSize;
            context.fillRect(snakeX, snakeY, blockSize, blockSize);
            snakeBody.forEach(segment => {
                context.fillRect(segment[0], segment[1], blockSize, blockSize);
            });

            checkGameOver();
        };
        const resetGame = () => {
            setGameOver(false);
            clearInterval(gameInterval);
        };
        const checkGameOver = () => {
            if (snakeX < 0 || snakeX >= cols * blockSize || snakeY < 0 || snakeY >= rows * blockSize || snakeBody.some(segment => segment[0] === snakeX && segment[1] === snakeY)) {
                setGameOver(true);
                alert("Game Over! Press 'OK' to restart.");
                resetGame();

            }
        };

        const changeDirection = (e) => {
            switch(e.key) {
                case 'ArrowUp': if (velocityY !== 1) { velocityX = 0; velocityY = -1; } break;
                case 'ArrowDown': if (velocityY !== -1) { velocityX = 0; velocityY = 1; } break;
                case 'ArrowLeft': if (velocityX !== 1) { velocityX = -1; velocityY = 0; } break;
                case 'ArrowRight': if (velocityX !== -1) { velocityX = 1; velocityY = 0; } break;
                default: break;
            }
        };

        document.addEventListener("keydown", changeDirection);
        const interval = setInterval(update, 100);
        setGameInterval(interval);

        return () => {
            clearInterval(interval);
            document.removeEventListener("keydown", changeDirection);
        };
    }, []);



    return <canvas ref={canvasRef} id="board" style={{ backgroundColor: "#333" }}></canvas>;
};

export default SnakeGame;
