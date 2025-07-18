const mainContent = document.getElementById('main-content');

function navigate(view) {
  if (!mainContent) {
    console.error("Missing #main-content element.");
    return;
  }

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  if (view === 'home') {
    mainContent.innerHTML = `
      <section class="hero">
        <h2>Unlocking the Magic of Numbers</h2>
        <p>Welcome to Mathskundali, where we blend mathematical prediction with magic!</p>
        <div class="category-buttons">
          <button onclick="navigate('simple')" data-type="simple">Simple Tricks</button>
          <button onclick="navigate('hard')" data-type="hard">Hard Tricks</button>
          <button onclick="navigate('complex')" data-type="complex">Complex Tricks</button>
        </div>
      </section>
    `;
    scrollToTop();

  } else if (['simple', 'hard', 'complex'].includes(view)) {
    const categories = {
      simple: {
        title: "Simple Tricks",
        tricks: [
          { id: 1, name: "The Number is Always 5" },
          { id: 2, name: "I Know Your Full Date of Birth" },
          { id: 7, name: "Magic Age Trick (Coming Soon)" }
        ]
      },
      hard: {
        title: "Hard Tricks",
        tricks: [
          { id: 3, name: "I Know the Day You Were Born" },
          { id: 4, name: "I Know Your Height" },
          { id: 9, name: "Birthday Pattern (Coming Soon)" }
        ]
      },
      complex: {
        title: "Complex Tricks",
        tricks: [
          { id: 5, name: "I Know Your Phone Number" },
          { id: 6, name: "I Can Guess Your ATM PIN" },
          { id: 11, name: "ISO Week Number Calculator" }
        ]
      }
    };

    const selected = categories[view];
    const cardsHTML = selected.tricks.map(trick => `
      <div class="card">
        <strong>${trick.name}</strong><br>
        <button onclick="showTrick(${trick.id})">Play the Trick</button>
      </div>
    `).join("");

    mainContent.innerHTML = `
      <section class="tricks">
        <h2>${selected.title}</h2>
        <div class="tricks-grid">${cardsHTML}</div>
        <div style="display: flex; justify-content: space-between; margin-top: 20px;">
          <button onclick="navigate('home')" class="back-btn">← Back to Categories</button>
          ${view === 'complex' ? `<button onclick="alert('Professor-only section coming soon!')" class="prof-btn">More Complex Tricks (Only for Professors)</button>` : ''}
        </div>
      </section>
    `;
    scrollToTop();

  } else if (view === 'about') {
    mainContent.innerHTML = `
      <section class="about">
        <h2>About Us</h2>
        <p>We’re a group of students passionate about the mystical beauty of math. Mathskundali is our attempt to bring prediction and fun together through numbers. Our team — <strong>Bisaj Khadka</strong>, <strong>Yubaraj Yadav</strong>, and <strong>Samuel Aryal</strong> — created <strong>Mathskundali</strong> to show how math can surprise, predict, and entertain!</p>
        <p>Through 6 mind-blowing tricks, we’ve blended logic, numbers, and curiosity into one fun experience. Whether you're a math lover or a curious visitor, Mathskundali has something magical for you!</p>
      </section>
    `;
    scrollToTop();

  } else if (view === 'explanations') {
    mainContent.innerHTML = `
      <section class="explanations">
        <h2>Explanations</h2>
        <p><strong>Trick 1 – The Answer is Always 5:</strong><br>This trick uses simple arithmetic that works every time. No matter what number you start with, the operations are designed to cancel out your original number and leave you with 5.</p><br>
        <p><strong>Trick 2 – I Know Your Full Date of Birth:</strong><br>You enter your day, month, and year separately. The website calculates a final number by merging them mathematically. When broken apart, that number reveals your exact DOB!</p><br>
        <p><strong>Trick 3 – I Know the Day You Were Born:</strong><br>This trick uses a real formula called Zeller’s Congruence to calculate the day of the week you were born based on your full DOB.</p><br>
        <p><strong>Trick 4 – I Know Your Height:</strong><br>You enter a secret final number based on steps we give you. Behind the scenes, the site reverses those steps to find your exact height and shows it in both cm and feet/inches!</p><br>
        <p><strong>Trick 5 – I Know Your Phone Number:</strong><br>After you do a few math steps using your phone number and birth year, we reverse those steps to reveal your phone number!</p><br>
        <p><strong>Trick 6 – I Can Guess Your ATM PIN:</strong><br>You enter your PIN and do some steps. The site applies reverse logic and shows your exact PIN. No data is stored — it’s just a fun math trick!</p><br>
        <p><strong>Bonus Trick – ISO Week Number Calculator:</strong><br>Calculate the ISO week number of any Gregorian calendar date.</p>
      </section>
    `;
    scrollToTop();

  } else {
    mainContent.innerHTML = `<section><h2>404 Not Found</h2><p>The page you requested does not exist.</p></section>`;
  }
}

