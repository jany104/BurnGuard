  document.getElementById("quizForm").addEventListener("submit", function (e) {
      e.preventDefault();
      const formData = new FormData(this);
      let score = 0;

      for (let i = 0; i < 10; i++) {
        let val = parseInt(formData.get(`q${i}`));
        if (i === 8 || i === 9) val = 4 - val; // reverse scoring
        score += val;
      }

      let message = "";
      if (score <= 12) {
        message = "🌿 Low Burnout Risk — You're doing great! Keep balancing your life.";
      } else if (score <= 24) {
        message = "⚠️ Moderate Burnout Risk — Take breaks, talk to someone, and try some recovery tips.";
      } else {
        message = "🔥 High Burnout Risk — Please prioritize rest and reach out for support.";
      }

      document.getElementById("result").innerHTML = `
        <h3>Your Burnout Score: ${score} / 40</h3>
        <p>${message}</p>
      `;
    });