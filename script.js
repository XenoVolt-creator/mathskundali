const mainContent = document.getElementById('main-content');

function navigate(view) {
  if (view === 'home' || view === 'tricks') {
    mainContent.innerHTML = `
      <section class="hero">
        <h2>Unlocking the Magic of Numbers</h2>
        <p>Welcome to Mathskundali, where we blend math and mystery!</p>
        <div class="tricks">
          <div class="card" onclick="showTrick(1)">Magic Trick 1</div>
          <div class="card" onclick="showTrick(2)">Magic Trick 2</div>
          <div class="card" onclick="showTrick(3)">Magic Trick 3</div>
          <div class="card" onclick="showTrick(4)">Magic Trick 4</div>
          <div class="card" onclick="showTrick(5)">Magic Trick 5</div>
          <div class="card" onclick="showTrick(6)">Magic Trick 6</div>
        </div>
      </section>
    `;
  } else if (view === 'about') {
    mainContent.innerHTML = `
      <section class="about">
        <h2>About Us</h2>
        <p>We love numbers and their magical powers. Explore the tricks that reveal the beauty of math!</p>
      </section>
    `;
  } else if (view === 'explanations') {
    mainContent.innerHTML = `
      <section>
        <h2>Explanations</h2>
        <p>Here you’ll learn the secret math behind each trick.</p>
        <!-- Add detailed trick explanations later -->
      </section>
    `;
  }
}

function showTrick(number) {
  if (number === 1) {
    mainContent.innerHTML = `
      <section class="trick centered">
        <h2>🔮 Magic Trick 1</h2>
        <p>Think of any number, enter it below, and witness the magic!</p>

        <input type="number" id="user-number" placeholder="Enter your number" />
        <button onclick="predictFive()">✨ Predict</button>

        <div id="magic-result" class="big-result"></div>
        <div id="explanation-link" style="margin-top: 1rem;"></div>
        <div id="explanation-box" class="explanation-steps"></div>

        <button onclick="navigate('tricks')" class="back-btn">← Back to Tricks</button>
      </section>
    `;
  } else if (number === 2) {
    mainContent.innerHTML = `
      <section class="trick centered">
        <h2>🔐 I Know Your Exact Date of Birth</h2>
        <p>Follow the secret steps, then enter your final number here.</p>

        <input type="number" id="dob-final-number" placeholder="Enter your final number" />
        <button onclick="revealDOB()">✨ Reveal</button>

        <div id="dob-result" class="big-result"></div>
        <div id="dob-explanation-link" style="margin-top: 1rem;"></div>
        <div id="dob-steps" class="explanation-steps"></div>

        <button onclick="navigate('tricks')" class="back-btn">← Back to Tricks</button>
      </section>
    `;
  } else {
    mainContent.innerHTML = `
      <section class="trick">
        <h2>Magic Trick ${number}</h2>
        <p>This is where Trick ${number}'s game or animation will go.</p>
        <button onclick="navigate('tricks')">🔙 Back to Tricks</button>
      </section>
    `;
  }
}

// Trick 1 logic
function predictFive() {
  const input = document.getElementById("user-number").value;
  const original = Number(input);
  const resultBox = document.getElementById("magic-result");
  const linkBox = document.getElementById("explanation-link");
  const stepsBox = document.getElementById("explanation-box");

  if (isNaN(original) || input === "") {
    resultBox.innerHTML = `<p>Please enter a valid number!</p>`;
    linkBox.innerHTML = "";
    stepsBox.innerHTML = "";
    return;
  }

  resultBox.innerHTML = `
    <h3>🎉 I predict your result is... <span style="color:#61dafb; font-size:2rem;">5</span>!</h3>
  `;

  linkBox.innerHTML = `
    <a href="#" onclick="showExplanation(${original})" style="color:#61dafb; text-decoration: underline;">Want to know how your answer is 5?</a>
  `;

  stepsBox.innerHTML = "";
}

function showExplanation(num) {
  const step1 = num * 2;
  const step2 = step1 + 10;
  const step3 = step2 / 2;
  const final = step3 - num;

  document.getElementById("explanation-box").innerHTML = `
    <div style="margin-top: 1rem;">
      <p>🧠 Step 1: ${num} × 2 = ${step1}</p>
      <p>➕ Step 2: ${step1} + 10 = ${step2}</p>
      <p>➗ Step 3: ${step2} ÷ 2 = ${step3}</p>
      <p>➖ Step 4: ${step3} − ${num} = <strong>${final}</strong></p>
    </div>
  `;
}

