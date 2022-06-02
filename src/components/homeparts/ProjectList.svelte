<script lang="ts">
  import SmallProject from "../Project.svelte";
  import type { ProjectListFilter, ProjectType } from "../../types";

  export let projects: ProjectType[];
  export let filter: ProjectListFilter;
</script>

<div class="relative w-full h-auto">
  <div class="custom-shape-divider-top-1649723136">
    <svg class="drop-shadow-lg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
  </div>


  <div class="w-full h-auto bg-gradient-to-tr from-code-100 via-code-200 to-code-300">
  <!--div class="absolute z-0 bg-black w-full h-full bg-opacity-50" /-->
    <div class="flex flex-wrap justify-center py-24 px-8 sd:px-16 md:px-24">
      {#each projects as project}
        <div class="sd:px-4 md:px-8 py-8">
          <SmallProject project={project} />
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .custom-shape-divider-top-1649723136 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-top-1649723136 svg {
    position: relative;
    display: block;
    width: calc(300% + 1.3px);
    height: 101px;
}

.custom-shape-divider-top-1649723136 .shape-fill {
  @apply fill-black;
}
</style>