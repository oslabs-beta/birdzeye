<template>
  <div>
    <button>{{ fileName }}</button>
    <right-click-form>Right Click Form</right-click-form>
  </div>
</template>

<script>
import RightClickForm from "./RightClickForm.vue";

export default {
  props: ["fileName"],
  components: {
    RightClickForm,
  },
  data() {
    return {};
  },
};
</script>
