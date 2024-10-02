const cardContainer = document.querySelector(".card");
const starContainer = document.querySelector(".card__stars");
const stars = document.querySelectorAll(".card__star");
const submitBtn = document.querySelector(".card__submit");

let userRating = "";
const maxRating = stars.length;
function pickRating(e) {
  const currTarget = e.target;
  if (currTarget.classList.contains("card__star")) {
    userRating = currTarget.textContent;
    stars.forEach((star) => star.classList.remove("card__star--active"));

    currTarget.classList.add("card__star--active");
  }
}

starContainer.addEventListener("click", pickRating);

submitBtn.addEventListener("click", () => {
  if (!userRating) return;

  const submittedTemp = `
  <div class="card__thankyou">
        <img
          src="./images/illustration-thank-you.svg"
          alt="illustration-thank-you"
        />
        <p class="card__ratings">You selected ${userRating} out of ${maxRating}</p>
        <h2 class="card__thankyou--text">Thank you!</h2>
        <p class="card__message">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
  `;
  cardContainer.innerHTML = submittedTemp;
});

function createSubmittedRating() {}
