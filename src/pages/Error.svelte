<script>
  export let error;
</script>

<main class="w-full h-screen bg-black p-10 grid items-center text-center">
  <div class="my-52">
    <p class="font-extralight text-9xl text-[#ff4444]">Error</p>
    <div class="my-32">
      <p class="text-[#ffffffd4] font-semibold text-3xl">{error === undefined ? "Unknown" : error}</p>
      <br>
      <a href="/" class="text-[#fececed4] transition-all duration-500 hover:text-[#ffffffd4]">Click here to go to the main page. -></a>
    </div>
  </div>
</main>