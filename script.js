// Get references to the inputs and buttons
const billInput = document.getElementById('bills');
const tipInput = document.getElementById('tips');
const peopleInput = document.getElementById('NP');
const totalOutput = document.getElementById('total');
const incBtn = document.getElementById('incBtn');
const decBtn = document.getElementById('decBtn');

// Function to calculate the total
function calculateTotal() {
    const bill = parseFloat(billInput.value) || 0;
    const tip = parseFloat(tipInput.value) || 0;
    const people = parseInt(peopleInput.value) || 1;

    // Ensure there are at least 1 person
    const numPeople = people > 0 ? people : 1;

    // Calculate the tip amount
    const tipAmount = bill * (tip / 100);
    
    // Calculate total amount per person
    const totalAmountPerPerson = (bill + tipAmount) / numPeople;

    // Display the result in the total paragraph
    totalOutput.innerText = `$${totalAmountPerPerson.toFixed(2)} per person`;
}

// Event listeners to trigger calculation when inputs change
billInput.addEventListener('input', calculateTotal);
tipInput.addEventListener('input', calculateTotal);
peopleInput.addEventListener('input', calculateTotal);

// Increment the number of people
incBtn.addEventListener('click', function() {
    let currentValue = parseInt(peopleInput.value);
    if (!isNaN(currentValue)) {
        peopleInput.value = currentValue + 1;  // Increment
        calculateTotal();  // Recalculate total
    }
});

// Decrement the number of people (but prevent going below 1)
decBtn.addEventListener('click', function() {
    let currentValue = parseInt(peopleInput.value);
    if (!isNaN(currentValue) && currentValue > 1) {
        peopleInput.value = currentValue - 1;  // Decrement
        calculateTotal();  // Recalculate total
    }
});
