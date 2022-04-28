<script lang="ts">
import type { ReviewType } from "../types";


  export let review: ReviewType;
  let rating: string = "";

  for (let i = 0; i < review.rating; i++) {
    rating += "⭐";
  }
</script>

<div class="bg-white rounded-lg text-center select-none pointer-events-none w-[375px]">
  <div class="p-4">
    <p class="text-3xl font-semibold">{review.user}</p>
    <p class="text-lg">{review.subtitle}</p>
  </div>
  <center><img class="rounded-full h-80 w-80 items-center my-2" src={review.pp} alt=""></center>
  <div class="m-2">
    <p class="font-mono text-4xl">{rating}</p>
    <p>{review.description}</p>
  </div>
</div>