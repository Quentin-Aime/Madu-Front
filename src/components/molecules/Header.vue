<template>
  <div class="header">
    <h1 class="title">MADU</h1>
    <el-button class="logout-button" type="primary" @click="logout"
      >Se déconnecter</el-button
    >
  </div>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  method: {
    logout() {
      console.debug('log out'); // eslint-disable-line
    }
  }
};
</script>

<style lang="scss">
.header {
  position: fixed;
  z-index: 2;
  background-color: white;
  top: 0;
  left: 75px;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 0 50px;
  .logout-button {
    background-color: #0077ff;
  }
}
</style>
