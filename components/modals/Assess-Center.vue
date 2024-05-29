<script setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

const showModal = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

const items = ref([
  { name: "Yes", value: "yes" },
  { name: "No", value: "no" },
]);
</script>

<template>
  <H-Modal wrapper-class="!w-[800px]" autoClose v-model="showModal">
    <template #Heading>
      <div class="flex items-center justify-between">
        <h3 class="font-medium">Assess Child Care Center</h3>
        <Icon
          name="mdi:close"
          @click="showModal = false"
          class="text-lg cursor-pointer"
        />
      </div>
    </template>
    <template #content>
      <div class="mt-10 space-y-8">
        <!-- Indoor Info Field Group -->
        <h2 class="form-title !text-lg">Indoor Info</h2>
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
        <h2 class="form-title !text-lg">Outdoor Info</h2>
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
        <!-- Note Field -->
        <H-TextArea
          class="form-input !border-none !shadow-none !w-full !px-0"
          name="note"
          placeholder="Notes will save automatically enter them here"
          label="Note"
          label-class="form-label"
        />

        <button class="btn-primary !w-full">
          <Icon name="lucide:check" />
          Save Changes
        </button>
      </div>
    </template>
  </H-Modal>
</template>
