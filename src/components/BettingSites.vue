/* eslint-disable */ // @ts-nocheck // @vue-ignore
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import bahisabiLogo from '../assets/logos/bahisabi.png'
import babilonbetLogo from '../assets/logos/babilon.png'
import betpuanLogo from '../assets/logos/betpuan.png'
import celtabetLogo from '../assets/logos/celtabet.png'
import pusulabetLogo from '../assets/logos/pusulabet.png'
import cashwinLogo from '../assets/logos/cashwin.png'
import garibanbetLogo from '../assets/logos/garibanbet.png'
import betkanyonLogo from '../assets/logos/betkanyon.png'
import { useHead } from '@unhead/vue'

interface BettingSite {
  id: number
  name: string
  bonusText: string
  bonusAmount: string
  link: string
  logo: string
}

const sites: BettingSite[] = [
  {
    id: 1,
    name: 'BAHİSABİ',
    bonusText: 'DENEME BONUSU',
    bonusAmount: '₺2.000',
    link: 'https://partner.bahisabiaffiliates.com/imp/bahisabi/1183',
    logo: bahisabiLogo,
  },
  {
    id: 2,
    name: 'BABİLONBET',
    bonusText: 'DENEME BONUSU',
    bonusAmount: '₺2.000',
    link: 'https://partner.babilaffiliates.com/imp/babilonbet/1182',
    logo: babilonbetLogo,
  },
  {
    id: 3,
    name: 'BETPUAN',
    bonusText: 'DENEME BONUSU',
    bonusAmount: '₺200',
    link: 'https://www.betpuanortaklik.com/links/?btag=2098924',
    logo: betpuanLogo,
  },
  {
    id: 4,
    name: 'CELTABET',
    bonusText: 'DENEME BONUSU',
    bonusAmount: '₺1.500',
    link: 'https://tinyurl.com/celtabet?btag=2223895',
    logo: celtabetLogo,
  },
  {
    id: 5,
    name: 'PUSULABET',
    bonusText: 'DENEME BONUSU',
    bonusAmount: '₺400',
    link: 'https://cutt.ly/PusulaKumarlaYasiyorum',
    logo: pusulabetLogo,
  },
  {
    id: 6,
    name: 'CASHWİN',
    bonusText: 'DENEME BONUSU',
    bonusAmount: '₺250',
    link: 'https://cwgiris2.com/go/VapjICEf',
    logo: cashwinLogo,
  },
  {
    id: 7,
    name: 'GARİBANBET',
    bonusText: 'DENEME BONUSU',
    bonusAmount: '₺100',
    link: 'https://gariban.info/kirve',
    logo: garibanbetLogo,
  },
  {
    id: 8,
    name: 'BETKANYON',
    bonusText: 'HOŞGELDİN BONUSU',
    bonusAmount: '₺2.500',
    link: 'https://cutt.ly/MeMEUoEj',
    logo: betkanyonLogo,
  },
]

const copyAmount = (amount: string) => {
  navigator.clipboard
    .writeText(amount)
    .then(() => {
      // Başarılı kopyalama bildirimi eklenebilir
    })
    .catch(() => {
      // Hata durumu yönetimi eklenebilir
    })
}

const isLoading = ref(true)

// Performans için Intersection Observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.1 },
)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 1500)

  document.querySelectorAll('.betting-card').forEach((card) => {
    observer.observe(card)
  })

  // SEO için meta etiketleri
  useHead({
    title: 'Güvenilir Bahis Siteleri - Güncel Bonuslar',
    meta: [
      {
        name: 'description',
        content:
          'En güvenilir bahis siteleri ve güncel deneme bonusları. Bahis sitelerinin güncel giriş adresleri ve bonus kampanyaları.',
      },
      {
        name: 'keywords',
        content: 'bahis siteleri, deneme bonusu, güvenilir bahis, casino siteleri',
      },
    ],
  })

  // Performans için lazy loading ve önbelleğe alma
  const preloadImages = () => {
    sites.forEach((site) => {
      const img = new Image()
      img.src = site.logo
    })
  }

  preloadImages()
})

const shareOnTelegram = () => {
  window.open('https://t.me/+XN8LxV_lcpE4NDZk', '_blank')
}

const shareOnSkype = () => {
  window.open('skype:gamingaston?chat', '_blank')
}

const redirectLoading = ref<number | null>(null)

const handleSiteClick = (link: string, id: number) => {
  redirectLoading.value = id
  setTimeout(() => {
    window.open(link, '_blank')
    redirectLoading.value = null
  }, 1500)
}
</script>

