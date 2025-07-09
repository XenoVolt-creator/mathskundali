const mainContent = document.getElementById('main-content');

function navigate(view) {
  let scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

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
  } else if (view === 'simple' || view === 'hard' || view === 'complex') {
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
          { id: 11, name: "2-digit Number Trick (Coming Soon)" }
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
        <button onclick="navigate('home')" class="back-btn">← Back to Categories</button>
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
      </section>
    `;
    scrollToTop();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    setTimeout(() => {
      loader.style.display = "none";
      navigate('home');
    }, 3000); // 3-second loader
  } else {
    navigate('home');
  }
});
