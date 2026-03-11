// Add member form

const addMemberForm = document.getElementById("add-member-form");
const addMemberBtn = document.getElementById("add-member-btn");

addMemberBtn.addEventListener("click", () => {
  addMemberForm.classList.remove("hidden");
  addDepositForm.classList.add("hidden");
  addMealForm.classList.add("hidden");
  addCostForm.classList.add("hidden");
});

// Add deposit form

const addDepositForm = document.getElementById("add-deposit-form");
const addDepositBtn = document.getElementById("add-deposit-btn");

addDepositBtn.addEventListener("click", () => {
  addDepositForm.classList.remove("hidden");
  addMemberForm.classList.add("hidden");
  addMealForm.classList.add("hidden");
  addCostForm.classList.add("hidden");
});

// Add meal form

const addMealForm = document.getElementById("add-meal-form");
const addMealBtn = document.getElementById("add-meal-btn");

addMealBtn.addEventListener("click", () => {
  addMealForm.classList.remove("hidden");
  addDepositForm.classList.add("hidden");
  addMemberForm.classList.add("hidden");
  addCostForm.classList.add("hidden");
});

// Add cost form

const addCostForm = document.getElementById("add-cost-form");
const addCostBtn = document.getElementById("add-cost-btn");

addCostBtn.addEventListener("click", () => {
  addCostForm.classList.remove("hidden");
  addDepositForm.classList.add("hidden");
  addMemberForm.classList.add("hidden");
  addMealForm.classList.add("hidden");
});

// Add member functionality

const addMemberSubmitBtn = document.getElementById("add-member-submit-btn"); // select add button
const memberContainer = document.getElementById("member-container"); // card container

addMemberSubmitBtn.addEventListener("click", function () {
  const memberNameInput = document.getElementById("member-name"); // name input
  const memberEmailInput = document.getElementById("member-email"); // email input

  const memberName = memberNameInput.value; // get name
  const memberEmail = memberEmailInput.value; // get email

  if (memberName === "" || memberEmail === "") {
    alert("Please fill all fields"); // validation
    return;
  }

  // create card
  const card = document.createElement("div");

  card.classList = "card w-60 bg-base-100 shadow-xl px-4";

  card.innerHTML = `
        <div class="member-card-body mt-5 flex flex-col gap-3 pb-5">
            <h2 class="card-title text-2xl text-[#19114e]">${memberName}</h2>

            <p class="text-sm text-gray-500">${memberEmail}</p>

            <p class="flex justify-between mt-4 text-[#3B25C1] font-semibold text-lg">
            Total Meal : <span>0</span></p>

            <p class="flex justify-between text-[#3B25C1] font-semibold text-lg">
            Total Deposit : <span>0</span></p>

            <p class="flex justify-between text-[#3B25C1] font-semibold text-lg">
            Total Cost : <span>0</span></p>

            <p class="flex justify-between text-[#3B25C1] font-semibold text-lg">
            Balance : <span>0</span></p>
        </div>
    `;

  // add card to container
  memberContainer.appendChild(card);
  // show success alert
  const successAlert = document.getElementById("success-alert");
  const successMessage = document.getElementById("success-message");

  successMessage.innerText = memberName + " successfully added!";
  successAlert.classList.remove("hidden");

  const closeAlertBtn = document.getElementById("close-alert");

  closeAlertBtn.addEventListener("click", function () {
    document.getElementById("success-alert").classList.add("hidden");
  });

  // clear input fields
  memberNameInput.value = "";
  memberEmailInput.value = "";

  // hide form
  addMemberForm.classList.add("hidden");
});