// Trick 2 logic
function revealDOB() {
  const input = document.getElementById("dob-final-number").value;
  const resultBox = document.getElementById("dob-result");
  const linkBox = document.getElementById("dob-explanation-link");
  const stepsBox = document.getElementById("dob-steps");

  const final = Number(input);

  if (isNaN(final) || input === "") {
    resultBox.innerHTML = `<p>Please enter a valid number!</p>`;
    linkBox.innerHTML = "";
    stepsBox.innerHTML = "";
    return;
  }

  const yearLast2 = final % 100;
  const step1 = (final - yearLast2) / 100;
  const day = step1 % 100;
  const step2 = (step1 - day) / 100;
  const month = step2 % 100;
  const year = (step2 - month) / 100;

  resultBox.innerHTML = `
    <h3>🎉 You were born on <strong>${String(day).padStart(2, "0")}/${String(month).padStart(2, "0")}/20${String(yearLast2).padStart(2, "0")}</strong></h3>
  `;

  linkBox.innerHTML = `
    <a href="#" onclick="showDOBExplanation(${final})" style="color:#61dafb; text-decoration: underline;">Want to know how?</a>
  `;

  stepsBox.innerHTML = "";
}

function showDOBExplanation(final) {
  const yearLast2 = final % 100;
  const step1 = (final - yearLast2) / 100;
  const day = step1 % 100;
  const step2 = (step1 - day) / 100;
  const month = step2 % 100;
  const year = (step2 - month) / 100;

  document.getElementById("dob-steps").innerHTML = `
    <div style="margin-top: 1rem;">
      <p>🧮 Final number: ${final}</p>
      <p>🔓 Step 1: Remove last 2 digits (year) → ${final} - ${yearLast2} = ${step1}</p>
      <p>🔓 Step 2: Divide by 100 → ${step1} ÷ 100 = ${step2}</p>
      <p>🔓 Step 3: Last 2 digits = month: ${month}</p>
      <p>🔓 Step 4: Divide again → ${step2} ÷ 100 = ${year}</p>
      <p>🔓 Step 5: Middle digits = day: ${day}</p>
      <p>✅ Final DOB: <strong>${String(day).padStart(2, "0")}/${String(month).padStart(2, "0")}/20${String(yearLast2).padStart(2, "0")}</strong></p>
    </div>
  `;
}
//trick 3 logic
function showZellerSteps(q, m, y) {
  let adjustedMonth = m;
  let adjustedYear = y;

  if (m < 3) {
    adjustedMonth += 12;
    adjustedYear -= 1;
  }

  const K = adjustedYear % 100;
  const J = Math.floor(adjustedYear / 100);

  const step1 = Math.floor((13 * (adjustedMonth + 1)) / 5);
  const step2 = Math.floor(K / 4);
  const step3 = Math.floor(J / 4);
  const step4 = 5 * J;
  const sum = q + step1 + K + step2 + step3 + step4;
  const h = sum % 7;

  const dayNames = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  document.getElementById("day-explanation").innerHTML = `
    <div style="margin-top: 1rem;">
      <p>Adjusted Month: ${adjustedMonth}, Adjusted Year: ${adjustedYear}</p>
      <p>K (year % 100) = ${K}</p>
      <p>J (year / 100) = ${J}</p>
      <p>Step 1: ⌊13(m+1)/5⌋ = ${step1}</p>
      <p>Step 2: ⌊K/4⌋ = ${step2}</p>
      <p>Step 3: ⌊J/4⌋ = ${step3}</p>
      <p>Step 4: 5 × ${J} = ${step4}</p>
      <p>Total Sum = ${sum}</p>
      <p>Sum mod 7 = ${h} → <strong>${dayNames[h]}</strong></p>
    </div>
  `;
}

mainContent.innerHTML = `
  <section class="explanations">
    <h2>Explanations</h2>

    <p><strong>Trick 1 – The Answer is Always 5:</strong><br>
    This trick uses simple arithmetic that works every time. No matter what number you start with, the operations (multiply, add, divide, subtract) are designed to cancel out your original number and leave you with 5. It’s a neat math illusion!</p>

    <p><strong>Trick 2 – I Know Your Full Date of Birth:</strong><br>
    You enter your day, month, and year separately. The website calculates a final number by merging them mathematically. When broken apart, that number reveals your exact DOB — because we already know how it was built!</p>

    <p><strong>Trick 3 – I Know the Day You Were Born:</strong><br>
    This trick uses a real mathematical formula called <em>Zeller’s Congruence</em>, which calculates the exact day of the week (e.g. Monday, Tuesday) for any date in history — even your birthday. It’s pure math magic!</p>

    <p><strong>Trick 4 – I Know Your Height:</strong><br>
    This trick takes your height and runs it through some clever steps that disguise it. After some reverse calculations, the system reveals your original height — and even converts it into feet and inches!</p>

    <p><strong>Trick 5 – I Know Your Phone Number:</strong><br>
    Here, you follow some secret math steps using your phone number and birth year. When you give the final number, the site reverses the operations and reveals your actual phone number — like magic!</p>

    <p><strong>Trick 6 – I Can Guess Your ATM PIN:</strong><br>
    You enter your 4-digit ATM PIN, and the system applies some specific math steps. After reversing them, it shows your original PIN back to you. Don’t worry — nothing is stored. It’s just a clever way to surprise you with your own input!</p>
  </section>
`;



document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    navigate('home');
  }, 60000000);
});
