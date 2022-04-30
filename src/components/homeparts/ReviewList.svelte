<script lang="ts">
  import type { ReviewType } from "../../types";
import Review from "../Review.svelte";

  export let reviews: ReviewType[];
  let reviewsToShow: ReviewType[] = [];

  function shuffle() {
    let array = [...reviews];
    var m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    // set reviewsToShow to the shuffled array with a limit of 3 reviews
    reviewsToShow = array.slice(0, 3);
    console.log(reviews)
    console.log(reviewsToShow)
  }

  shuffle();
</script>

<!--div class="relative w-full h-96 left-0 bottom-0 bg-gradient-to-b from-transparent via-transparent to-black" /-->
<div class="bg-black w-full h-full">
  <div class="text-7xl font-extrabold text-white pt-16 w-full text-center">🌟 What clients say 🌟</div>
  <div class="text-xl text-white pt-12 w-full text-center">Here are some reviews and vouches from previous clients.</div>

  <div class="w-full flex justify-center p-8">
    <button on:click={shuffle} class="p-2 hover:bg-black bg-white hover:text-white text-black outline outline-2 outline-white rounded-md transition-all duration-300 font-semibold text-md">🔁 More Reviews</button>
  </div>

  <div class="flex flex-row flex-wrap align-middle justify-around items-start">
    {#each reviewsToShow as r}
      <div class="p-4">
        <Review review={r} />
      </div>
    {/each}
  </div>
</div>
