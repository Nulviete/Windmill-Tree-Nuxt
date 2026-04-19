<template>
  <section v-if="members.length" class="our-team-page" @click="closeAll">
    <div class="our-team-bg our-team-bg--top" aria-hidden="true" />
    <div class="our-team-bg our-team-bg--middle" aria-hidden="true" />
    <div class="our-team-bg our-team-bg--bottom" aria-hidden="true" />

    <RevealOnScroll :distance="26">
      <header class="our-team-header">
        <p class="our-team-kicker">People behind the foundation</p>
        <h1 class="our-team-title">Our Team</h1>
        <p class="our-team-intro">
          Meet the board, coordinators, creatives, volunteers, and supporters
          who shape Windmill Tree day by day.
        </p>
      </header>
    </RevealOnScroll>

    <RevealOnScroll
      v-for="(section, index) in sections"
      :key="section.id"
      :delay="index * 40"
      :distance="24"
    >
      <section class="our-team-section" :aria-labelledby="`${section.id}-title`">
        <div class="our-team-section-head">
          <p v-if="section.kicker" class="our-team-section-kicker">
            {{ section.kicker }}
          </p>
          <h2 :id="`${section.id}-title`" class="our-team-section-title">
            {{ section.title }}
          </h2>
        </div>

        <div class="our-team-grid">
          <RevealOnScroll
            v-for="(member, memberIndex) in section.members"
            :key="member.id"
            :delay="getRowDelay(memberIndex)"
            :distance="20"
            class="coreMembers"
          >
            <MemberCard
              :member="member"
              :open="openMemberId === member.id"
              @toggle="handleToggle(member.id)"
              class="h-auto"
            />
          </RevealOnScroll>
        </div>
      </section>
    </RevealOnScroll>
  </section>

  <div v-else class="our-team-loading">
    <LoadingSpinner />
  </div>
</template>

<script setup>
import LoadingSpinner from "~/components/Icons/LoadingSpinner.vue";

const { data } = await useAsyncData(
  "team-members",
  () =>
    $fetch("/api/team", {
      headers: useRequestHeaders(["cookie"]),
    }),
  {
    default: () => ({ data: [] }),
  }
);

const members = computed(() =>
  Array.isArray(data.value?.data) ? data.value.data : []
);

const sections = computed(() =>
  [
    {
      id: "board",
      title: "The Board of the Foundation",
      members: members.value.filter((member) => member.position === "board"),
    },
    {
      id: "council",
      title: "The Foundation Council",
      members: members.value.filter((member) => member.position === "council"),
    },
    {
      id: "coordinators",
      title: "Coordinators",
      members: members.value.filter(
        (member) => member.position === "coordinator"
      ),
    },
    {
      id: "creative-team",
      title: "Creative Team",
      members: members.value.filter((member) => member.position === "creative"),
    },
    {
      id: "mental-support",
      title: "Mental Support",
      members: members.value.filter((member) => member.position === "mental"),
    },
    {
      id: "current-volunteers",
      kicker: "Long-term volunteers",
      title: "Current",
      members: members.value.filter((member) => member.status === "present"),
    },
    {
      id: "past-volunteers",
      title: "Past",
      members: members.value.filter((member) => member.status === "past"),
    },
    {
      id: "partner-volunteers",
      title: "Volunteers of partner organizations",
      members: members.value.filter(
        (member) => member.position === "partnerVolunteer"
      ),
    },
  ].filter((section) => section.members.length)
);

const openMemberId = ref(null);
const cardsPerRow = ref(3);

const handleToggle = (id) => {
  openMemberId.value = openMemberId.value === id ? null : id;
};

const closeAll = () => {
  openMemberId.value = null;
};

const updateCardsPerRow = () => {
  if (window.innerWidth <= 900) {
    cardsPerRow.value = 2;
    return;
  }

  cardsPerRow.value = 3;
};

const getRowDelay = (memberIndex) =>
  Math.floor(memberIndex / cardsPerRow.value) * 130;

onMounted(() => {
  updateCardsPerRow();
  window.addEventListener("resize", updateCardsPerRow);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateCardsPerRow);
});
</script>

<style lang="scss" scoped>
.our-team-page {
  position: relative;
  overflow: hidden;
  padding: 128px 24px 88px;
  background:
    linear-gradient(180deg, #dbebe5 0%, #dbebe5 34%, #dbebe5 68%, #dbebe5 100%);
}

.our-team-bg {
  position: absolute;
  border-radius: 999px;
  filter: blur(70px);
  opacity: 0.55;
  pointer-events: none;
}

.our-team-bg--top {
  top: 24px;
  left: -80px;
  width: 280px;
  height: 280px;
  background: rgba(144, 169, 85, 0.22);
}

.our-team-bg--middle {
  top: 28%;
  right: -90px;
  width: 320px;
  height: 320px;
  background: rgba(129, 177, 255, 0.18);
}

.our-team-bg--bottom {
  bottom: 6%;
  left: 18%;
  width: 360px;
  height: 240px;
  background: rgba(214, 231, 225, 0.24);
}

.our-team-header,
.our-team-section {
  position: relative;
  z-index: 1;
}

.our-team-header {
  max-width: 760px;
  margin: 0 auto 54px;
  text-align: center;
}

.our-team-kicker,
.our-team-section-kicker {
  margin-bottom: 8px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #6c7600;
}

.our-team-kicker {
  font-size: 13px;
}

.our-team-title {
  margin-bottom: 14px;
  font-size: clamp(36px, 5vw, 64px);
  line-height: 0.98;
  font-weight: 700;
  color: #1f2d16;
}

.our-team-intro {
  max-width: 640px;
  margin: 0 auto;
  font-size: 20px;
  line-height: 1.65;
  color: rgba(31, 28, 23, 0.75);
}

.our-team-section {
  max-width: 1480px;
  margin: 0 auto 42px;
  padding: 26px 24px 34px;
  border: 1px solid rgba(255, 255, 255, 0.52);
  border-radius: 34px;
  background: rgba(255, 255, 255, 0.34);
  box-shadow: 0 22px 60px rgba(85, 71, 49, 0.08);
  backdrop-filter: blur(10px);
}

.our-team-section-head {
  margin-bottom: 18px;
  text-align: center;
}

.our-team-section-kicker {
  font-size: 12px;
}

.our-team-section-title {
  font-size: clamp(24px, 3vw, 42px);
  font-weight: 300;
  color: #2d251d;
}

.our-team-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
}

.our-team-loading {
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 900px) {
  .our-team-page {
    padding: 96px 16px 56px;
  }

  .our-team-header {
    margin-bottom: 32px;
  }

  .our-team-intro {
    font-size: 16px;
  }

  .our-team-section {
    margin-bottom: 22px;
    padding: 20px 12px 20px;
    border-radius: 24px;
  }

  .coreMembers {
    width: 45%;
  }
}

@media (max-width: 620px) {
  .our-team-bg--top {
    width: 180px;
    height: 180px;
  }

  .our-team-bg--middle {
    width: 220px;
    height: 220px;
  }

  .our-team-bg--bottom {
    width: 220px;
    height: 160px;
    left: 4%;
  }

  .coreMembers {
    width: calc(50% - 8px);
  }
}
</style>
