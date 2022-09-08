/* Define custom directive globally */
export const vAutofocus = {
  mounted: (el) => {
    el.focus()
  },
}
