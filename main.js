const form = document.querySelector("#user-login-form");
const personalNumberInput = document.querySelector('input[name="personal-number"]');
const mobileNumberInput = document.querySelector('input[name="mobile-number"]');
const position = document.querySelector('input[name="position"]');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(validatePersonalNumber());
  console.log(validateMobileNumber());
  console.log(validateposition());
  console.log(personalNumberInput.value);
  console.log(mobileNumberInput.value);
  console.log(position.value);
});

function validatePersonalNumber() {
  if (!personalNumberInput.value.length < 12 && !personalNumberInput.value.includes([0 - 9])) {
    personalNumberInput.classList.add("has-error");
    personalNumberInput.parentNode.querySelector(".error-message").innerText = "min 11 number";
    return false;
  }
  personalNumberInput.classList.remove("has-error");
  personalNumberInput.parentNode.querySelector(".error-message").innerText = "";
  return true;
}

function validateMobileNumber() {
  if (mobileNumberInput.value.length < 9 && !personalNumberInput.value.includes([0 - 9])) {
    mobileNumberInput.classList.add("has-error");
    mobileNumberInput.parentNode.querySelector(".error-message").innerText = "min 9 number";
    return false;
  }
  mobileNumberInput.classList.remove("has-error");
  mobileNumberInput.parentNode.querySelector(".error-message").innerText = "";
  return true;
}

function validateposition() {
  if (position.value.length < 30) {
    position.classList.add("has-error");
    position.parentNode.querySelector(".error-message").innerText = "min 30 number";
    return false;
  }
  position.classList.remove("has-error");
  position.parentNode.querySelector(".error-message").innerText = "";
  return true;
}
const modalOpenBtn = document.querySelector("#open-modal");
modalOpenBtn.addEventListener("click", () => {
  openModal(".my-modal");
});

function openModal(modalSelector) {
  const modalNode = document.querySelector(modalSelector);
  const form = document.querySelector("#user-login-form");
  const personalNumberInput = document.querySelector('input[name="personal-number"]');
  const mobileNumberInput = document.querySelector('input[name="mobile-number"]');
  const position = document.querySelector('input[name="position"]');

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(validatePersonalNumber());
    console.log(validateMobileNumber());
    console.log(validateposition());
    console.log(personalNumberInput.value);
    console.log(mobileNumberInput.value);
    console.log(position.value);
  });

  function validatePersonalNumber() {
    if (!personalNumberInput.value.length < 12 && !personalNumberInput.value.includes([0 - 9])) {
      personalNumberInput.classList.add("has-error");
      personalNumberInput.parentNode.querySelector(".error-message").innerText = "min 11 number";
      return false;
    }
    personalNumberInput.classList.remove("has-error");
    personalNumberInput.parentNode.querySelector(".error-message").innerText = "";
    return true;
  }

  function validateMobileNumber() {
    if (mobileNumberInput.value.length < 9 && !personalNumberInput.value.includes([0 - 9])) {
      mobileNumberInput.classList.add("has-error");
      mobileNumberInput.parentNode.querySelector(".error-message").innerText = "min 9 number";
      return false;
    }
    mobileNumberInput.classList.remove("has-error");
    mobileNumberInput.parentNode.querySelector(".error-message").innerText = "";
    return true;
  }

  function validateposition() {
    if (position.value.length < 30) {
      position.classList.add("has-error");
      position.parentNode.querySelector(".error-message").innerText = "min 30 number";
      return false;
    }
    position.classList.remove("has-error");
    position.parentNode.querySelector(".error-message").innerText = "";
    return true;
  }
  const modalOpenBtn = document.querySelector("#open-modal");
  modalOpenBtn.addEventListener("click", () => {
    openModal(".my-modal");
  });

  function openModal(modalSelector) {
    const modalNode = document.querySelector(modalSelector);
    modalNode.classList.add("visible");
    const modalCloseBtn = modalNode.querySelector(".modal-close");
    modalCloseBtn.addEventListener("click", () => {
      closeModal(modalSelector);
    });
  }

  function closeModal(modalSelector) {
    const modalNode = document.querySelector(modalSelector);
    modalNode.classList.remove("visible");
  }

  modalNode.classList.add("visible");
  const modalCloseBtn = modalNode.querySelector(".modal-close");
  modalCloseBtn.addEventListener("click", () => {
    closeModal(modalSelector);
  });
}

function closeModal(modalSelector) {
  const modalNode = document.querySelector(modalSelector);
  modalNode.classList.remove("visible");
}
