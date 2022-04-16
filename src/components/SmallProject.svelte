<script lang="ts">
  import type { ProjectType } from "../types";
  import { Splide, SplideSlide } from '@splidejs/svelte-splide';
  import '@splidejs/svelte-splide/css/core';
  import ImageWrap from "../wraps/ImageWrap.svelte";
  import MediaWrap from "../wraps/MediaWrap.svelte";

  import Transition from 'svelte-class-transition';

  export let project: ProjectType;
  let active: boolean = false;
</script>

<!--div class="h-auto">
  <div class="h-full w-full overflow-hidden bg-white bg-opacity-10 shadow-2xl rounded-xl transition-all duration-500">
    <div class="sm:p-4 md:flex md:flex-row">
      
      <Splide aria-label={project.name + " images"} class="h-auto w-full md:w-[640px] md:outline outline-4 outline-black rounded-xl overflow-hidden shadow-md">
        {#each project.images as imgurl}
          <SplideSlide class="h-[240px] md:h-[360px] w-full md:w-[640px]">
            <MediaWrap src={imgurl} />
          </SplideSlide>
        {/each}
      </Splide>
      
      <div class="h-full justify-center align-middle text-left py-4 md:py-0 px-6 text-white">
        <div class="text-center font-semibold text-2xl">
          <p>{project.name} <a class="font-normal">- {project.subtitle}</a></p>
        </div>
        

      </div>
    </div>
  </div>
</div-->

<div class="h-auto">
  <div class="h-full w-full overflow-hidden bg-white bg-opacity-10 shadow-2xl rounded-xl transition-all duration-500">
    <div class="sm:p-4 lg:flex lg:flex-row">
      
      <Splide aria-label={project.name + " images"} class="h-[240px] md:h-[360px] w-full md:min-w-[640px] md:max-w-[640px] md:outline outline-4 outline-black rounded-xl overflow-hidden shadow-md">
        {#each project.images as imgurl}
          <SplideSlide class="h-[240px] md:h-[360px] w-full md:w-[640px]">
            <MediaWrap src={imgurl} />
          </SplideSlide>
        {/each}
      </Splide>
      
      <div class="h-full w-full justify-center align-middle text-left text-lg py-4 md:py-0 px-6 text-white">
        <div class="text-center font-semibold text-2xl ">
          <p>{project.name} <a class="font-normal">- {project.subtitle}</a></p>
        </div>
        <div class="p-3"></div>
        {project.description}
        <div class="p-3"></div>
        {project.role}
        <div class="p-3"></div>
        {project.technologies}
      </div>
    </div>
  </div>
</div>