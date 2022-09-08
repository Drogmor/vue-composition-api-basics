<template>
  <teleport to=".modals-container">
    <div
      v-if="modelValue"
      class="modal"
    >
      <!-- 
        Content using named slots
        <h1><slot name="title" /></h1> 
        -->
      <!-- Content using props -->
      <h1>
        {{ props.title }}
      </h1>
      <slot />

      <button @click="$emit('update:modelValue', false)">Hide modal</button>
      <div>Username is: {{ userData.username }}</div>
    </div>
  </teleport>
</template>

<script setup>
/*
    imports
  */
import { inject } from "vue"
/* 
    props
*/

// const props = defineProps(['title'])
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "Insert title",
  },
})

/*
  emits
*/

// eslint-disable-next-line no-unused-vars
const emit = defineEmits(["update:modelValue"])
// const handleBtnClick = () => {
//   emit("update:modelValue", false);
// };

/*
  user data
*/

const userData = inject("userData")
</script>

<style scoped>
.modal > *,
:slotted(p) {
  color: #111;
}
/* 
  The below CSS will not work because the parent element has a relative position.
  To create the modal we need to move the code inside a teleport tag.

  */
.modal {
  background: rgba(255, 255, 255, 1);
  padding: 10px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>
