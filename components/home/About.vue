<script setup>
const aboutHeader = ref(null);
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animated-after");
      }
    });
  });

  observer.observe(aboutHeader.value);
});
</script>

<template>
  <div
    class="bg-primary-50 lg:px-[100px] md:px-[60px] px-5 grid lg:grid-cols-6 grid-cols-1 gap-x-10 py-10"
    id="about"
  >
    <div class="lg:col-span-4">
      <h2 ref="aboutHeader" class="relative section-title w-max">
        ABOUT Project
      </h2>
      <p class="text-lg max-w-[91ch]">
        The project aims to empower stay-at-home moms by establishing home-based
        childcare services in their own homes. This initiative recognizes the
        high demand for childcare and seeks to provide a valuable opportunity
        for mothers to establish their own businesses. <br />The success of the
        project will be measured by the effective attainment of child
        development milestones through the implementation of Early Childhood
        Care and Development (ECCD) approaches. Additionally, the project aims
        to empower stay-at-home moms through ECCD and business training,
        enabling them to successfully run home-based childcare services and earn
        a living. Lastly, the project aims to alleviate the childcare burden
        faced by female factory workers and other young workers in the targeted
        location through the provision of home-based childcare services.
        <br />Various stakeholders play critical roles in the project. The
        Bureau of Health of the Sidama Regional government will facilitate the
        delivery of healthcare services for home-based childcare. The Bureau of
        Job Skill and Enterprise Development will enhance business development
        training and entrepreneurial skills. The Bureau of Women, Youth, and
        Children will ensure the application of safeguarding and protection
        principles. The Bureau of Finance will regulate the overall
        implementation of the project and receive quarterly and final project
        reports. Additionally, Kebeles, which are local administrative units,
        have subcommittees that will collaborate with the project team to ensure
        appropriate target selection and facilitate capacity building. Overall,
        this project seeks to empower stay-at-home moms, promote child
        development, and alleviate childcare burdens, thereby making a positive
        impact on individuals, families, and communities.
      </p>
    </div>
    <div class="flex items-center justify-center lg:col-span-2">
      <div class="relative grid grid-cols-2 gap-10 text-primary-950">
        <span class="absolute left-0 w-full h-px top-1/2 bg-primary-200"></span>
        <span class="absolute top-0 w-px h-full left-1/2 bg-primary-200"></span>
        <div class="flex flex-col items-center">
          <img src="/icons/child-blob.svg" alt="child-blob" class="w-16 h-16" />
          <h3 class="text-[40px]">2,500</h3>
          <p class="text-black">Supported Children</p>
        </div>
        <div class="flex flex-col items-center">
          <img src="/icons/mother.svg" alt="mother" class="w-16 h-16" />
          <h3 class="text-[40px]">700</h3>
          <p class="text-black">Working Mothers</p>
        </div>
        <div class="flex flex-col items-center">
          <img src="/icons/money.svg" alt="mother" class="w-16 h-16" />
          <h3 class="text-[40px]">16 M</h3>
          <p class="text-black">Allocated Budget</p>
        </div>

        <div class="flex flex-col items-center">
          <Icon
            name="lucide:calendar-days"
            class="w-16 h-16 text-primary-950"
          />
          <h3 class="text-[40px]">10 Months</h3>
          <p class="text-black">Project Timeline</p>
        </div>
      </div>
    </div>
  </div>
</template>
