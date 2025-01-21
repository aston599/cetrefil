<script setup lang="ts">
import BettingSites from './components/BettingSites.vue'
</script>

<template>
  <div class="particles">
    <div class="particle" v-for="n in 100" :key="n"></div>
  </div>
  <div class="floating-elements">
    <div class="element dice" v-for="n in 15" :key="n">🎲</div>
    <div class="element card" v-for="n in 15" :key="n">🃏</div>
    <div class="element chip" v-for="n in 15" :key="n">🎰</div>
    <div class="element target" v-for="n in 8" :key="n">🎯</div>
    <div class="element circus" v-for="n in 8" :key="n">🎪</div>
    <div class="element spade" v-for="n in 10" :key="n">♠️</div>
    <div class="element heart" v-for="n in 10" :key="n">♥️</div>
    <div class="element diamond" v-for="n in 10" :key="n">♦️</div>
    <div class="element club" v-for="n in 10" :key="n">♣️</div>
  </div>
  <div class="gradient-overlay"></div>
  <main>
    <BettingSites />
  </main>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background: linear-gradient(135deg, #1a0b2e 0%, #321b5e 50%, #1a0b2e 100%);
  font-family: Arial, sans-serif;
  overflow-x: hidden;
  position: relative;
}

.gradient-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(26, 11, 46, 0.3) 0%,
    rgba(50, 27, 94, 0.3) 50%,
    rgba(26, 11, 46, 0.3) 100%
  );
  pointer-events: none;
  z-index: 0;
  animation: gradientShift 15s ease infinite;
}

@keyframes gradientShift {
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

.particles {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.particle {
  position: absolute;
  width: 3px;
  height: 3px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  filter: blur(1px);
  animation: float 20s infinite linear;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}

.floating-elements {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.element {
  position: absolute;
  font-size: 2rem;
  opacity: 0.08;
  animation: floatElement 25s infinite linear;
  filter: blur(1px);
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
}

.target {
  animation-duration: 32s;
  font-size: 2.2rem;
}
.circus {
  animation-duration: 28s;
  font-size: 2.4rem;
}
.dice {
  animation-duration: 30s;
}
.card {
  animation-duration: 35s;
}
.chip {
  animation-duration: 40s;
}

.spade,
.heart,
.diamond,
.club {
  animation-duration: 28s;
  font-size: 1.8rem;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
}

@keyframes float {
  0% {
    transform: translateY(0) translateX(0) scale(1);
    opacity: 0;
  }
  50% {
    opacity: 0.8;
    transform: translateY(-50vh) translateX(50vw) scale(1.2);
  }
  100% {
    transform: translateY(-100vh) translateX(100vw) scale(1);
    opacity: 0;
  }
}

@keyframes floatElement {
  0% {
    transform: translate(0, 100vh) rotate(0deg) scale(0.8);
    opacity: 0;
  }
  50% {
    opacity: 0.15;
    transform: translate(50vw, -50vh) rotate(180deg) scale(1.2);
  }
  100% {
    transform: translate(100vw, -100vh) rotate(360deg) scale(0.8);
    opacity: 0;
  }
}

/* Rastgele pozisyonlar için */
.particle:nth-child(7n) {
  left: 5%;
  animation-delay: -2s;
}
.particle:nth-child(7n + 1) {
  left: 20%;
  animation-delay: -4s;
}
.particle:nth-child(7n + 2) {
  left: 35%;
  animation-delay: -6s;
}
.particle:nth-child(7n + 3) {
  left: 50%;
  animation-delay: -8s;
}
.particle:nth-child(7n + 4) {
  left: 65%;
  animation-delay: -10s;
}
.particle:nth-child(7n + 5) {
  left: 80%;
  animation-delay: -12s;
}
.particle:nth-child(7n + 6) {
  left: 95%;
  animation-delay: -14s;
}

.element:nth-child(10n) {
  left: 10%;
  animation-delay: -3s;
}
.element:nth-child(10n + 1) {
  left: 20%;
  animation-delay: -6s;
}
.element:nth-child(10n + 2) {
  left: 30%;
  animation-delay: -9s;
}
.element:nth-child(10n + 3) {
  left: 40%;
  animation-delay: -12s;
}
.element:nth-child(10n + 4) {
  left: 50%;
  animation-delay: -15s;
}
.element:nth-child(10n + 5) {
  left: 60%;
  animation-delay: -18s;
}
.element:nth-child(10n + 6) {
  left: 70%;
  animation-delay: -21s;
}
.element:nth-child(10n + 7) {
  left: 80%;
  animation-delay: -24s;
}
.element:nth-child(10n + 8) {
  left: 90%;
  animation-delay: -27s;
}
.element:nth-child(10n + 9) {
  left: 100%;
  animation-delay: -30s;
}

main {
  position: relative;
  z-index: 2;
}
</style>
