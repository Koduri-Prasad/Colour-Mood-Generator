const moods = [
  {
    name: "Be Calm 🧘‍♂️",
    color: "#a8dadc",
    quote: "In the middle of chaos, choose calm. Stillness is strength. Your peace is your superpower."
  },
  {
    name: "Be Happy 🌞",
    color: "#ffe066",
    quote: "Happiness radiates from within. Let it light up your world."
  },
  {
    name: "Be Passionate 🔥",
    color: "#ff6b6b",
    quote: "Let your passion set the world on fire. It’s the spark of greatness."
  },
  {
    name: "Be Creative 🎨",
    color: "#b388eb",
    quote: "Creativity is the soul speaking. Don’t hold it back — let it dance."
  },
  {
    name: "Be Confident!",
    color: "#4ecdc4",
    quote: "Confidence isn’t loud — it’s unshakable. Walk in your light."
  },
  {
    name: "Stay Focused 🎯",
    color: "#f4a261",
    quote: "Focus is your superpower. Chase your goals with clarity and courage."
  },
  {
    name: "Stay Grateful 🙏",
    color: "#d9ed92",
    quote: "Gratitude turns what we have into enough — and more."
  },
  {
    name: "Feel Inspired ✨",
    color: "#f7cad0",
    quote: "When you feel inspired, you inspire others. Keep glowing."
  },
  {
    name: "Stay Motivated!",
    color: "#90be6d",
    quote: "Stay hungry. Stay driven. One step forward is still progress."
  },
  {
    name: "Choose Balance!",
    color: "#cdb4db",
    quote: "Balance is not something you find, it’s something you create."
  }
];


function generateMood() {
  const random = moods[Math.floor(Math.random() * moods.length)];
  document.body.style.backgroundColor = random.color;
  document.getElementById("mood-name").innerText = random.name;
  document.getElementById("mood-quote").innerText = `"${random.quote}"`;
}
