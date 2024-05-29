<script setup>
const servicesHeader = ref(null);
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    console.log(entries, "en");
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animated-after");
      }
    });
  });

  observer.observe(servicesHeader.value);
});
</script>
<template>
  <div
    class="relative bg-white lg:px-[100px] md:px-[60px] px-5 py-10 w-full"
    id="services"
  >
    <img
      src="/images/illustrations/home-hero-bottom.svg"
      class="absolute top-0 left-0 z-0 w-full rotate-180"
      alt="home-hero-bottom"
    />
    <img
      src="/images/illustrations/home-hero-bottom.svg"
      class="absolute bottom-0 left-0 z-0 w-full"
      alt="home-hero-bottom"
    />
    <div class="flex flex-col lg:grid lg:grid-cols-2">
      <div>
        <img
          src="/images/woman-spending-time-with-her-black-baby-boy-color.png"
          alt="woman spending time with her black baby boy color"
          class="max-w-[724px] w-full object-contain"
        />
      </div>
      <div>
        <h2
          ref="servicesHeader"
          class="relative mt-10 text-left w-max section-title"
        >
          Services
        </h2>
        <span class="w-[10ch] h-2 rounded-xl bg-primary-900"></span>

        <p>
          Malesuada nullam amet elementum at elementum. Scelerisque at facilisis
          in maecenas hac aenean accumsan lorem. Vel maecenas volutpat morbi id
          dictumst sed at. Imperdiet facilisis ante massa eros cras ut. Laoreet
          malesuada quam a pharetra urna tortor. Enim neque nec auctor placerat
          scelerisque at pharetra. Vitae id eget aliquet cursus leo pretium. Vel
          tempus
        </p>
        <div class="grid grid-cols-2 gap-10 mt-16">
          <div class="flex flex-col items-center gap-y-5">
            <div
              class="flex items-center justify-center w-16 h-16 rounded bg-primary-900"
            >
              <Icon name="uil:baby-carriage" class="w-6 h-6 text-white" />
            </div>
            <h3 class="text-2xl font-semibold">Provide Daycare</h3>
            <p class="text-center text-plan-gray-700">
              Consectetur convallis arcu pharetra accumsan lorem. Scelerisque
              non id bibendum non facilisis interdum tincidunt tristique.
            </p>
          </div>
          <div class="flex flex-col items-center gap-y-5">
            <div
              class="flex items-center justify-center w-16 h-16 rounded bg-primary-900"
            >
              <Icon name="f7:lightbulb-fill" class="w-6 h-6 text-white" />
            </div>
            <h3 class="text-2xl font-semibold">Training & Capacity Building</h3>
            <p class="text-center text-plan-gray-700">
              Eros ut bibendum eu nulla faucibus sapien mattis vel cursus.
              Sagittis proin vel eget sapien quis aliquet sit mauris.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
