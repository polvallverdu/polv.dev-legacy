<script lang="ts">
  import type { ProjectType } from "../types";
  import { Splide, SplideSlide } from '@splidejs/svelte-splide';
  import '@splidejs/svelte-splide/css';
  import ImageWrap from "../wraps/ImageWrap.svelte";
  import MediaWrap from "../wraps/MediaWrap.svelte";

  import Transition from 'svelte-class-transition';
  import Icons from "../Icons";
import { onMount } from "svelte";

  export let project: ProjectType;
  let toggle: boolean = false;
  let laterToggle: boolean = false;

  function setState(state: boolean) {
    toggle = state;
    if (state) {
      setTimeout(() => {
        laterToggle = state;
      }, 400);
    } else {
      laterToggle = state;
    }
  }

  let splide: Splide = null;
</script>

<!--div class="h-auto">
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
</div-->

<div class="h-auto">
  <Transition
    toggle={toggle}
    transitions="transition-all transform"
    inTransition="duration-500"
    inState="w-[350px] overflow-hidden bg-white bg-opacity-10 shadow-2xl rounded-xl hover:-translate-y-2 hover:bg-opacity-25"
    onState="w-full sm:w-[640px] md:w-[783px] overflow-hidden bg-white bg-opacity-40 shadow-2xl rounded-xl"
    offVisible={true}
  >

    <!-- Title -->
    <div>
      <div class="flex flex-row justify-center m-2">
        {#if project.highlight_tech}
          <div>
            <img src={Icons.getIcon(project.highlight_tech)} alt={project.highlight_tech} class="h-16 w-16 mx-4 aspect-auto" />
          </div>
        {/if}
        <div class="text-center">
          <p class="font-semibold text-2xl">{project.name}</p>
          <p class="text-xl">{project.subtitle}</p>
        </div>
      </div>

    <!-- Carrousel -->
    <div class="px-1 pb-1 sm:px-4 sm:pb-4">
      <Transition
        toggle={toggle}
        transitions="transition-all transform"
        inTransition="duration-500"
        inState="h-[240px] w-full outline-4 outline-black rounded-xl overflow-hidden shadow-md"
        onState="h-[240px] sm:h-[360px] md:h-[360px] w-full sm:w-[640px] md:w-[750px] md:outline outline-4 outline-black rounded-xl overflow-hidden shadow-md"
        offVisible={true}
      >
      
        <!-- Slides on Carrousel -->
        <Splide aria-label={project.name + " images"} class="bg-black" bind:this={splide}>
          {#each project.images as imgurl}
            <SplideSlide>
              <Transition 
                toggle={toggle}
                transitions="transition-all transform"
                inTransition="duration-500"
                inState="h-[240px]"
                onState="h-[240px] md:h-[360px]"
                offVisible={true}
              >
                  <MediaWrap src={imgurl} />
              </Transition>
            </SplideSlide>
          {/each}
        </Splide>
      </Transition>
      
      <!-- Text of Project -->
      <!--div>
        <Transition
          toggle={laterToggle}
          transitions="transition-all transform"
          inTransition="ease-in duration-400"
          inState="h-auto w-full sm:w-[640px] md:w-[750px] opacity-0 justify-center align-middle text-left text-lg py-4 md:py-0 px-6 -translate-x-10"
          onState="h-auto w-full sm:w-[640px] md:w-[750px] opacity-100 justify-center align-middle text-left text-lg py-4 md:py-0 px-6 translate-x-0"
          outTransition="duration-100"
        ><div class="text-left text-white">

          <div class="p-3"></div>
          {project.description}
          <div class="p-3"></div>
          {project.role}
          <div class="p-3"></div>
          {project.technologies}
        
      </div></Transition></div-->
      {#if toggle}
        <div class="whitespace-pre-line">
          <p class="part">Description |</p>
          <p class="text">{project.description}</p>
          <p class="part">Roles |</p>
          <p class="text">{project.role}</p>
          {#if project.id === "code"}
            <p class="part pb-2">Technologies |</p>
          {:else}
            <p class="part pb-2">Socials |</p>
          {/if}
          <div class="flex justify-center bg-black bg-opacity-30 shadow-md rounded-lg">
            {#each project.technologies as tech}
              <div>
                <img src={Icons.getIcon(tech)} alt={tech} class="w-16 h-16 m-2 aspect-square hover:-translate-y-2 transition-all duration-100" />
              </div>
            {/each}
          </div>
        </div>
      {/if}
    </div>
  
    <!-- Toggle Button -->
    <Transition
      toggle={!toggle}
      transitions="sm:transition-all transform"
      inTransition="duration-[0] sm:duration-500"
      inState="opacity-0"
      onState="opacity-100"
    >
      <button on:click={() => setState(true)} class="w-full p-4 rounded-lg bg-black text-white font-semibold hover:text-black hover:bg-white text-lg transition-all duration-300">More info</button>
    </Transition>

    <Transition
      toggle={toggle}
      transitions="transition-all transform"
      inTransition="duration-500"
      inState="absolute z-30 left-[96%] top-[1%] opacity-0 translate-y-5"
      onState="absolute z-30 left-[96%] top-[1%] opacity-100 translate-y-0"
      outTransition="duration-500"
    >
      <button on:click={() => setState(false)} class="text-lg font-semibold transition-all duration-150 hover:text-red-600">X</button>
    </Transition>
  </div>
  </Transition>
</div>

<style>
  .part {
    @apply font-bold text-2xl pt-4;
  }

  .text {
    @apply text-lg pt-2;
  }
</style>