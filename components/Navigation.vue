<template>
  <nav>
    <div class="nav-logo">NuxtPG</div>
    <div class="nav-items">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        :ellipsis="false"
        @select="handleSelect"
      >
        <el-menu-item index="1">
          <NuxtLink class="nav-link" to="/about">About</NuxtLink>
        </el-menu-item>
        <el-menu-item index="2">
          <NuxtLink class="nav-link" to="/posts">Posts</NuxtLink>
        </el-menu-item>
        <el-menu-item index="3">
          <NuxtLink class="nav-link" to="/">Home</NuxtLink>
        </el-menu-item>
      </el-menu>
    </div>
  </nav>
</template>

<script setup>
const activeIndex = ref("3");

const handleSelect = (key, keyPath) => {
  console.log(key, keyPath);
};
</script>

<style scoped lang="scss">
nav {
  height: 100%;
  width: 100%;
  background: black;
  color: white;

  padding: 0 2em;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .el-menu {
    background: black;

    .nav-link {
      color: white;
      text-decoration: none;

      &.router-link-active {
        color: #1699fd;
      }
    }
  }
}
</style>
