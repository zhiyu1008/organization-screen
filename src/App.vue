<template>
  <dv-full-screen-container>
    <div class="dv_box">
      <router-view/>
    </div>
  </dv-full-screen-container>
</template>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
}
li{
  list-style: none
}
.dv_box{
  width: 100%;
  height: 100%;
  color: #fff;
  background: #01040f;
  padding: 20px;
  box-sizing: border-box;
}
</style>
