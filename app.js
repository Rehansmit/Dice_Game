function rollDice() {
    const diceValue = Math.floor(Math.random() * 6) + 1;
    document.getElementById("dice-value").innerText = `Dice Value: ${diceValue}`;
  }