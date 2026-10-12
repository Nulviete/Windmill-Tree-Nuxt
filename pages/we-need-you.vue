<template>
  <main class="open-call-page">
    <section class="open-call-hero" aria-labelledby="open-call-title">
      <div class="open-call-copy">
        <p class="open-call-kicker">Open calls</p>
        <h1 id="open-call-title">No open calls at the moment</h1>
        <p class="open-call-lead">
          We’re not currently accepting applications. Follow us on social media
          to hear about future youth exchanges, training courses and volunteering
          opportunities.
        </p>
        <p class="open-call-invitation">
          In the meantime, discover what we’ve been creating together.
        </p>
        <div class="open-call-actions">
          <NuxtLink to="/projects" class="open-call-button open-call-button--primary">
            Explore our projects
            <span aria-hidden="true">→</span>
          </NuxtLink>
          <a
            href="https://www.instagram.com/foundation_windmill_tree/"
            target="_blank"
            rel="noopener noreferrer"
            class="open-call-button open-call-button--secondary"
          >
            Follow us on Instagram
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <figure class="open-call-photo">
        <img
          src="~/assets/our-mission/our-mission-2.png"
          alt="Project participants forming an arch with their arms during a group activity outdoors"
          width="677"
          height="412"
          decoding="async"
        >
        <figcaption>Shared experiences. New connections. Windmill Tree.</figcaption>
      </figure>
    </section>
  </main>
</template>

<script setup>
usePageSeo({
  title: 'Open Calls | Windmill Tree Foundation',
  description:
    'There are no open calls at the moment. Explore Windmill Tree Foundation projects and follow us for future youth exchanges, training courses and volunteering opportunities.',
})
</script>

<style scoped>
.open-call-page {
  padding: 160px 40px 96px;
}

.open-call-hero {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
  align-items: center;
  gap: clamp(32px, 5vw, 72px);
  max-width: 1200px;
  margin: 0 auto;
}

.open-call-kicker {
  margin-bottom: 16px;
  color: #526000;
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.open-call-copy h1 {
  margin: 0 0 24px;
  color: #183e2b;
  font-size: clamp(40px, 5vw, 68px);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.035em;
  text-wrap: balance;
}

.open-call-lead,
.open-call-invitation {
  max-width: 560px;
  color: #405348;
  font-size: 18px;
  line-height: 1.7;
}

.open-call-invitation {
  margin-top: 18px;
}

.open-call-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 30px;
}

.open-call-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-height: 48px;
  padding: 12px 20px;
  border: 1px solid #244d35;
  border-radius: 999px;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.4;
  text-align: center;
  text-decoration: none;
}

.open-call-button--primary {
  background: #244d35;
  color: #fff;
}

.open-call-button--primary:hover {
  background: #183e2b;
}

.open-call-button--secondary {
  background: rgb(255 255 255 / 50%);
  color: #244d35;
}

.open-call-button--secondary:hover {
  background: #fff;
}

.open-call-button:focus-visible {
  outline: 3px solid #244d35;
  outline-offset: 4px;
}

.open-call-photo {
  margin: 0;
}

.open-call-photo img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 28px;
}

.open-call-photo figcaption {
  margin-top: 16px;
  color: #405348;
  font-size: 14px;
  line-height: 1.6;
  text-align: center;
}

@media (max-width: 900px) {
  .open-call-page {
    padding: 120px 20px 64px;
  }

  .open-call-hero {
    grid-template-columns: 1fr;
    max-width: 640px;
    gap: 36px;
  }

  .open-call-lead,
  .open-call-invitation {
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .open-call-actions {
    flex-direction: column;
  }
}
</style>
