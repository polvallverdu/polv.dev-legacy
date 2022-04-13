<script lang="ts">
  import { fade } from 'svelte/transition';
import ProjectList from '../components/ProjectList.svelte';
  import type { DataType, ProjectListFilter, ProjectType, ReviewType } from "../types";

  export let data: DataType;
  export let projectsdata: ProjectType[] | undefined;
  export let reviewsdata: ReviewType[] | undefined;

  let filter: ProjectListFilter = "code";

  function change(newShowing: ProjectListFilter) {
    filter = newShowing;
  }
</script>

<div class="p-4 mx-auto text-center w-full h-screen bg-black flex justify-center items-center">
  <div class="text-white">
    <h1 class="text-6xl md:text-9xl font-extrabold">pol.engineer</h1>
    <br>
    <h2 class="text-3xl md:text-6xl font-bold">By Pol Vallverdu</h2>
  </div>
</div>

<div class="relative w-full h-auto text-black font-semibold grid items-center">
  <svg class="relative z-20 top-0" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
  </svg>
  <!--
    Background
    <svg class="absolute h-full w-full" id="visual" viewBox="0 0 960 540" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><defs><filter id="blur1" x="-10%" y="-10%" width="120%" height="120%"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="163" result="effect1_foregroundBlur"></feGaussianBlur></filter></defs><rect width="960" height="540" fill="#00b2ff"></rect><g filter="url(#blur1)"><circle cx="567" cy="500" fill="#024978" r="363"></circle><circle cx="122" cy="155" fill="#00b2ff" r="363"></circle><circle cx="354" cy="519" fill="#024978" r="363"></circle><circle cx="812" cy="142" fill="#024978" r="363"></circle><circle cx="123" cy="522" fill="#00b2ff" r="363"></circle><circle cx="652" cy="314" fill="#024978" r="363"></circle></g></svg>

  -->
  <!--<div class="absolute z-10 bg-black bg-opacity-0 w-full h-full transition-all duration-1000 hover:bg-opacity-40" />-->
  
  <h1 class="relative top-[10%] w-full subtitle">About Me</h1>

  <div class="z-30 mx-16">
    <div class="flex flex-row my-16 mx-2 sm:mx-4 md:mx-8 justify-center items-center h-full">

      <div class="md:w-1/4"></div> <!-- Invisible Space -->
      <div class="w-1/2 md:w-1/4">PICTURE</div>
      <div class="text-2xl w-1/2 md:w-[45%]">{data.about.description}</div>
      <div class="md:w-[5%]"></div> <!-- Invisible Space -->

    </div>
  </div>

  <div class="custom-shape-divider-bottom-1649722884">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
    </svg>
  </div>
</div>

<div class="p-4 mx-auto text-center w-full h-auto bg-black">
	<h1 class="subtitle text-white">What can I do?</h1>
	<p class="text-white text-3xl py-6 px-1">
    I can do 
    <button class={filter === "code" ? "clicable-text text-white bg-code-200" : "clicable-text text-code-200 bg-transparent hover:text-white hover:bg-code-200"} on:click={() => change("code")}>Development</button>, 
    <button class={filter === "music" ? "clicable-text text-white bg-music-200" : "clicable-text text-music-200 bg-transparent hover:text-white hover:bg-music-200"} on:click={() => change("music")}>Music Production</button>, 
    <button class={filter === "video" ? "clicable-text text-white bg-video-200" : "clicable-text text-video-200 bg-transparent hover:text-white hover:bg-video-200"} on:click={() => change("video")}>Video Editing</button>
  </p>
</div>

<ProjectList filter={filter} projects={projectsdata} />

<style>
  .subtitle {
    @apply text-7xl font-extrabold text-center;
  }

  .clicable-text {
    @apply transition-all duration-300 py-1 px-2 rounded m-1;
  }

.custom-shape-divider-bottom-1649722884 {
    position: relative;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.custom-shape-divider-bottom-1649722884 svg {
    position: relative;
    display: block;
    width: calc(204% + 1.3px);
    height: 123px;
}

.custom-shape-divider-bottom-1649722884 .shape-fill {
  @apply fill-black;
}

</style>