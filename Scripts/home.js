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