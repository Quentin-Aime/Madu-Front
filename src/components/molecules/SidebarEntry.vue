<template>
  <div class="entry" @click="redirect">
    <i :class="icon"></i>
  </div>
</template>

<script>
export default {
  props: {
    linkName: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  },
  methods: {
    redirect() {
      this.$router.push({
        name: this.linkName
      });
    }
  }
};
</script>

<style lang="scss">
.entry {
  display: flex;
  align-items: center;
  padding: 10px;
  color: #c0c5d2;
  &.selected {
    color: #0077ff;
  }
  &:hover {
    cursor: pointer;
    color: #77848f;
  }
}
</style>
