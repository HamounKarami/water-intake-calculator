function calculateWaterIntake() {
    const weight = document.getElementById('weight').value;
    const waterIntake = weight * 0.5;
    const result = document.getElementById('result');
    result.textContent = `You should drink ${waterIntake} oz of water per day.`;
}
