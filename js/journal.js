const form = document.getElementById('journalForm');
    const saved = document.getElementById('savedEntries');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const mood = document.getElementById('mood').value;
      const entry = document.getElementById('entry').value;
      const date = new Date().toLocaleString();
      const journal = { mood, entry, date };

      let logs = JSON.parse(localStorage.getItem('journalLogs')) || [];
      logs.unshift(journal);
      localStorage.setItem('journalLogs', JSON.stringify(logs));
      displayLogs();
      form.reset();
    });

    function displayLogs() {
      const logs = JSON.parse(localStorage.getItem('journalLogs')) || [];
      saved.innerHTML = '<h3>🗂️ Previous Entries</h3>' + logs.map(log =>
        `<div class='quote-box'><b>${log.date}</b> — ${log.mood}<br>${log.entry}</div>`
      ).join('');
    }

    displayLogs();