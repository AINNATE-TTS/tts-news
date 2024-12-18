<script setup>
const MIN_SPEED = 1.0
const MAX_SPEED = 2.75

function randomNumber(min, max) {
  return Math.random() * (max - min) + min
}

class Blob {
  constructor(el) {
    this.el = el
    const boundingRect = this.el.getBoundingClientRect()
    this.size = boundingRect.width
    this.initialX = randomNumber(0, window.innerWidth - this.size)
    this.initialY = randomNumber(0, window.innerHeight - this.size)
    this.el.style.top = `${this.initialY}px`
    this.el.style.left = `${this.initialX}px`
    this.vx
      = randomNumber(MIN_SPEED, MAX_SPEED) * (Math.random() > 0.5 ? 1 : -1)
    this.vy
      = randomNumber(MIN_SPEED, MAX_SPEED) * (Math.random() > 0.5 ? 1 : -1)
    this.x = this.initialX
    this.y = this.initialY
  }

  update() {
    this.x += this.vx
    this.y += this.vy
    if (this.x >= window.innerWidth - this.size) {
      this.x = window.innerWidth - this.size
      this.vx *= -1
    }
    if (this.y >= window.innerHeight - this.size) {
      this.y = window.innerHeight - this.size
      this.vy *= -1
    }
    if (this.x <= 0) {
      this.x = 0
      this.vx *= -1
    }
    if (this.y <= 0) {
      this.y = 0
      this.vy *= -1
    }
  }

  move() {
    this.el.style.transform = `translate(${this.x - this.initialX}px, ${
      this.y - this.initialY
    }px)`
  }
}

function initBlobs() {
  const blobEls = document.querySelectorAll('.bouncing-blob')
  const blobs = Array.from(blobEls).map(blobEl => new Blob(blobEl))

  function update() {
    requestAnimationFrame(update)
    blobs.forEach((blob) => {
      blob.update()
      blob.move()
    })
  }

  requestAnimationFrame(update)
}

onMounted(() => {
  if (import.meta.client) {
    initBlobs()
  }
})
</script>

<template>
  <div>
    <div class="bouncing-blobs-container">
      <div class="bouncing-blobs-glass" />
      <div class="bouncing-blobs">
        <div class="bouncing-blob bouncing-blob--blue" />
        <div class="bouncing-blob bouncing-blob--blue" />
        <div class="bouncing-blob bouncing-blob--blue" />
        <div class="bouncing-blob bouncing-blob--white" />
        <div class="bouncing-blob bouncing-blob--purple" />
        <div class="bouncing-blob bouncing-blob--purple" />
        <div class="bouncing-blob bouncing-blob--pink" />
      </div>
    </div>
  </div>
</template>

<style>
.gradient {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgb(var(--color-primary-500) / 0.25) 0,
    #ffffff90 100%
  );
}

.dark {
  .gradient {
    background: radial-gradient(
      50% 50% at 50% 50%,
      rgb(var(--color-primary-400) / 0.1) 0,
      rgb(var(--color-gray-950)) 100%
    );
  }
}

.overlay {
  background-size: 100px 100px;
  background-image: linear-gradient(
      to right,
      rgb(var(--color-gray-200)) 0.5px,
      transparent 0.5px
    ),
    linear-gradient(
      to bottom,
      rgb(var(--color-gray-200)) 0.5px,
      transparent 0.5px
    );
}
.dark {
  .overlay {
    background-image: linear-gradient(
        to right,
        rgb(var(--color-gray-900)) 0.5px,
        transparent 0.5px
      ),
      linear-gradient(
        to bottom,
        rgb(var(--color-gray-900)) 0.5px,
        transparent 0.5px
      );
  }
}

.bouncing-blob {
  width: 32vw;
  aspect-ratio: 1;
  border-radius: 50%;
  will-change: transform;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  transform-origin: left top;
}

.bouncing-blob--blue {
  background: #52ac9d;
}

.bouncing-blob--white {
  background: #ffffff;
  z-index: 2;
  width: 15vw;
}

.bouncing-blob--purple {
  background: #7c17d4;
}

.bouncing-blob--pink {
  background: #ffd402;
}

.bouncing-blobs-container {
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.bouncing-blobs-glass {
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(140px);
  -webkit-backdrop-filter: blur(140px);
  pointer-events: none;
}

.bouncing-blobs {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

@media (max-width: 1200px) {
  .bouncing-blobs-glass {
    backdrop-filter: blur(120px);
    -webkit-backdrop-filter: blur(120px);
  }
}

@media (max-width: 500px) {
  .bouncing-blob {
    width: 60vw;
  }
  .bouncing-blob--white {
    width: 30vw;
  }
  .bouncing-blobs-glass {
    backdrop-filter: blur(90px);
    -webkit-backdrop-filter: blur(90px);
  }
}
</style>
