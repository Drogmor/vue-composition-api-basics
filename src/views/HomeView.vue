<template>
  <div class="home">
    <h2 ref="appTitleRef">
      {{ appTitle }}
    </h2>
    <h3>{{ counter.title }}</h3>
    <div>
      <button
        class="btn"
        @click="counter.decreaseCounter"
      >
        -
      </button>
      <span class="counter"> {{ counter.count }} </span>
      <button
        class="btn"
        @click="counter.increaseCounter"
      >
        +
      </button>
    </div>
    <p>This counter is odd / even</p>
    <div class="edit">
      <h4>Edit counter title:</h4>
      <input
        v-model="counter.title"
        v-autofocus
        type="text"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { vAutofocus } from "@/directives/vAutofocus"
// import { useCounter } from "@/use/useCounter.js"
import { useCounterStore } from "@/stores/counter.js"

const appTitle = "My Counter App"
const appTitleRef = ref(null)

// const { counterData, oddOrEven, increaseCounter, decreaseCounter } = useCounter()

onMounted(() => {
  console.log(appTitleRef.value.offsetWidth)
})

/* 
  Counter
*/

const counter = useCounterStore()
</script>

<style>
.home {
  text-align: center;
  padding: 20px;
}
.btn {
  min-width: 60px;
}
.btn,
.counter {
  font-size: 40px;
  margin: 10px;
}
.edit {
  margin-top: 60px;
}
</style>

<!-- Composition API script method
<script>
import { ref } from "vue";
export default {
  setup() {
    const counter = ref(0);
    const decreaseCounter = () => {
      counter.value > 0 ? counter.value-- : (counter.value = 0);
    };
    const increaseCounter = () => {
      counter.value++;
    };
    return {
      counter,
      decreaseCounter,
      increaseCounter,
    };
  },
};
</script>
-->

<!-- Options API
<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increaseCounter() {
      this.counter++;
    },
    decreaseCounter() {
      this.counter--;
    },
  },
  directives: {
    autofocus: {
      mounted(el) {
        el.focus()
      }
    }
  }
};
</script>
-->
