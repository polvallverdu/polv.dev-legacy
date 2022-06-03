<script lang="ts">
  import Axios from "axios";
import { onMount } from "svelte";
  import type { ContactInfo } from "../types";
  import ImageWrap from "../wraps/ImageWrap.svelte";
  import VideoWrap from "../wraps/VideoWrap.svelte";

  export let contactInfo: ContactInfo;
  let failed: boolean = false;
  let successful: boolean = false;

  let name = "";
  let email = "";
  let message = "";

  function openTab(url: string) {
    window.open(url, "_blank").focus();
  }

  async function submitForm() {
    const url = contactInfo.form;
    const data = {
      name,
      email,
      message,
    };
    try {
      const response = await Axios.post(url, data);
      failed = response.status !== 200;
      successful = response.status === 200
    } catch (e) {
      failed = true;
    }
    setTimeout(() => {
      failed = false;
      successful = false;
    }, 5000);
  }

  function attachFormSubmitEvent(formId) {
    document.getElementById(formId).addEventListener("submit", (event) => {
      event.preventDefault();
      submitForm();
    });
  }

  onMount(() => {
    attachFormSubmitEvent("contactform");
  })

  const textboxClasses = "backdrop-blur-md w-full appearance-none rounded border bg-black bg-opacity-50 py-2 px-3 font-semibold leading-tight text-white outline outline-1 transition-all focus:bg-white focus:font-normal focus:bg-opacity-90 focus:text-black focus:outline-double hover:outline-4 hover:bg-opacity-40 hover:bg-white duration-100";
  const labelsClasses = "text-xl font-semibold";
</script>

<div class="relative w-full h-screen bg">
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
    <div class="text-4xl md:text-7xl font-extrabold mb-20 text-white w-full">
      ✉️ Contact me 📮
    </div>
    <div class=" text-white w-[85%] sm:w-[75%] lg:w-1/2 inline-block text-left">
      <!--div>
        <button on:click={() => openTab(`mailto:${contactInfo.email}`)}>{contactInfo.email}</button>
        <button on:click={() => openTab(`https://twitter.com/${contactInfo.twitter}`)}>{contactInfo.twitter}</button>
        <button>{contactInfo.discord}</button>
        <button on:click={() => openTab(contactInfo.linkedin)}>Linkedin</button>
        <button on:click={() => openTab(contactInfo.socialmedia)}>Other social media</button>
      </div-->
      <div>
        <form autocomplete="off" data-lpignore="true" data-form-type="other" id="contactform">
          <label class="m-1">
            <a class={labelsClasses}>Name</a>
            <br>
            <input type="text" name="name" class={textboxClasses} required placeholder="Elon Musk" autocomplete="off" data-lpignore="true" data-form-type="other" bind:value={name} />
          </label>
          <br>
          <label class="m-1">
            <a class={labelsClasses}>Email</a>
            <br>
            <input type="email" name="email" class={textboxClasses} required placeholder="something@example.com" autocomplete="off" data-lpignore="true" data-form-type="other" bind:value={email} />
          </label>
          <br>
          <label class="m-1">
            <a class={labelsClasses}>Message</a>
            <br>
            <textarea name="message" required class={textboxClasses} placeholder="(max. of 1000 characters)" autocomplete="off" data-lpignore="true" data-form-type="other" max="1000" bind:value={message} />
          </label>
          <br>
          <button type="submit" class="w-full my-4 py-2 px-4 outline outline-2 outline-white bg-black backdrop-blur-md bg-opacity-50 hover:bg-opacity-100 hover:bg-white transition-all hover:text-black font-semibold text-xl rounded">✈️ Submit</button>
        </form>
      </div>

      <div class="text-xl shadow-lg font-semibold text-center">
        {#if successful}
          <p class="text-green-500">Your message was sent successfully!</p>
        {/if}
        {#if failed}
          <p class="text-red-400">Something went wrong. Your message couldn't be sent.</p>
        {/if}
      </div>

      <button on:click={() => openTab(contactInfo.socialmedia)} class="w-full my-4 py-2 px-4 outline outline-2 outline-white bg-black backdrop-blur-md bg-opacity-50 hover:bg-opacity-100 hover:bg-white transition-all hover:text-black font-semibold text-xl rounded">...or you can contact me through my socials 🔗</button>
    </div>
    <div class="text-white text-md mt-5 shadow-lg">
      Designed and Coded with ♥ by Pol Vallverdu. Powered by <a href="https://svelte.dev/">Svelte</a> and Kubernetes.
    </div>
  </div>
</div>

<style lang="scss">
  .bg {
    background-image: url("https://cdn.pol.engineer/webdata/intro_accelerator.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: #000;
  }

  .label {
    @apply m-2 inline-block;
    text-shadow: 0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black;
  }
</style>