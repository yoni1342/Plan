<script setup>
import { useDebounceFn, onClickOutside } from "@vueuse/core";
import { useField } from "vee-validate";

const emit = defineEmits([
  "update:modelValue",
  "update:selected",
  "search",
  "onSelectionFound",
]);
const props = defineProps({
  id: String,
  label: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  items: {
    type: Array,
    required: true,
    default() {
      return [];
    },
  },
  text: {
    type: String,
    default: "name",
  },
  value: {
    type: String,
    default: "id",
  },
  search: {
    type: String,
  },
  modelValue: {
    type: [String, Array, Object],
    // default: () => [],
  },
  selected: {
    type: String,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  errorMessages: {
    type: String,
  },
  emptyMessage: {
    type: String,
  },
  placeHolder: {
    type: String,
  },
  init: {
    type: Object,
    default: {},
  },
  class: {
    type: String,
    default: "",
  },
  clearable: Boolean,
  trailingIcon: Function,
  rules: {
    type: String,
    default: "",
    required: false,
  },
  supporter: {
    type: String,
  },
  hideDetail: Boolean,
  searchPlaceholder: String,
  disabled: Boolean,
  placeholderStyle: String,
});

const {
  errorMessage,
  value: inputValue,
  meta,
} = useField(props.name, props.rules, {
  initialValue: props.modelValue,
});

const vv = ref(props.selected);
const selected = ref({});
const _placeholder = ref(props.placeHolder);
const show = ref(false);
const input = ref(null);
const search = ref(undefined);
const { items, disabled } = toRefs(props);
const list_select = ref(null);

onBeforeMount(() => {
  if (props.multiple && inputValue.value) {
    for (let v in inputValue.value) {
      selected.value[inputValue.value[v]] = true;
    }
  }
});

const DataItems = computed(() => {
  if (Object.keys(props.init).length) {
    const itemExists = items.value.some((item) => item.id === props.init.id);

    if (!itemExists) {
      items.value.unshift({
        id: props.init.id,
        name: props.init.name,
      });
    }
  }

  return items.value;
});

const placeholder = computed(() => {
  if (!props.multiple && items.value.length) {
    let v = DataItems.value.find((e) => e[props.value] === props.selected);

    if (v) {
      selected.value = v[props.value];
      _placeholder.value = v[props.text];
      inputValue.value = v[props.text];

      emit("onSelectionFound", v);
      return _placeholder.value;
    } else if (props.placeHolder) {
      _placeholder.value = props.placeHolder;
    } else _placeholder.value = "Select";
  }

  return _placeholder.value;
});

const select = (item) => {
  vv.value = item.id;
  inputValue.value = item[props.value];
  emit("update:selected", item[props.value]);
  emit("update:modelValue", item);
  selected.value = item[props.value];
  _placeholder.value = item[props.text];
  show.value = false;
};

const outside = useDebounceFn(() => {
  show.value = false;
}, 300);

const open = () => {
  show.value = true;

  input.value.focus();
};
const queryList = () => {
  emit("search", search.value);
};

const clear = () => {
  search.value = undefined;
  inputValue.value = "";
  selected.value = "";
  show.value = false;
  emit("update:modelValue", undefined);
  emit("update:selected", undefined);
  emit("onSelectionFound", undefined);
  emit("search", "");
};
onClickOutside(list_select, (e) => (show.value = false));
</script>

<template>
  <div class="relative">
    <div class="flex items-center gap-x-1">
      <slot name="label"></slot>
      <span
        v-if="rules.includes('required') && !props.disabled"
        class="text-red-600"
        >*</span
      >
    </div>
    <div class="relative mt-1 rounded-md font-body">
      <button
        type="button"
        :id="id"
        :disabled="disabled"
        @click="open"
        @focus="open"
        class="relative w-full py-2 pl-3 pr-10 text-base text-left bg-white border rounded-md cursor-default focus:outline-none focus:ring-1 dark:bg-hahu-gray dark:text-white"
        :class="[
          errorMessage
            ? 'focus:ring-red-500 focus:border-red-500 hover:border-red-500 border-red-500'
            : 'focus:ring-kena-gray-300  focus:border-kena-gray-400 hover:border-kena-gray-400 border-kena-gray-300 border-1 ',
          props.class ? props.class : '',
          disabled ? ' bg-gray-100 !cursor-not-allowed' : '',
          placeholder && !inputValue
            ? 'text-gray-400 dark:!text-gray-400/80'
            : '',
        ]"
      >
        {{ (inputValue && inputValue.name) || placeholder || $t("select") }}
      </button>
      <div
        v-if="trailingIcon && !inputValue"
        class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
      >
        <!-- <component class="w-5 h-5 text-gray-400" :is="trailingIcon"></component> -->
        <Icon :name="trailingIcon" width="20" height="20" color="gray" />
      </div>
      <div
        v-else-if="!inputValue"
        class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
      >
        <Icon name="mdi:chevron-down" width="20" height="20" color="gray" />
      </div>
      <div
        v-if="clearable && inputValue"
        @click="clear"
        class="absolute inset-y-0 right-0 flex items-center pr-3"
      >
        <!-- <XMarkIcon class="w-5 h-5 text-gray-500 cursor-pointer"></XMarkIcon> -->
        <Icon
          name="gg:close"
          width="20"
          height="20"
          color="gray"
          class="cursor-pointer"
        />
      </div>
    </div>

    <ul
      ref="list_select"
      v-show="show"
      class="absolute z-50 w-full overflow-auto text-base bg-white border-b-2 border-l-2 border-r-2 shadow-lg border-primary-200 dark:bg-hahu-gray dark:border-primary-2 scrollbar scrollbar-thin scrollbar-track-rounded-full scrollbar-track-primary max-h-56 rounded-br-xl rounded-b-xl"
      :class="[supporter, DataItems.length < 5 ? '!h-fit' : '']"
    >
      <li class="flex items-center justify-center px-2">
        <input
          ref="input"
          @input="queryList"
          v-model="search"
          @blur="outside"
          autocomplete="off"
          type="text"
          :name="props.name"
          id="email"
          class="block w-full my-1 border-gray-300 rounded-md focus:ring-primary-600 focus:border-primary-600 sm:text-sm font-body dark:bg-hahu-gray dark:text-white"
          :placeholder="
            props.searchPlaceholder ||
            $t('Search for options (Type to load more)')
          "
        />
      </li>
      <li class="h-1">
        <H-LoadingProgress
          v-if="loading"
          class="w-full rounded-xl"
          color1="bg-primary-500/40"
          color2="bg-primary-500"
          color3="bg-dark-blue"
          height="h-1"
        ></H-LoadingProgress>
      </li>
      <li
        v-for="item in DataItems"
        :key="item.id"
        @click="select(item)"
        class="relative px-3 py-3 border-b cursor-pointer select-none hover:bg-blue-50 dark:hover:bg-secondary-2 text-secondary"
      >
        <div class="flex items-center justify-between">
          <span
            class="block font-normal truncate text-secondary dark:text-white font-body"
          >
            {{ item.name }}
          </span>
          <span
            class="pr-3 text-sm font-medium text-gray-400 font-body dark:text-white"
          >
            {{ item.identifier ? item.identifier : "" }}
          </span>
          <Icon
            v-if="placeholder == item.name"
            name="ic:round-check"
            width="25"
            height="25"
            class="cursor-pointer text-primary-500"
          />
        </div>
      </li>
      <li v-if="!emptyMessage?.length && DataItems.length" class="py-2">
        <p class="flex items-center px-2 space-x-2 text-xs text-primary">
          <!-- <InformationCircleIcon class="w-3 h-3" /> -->
          <Icon name="mdi:information-outline" width="20" height="20" />
          <span> search on the above text field to load more </span>
        </p>
      </li>
      <li v-else-if="!emptyMessage?.length && !DataItems.length">
        <p class="px-2 text-xs text-primary">No search results</p>
      </li>
      <li v-if="emptyMessage?.length">
        <p class="px-2 text-xs text-primary">{{ emptyMessage }}</p>
      </li>

      <div
        v-if="!loading && DataItems.length === 0"
        class="flex items-center justify-center pb-2 text-black test-lg"
      >
        <slot name="option" :item="search" />
      </div>
    </ul>

    <p
      :visible="errorMessage"
      v-if="!props.hideDetail"
      class="mt-1 text-sm text-red-600 font-body"
      id="email-error"
    >
      {{ errorMessage }} &nbsp;
    </p>
  </div>
</template>
