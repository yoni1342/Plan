<script setup>
const props = defineProps({});

const difficulty = ref([
  {
    id: "Difficult",
    name: "Difficult",
  },
  {
    id: "Not Difficult",
    name: "Not Difficult",
  },
]);

const items = ref([
  { name: "Yes", value: "yes" },
  { name: "No", value: "no" },
]);
</script>
<template>
  <div class="space-y-12">
    <h1 class="form-title">Follow up Questions</h1>
    <div class="h-full pr-4 space-y-8 overflow-y-auto">
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
          <label class="form-label" for="space">Cleanliness(Care Giver) </label>
        </template>
      </HListSelect>

      <!-- Space Field -->
      <HListSelect :items="items" class="form-input" name="space">
        <template #label>
          <label class="form-label" for="space">Cleanliness(children) </label>
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
</template>
