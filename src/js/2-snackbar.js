import "../css/styles.css";


// Import the necessary libraries
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

// Select elements from the DOM
const form = document.querySelector(".form");

// Function to create a promise with a specified delay
function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === "fulfilled") {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}

// Add a submit event to the form
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const delay = Number(event.target.elements.delay.value);
  const state = event.target.elements.state.value;

  createPromise(delay, state)
    .then((delay) => {
      // Notification for success
      iziToast.success({
        title: "Success",
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: "topRight",
      });
    })
    .catch((delay) => {
      // Error notification
      iziToast.error({
        title: "Error",
        message: `❌ Rejected promise in ${delay}ms`,
        position: "topRight",
      });
    });
});
