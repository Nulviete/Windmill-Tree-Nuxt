<template>
  <div class="documents-page">
    <div class="documents-grid">
      <section class="documents-panel documents-panel--main">
        <div class="panel-heading">
          <p class="panel-kicker">Foundation archive</p>
          <h1>Documents</h1>
        </div>

        <div class="document-groups">
          <div
            v-for="group in documentGroups"
            :key="group.title"
            class="document-group"
          >
            <h2>{{ group.title }}</h2>
            <ul>
              <li v-for="item in group.items" :key="item.href">
                <a :href="item.href" target="_blank" rel="noreferrer">
                  <span>{{ item.label }}</span>
                  <span class="link-mark" aria-hidden="true">PDF</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <aside class="documents-panel documents-panel--toolbox">
        <div class="panel-heading">
          <p class="panel-kicker">Resources</p>
          <h1>Toolbox</h1>
        </div>

        <ul class="toolbox-list">
          <li v-for="item in toolboxItems" :key="item.href">
            <a :href="item.href" target="_blank" rel="noreferrer">
              <span>{{ item.label }}</span>
              <span class="link-mark" aria-hidden="true">PDF</span>
            </a>
          </li>
        </ul>
      </aside>
    </div>
  </div>
</template>

<script setup>
const documentGroups = [
  {
    title: "General documents",
    items: [
      {
        label: "Our statute",
        href: "/docs/STATUT_AKTUALNY_2026.pdf",
      },
      {
        label: "Child Protection Policy",
        href: "/docs/POLITYKA_OCHRONY_MALOLETNICH.pdf",
      },
    ],
  },
  {
    title: "Reports of foundation activities",
    items: [
      {
        label: "2024 Sprawozdanie merytoryczne",
        href: "/docs/2024_Sprawozdanie_merytoryczne.pdf",
      },
      {
        label: "2025 Sprawozdanie merytoryczne",
        href: "/docs/2025_Sprawozdanie_merytoryczne.pdf",
      },
    ],
  },
  {
    title: "Financial Statements",
    items: [
      {
        label: "2024 Sprawozdanie finansowe",
        href: "/docs/2024_Sprawozdanie_finansowe.pdf",
      },
      {
        label: "2025 Sprawozdanie finansowe",
        href: "/docs/2025_Sprawozdanie_finansowe.pdf",
      },
    ],
  },
];

const toolboxItems = [
  {
    label: "Przewodnik Kregi kobiece (Polish and Ukrainian language)",
    href: "/docs/przewodnik.pdf",
  },
  {
    label: "Scenariusze: Trening Umiejetnosci Spolecznych (Polish and Ukrainian language)",
    href: "/docs/SCENARIUSZE_Trening_Umiejetnosci_Spolecznych-PL_UA.pdf",
  },
];

usePageSeo({
  title: "Documents | Windmill Tree Foundation",
  description:
    "Browse statutes, reports, financial statements, policies, and downloadable documents published by Windmill Tree Foundation.",
});
</script>

<style lang="scss" scoped>
.documents-page {
  padding: 128px 40px 96px;
  background:
    radial-gradient(circle at top left, rgba(236, 243, 158, 0.48), transparent 34%),
    linear-gradient(180deg, rgba(219, 235, 229, 0.6), rgba(255, 255, 255, 0));
}

.documents-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
  max-width: 1180px;
  margin: 0px auto;
  align-items: start;
}

.documents-panel {
  border: 1px solid rgba(32, 44, 28, 0.08);
  border-radius: 28px;
  box-shadow: 0 24px 70px rgba(22, 32, 19, 0.1);
  overflow: hidden;
}

.documents-panel--main {
  padding: 30px;
  background: rgba(255, 255, 255, 0.9);
}

.documents-panel--toolbox {
  padding: 30px;
  background: linear-gradient(145deg, rgba(236, 243, 158, 0.92), rgba(144, 169, 85, 0.18));
}

.panel-heading {
  margin-bottom: 28px;
}

.panel-kicker {
  margin-bottom: 8px;
  color: rgba(31, 28, 23, 0.58);
  font-size: 13px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.panel-heading h1 {
  color: #1f1c17;
  font-size: clamp(38px, 5vw, 64px);
  line-height: 1;
  font-weight: 700;
}

.document-groups {
  display: grid;
  gap: 28px;
}

.document-group {
  padding-top: 26px;
  border-top: 1px solid rgba(31, 28, 23, 0.12);
}

.document-group:first-child {
  padding-top: 0;
  border-top: 0;
}

.document-group h2 {
  margin-bottom: 14px;
  color: #1f1c17;
  font-size: clamp(21px, 2vw, 28px);
  line-height: 1.2;
  font-weight: 650;
}

.document-group ul,
.toolbox-list {
  display: grid;
  gap: 10px;
}

.document-group li,
.toolbox-list li {
  min-width: 0;
}

.document-group a,
.toolbox-list a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  min-width: 0;
  padding: 15px 16px;
  border: 1px solid rgba(31, 28, 23, 0.08);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.7);
  color: #1f1c17;
  font-size: 18px;
  line-height: 1.35;
  text-decoration: none;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease,
    background-color 0.2s ease;
}

.document-group a:hover,
.toolbox-list a:hover,
.document-group a:focus-visible,
.toolbox-list a:focus-visible {
  border-color: rgba(144, 169, 85, 0.52);
  background: #ffffff;
  box-shadow: 0 14px 34px rgba(22, 32, 19, 0.1);
  transform: translateY(-2px);
}

.document-group a:focus-visible,
.toolbox-list a:focus-visible {
  outline: 3px solid rgba(144, 169, 85, 0.24);
  outline-offset: 3px;
}

.link-mark {
  flex: 0 0 auto;
  padding: 5px 9px;
  border-radius: 999px;
  background: rgba(144, 169, 85, 0.18);
  color: #405018;
  font-size: 12px;
  line-height: 1;
  font-weight: 700;
  letter-spacing: 0.08em;
}

@media (max-width: 900px) {
  .documents-page {
    padding: 88px 16px 56px;
  }

  .documents-grid {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .documents-panel,
  .documents-panel--main,
  .documents-panel--toolbox {
    padding: 22px;
    border-radius: 20px;
  }

  .documents-panel--toolbox {
    position: static;
  }

  .panel-heading {
    margin-bottom: 20px;
  }

  .panel-kicker {
    font-size: 11px;
  }

  .document-groups {
    gap: 22px;
  }

  .document-group {
    padding-top: 22px;
  }

  .document-group a,
  .toolbox-list a {
    align-items: flex-start;
    padding: 13px 14px;
    border-radius: 14px;
    font-size: 14px;
  }
}
</style>
