// Selectors
const form = document.querySelector("#regForm");
const username = document.querySelector("#userName");
const email = document.querySelector("#usrEmail");
const password = document.querySelector("#userPass");
const age = document.querySelector("#userAge");

// Field
const fields = [
  {
    el: username,
    messages: {
      valueMissing: "Username is required.",
      tooShort: "Min 3 characters.",
      tooLong: "Max 20 characters.",
    },
  },
  {
    el: email,
    messages: {
      valueMissing: "Email is required.",
      typeMismatch: "Enter a valid email.",
    },
  },
  {
    el: password,
    messages: {
      valueMissing: "Password is required.",
      tooShort: "Min 6 characters.",
    },
  },
  {
    el: age,
    messages: {
      valueMissing: "Age is required.",
      rangeOverflow: "Max age is 80.",
      rangeUnderflow: "Min age is 16.",
    },
  },
];

fields.forEach(({ el, messages }) => {
  // On blur
  el.addEventListener("blur", function () {
    this.classList.add("touched");

    // Pick message
    const v = this.validity;
    const msg =
      (v.valueMissing && messages.valueMissing) ||
      (v.typeMismatch && messages.typeMismatch) ||
      (v.tooShort && messages.tooShort) ||
      (v.tooLong && messages.tooLong) ||
      (v.rangeOverflow && messages.rangeOverflow) ||
      (v.rangeUnderflow && messages.rangeUnderflow) ||
      "";

    // Set error
    this.setCustomValidity(msg);

    // Show tooltip
    if (!this.checkValidity()) {
      this.reportValidity();
    }
  });

  // Clear error
  el.addEventListener("input", function () {
    this.setCustomValidity("");
  });
});

// Prevent negative
age.addEventListener("input", function () {
  if (this.value < 0) this.value = "";
});

// On submit
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Check all
  if (!form.checkValidity()) {
    // Show first
    form.reportValidity();
    return;
  }

  // Regex check
  const nameVal = username.value.trim();
  if (!/^[A-Za-z\s]+$/.test(nameVal)) {
    // Letters only
    username.setCustomValidity("Username must contain letters only.");
    username.reportValidity();
    username.focus();
    return;
  }

  // Clear message
  username.setCustomValidity("");
  alert("Form submitted successfully!");
});
