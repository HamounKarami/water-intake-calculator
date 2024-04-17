function calculateWaterIntake() {
    const weight = document.getElementById('weight').value;
    const waterIntakeOz = weight * 0.5;
    const waterIntakeCups = waterIntakeOz / 8; // Convert ounces to cups
    const result = document.getElementById('result');
    result.textContent = `You should drink approximately ${waterIntakeCups.toFixed(2)} cups of water per day.`;
}
