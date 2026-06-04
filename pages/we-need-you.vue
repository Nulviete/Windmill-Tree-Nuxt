<template>
  <main class="open-call-page">
    <section class="open-call-hero">
      <p class="open-call-kicker">Call for participants</p>
      <h1>SMS - Stop. Motion. Speak.</h1>
      <p class="open-call-lead">
        A training course for youth workers and artists curious about creative
        teamwork, storytelling, and DIY stop-motion animation.
      </p>
    </section>

    <section class="open-call-shell" aria-label="Training course details">
      <div class="open-call-summary">
        <div class="open-call-summary-item">
          <span>Dates</span>
          <strong>24 February - 1 March 2026</strong>
        </div>
        <div class="open-call-summary-item">
          <span>Place</span>
          <strong>Trzcinsko, Poland</strong>
        </div>
        <div class="open-call-summary-item">
          <span>Language</span>
          <strong>English</strong>
        </div>
        <div class="open-call-summary-item">
          <span>Group</span>
          <strong>25 participants, age 20+</strong>
        </div>
      </div>

      <div class="open-call-layout">
        <article class="open-call-main">
          <section class="open-call-section">
            <p class="open-call-section-label">About the project</p>
            <h2>Creativity as a shared language</h2>
            <p>
              This training course explores DIY stop-motion animation as a
              creative and expressive tool. It creates space to talk about
              important topics while building deep connections within a group.
            </p>
          </section>

          <section class="open-call-section">
            <p class="open-call-section-label">Participants will</p>
            <ul class="open-call-list">
              <li>Explore stop-motion animation as a form of expression.</li>
              <li>Learn by doing, through hands-on creative work.</li>
              <li>
                Take a closer look at how the creative process happens in a
                group.
              </li>
              <li>
                Reflect on how creativity in a team can be facilitated,
                supported, and strengthened.
              </li>
            </ul>
          </section>

          <section class="open-call-section">
            <p class="open-call-section-label">Participant profile</p>
            <ul class="open-call-list">
              <li>
                Experience working with young people, or strong motivation to
                start.
              </li>
              <li>Basic to intermediate drawing or illustration skills.</li>
              <li>Communicative English.</li>
              <li>Ability to work and create in a team.</li>
            </ul>
          </section>
        </article>

        <aside class="open-call-sidebar" aria-label="Application information">
          <div class="open-call-deadline">
            <span>Application deadline</span>
            <strong>2 February</strong>
          </div>

          <div class="open-call-note">
            <h2>How to apply</h2>
            <p>Fill out the application form via the link shared with the call.</p>
          </div>

          <div class="open-call-note">
            <h2>Eligible countries</h2>
            <ul>
              <li>All EU Member States.</li>
              <li>
                Non-EU countries associated with Erasmus+: Iceland, Norway,
                North Macedonia, Serbia, Turkiye.
              </li>
              <li>Western Balkans.</li>
              <li>Eastern Partnership countries: Ukraine, Moldova.</li>
            </ul>
          </div>

          <p class="open-call-funded">
            This activity is funded by Erasmus+ with the support of the European
            Union.
          </p>
        </aside>
      </div>
    </section>
  </main>
</template>

<script setup>
usePageSeo({
  title: "We Need You | Windmill Tree Foundation",
  description:
    "Current call for participants and opportunities to join Windmill Tree Foundation projects, trainings, and international activities.",
});
</script>

<style lang="scss" scoped>
.open-call-page {
  padding: 130px 40px 80px;
}

.open-call-hero {
  max-width: 900px;
  margin: 0 auto 36px;
  text-align: center;
}

.open-call-kicker,
.open-call-section-label {
  color: #6c7600;
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.open-call-hero h1 {
  margin: 10px 0 18px;
  color: #111;
  font-size: clamp(44px, 7vw, 88px);
  font-weight: 850;
  line-height: 0.95;
}

.open-call-lead {
  max-width: 700px;
  margin: 0 auto;
  color: rgb(71, 70, 70);
  font-size: clamp(18px, 2.2vw, 24px);
  line-height: 1.5;
}

.open-call-shell {
  max-width: 1180px;
  margin: 0 auto;
}

.open-call-summary {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
  margin-bottom: 18px;
}

.open-call-summary-item,
.open-call-main,
.open-call-sidebar {
  border: 1px solid rgba(144, 169, 85, 0.22);
  background: rgba(255, 255, 255, 0.72);
  box-shadow: 0 18px 45px rgba(72, 55, 26, 0.08);
}

.open-call-summary-item {
  min-height: 112px;
  padding: 18px;
  border-radius: 18px;
}

.open-call-summary-item span,
.open-call-deadline span {
  display: block;
  margin-bottom: 8px;
  color: rgb(71, 70, 70);
  font-size: 0.86rem;
}

.open-call-summary-item strong,
.open-call-deadline strong {
  color: #111;
  font-size: clamp(1.05rem, 1.5vw, 1.35rem);
  line-height: 1.25;
}

.open-call-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(300px, 380px);
  gap: 18px;
  align-items: start;
}

.open-call-main,
.open-call-sidebar {
  border-radius: 24px;
}

.open-call-main {
  padding: clamp(24px, 4vw, 48px);
}

.open-call-section + .open-call-section {
  margin-top: 40px;
  padding-top: 36px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.open-call-section h2,
.open-call-note h2 {
  margin: 8px 0 14px;
  color: #111;
  font-size: clamp(26px, 3vw, 38px);
  line-height: 1.1;
}

.open-call-section p,
.open-call-list,
.open-call-note p,
.open-call-note ul,
.open-call-funded {
  color: rgb(41, 41, 41);
  font-size: 1.08rem;
  line-height: 1.65;
}

.open-call-list,
.open-call-note ul {
  padding-left: 1.2rem;
}

.open-call-list li + li,
.open-call-note li + li {
  margin-top: 10px;
}

.open-call-sidebar {
  position: sticky;
  top: 96px;
  padding: 22px;
}

.open-call-deadline {
  margin-bottom: 18px;
  padding: 22px;
  border-radius: 18px;
  background: var(--bg-light-green);
}

.open-call-note {
  padding: 20px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.open-call-note h2 {
  font-size: 1.35rem;
}

.open-call-funded {
  margin-top: 8px;
  padding: 16px;
  border-radius: 16px;
  background: rgba(144, 169, 85, 0.16);
  font-size: 0.98rem;
}

@media (max-width: 980px) {
  .open-call-page {
    padding: 96px 18px 56px;
  }

  .open-call-summary {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .open-call-layout {
    grid-template-columns: 1fr;
  }

  .open-call-sidebar {
    position: static;
  }
}

@media (max-width: 560px) {
  .open-call-summary {
    grid-template-columns: 1fr;
  }

  .open-call-summary-item {
    min-height: 0;
  }
}
</style>
