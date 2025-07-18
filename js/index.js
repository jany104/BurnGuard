// Load burnout score
const burnoutScore = localStorage.getItem('burnoutScore');
document.getElementById('burnoutDisplay').textContent = burnoutScore
  ? `${burnoutScore} / 30`
  : 'No score yet. Take the quiz!';

// Save emoji mood
function saveMood(emoji) {
  localStorage.setItem('lastMood', emoji);
  document.getElementById('lastMood').textContent = `Last mood: ${emoji}`;
}

// Load last mood on page load
const lastMood = localStorage.getItem('lastMood');
if (lastMood) {
  document.getElementById('lastMood').textContent = `Last mood: ${lastMood}`;
}

// Load motivational quotes
fetch('data/quotes.json')
  .then(res => res.json())
  .then(quotes => {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quote-text').textContent = `"${random.text}"`;
    document.getElementById('quote-author').textContent = `– ${random.author}`;
  });
