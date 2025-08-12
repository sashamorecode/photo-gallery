<script>
    import { page } from "$app/stores";
    import Navbar from "$lib/Navbar.svelte";
    import { entries } from "../entries.js";
    import { Carousel, Controls, CarouselIndicators } from "flowbite-svelte";
    let entryUrl = $page.params.newsEntry;
    let thisEntry = entries.find((entry) => entry.url === entryUrl);

    // Carousel Modal State
    let showCarousel = false;
    let carouselIndex = 0;

    function openCarousel(idx) {
        carouselIndex = idx;
        showCarousel = true;
        document.body.style.overflow = "hidden"; // prevent scroll
    }
    function closeCarousel() {
        showCarousel = false;
        document.body.style.overflow = ""; // restore scroll
    }
</script>

<Navbar />
<div class="w-full h-full overflow-y-auto lg:p-4">
    <div class="pt-20 lg:pt-0 p-4">
        <div id="news-detail" class="mt-8">
            <a href="/News">
                <button
                    id="back-button"
                    class="mb-6 flex items-center text-red-800 hover:text-red-300 transition"
                >
                    <i class="fas fa-arrow-left mr-2"></i> Back to News
                </button>
            </a>
            <div class="lg:flex gap-8">
                <!-- Images Grid -->
                <div class="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {#each thisEntry.images as image, i}
                        <div
                            class="image-item cursor-pointer"
                            on:click={() => openCarousel(i)}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                class="w-full h-full rounded-lg object-contain"
                            />
                        </div>
                    {/each}
                </div>
                <!-- Text Content -->
                <div class="lg:w-1/3 mt-6 lg:mt-0">
                    <h2 id="detail-title" class="text-2xl font-cabin mb-4">
                        {thisEntry.title}
                    </h2>
                    <div id="detail-content" class="text-gray-300 space-y-4">
                        {thisEntry.content}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Carousel Modal Overlay -->
{#if showCarousel}
    <div
        class="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center size-full"
        style="backdrop-filter: blur(2px);"
    >
        <div class="absolute top-4 right-8 z-60">
            <button
                on:click={closeCarousel}
                class="text-white text-5xl hover:text-red-400"
            >
                &times;
            </button>
        </div>
        <div class="size-full flex items-center justify-center relative">
            <Carousel
                images={thisEntry.images}
                bind:index={carouselIndex}
                duration={0}
                imgClass="object-contain size-full"
                style="height: 90%;"
                class="bg-transparent size-full flex items-center"
            >
                <Controls />
                <CarouselIndicators />
            </Carousel>
        </div>
    </div>
{/if}
