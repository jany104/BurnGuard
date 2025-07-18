    document.getElementById('burnoutScore').textContent =
      localStorage.getItem('burnoutScore') || 'No quiz taken yet.';

    document.getElementById('moodLog').textContent =
      localStorage.getItem('lastMood') || 'No mood tracked yet.';
