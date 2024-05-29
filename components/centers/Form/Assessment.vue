<script setup>
const education_list = ref([
  {
    id: "BSC",
    name: "BSC",
  },
  {
    id: "MSC",
    name: "MSC",
  },
  {
    id: "Phd",
    name: "Phd",
  },
  {
    id: "Diploma",
    name: "Diploma",
  },
]);

const items = ref([
  { name: "Yes", value: "yes" },
  { name: "No", value: "no" },
]);
</script>
<template>
  <div class="h-full space-y-8">
    <div class="grid grid-cols-3">
      <div class="col-span-2 space-y-8">
        <!-- Indoor Info Field Group -->
        <h2 class="form-title">Indoor Info</h2>
        <div class="form-group !grid-cols-2">
          <!-- Clean Field -->
          <HListSelect :items="items" class="form-input" name="clean">
            <template #label>
              <label class="form-label" for="clean"
                >Clean (no animal dung, debris, fleas, ..etc)</label
              >
            </template>
          </HListSelect>

          <!-- Leveled Ground Field -->
          <HListSelect :items="items" class="form-input" name="leveled_ground">
            <template #label>
              <label class="form-label" for="leveled_ground"
                >Leveled ground(Free from Diches, rough surfaces, etc)
              </label>
            </template>
          </HListSelect>

          <!-- Enough shades Field -->
          <HListSelect :items="items" class="form-input" name="enough">
            <template #label>
              <label class="form-label" for="enough"
                >Enough shades for children to play
              </label>
            </template>
          </HListSelect>

          <!-- Space Field -->
          <HListSelect :items="items" class="form-input" name="space">
            <template #label>
              <label class="form-label" for="space"
                >At least a space of 8 meter square
              </label>
            </template>
          </HListSelect>
        </div>

        <!-- Outdoor Info Field Group -->
        <h2 class="form-title">Outdoor Info</h2>
        <div class="form-group !grid-cols-2">
          <!-- Clean Field -->
          <HListSelect :items="items" class="form-input" name="clean">
            <template #label>
              <label class="form-label" for="clean">Cleanliness(Room)</label>
            </template>
          </HListSelect>

          <!-- Leveled Ground Field -->
          <HListSelect :items="items" class="form-input" name="leveled_ground">
            <template #label>
              <label class="form-label" for="leveled_ground"
                >Cleanliness(potties, )
              </label>
            </template>
          </HListSelect>

          <!-- Enough shades Field -->
          <HListSelect :items="items" class="form-input" name="enough">
            <template #label>
              <label class="form-label" for="enough"
                >Cleanliness(carpet, bedsheet)
              </label>
            </template>
          </HListSelect>

          <!-- Space Field -->
          <HListSelect :items="items" class="form-input" name="space">
            <template #label>
              <label class="form-label" for="space"
                >Cleanliness(Care Giver)
              </label>
            </template>
          </HListSelect>

          <!-- Space Field -->
          <HListSelect :items="items" class="form-input" name="space">
            <template #label>
              <label class="form-label" for="space"
                >Cleanliness(children)
              </label>
            </template>
          </HListSelect>

          <!-- Space Field -->
          <HListSelect :items="items" class="form-input" name="space">
            <template #label>
              <label class="form-label" for="space"
                >Orderliness(Room equipment, bed, etc)
              </label>
            </template>
          </HListSelect>

          <!-- Space Field -->
          <HListSelect :items="items" class="form-input" name="space">
            <template #label>
              <label class="form-label" for="space"
                >Illumination and ventilation
              </label>
            </template>
          </HListSelect>
        </div>
      </div>
    </div>

    <div class="flex justify-between pb-10">
      <button
        :disabled="parseInt($route.query.step) < 1"
        class="btn-primary h-fit"
        @click="$emit('previous')"
      >
        <Icon name="tdesign:arrow-left" />
        <span>Previous</span>
      </button>
      <button
        :disabled="parseInt($route.query.step) > 3"
        class="btn-primary H-fit"
        @click="$emit('proceed')"
      >
        <span>Finish</span>
        <Icon name="tdesign:arrow-right" />
      </button>
    </div>
  </div>
</template>
