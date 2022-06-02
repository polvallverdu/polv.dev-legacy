<script lang="ts">
  export let url: string;
  export let bg: boolean;
</script>

<div class="h-full w-full">
  <video class="absolute z-30 w-full h-full" controls muted autoplay loop>
    <source src={url} type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <div class="absolute z-20 h-full w-full bg-opacity-20 bg-black" />
  <video class="absolute z-10 h-full w-full object-cover blur-lg">
    <source src={`${url}#t=0.1`} type="video/mp4" />
  </video>
  <div class="absolute z-0 h-full w-full bg-black" />
</div>