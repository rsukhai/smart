import React, { useEffect, useRef, useState, useCallback } from 'react';

const SnakeGame = ({ onWordComplete, onReset }) => {
    const canvasRef = useRef(null);
    const foodImageRef = useRef(new Image());
    const snakeHeadImageRef = useRef(new Image());
    const snakeBodyImageRef = useRef(new Image());
    const intervalRef = useRef(null);
    const [gameOver, setGameOver] = useState(false);
    const [showReset, setShowReset] = useState(false);
    const snakeBody = useRef([]);
    const snakePos = useRef({ x: 125, y: 125 });
    const foodPos = useRef({ x: 0, y: 0 });
    const velocity = useRef({ x: 0, y: 0 });
    const blockSize = 100;
    const rows = 20;
    const cols = 20;
    const currentFoodIndex = useRef(0);
    const Word = useRef([]);
    const Apple = 'APPLE';
    const foodImages = [
        { index: 0, src: '../img/a.png', id: 'A' },
        { index: 1, src: '../img/p.png', id: 'P' },
        { index: 2, src: '../img/p.png', id: 'P' },
        { index: 3, src: '../img/l.png', id: 'L' },
        { index: 4, src: '../img/e.png', id: 'E' },
    ];

    const getNextFoodImage = () => {
        const nextIndex = (currentFoodIndex.current + 1) % foodImages.length;
        currentFoodIndex.current = nextIndex;
        return foodImages[nextIndex];
    };

    const resetGame = useCallback(() => {
        clearInterval(intervalRef.current);
        const context = canvasRef.current.getContext('2d');
        context.clearRect(0, 0, cols * blockSize, rows * blockSize);
        setGameOver(false);
        setShowReset(false);
        snakePos.current = { x: 5 * blockSize, y: 5 * blockSize };
        snakeBody.current = [[snakePos.current.x, snakePos.current.y]];
        velocity.current = { x: 0, y: 0 };
        currentFoodIndex.current = 0;
        Word.current = [];
        placeInitialFood();
        onReset()
         // Виклик колбеку для очищення зібраних слів
        intervalRef.current = setInterval(update, 100);
    }, []);

    const drawBoard = () => {
        const context = canvasRef.current.getContext('2d');
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                const color = (row + col) % 2 === 0 ? 'white' : '#f5f5dc';
                context.fillStyle = color;
                context.fillRect(col * blockSize, row * blockSize, blockSize, blockSize);
            }
        }
    };

    const placeInitialFood = () => {
        const context = canvasRef.current.getContext('2d');
        foodPos.current.x = Math.floor(Math.random() * cols) * blockSize;
        foodPos.current.y = Math.floor(Math.random() * rows) * blockSize;
        const firstFoodImage = foodImages[0];
        foodImageRef.current.src = firstFoodImage.src;
        context.clearRect(foodPos.current.x, foodPos.current.y, blockSize, blockSize);
        const firstFoodImageElement = new Image();
        firstFoodImageElement.onload = () => {
            context.drawImage(
                firstFoodImageElement,
                foodPos.current.x,
                foodPos.current.y,
                blockSize,
                blockSize
            );
        };
        firstFoodImageElement.src = firstFoodImage.src;
    };

    const placeFood = () => {
        const context = canvasRef.current.getContext('2d');
        foodPos.current.x = Math.floor(Math.random() * cols) * blockSize;
        foodPos.current.y = Math.floor(Math.random() * rows) * blockSize;
        const nextFoodImage = getNextFoodImage();
        foodImageRef.current.src = nextFoodImage.src;
        context.clearRect(foodPos.current.x, foodPos.current.y, blockSize, blockSize);
        const nextFoodImageElement = new Image();
        nextFoodImageElement.onload = () => {
            context.drawImage(
                nextFoodImageElement,
                foodPos.current.x,
                foodPos.current.y,
                blockSize,
                blockSize
            );
        };
        nextFoodImageElement.src = nextFoodImage.src;
    };

    const drawSnakeHead = (context, x, y) => {
        context.save();
        let angle = Math.PI / 2;
        if (velocity.current.x === -1) angle = -Math.PI / 2;
        if (velocity.current.y === 1) angle = Math.PI;
        if (velocity.current.y === -1) angle = 0;
        context.translate(x + blockSize / 2, y + blockSize / 2);
        context.rotate(angle);
        context.drawImage(snakeHeadImageRef.current, -blockSize / 2, -blockSize / 2, blockSize, blockSize);
        context.restore();
    };

    const drawSnakeBody = (context, x, y) => {
        context.save();
        let angle = Math.PI / 2;
        if (velocity.current.x === -1) angle = -Math.PI / 2;
        if (velocity.current.y === 1) angle = Math.PI;
        if (velocity.current.y === -1) angle = 0;
        context.translate(x + blockSize / 2, y + blockSize / 2);
        context.rotate(angle);
        context.drawImage(snakeBodyImageRef.current, -blockSize / 2, -blockSize / 2, blockSize, blockSize);
        context.restore();
    };

    const update = () => {
        const context = canvasRef.current.getContext('2d');
        context.clearRect(0, 0, cols * blockSize, rows * blockSize);
        drawBoard();
        if (gameOver) {
            return;
        }
        snakePos.current.x += velocity.current.x * blockSize;
        snakePos.current.y += velocity.current.y * blockSize;
        snakeBody.current.unshift([snakePos.current.x, snakePos.current.y]);
        if (
            snakePos.current.x === foodPos.current.x &&
            snakePos.current.y === foodPos.current.y
        ) {
            const currentLetter = foodImages[currentFoodIndex.current].id;
            Word.current.push(currentLetter);
            const wordString = Word.current.join('');
            console.log(wordString);
            if (wordString === Apple) {
                setGameOver(true);
                setShowReset(true);
                clearInterval(intervalRef.current);
                onWordComplete(wordString); // Передаємо зібране слово до компонента Snake
            } else {
                placeFood();
            }
        } else {
            snakeBody.current.pop();
        }
        snakeBody.current.forEach((segment, index) => {
            if (index === 0) {
                drawSnakeHead(context, segment[0], segment[1]);
            } else {
                drawSnakeBody(context, segment[0], segment[1]);
            }
        });
        context.drawImage(foodImageRef.current, foodPos.current.x, foodPos.current.y, blockSize, blockSize);
        checkGameOver();
    };

    const checkGameOver = () => {
        const x = snakePos.current.x;
        const y = snakePos.current.y;
        const crashed = snakeBody.current.some(
            (segment, index) =>
                index !== 0 && segment[0] === x && segment[1] === y
        );
        if (
            x < 0 ||
            x >= cols * blockSize ||
            y < 0 ||
            y >= rows * blockSize ||
            crashed
        ) {
            clearInterval(intervalRef.current);
            setGameOver(true);
            setShowReset(true);
        }
    };

    const changeDirection = (e) => {
        switch (e.key) {
            case 'ArrowUp':
                if (velocity.current.y !== 1) {
                    velocity.current = { x: 0, y: -1 };
                }
                break;
            case 'ArrowDown':
                if (velocity.current.y !== -1) {
                    velocity.current = { x: 0, y: 1 };
                }
                break;
            case 'ArrowLeft':
                if (velocity.current.x !== 1) {
                    velocity.current = { x: -1, y: 0 };
                }
                break;
            case 'ArrowRight':
                if (velocity.current.x !== -1) {
                    velocity.current = { x: 1, y: 0 };
                }
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        snakeHeadImageRef.current.onload = () => {
            resetGame();
        };
        snakeHeadImageRef.current.src = '../img/snake_head.png';
        snakeBodyImageRef.current.src = '../img/snake_body.png';
        document.addEventListener('keydown', changeDirection);
        return () => {
            clearInterval(intervalRef.current);
            document.removeEventListener('keydown', changeDirection);
        };
    }, [resetGame]);

    return (
        <div>
            <canvas
                ref={canvasRef}
                style={{ margin: '10px', width: '100%', height: '100%' }}
                width={cols * blockSize}
                height={rows * blockSize}
            ></canvas>
            {showReset && (
                <button
                    onClick={resetGame}
                    style={{
                        marginTop: '10px',
                        padding: '10px 20px',
                        fontSize: '16px',
                        color: 'white',
                        backgroundColor: 'red',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                >
                    Reset
                </button>
            )}
        </div>
    );
};

export default SnakeGame;