function showTrick(id) {
  switch (id) {
    case 1:
      mainContent.innerHTML = `
        <section class="trick centered">
          <h2 style="color:#61dafb">The Number is Always 5</h2>
          <p>Choose any number in your mind, then follow these steps:</p>
          <div class="explanation-steps">
            <ol>
              <li>Multiply your number by 2</li>
              <li>Add 10</li>
              <li>Divide by 2</li>
              <li>Subtract your original number</li>
            </ol>
          </div>
          <p class="big-result">Your answer is <strong>5</strong> 🎉</p>
          <button onclick="navigate('simple')" class="back-btn">← Back to Tricks</button>
        </section>
      `;
      break;

    case 3:
      showZellersFormula();
      break;

    case 11:
      showIsoWeekCalculator();
      break;

    default:
      mainContent.innerHTML = `
        <section class="trick center">
          <h2>Coming Soon</h2>
          <p>This trick is under development.</p>
          <button onclick="navigate('complex')" class="back-btn">← Back to Tricks</button>
        </section>
      `;
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showZellersFormula() {
  mainContent.innerHTML = `
    <section class="trick">
      <h2 style="color:#61dafb">Zeller’s Formula - Day of the Week Calculator</h2>
      <p>Enter your birth date to calculate the day of the week you were born:</p>
      <div class="dob-calc">
        <label for="zeller-year">Year (AD):</label>
        <input type="number" id="zeller-year" placeholder="2023" />
        <label for="zeller-month">Month (1-12):</label>
        <input type="number" id="zeller-month" placeholder="1-12" />
        <label for="zeller-day">Day (1-31):</label>
        <input type="number" id="zeller-day" placeholder="1-31" />
        <button class="neon-btn" id="calculate-day">Calculate Day of Week</button>
        <div id="zellers-result" class="dob-output"></div>
      </div>
      <button onclick="navigate('hard')" class="back-btn" style="margin-top: 20px;">← Back to Tricks</button>
    </section>
  `;

  document.getElementById('calculate-day').addEventListener('click', () => {
    const year = parseInt(document.getElementById('zeller-year').value, 10);
    let month = parseInt(document.getElementById('zeller-month').value, 10);
    const day = parseInt(document.getElementById('zeller-day').value, 10);

    if (
      isNaN(year) || isNaN(month) || isNaN(day) ||
      year < 1600 || year > 2100 ||
      month < 1 || month > 12 ||
      day < 1 || day > 31
    ) {
      alert("Please enter a valid AD date.");
      return;
    }

    if (month < 3) {
      month += 12;
      year -= 1;
    }

    const K = year % 100;
    const J = Math.floor(year / 100);
    const h = (day + Math.floor(13 * (month + 1) / 5) + K +
      Math.floor(K / 4) + Math.floor(J / 4) + 5 * J) % 7;

    const days = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const dayOfWeek = days[h];

    document.getElementById('zellers-result').textContent = `The day of the week is: ${dayOfWeek}`;
  });
}

function showIsoWeekCalculator() {
  mainContent.innerHTML = `
    <section class="trick">
      <h2 style="color:#61dafb">ISO Week Number Calculator</h2>
      <p>Enter any Gregorian date to find its ISO week number and year:</p>
      <div class="dob-calc">
        <label for="iso-year">Year (AD):</label>
        <input type="number" id="iso-year" placeholder="2025" />
        <label for="iso-month">Month (1-12):</label>
        <input type="number" id="iso-month" placeholder="1-12" />
        <label for="iso-day">Day (1-31):</label>
        <input type="number" id="iso-day" placeholder="1-31" />
        <button class="neon-btn" id="calculate-iso-week">Calculate ISO Week Number</button>
        <div id="iso-result" class="dob-output"></div>
      </div>
      <button onclick="navigate('complex')" class="back-btn" style="margin-top: 20px;">← Back to Tricks</button>
    </section>
  `;

  document.getElementById('calculate-iso-week').addEventListener('click', () => {
    const year = parseInt(document.getElementById('iso-year').value, 10);
    const month = parseInt(document.getElementById('iso-month').value, 10);
    const day = parseInt(document.getElementById('iso-day').value, 10);

    if (
      isNaN(year) || isNaN(month) || isNaN(day) ||
      year < 1600 || year > 2100 ||
      month < 1 || month > 12 ||
      day < 1 || day > 31
    ) {
      alert("Please enter a valid date.");
      return;
    }

    const isoData = getISOWeek(year, month, day);
    document.getElementById('iso-result').textContent = 
      `ISO Week Number: ${isoData.week}, ISO Year: ${isoData.year}`;
  });
}

function getISOWeek(year, month, day) {
  const date = new Date(Date.UTC(year, month - 1, day));
  date.setUTCDate(date.getUTCDate() + 4 - (date.getUTCDay() || 7));
  const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil((((date - yearStart) / 86400000) + 1) / 7);
  return { year: date.getUTCFullYear(), week: weekNo };
}

document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    setTimeout(() => {
      loader.style.display = "none";
      navigate('home');
    }, 3000);
  } else {
    navigate('home');
  }
});