<template>
  <div class="betting-sites" itemscope itemtype="https://schema.org/WebPage">
    <h1 class="betting-sites__title" itemprop="headline">
      SAĞLAM BONUSLAR
      <div class="betting-sites__title-line"></div>
      <div class="betting-sites__title-quote">
        Hayatını çetrefilli ve hızlı hale getirmek istiyorsan, risk almalısın. Önemli kararlar,
        önemli anlarda gerçekleşir.
      </div>
    </h1>

    <div class="betting-sites__social">
      <a
        href="#"
        @click.prevent="shareOnTelegram"
        class="social-button telegram"
        title="Telegram'da Bize Ulaşın"
      >
        <i class="fab fa-telegram"></i>
        <span class="social-button__text">Telegram'da Ulaş</span>
      </a>
      <a
        href="#"
        @click.prevent="shareOnSkype"
        class="social-button skype"
        title="Skype'da Bize Ulaşın"
      >
        <i class="fab fa-skype"></i>
        <span class="social-button__text">Skype'da Ulaş</span>
      </a>
    </div>

    <div v-if="isLoading" class="betting-sites__grid">
      <div v-for="n in 8" :key="n" class="betting-card betting-card--skeleton">
        <div class="betting-card__inner">
          <div class="betting-card__logo skeleton-pulse"></div>
          <div class="betting-card__content">
            <div class="betting-card__bonus skeleton-pulse"></div>
            <div class="betting-card__amount skeleton-pulse"></div>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="betting-sites__grid">
      <a
        v-for="site in sites"
        :key="site.id"
        @click.prevent="handleSiteClick(site.link, site.id)"
        :href="site.link"
        class="betting-card"
        :class="{ 'is-loading': redirectLoading === site.id }"
        role="listitem"
        :aria-label="site.name + ' bahis sitesi'"
        itemscope
        itemtype="https://schema.org/Organization"
      >
        <div class="betting-card__inner">
          <div class="betting-card__logo">
            <div class="betting-card__logo-ring"></div>
            <img :src="site.logo" :alt="site.name" loading="lazy" />
          </div>
          <div class="betting-card__content">
            <div class="betting-card__bonus">{{ site.bonusText }}</div>
            <div class="betting-card__amount" @click.stop="copyAmount(site.bonusAmount)">
              <span class="betting-card__amount-text">{{ site.bonusAmount }}</span>
            </div>
          </div>
          <div class="betting-card__goto" :class="{ 'is-loading': redirectLoading === site.id }">
            <template v-if="redirectLoading === site.id">
              <div class="betting-card__loading">
                <div class="betting-card__loading-bar"></div>
                <span>YÖNLENDİRİLİYOR</span>
              </div>
            </template>
            <template v-else> SİTEYE GİT </template>
          </div>
        </div>
        <meta itemprop="name" :content="site.name" />
        <meta itemprop="description" :content="site.bonusText" />
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.betting-sites {
  max-width: 1600px;
  margin: 0 auto;
  padding: 4rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__title {
    font-size: 3.5rem;
    font-weight: 800;
    color: #fff;
    text-align: center;
    margin-bottom: 5rem;
    text-transform: uppercase;
    letter-spacing: 3px;
    position: relative;
    text-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

    &-line {
      width: 180px;
      height: 4px;
      background: linear-gradient(90deg, transparent, #fff, transparent);
      margin: 1.5rem auto 0;
      position: relative;
      overflow: hidden;

      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent);
        animation: shimmer 2s infinite;
      }
    }

    &-quote {
      font-size: 1.2rem;
      font-weight: 400;
      font-style: italic;
      color: rgba(255, 255, 255, 0.8);
      margin-top: 2rem;
      text-transform: none;
      letter-spacing: 1px;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      position: relative;
      padding: 0 2rem;

      &::before {
        content: '"';
        position: absolute;
        left: 0;
        top: -0.5rem;
        font-size: 2rem;
        color: rgba(255, 255, 255, 0.4);
      }

      &::after {
        content: '"';
        position: absolute;
        right: 0;
        top: -0.5rem;
        font-size: 2rem;
        color: rgba(255, 255, 255, 0.4);
      }
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(600px, 1fr));
    gap: 3rem;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0;
    justify-content: center;
  }

  &__social {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 3rem;
    width: 100%;
  }
}

@keyframes shimmer {
  100% {
    left: 100%;
  }
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.1);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
}

