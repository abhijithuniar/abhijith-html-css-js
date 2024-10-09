// Reset the form
    document.getElementById('contactForm').reset();


// Add functionality for getting exercises based on user input
const exercises = {
    monday: "Bench Press: 3 sets of 10 reps, Dumbbell Flyes: 3 sets of 12 reps, Tricep Dips: 3 sets of 10 reps",
    tuesday: "Pull-ups: 3 sets of 8 reps, Bent-over Rows: 3 sets of 10 reps, Bicep Curls: 3 sets of 12 reps",
    wednesday: "Squats: 3 sets of 10 reps, Lunges: 3 sets of 12 reps, Shoulder Press: 3 sets of 10 reps",
    thursday: "Incline Bench Press: 3 sets of 10 reps, Plank: 3 sets of 30 seconds, Crunches: 3 sets of 15 reps",
    friday: "Deadlifts: 3 sets of 10 reps, Barbell Rows: 3 sets of 10 reps, Hammer Curls: 3 sets of 12 reps",
    saturday: "Leg Press: 3 sets of 10 reps, Calf Raises: 3 sets of 15 reps, Wrist Curls: 3 sets of 12 reps",
};

document.getElementById('get-exercises').addEventListener('click', function() {
    const dayInput = document.getElementById('day-input').value.toLowerCase();
    const exerciseList = document.getElementById('exercise-list');
    const exerciseDetails = document.getElementById('exercise-details');

    if (exercises[dayInput]) {
        exerciseList.textContent = exercises[dayInput];
        exerciseDetails.classList.remove('hidden');
    } else {
        exerciseList.textContent = "Please enter a valid day (e.g., Monday, Tuesday, etc.)";
        exerciseDetails.classList.remove('hidden');
    }
});