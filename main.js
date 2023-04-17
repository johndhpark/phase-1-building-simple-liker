// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

let timeoutID;

const modal = document.querySelector("div#modal");
modal.classList.add("hidden");

// Your JavaScript code goes here`!
document.addEventListener("DOMContentLoaded", (e) => {
  const likes = document.querySelectorAll("span.like-glyph");

  likes.forEach((like) => {
    like.addEventListener("click", handleClick);
  });
});

async function handleClick(e) {
  clearTimeout(timeoutID);
  modal.classList.add("hidden");

  try {
    const res = await mimicServerCall();

    e.target.classList.toggle("activated-heart");
  } catch (err) {
    const message = modal.querySelector("p#modal-message");
    message.textContent = err;
    modal.classList.remove("hidden");
    timeoutID = setTimeout(() => modal.classList.add("hidden"), 3000);
  }
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
