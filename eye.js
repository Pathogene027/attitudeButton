function eyeMove() {
  let intervalId;

  // Function to start the eye movement animation
  const addFunction = () => {
    let eye = document.querySelectorAll(".eye-opened");
    const maxInterval = 5000;
    const minInterval = 1000;

    // Generate a random number between minInterval and maxInterval
    let hold =
      Math.floor(Math.random() * (maxInterval - minInterval + 1)) + minInterval;

    // Main function to toggle the eye state and set a new interval
    function mainFunct() {
      // Generate a new random interval
      hold =
        Math.floor(Math.random() * (maxInterval - minInterval + 1)) +
        minInterval;

      // Toggle the "eye-closed" class on each element with the "eye-opened" class
      eye.forEach((item) => item.classList.toggle("eye-closed"));

      // Clear the existing interval and set a new one with the new hold value
      clearInterval(intervalId);
      intervalId = setInterval(mainFunct, hold);
    }

    // Set the initial interval with the randomly generated hold value
    intervalId = setInterval(mainFunct, hold);
  };

  // Start the eye movement animation
  addFunction();
}
