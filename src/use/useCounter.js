import { reactive, computed, watch, onMounted, nextTick } from "vue"

// State (global data)
const counterData = reactive({
  count: 0,
  title: "Current Counter",
})

export function useCounter() {
  watch(
    () => counterData.count,
    (newCount, oldCount) => {
      console.log(`${newCount} - ${oldCount}`)
    }
  )

  // Getter
  const oddOrEven = computed(() => {
    return counterData.count % 2 === 0 ? "even" : "odd"
  })

  // Actions
  const increaseCounter = (amount) => {
    // counter.value++;
    counterData.count += amount
    nextTick(() => {
      console.log("Do something when counter has been updated")
    })
  }

  const decreaseCounter = () => {
    // counter.value > 0 ? counter.value-- : (counter.value = 0);
    counterData.count > 0 ? counterData.count-- : (counterData.count = 0)
  }

  onMounted(() => {
    console.log("do stuff on counter")
  })
  return {
    counterData,
    oddOrEven,
    increaseCounter,
    decreaseCounter,
  }
}
