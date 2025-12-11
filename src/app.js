import {
  achievements,
  escapeRooms,
  featuredChallenges,
  flashcards,
  hero,
  interviewTracks,
  marketSignals,
  puzzleLab,
  quickActions,
  skillTree,
  streaks
} from './data.js';

const views = {
  dashboard() {
    return `
      <section class="panel hero">
        <div>
          <p class="eyebrow">Guided by SAGE</p>
          <h1>${hero.headline}</h1>
          <p class="muted">${hero.subhead}</p>
          <div class="stat-row">
            ${hero.stats
              .map(
                (stat) => `
                  <div class="stat ${stat.accent ? 'accent' : ''}">
                    <p class="value">${stat.value}</p>
                    <p class="label">${stat.label}</p>
                  </div>
                `
              )
              .join('')}
          </div>
        </div>
        <div class="sage-card">
          <p class="eyebrow">SAGE says</p>
          <p class="quote">“Let’s secure your day-3 retention hook. Finish the SQL Heist and book your interview warm-up.”</p>
          <button class="pill">Book mock interview</button>
        </div>
      </section>

      <section class="grid two">
        <article class="panel">
          <header class="panel-head">
            <div>
              <p class="eyebrow">Featured missions</p>
              <h2>Today’s challenge stack</h2>
            </div>
            <button class="ghost">View all</button>
          </header>
          <div class="card-grid">
            ${featuredChallenges
              .map(
                (item) => `
                  <div class="card">
                    <div class="card-head">
                      <p class="badge">${item.badge}</p>
                      <p class="muted">${item.category} · ${item.difficulty} · ${item.time}</p>
                    </div>
                    <h3>${item.title}</h3>
                    <p class="muted">${item.summary}</p>
                    <div class="card-footer">
                      <button class="pill">Start</button>
                      <button class="ghost">Preview</button>
                    </div>
                  </div>
                `
              )
              .join('')}
          </div>
        </article>

        <article class="panel">
          <header class="panel-head">
            <div>
              <p class="eyebrow">Big Four habits</p>
              <h2>Daily rituals</h2>
            </div>
            <button class="ghost">Edit</button>
          </header>
          <ul class="list">
            ${quickActions
              .map(
                (item) => `
                  <li>
                    <div>
                      <p class="label">${item.label}</p>
                      <p class="muted">${item.value}</p>
                    </div>
                    <span class="status">${item.status}</span>
                  </li>
                `
              )
              .join('')}
          </ul>
        </article>
      </section>

      <section class="panel">
        <header class="panel-head">
          <div>
            <p class="eyebrow">Skill tree</p>
            <h2>Progressive mapping</h2>
          </div>
          <button class="ghost">View map</button>
        </header>
        <div class="progress-grid">
          ${skillTree
            .map(
              (skill) => `
                <div class="progress-card">
                  <div class="progress-head">
                    <p>${skill.label}</p>
                    <span>${skill.progress}%</span>
                  </div>
                  <div class="progress-bar" role="progressbar" aria-valuenow="${skill.progress}" aria-valuemin="0" aria-valuemax="100">
                    <span style="width:${skill.progress}%"></span>
                  </div>
                  <p class="muted">${skill.description}</p>
                </div>
              `
            )
            .join('')}
        </div>
      </section>
    `;
  },
  challenges() {
    return `
      <section class="panel">
        <header class="panel-head">
          <div>
            <p class="eyebrow">Challenge hub</p>
            <h2>Pick your arena</h2>
          </div>
          <div class="chip-row">
            <span class="chip active">SQL</span>
            <span class="chip">Python</span>
            <span class="chip">ML</span>
            <span class="chip">Visualization</span>
          </div>
        </header>
        <div class="card-grid">
          ${featuredChallenges
            .map(
              (item) => `
                <div class="card">
                  <div class="card-head">
                    <p class="badge">${item.badge}</p>
                    <p class="muted">${item.category} · ${item.difficulty} · ${item.time}</p>
                  </div>
                  <h3>${item.title}</h3>
                  <p class="muted">${item.summary}</p>
                  <div class="pill-row">
                    <span class="pill muted">Hints on</span>
                    <span class="pill muted">Checkpoints</span>
                    <span class="pill muted">Replayable</span>
                  </div>
                  <div class="card-footer">
                    <button class="pill">Start</button>
                    <button class="ghost">Details</button>
                  </div>
                </div>
              `
            )
            .join('')}
        </div>
      </section>

      <section class="grid two">
        <article class="panel">
          <header class="panel-head">
            <div>
              <p class="eyebrow">Escape rooms</p>
              <h2>Co-op or solo</h2>
            </div>
            <button class="ghost">Find a party</button>
          </header>
          <ul class="list">
            ${escapeRooms
              .map(
                (room) => `
                  <li>
                    <div>
                      <p class="label">${room.title}</p>
                      <p class="muted">${room.mode} · Difficulty ${room.difficulty}</p>
                    </div>
                    <span class="status">${room.eta}</span>
                  </li>
                `
              )
              .join('')}
          </ul>
        </article>

        <article class="panel">
          <header class="panel-head">
            <div>
              <p class="eyebrow">Interview battle</p>
              <h2>Supabase-powered realtime</h2>
            </div>
            <button class="ghost">Schedule</button>
          </header>
          <ul class="list">
            ${interviewTracks
              .map(
                (track) => `
                  <li>
                    <div>
                      <p class="label">${track.title}</p>
                      <p class="muted">${track.next}</p>
                    </div>
                    <span class="status">${track.status}</span>
                  </li>
                `
              )
              .join('')}
          </ul>
        </article>
      </section>
    `;
  },
  puzzleLab() {
    return `
      <section class="panel">
        <header class="panel-head">
          <div>
            <p class="eyebrow">Puzzle lab</p>
            <h2>Replayable drills</h2>
          </div>
          <button class="ghost">Create</button>
        </header>
        <div class="card-grid">
          ${puzzleLab
            .map(
              (puzzle) => `
                <div class="card">
                  <h3>${puzzle.title}</h3>
                  <p class="muted">${puzzle.category} · ${puzzle.duration}</p>
                  <div class="card-footer">
                    <button class="pill">Play</button>
                    <button class="ghost">Bookmark</button>
                  </div>
                </div>
              `
            )
            .join('')}
        </div>
      </section>

      <section class="panel flashcards">
        <header class="panel-head">
          <div>
            <p class="eyebrow">Adaptive flashcards</p>
            <h2>Spaced repetition</h2>
          </div>
          <div class="streak">
            <span>🔥 ${streaks.current} day streak</span>
            <span class="muted">Best ${streaks.best}</span>
          </div>
        </header>
        <div class="flashcard-grid">
          ${flashcards
            .map(
              (card) => `
                <article class="card">
                  <p class="label">Prompt</p>
                  <p>${card.front}</p>
                  <p class="muted">${card.back}</p>
                </article>
              `
            )
            .join('')}
        </div>
      </section>
    `;
  },
  marketPulse() {
    return `
      <section class="panel">
        <header class="panel-head">
          <div>
            <p class="eyebrow">Market pulse</p>
            <h2>Industry signals</h2>
          </div>
          <button class="ghost">Refresh</button>
        </header>
        <div class="signal-grid">
          ${marketSignals
            .map(
              (signal) => `
                <div class="signal ${signal.tone}">
                  <p class="label">${signal.label}</p>
                  <p class="value">${signal.trend}</p>
                  <p class="muted">Updated 5m ago</p>
                </div>
              `
            )
            .join('')}
        </div>
      </section>

      <section class="panel achievements">
        <header class="panel-head">
          <div>
            <p class="eyebrow">Portfolio builder</p>
            <h2>Proof of work</h2>
          </div>
          <button class="ghost">Share</button>
        </header>
        <div class="achievement-grid">
          ${achievements
            .map(
              (item) => `
                <article class="card">
                  <p class="icon">${item.icon}</p>
                  <h3>${item.title}</h3>
                  <p class="muted">${item.detail}</p>
                </article>
              `
            )
            .join('')}
        </div>
      </section>
    `;
  },
  profile() {
    return `
      <section class="panel">
        <header class="panel-head">
          <div>
            <p class="eyebrow">Profile</p>
            <h2>Your data persona</h2>
          </div>
          <button class="ghost">Edit profile</button>
        </header>
        <div class="profile-grid">
          <div class="profile-card">
            <div class="avatar" aria-hidden="true">👾</div>
            <div>
              <h3>Neo Learner</h3>
              <p class="muted">Intermediate · Prefers Python + SQL</p>
              <div class="chip-row">
                <span class="chip">Push notifications</span>
                <span class="chip">Daily goals</span>
                <span class="chip">Offline ready</span>
              </div>
            </div>
          </div>
          <div class="profile-meta">
            <div>
              <p class="label">Learning style</p>
              <p class="muted">Micro lessons, adaptive hints</p>
            </div>
            <div>
              <p class="label">Schedule</p>
              <p class="muted">Weekdays · 7-8 AM</p>
            </div>
            <div>
              <p class="label">Notifications</p>
              <p class="muted">Streak reminders, challenge unlocks</p>
            </div>
          </div>
        </div>
      </section>
    `;
  }
};

export function render(view = 'dashboard') {
  const app = document.getElementById('app');
  app.innerHTML = views[view]();
}
