<div class="h-screen w-full bg-black grid items-center place-items-center">
  <div class="text-white text-4xl">
    <center>
      <svg class="spinner h-20 w-20" viewBox="0 0 50 50">
        <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
      </svg>
  </center>
    <h3 class="py-10">Loading...</h3>
  </div>
</div>

<style lang="scss">
  .spinner {
  animation: rotate 2s linear infinite;
  & .path {
    stroke: rgba(255, 255, 255, 0.919);
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }
  
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}
</style>