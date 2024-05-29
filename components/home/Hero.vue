<script setup></script>

<template>
  <div
    class="relative w-full lg:min-h-[745px] md:min-h-[600px] sm:min-h-[500px] min-h-[450px] flex mt-16 xl:mt-5"
  >
    <div
      class="lg:w-2/3 w-full lg:pl-[100px] md:pl-[60px] pl-5 relative flex items-center"
    >
      <img
        src="/images/illustrations/homepage-hero-cloud.png"
        class="absolute top-0 left-0 z-0 w-full h-full"
        alt=""
      />

      <div class="z-10">
        <h1 class="text-black section-title max-w-[26ch]">
          <span class="text-white">Unlocking</span> the Potential of
          <span class="text-white">Young Mothers</span> Through
          <span class="text-white">Childcare</span> Franchise Model
        </h1>
        <p class="max-w-[80ch] text-white">
          The goal of the project is to empower working and stay-at-home moms
          through establishing home-based childcare services in their own homes.
          In doing so, they will have their own business in a sector that is in
          high demand and continues to do so.
        </p>
        <div class="flex items-center mt-8 gap-x-5">
          <nuxt-link to="#about">
            <button
              class="font-medium btn-primary sm:!w-48 !w-32 !min-w-max px-2 gap-x-3"
            >
              <icon name="fe:target" />
              <span>Project Mission</span>
            </button>
          </nuxt-link>
          <nuxt-link to="#faq">
            <button
              class="btn-primary sm:!w-48 !w-32 !min-w-max px-2 gap-x-3 font-medium !bg-transparent border border-plan-gray-300"
            >
              <icon name="lucide:git-pull-request-closed" />
              <span>FAQS</span>
            </button>
          </nuxt-link>
        </div>
      </div>
    </div>
    <div
      class="items-center justify-center w-1/3 lg:pr-[100px] md:pr-[60px] pr-5 lg:flex hidden"
    >
      <img
        src="/images/woman-spending-time-with-her-black-baby-boy.png"
        alt="woman-spending-time-with-her-black-baby-boy"
        class="w-[557px] h-[700px] mt-20 grayscale"
      />
    </div>
    <img
      src="/images/illustrations/home-hero-bottom.svg"
      class="absolute bottom-0 left-0 z-0 w-full"
      alt="home-hero-bottom"
    />
  </div>
</template>