.betting-card {
  background: linear-gradient(145deg, #2d1b4d, #4b2a80);
  border-radius: 24px;
  padding: 3rem;
  transform-style: preserve-3d;
  perspective: 1000px;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  will-change: transform;
  backface-visibility: hidden;
  transform: translateZ(0);
  cursor: pointer;
  opacity: 1;
  transform: translateY(0);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      125deg,
      transparent 0%,
      rgba(255, 255, 255, 0.1) 50%,
      transparent 100%
    );
    opacity: 0;
    transition: opacity 0.3s;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 1px;
    border-radius: 24px;
    background: linear-gradient(145deg, rgba(255, 255, 255, 0.2), transparent 70%);
    pointer-events: none;
  }

  &__inner {
    display: flex;
    align-items: center;
    gap: 4rem;
    position: relative;
    z-index: 1;
    transform-style: preserve-3d;
  }

  &__logo {
    flex-shrink: 0;
    width: 220px;
    height: 220px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);

    &::before {
      content: '';
      position: absolute;
      inset: 25px;
      background: rgba(0, 0, 0, 0.4);
      border-radius: 20px;
      box-shadow:
        inset 0 0 30px rgba(0, 0, 0, 0.4),
        0 15px 35px rgba(0, 0, 0, 0.3);
      transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    }

    &::after {
      content: '';
      position: absolute;
      inset: 25px;
      border-radius: 20px;
      border: 1px solid rgba(255, 255, 255, 0.15);
      background: linear-gradient(145deg, rgba(255, 255, 255, 0.15), transparent 70%);
      pointer-events: none;
    }

    &-ring {
      position: absolute;
      inset: 15px;
      border-radius: 25px;
      border: 2px solid rgba(255, 255, 255, 0.1);
      animation: rotate 8s linear infinite;
      transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);

      &::before {
        content: '';
        position: absolute;
        top: -2px;
        left: 25%;
        width: 50%;
        height: 2px;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);
      }
    }

    img {
      position: relative;
      z-index: 2;
      width: 70%;
      height: 70%;
      object-fit: contain;
      transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      filter: drop-shadow(0 10px 25px rgba(0, 0, 0, 0.5));
      will-change: transform;
      backface-visibility: hidden;
      transform: translateZ(0);
      loading: lazy;
      decoding: async;
    }
  }

  &__content {
    flex: 1;
    color: #fff;
    min-width: 280px;
    padding-right: 2rem;
  }

  &__bonus {
    font-size: 1.4rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 1.5rem;
    color: rgba(255, 255, 255, 0.95);
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    position: relative;
    display: inline-block;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);

    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 2px;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);
    }
  }

  &__amount {
    font-size: 2.6rem;
    font-weight: 800;
    padding: 1rem 2.5rem;
    background: rgba(255, 255, 255, 0.12);
    border-radius: 14px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
    position: relative;
    white-space: nowrap;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    min-width: 180px;

    &:hover {
      transform: translateZ(15px) scale(1.05);
    }
  }

  &__goto {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.9);
    font-size: 1.2rem;
    font-weight: 700;
    color: #fff;
    background: rgba(17, 6, 25, 0.95);
    padding: 1rem 2.5rem;
    border-radius: 12px;
    opacity: 0;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    z-index: 10;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);

    &:hover {
      background: rgba(17, 6, 25, 0.98);
      transform: translate(-50%, -50%) scale(1.05);
    }
  }

  &:hover {
    transform: translateY(-8px) rotateX(5deg) rotateY(5deg);
    border-color: rgba(255, 255, 255, 0.3);
    box-shadow:
      0 25px 45px rgba(0, 0, 0, 0.4),
      0 0 35px rgba(255, 255, 255, 0.15);

    .betting-card__logo {
      transform: translateZ(20px);

      img {
        transform: scale(1.1) translateY(-5px);
        filter: drop-shadow(0 15px 30px rgba(0, 0, 0, 0.6));
      }

      &::before {
        background: rgba(0, 0, 0, 0.3);
        box-shadow:
          inset 0 0 40px rgba(0, 0, 0, 0.4),
          0 20px 45px rgba(0, 0, 0, 0.4);
      }

      &-ring {
        transform: scale(1.1) rotate(180deg);
        border-color: rgba(255, 255, 255, 0.2);
      }
    }

    .betting-card__amount {
      transform: translateZ(10px);
      background: rgba(255, 255, 255, 0.25);
      box-shadow:
        0 8px 25px rgba(0, 0, 0, 0.4),
        0 0 20px rgba(255, 255, 255, 0.15);
    }

    .betting-card__bonus {
      transform: translateZ(15px);
      text-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
    }

    &::before {
      opacity: 1;
    }

    .sparkle {
      position: absolute;
      width: 20px;
      height: 20px;
      background: radial-gradient(circle, #fff 0%, transparent 70%);
      animation: sparkle 1s ease-in-out infinite;

      &:nth-child(1) {
        top: 10%;
        left: 10%;
        animation-delay: 0ms;
      }
      &:nth-child(2) {
        top: 20%;
        left: 30%;
        animation-delay: 100ms;
      }
      &:nth-child(3) {
        top: 30%;
        left: 50%;
        animation-delay: 200ms;
      }
      &:nth-child(4) {
        top: 40%;
        left: 70%;
        animation-delay: 300ms;
      }
      &:nth-child(5) {
        top: 50%;
        left: 90%;
        animation-delay: 400ms;
      }
      &:nth-child(6) {
        top: 60%;
        left: 80%;
        animation-delay: 500ms;
      }
      &:nth-child(7) {
        top: 70%;
        left: 60%;
        animation-delay: 600ms;
      }
      &:nth-child(8) {
        top: 80%;
        left: 40%;
        animation-delay: 700ms;
      }
      &:nth-child(9) {
        top: 90%;
        left: 20%;
        animation-delay: 800ms;
      }
      &:nth-child(10) {
        top: 95%;
        left: 5%;
        animation-delay: 900ms;
      }
    }
  }

  &.is-loading {
    pointer-events: none;

    .betting-card__goto {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }

    .betting-card__inner {
      &::after {
        animation: pulseOverlay 2s ease-in-out infinite;
      }
    }

    .betting-card__logo,
    .betting-card__content {
      filter: brightness(0.8);
      transition: filter 0.4s ease;
    }
  }

  &__loading {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    span {
      font-size: 0.9rem;
      letter-spacing: 1px;
    }

    &-bar {
      width: 120px;
      height: 3px;
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.1),
        rgba(255, 255, 255, 0.2),
        rgba(255, 255, 255, 0.1)
      );
      border-radius: 3px;
      overflow: hidden;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 30%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent);
        border-radius: 3px;
        animation: loadingBar 1.2s ease-in-out infinite;
      }
    }
  }

  &.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes gradientMove {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes pulseOverlay {
  0% {
    background: rgba(26, 11, 46, 0.3);
  }
  50% {
    background: rgba(26, 11, 46, 0.5);
  }
  100% {
    background: rgba(26, 11, 46, 0.3);
  }
}

@keyframes loadingBar {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(200%);
  }
}

