<template>
  <div
    class="banner mt-3 d-md-none d-block"
    :style="{
      backgroundImage: `url(${require('@/assets/images/front/aboutus.jpg')} )`,
    }"
  ></div>
  <div class="container">
    <div
      class="banner mt-3 d-md-block d-none"
      :style="{
        backgroundImage: `url(${require('@/assets/images/front/aboutus.jpg')} )`,
      }"
    ></div>
    <div class="body my-5">
      <h1 class="text-primary fw-bold lh-lg fs-2">
        " 希望你的生活，有 The Florist 的陪伴 "
      </h1>
      <h2 class="fw-bold mt-5 mb-4 fs-4">花，帶給人什麼樣的感覺？</h2>
      <h3 class="lh-lg fs-6">
        很久以前，有一項研究發現，花的力量可以維持60秒，<br />
        最新研究卻發現，花朵帶來的良好體驗遠遠不止60秒。正是這種「好感覺」讓人對花朵始終情有獨鍾。<br />
        花朵除了可以帶給人好心情，更能拉近人與人之間的距離，有了花草植物的陪伴，跟著它們一起綻放吧！
      </h3>
      <h2 class="fw-bold mt-5 mb-4 fs-4">關於 The Florist 花閣</h2>
      <h3 class="lh-lg fs-6">
        The florist 花閣 讓花成為你生活中的陪伴<br />
        花，除了可以為生活帶來氛圍，也是一種傳遞愛的媒介，<br />
        希望可以透過花朵，創造生活的儀式感，激發你的浪漫因子，<br />
        希望你能和花朵一起綻放，希望你的生活，有 The Florist 花閣的陪伴。
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    document.documentElement.scrollTop = 0;
  },
};
</script>

<style lang="scss" scoped>
.banner {
  height: calc(100vh - 500px);
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}

@media screen and (min-width: 769px) {
  .body {
    padding: 0 8rem;
  }
}

p {
  font-size: 0.875rem;
}
@media screen and (min-width: 576px) {
  p {
    font-size: 1rem;
  }
}
</style>
