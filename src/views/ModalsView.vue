<template>
  <div class="modals">
    <h1>Modals</h1>
    <div>
      <label>
        Theme
        <input
          v-model="switchTheme"
          type="checkbox"
        />
      </label>
    </div>
    <button @click="showModal = true">Show Modal</button>
    <component
      :is="switchTheme ? DarkModalComponent : ModalComponent"
      v-model="showModal"
      title="This a modal"
    >
      <!-- cSpell:disable -->
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque aut id
        sequi voluptates similique repellendus doloribus voluptatum ad optio
        deleniti, porro quisquam illum sit labore ab libero facilis a? Voluptas!
      </p>
      <!-- cSpell:enable  -->
    </component>
  </div>
</template>

<script setup>
import { ref } from "vue"
import ModalComponent from "@/components/ModalComponent.vue"
import DarkModalComponent from "@/components/DarkModalComponent.vue"

/*
  props
*/

const switchTheme = ref(false)
const showModal = ref(false)
</script>
