<template>
  <div class="border rounded-xl w-[688px] space-y-3 p-6 shadow">
    <div class="flex justify-between">
      <span class="text-lg font-normal text-gray-950 text"
        >1. Sits momentarily propped on hands</span
      >
      <span class="text-lg text-gray-600">2 Points</span>
    </div>
    <div class="flex items-center gap-x-4">
      <span class="flex items-center gap-x-2">
        <HCheckBox
          class="!text-primary-500 !text-xl h-5 w-5"
          wrapperClass="!item-center "
          name="yes"
          :disabled="true"
        />
        <label class="text-base text-primary-950"> Yes</label>
      </span>
      <span class="flex items-center gap-x-2">
        <HCheckBox
          class="!text-primary-500 h-5 w-5"
          wrapperClass="!item-center "
          name="yes"
          :disabled="true"
        />
        <label class="text-base text-primary-950"> No</label>
      </span>
      <span class="flex items-center gap-x-2">
        <HCheckBox
          class="!text-primary-500 h-5 w-5"
          wrapperClass="!item-center "
          name="yes"
          :disabled="true"
        />
        <label class="text-base text-primary-950"> Maybe</label>
      </span>
    </div>
    <p class="pl-4 text-base text-gray-600 border-l-4 rounded-sm">
      Pharetra ultrices libero rhoncus consectetur ut iaculis feugiat eu
      sodales. Mattis diam duis rhoncus elementum quam diam. Tincidunt sed sit
      mi id. In mattis bibendum arcu morbi luctus tincidunt a mattis quis.
    </p>
  </div>
</template>
