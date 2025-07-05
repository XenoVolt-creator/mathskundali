    const mainContent = document.getElementById('main-content');

function navigate(view) {
  if (view === 'home') {
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
  } else if (view === 'tricks') {
    navigate('home');
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
  mainContent.innerHTML = `
    <section class="trick">
      <h2>Magic Trick ${number}</h2>
      <p>This is where Trick ${number}'s game or animation will go.</p>
      <button onclick="navigate('tricks')">🔙 Back to Tricks</button>
    </section>
  `;
}


// Load home on first visit
navigate('home');
