<template>
  <div class="note-container">
    <EditNote />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import EditNote from '@/components/EditNote.vue'

@Component({
  components: {
    EditNote
  }
})
export default class App extends Vue {
  mounted () {
    this.$store.dispatch('sync')
  }
}
</script>

<style lang="scss">
.note-container {
  display: flex;
  flex-direction: column;
  max-width: 40rem;
}
</style>