@keyframes sparkle {
  0%,
  100% {
    opacity: 0;
    transform: scale(0);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes confetti {
  0% {
    transform: translateY(-100vh) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(100vh) rotate(720deg);
    opacity: 0;
  }
}

.betting-card {
  &.show-confetti {
    .confetti-piece {
      position: absolute;
      width: 10px;
      height: 20px;
      background: #fff;
      opacity: 0;
      animation: confetti 1s ease-out forwards;

      &:nth-child(1) {
        left: 10%;
        animation-delay: 0ms;
        background: #7e57c2;
      }
      &:nth-child(2) {
        left: 20%;
        animation-delay: 50ms;
        background: #5c6bc0;
      }
      &:nth-child(3) {
        left: 30%;
        animation-delay: 100ms;
        background: #ec407a;
      }
      &:nth-child(4) {
        left: 40%;
        animation-delay: 150ms;
        background: #ffd54f;
      }
      &:nth-child(5) {
        left: 50%;
        animation-delay: 200ms;
        background: #7e57c2;
      }
      &:nth-child(6) {
        left: 60%;
        animation-delay: 250ms;
        background: #5c6bc0;
      }
      &:nth-child(7) {
        left: 70%;
        animation-delay: 300ms;
        background: #ec407a;
      }
      &:nth-child(8) {
        left: 80%;
        animation-delay: 350ms;
        background: #ffd54f;
      }
      &:nth-child(9) {
        left: 90%;
        animation-delay: 400ms;
        background: #7e57c2;
      }
      &:nth-child(10) {
        left: 95%;
        animation-delay: 450ms;
        background: #5c6bc0;
      }
    }
  }
}

// Mouse takibi için ışık efekti
.mouse-light {
  position: fixed;
  width: 400px;
  height: 400px;
  pointer-events: none;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
  transform: translate(-50%, -50%);
  z-index: 0;
  transition: opacity 0.3s;
  opacity: 0;

  .has-mouse-move & {
    opacity: 1;
  }
}

@media (max-width: 1400px) {
  .betting-sites__grid {
    grid-template-columns: repeat(2, minmax(450px, 1fr));
    max-width: 1200px;
    padding: 0 1.5rem;
  }

  .betting-card {
    padding: 2.5rem;

    &__logo {
      width: 180px;
      height: 180px;
    }

    &__bonus {
      font-size: 1.3rem;
    }

    &__amount {
      font-size: 2.4rem;
      padding: 0.8rem 2rem;
    }
  }
}

@media (max-width: 1200px) {
  .betting-sites__grid {
    grid-template-columns: repeat(2, minmax(400px, 1fr));
    max-width: 1000px;
    gap: 2rem;
  }

  .betting-card {
    &__logo {
      width: 160px;
      height: 160px;
    }
  }
}

@media (max-width: 1000px) {
  .betting-sites__grid {
    grid-template-columns: minmax(350px, 700px);
    max-width: 700px;
  }
}

@media (max-width: 768px) {
  .betting-sites {
    padding: 2rem 1rem;

    &__title {
      font-size: 2.8rem;
      margin-bottom: 3rem;

      &-quote {
        font-size: 1rem;
        margin-top: 1.5rem;
        padding: 0 1.5rem;
      }
    }

    &__grid {
      grid-template-columns: 1fr;
      gap: 2rem;
      padding: 0 1rem;

      // Kaydırmalı görünüm için
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      scroll-snap-type: x mandatory;
      scroll-padding: 1rem;

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }

  .betting-card {
    scroll-snap-align: start;
    min-width: calc(100vw - 2rem);
    margin: 0 auto;

    // Dokunmatik ekran optimizasyonları
    touch-action: pan-y pinch-zoom;
    -webkit-tap-highlight-color: transparent;

    &:active {
      transform: scale(0.98);
    }

    &__inner {
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
    }

    &__logo {
      width: 180px;
      height: 180px;
      margin-bottom: 0;
    }

    &__content {
      text-align: center;
      padding: 0;
    }

    &__amount {
      transform: none !important;
      font-size: 2.2rem;
    }
  }

  .social-button {
    min-width: auto;
    padding: 0 1rem;

    &__text {
      display: none;
    }
  }
}

@media (max-width: 480px) {
  .betting-sites__title {
    font-size: 2.4rem;
  }

  .betting-card {
    padding: 1.5rem;

    &__inner {
      flex-direction: column;
      text-align: center;
      gap: 0.8rem;
    }

    &__logo {
      width: 160px;
      height: 160px;
      margin-bottom: 0.2rem;

      img {
        width: 75%;
        height: 75%;
      }

      &::before {
        inset: 20px;
      }

      &::after {
        inset: 20px;
      }

      &-ring {
        inset: 12px;
      }
    }

    &__content {
      padding-right: 0;
      margin-top: -0.5rem;
    }

    &__bonus {
      font-size: 1.1rem;
      margin-bottom: 1rem;
    }

    &__amount {
      font-size: 1.8rem;
      padding: 0.6rem 1.2rem;
    }
  }
}

@keyframes skeletonPulse {
  0% {
    opacity: 0.6;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    opacity: 0.6;
  }
}

.betting-card--skeleton {
  .skeleton-pulse {
    background: rgba(255, 255, 255, 0.1);
    animation: skeletonPulse 1.5s ease-in-out infinite;
  }

  .betting-card__logo {
    width: 220px;
    height: 220px;
    border-radius: 20px;
  }

  .betting-card__bonus {
    width: 150px;
    height: 24px;
    border-radius: 6px;
    margin-bottom: 1.5rem;
  }

  .betting-card__amount {
    width: 120px;
    height: 45px;
    border-radius: 14px;
  }
}

.social-button {
  min-width: 120px;
  height: 45px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 1rem;
  color: #fff;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  text-decoration: none;
  padding: 0 1.5rem;

  i {
    font-size: 1.2rem;
  }

  &__text {
    font-weight: 600;
    letter-spacing: 0.5px;
  }

  &:hover {
    transform: translateY(-3px);
    border-color: rgba(255, 255, 255, 0.2);
  }

  &.telegram {
    background: linear-gradient(145deg, #0088cc, #006699);
    &:hover {
      box-shadow: 0 5px 15px rgba(0, 136, 204, 0.3);
    }
  }

  &.skype {
    background: linear-gradient(145deg, #00aff0, #0078d7);
    &:hover {
      box-shadow: 0 5px 15px rgba(0, 175, 240, 0.3);
    }
  }
}

// Pull-to-refresh animasyonu
.pull-to-refresh {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.2);
  transform: translateY(-100%);
  transition: transform 0.3s;

  &.is-pulling {
    transform: translateY(0);
  }

  &__spinner {
    width: 24px;
    height: 24px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-top-color: #fff;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
}
</style>
