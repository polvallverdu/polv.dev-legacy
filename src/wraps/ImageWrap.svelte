<script lang="ts">
  export let src: string;
</script>

<div class="h-full w-full">
  <img class="absolute z-30 h-full w-full object-scale-down" src={src} alt="">
  <div class="absolute z-20 h-full w-full bg-opacity-20 bg-black" />
  <img class="absolute z-10 h-full w-full object-cover blur-lg" src={src} alt="">
  <div class="absolute z-0 h-full w-full bg-black" />
</div>