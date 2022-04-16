<script lang="ts">
import ImageWrap from "./ImageWrap.svelte";
import VideoWrap from "./VideoWrap.svelte";
import YoutubeWrap from "./YoutubeWrap.svelte";

  export let src: string;

  type MediaType = "video" | "image" | "youtube";
  const getMediaType = (src: string): MediaType => {
    if (src.includes("youtube.com/embed")) {
      return "youtube";
    } else if (src.endsWith(".mp4") || src.endsWith(".avi")) {
      return "video";
    } else {
      return "image";
    }
  };

  const t = getMediaType(src); 
</script>

<div class="w-full h-full">
  {#if t === "youtube"}
    <YoutubeWrap url={src} />
  {:else if t === "video"}
    <VideoWrap url={src} />
  {:else}
    <ImageWrap src={src} />
  {/if}
</div>

