<script>
    import Navbar from "$lib/Navbar.svelte";
</script>
<Navbar/>
<div class="w-full h-full overflow-y-auto lg:pl-4 lg:p-4">
    <h1
        class="text-4xl font-cabin font-[400] pl-12 pt-3 pb-3 absolute w-full bg-black pb-4 lg:hidden"
    >
        News
    </h1>
    <div class="pt-20 lg:pt-4 p-4">
        <!-- News Grid -->
        <div id="news-grid" class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- News Item 1 -->
            <div class="news-item cursor-pointer group" data-news="1">
                <img
                    src="./n1-cover.jpg"
                    alt="News 1"
                    class="w-full object-cover rounded-lg transition-transform lg:group-hover:scale-[101%]"
                />
                <h3 class="mt-4 text-xl group-hover:text-red-800">
                    News Book Title 1
                </h3>
                <p class="mt-2 text-gray-400">
                    caption text caption text caption text
                </p>
            </div>

            <!-- News Item 2 -->
            <div class="news-item cursor-pointer group" data-news="2">
                <img
                    src="./n2-cover.jpg"
                    alt="News 2"
                    class="w-full object-cover rounded-lg transition-transform lg:group-hover:scale-[101%]"
                />
                <h3 class="mt-4 text-xl group-hover:text-red-800">
                    New Book Title 2
                </h3>
                <p class="mt-2 text-gray-400">
                    cpation text caption text cpation text
                </p>
            </div>
        </div>

        <!-- News Detail View (hidden by default) -->
        <div id="news-detail" class="hidden mt-8">
            <button
                id="back-button"
                class="mb-6 flex items-center text-red-800 hover:text-red-300 transition"
            >
                <i class="fas fa-arrow-left mr-2"></i> Back to News
            </button>

            <div class="lg:flex gap-8">
                <!-- Images Grid -->
                <div class="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="image-item cursor-pointer" data-index="0">
                        <img
                            src=""
                            alt=""
                            class="w-full h-64 object-cover rounded-lg"
                        />
                    </div>
                    <div class="image-item cursor-pointer" data-index="1">
                        <img
                            src=""
                            alt=""
                            class="w-full h-64 object-cover rounded-lg"
                        />
                    </div>
                    <div class="image-item cursor-pointer" data-index="2">
                        <img
                            src=""
                            alt=""
                            class="w-full h-64 object-cover rounded-lg"
                        />
                    </div>
                    <div class="image-item cursor-pointer" data-index="3">
                        <img
                            src=""
                            alt=""
                            class="w-full h-64 object-cover rounded-lg"
                        />
                    </div>
                </div>

                <!-- Text Content -->
                <div class="lg:w-1/3 mt-6 lg:mt-0">
                    <h2 id="detail-title" class="text-2xl font-cabin mb-4"></h2>
                    <div
                        id="detail-content"
                        class="text-gray-300 space-y-4"
                    ></div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
</style>
