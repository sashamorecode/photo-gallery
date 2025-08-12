<script>
    import { page } from "$app/stores";
    import Navbar from "$lib/Navbar.svelte";
    import { entries } from "../entries.js";
    let entryUrl = $page.params.newsEntry;
    console.log(entryUrl)
    console.log(entries)
    let thisEntry = entries.find((entry) => {
        return entry.url === entryUrl;
    });
    console.log(thisEntry)
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
                    {#each thisEntry.images as image}
                        <div class="image-item cursor-pointer" data-index="0">
                            <img
                                src={"/" + image}
                                alt=""
                                class="w-full h-full rounded-lg"
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
