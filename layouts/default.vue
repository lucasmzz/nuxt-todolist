<template>
  <div class="common-layout">
    <el-container class="main-container">
      <el-header>
        <Navigation />
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>
          <slot />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
.main-container {
  min-width: 100vw;
  min-height: 100vh;
}

.el-header {
  padding: 0;
}

.el-aside {
  background: whitesmoke;
}
</style>
