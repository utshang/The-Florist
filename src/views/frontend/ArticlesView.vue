<template>
  <div
    class="banner mt-3 d-md-none d-block"
    :style="{
      backgroundImage: `url(${require('@/assets/images/front/articles.jpg')} )`,
    }"
  ></div>
  <div class="container">
    <div
      class="banner mt-3 d-md-block d-none"
      :style="{
        backgroundImage: `url(${require('@/assets/images/front/articles.jpg')} )`,
      }"
    ></div>
    <div class="body my-5">
      <h2 class="text-primary fw-bold mb-5">最新消息</h2>
      <template v-if="articles.length === 0">
        <div class="p-5 text-center">
          <span class="material-icons-outlined heart_broken text-primary mb-3">
            heart_broken
          </span>
          <p class="text-muted mb-4">目前沒有發佈任何文章唷！</p>

          <RouterLink
            to="/products"
            class="bg-primary text-white py-2 px-5 rounded-3"
            >來去逛逛！</RouterLink
          >
        </div>
      </template>
      <template v-else>
        <div v-for="item in articles" :key="item.id" class="m-3">
          <RouterLink :to="`/article/${item.id}`">
            <div class="row rounded-3 shadow p-4">
              <div class="col-sm-5 col-md-3">
                <img
                  class="article-img rounded-3"
                  :src="item.image"
                  :alt="item.title"
                />
              </div>
              <div
                class="col-sm-7 col-md-9 mt-4 mt-sm-1 my-1 d-flex flex-column justify-content-between"
              >
                <div>
                  <h1 class="fs-4 fw-bold text-black mb-3">
                    {{ item.title }}
                  </h1>
                  <h2 class="mb-3 text-black lh-base fs-6">
                    {{ item.description }}
                  </h2>
                </div>
                <div class="d-flex align-items-center flex-wrap fs-7">
                  <span class="material-icons-outlined text-primary me-2">
                    face
                  </span>
                  <p class="text-muted me-4">{{ item.author }}</p>
                  <span class="material-icons-outlined me-2 text-primary">
                    event_note
                  </span>
                  <p class="fs-7 text-muted me-4">
                    {{ $filters.date(item.create_at) }}
                  </p>
                  <h3
                    v-for="(item, index) in item.tag"
                    :key="`tags_${index}`"
                    class="d-md-block d-none"
                  >
                    <h3 class="tag me-2 py-1 px-2 rounded-3 fs-7">
                      #{{ item }}
                    </h3>
                  </h3>
                </div>
                <div class="d-flex d-md-none mt-3 mt-md-0">
                  <div
                    v-for="(item, index) in item.tag"
                    :key="`tags_${index}`"
                    class="d-md-none"
                  >
                    <h3 class="tag fs-7 me-2 py-1 px-2 rounded-3 fs-7">
                      #{{ item }}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </RouterLink>
        </div>
      </template>
    </div>
  </div>

  <VeeLoading :active="isLoading" />
</template>

<script>
export default {
  inject: ["emitter"],
  data() {
    return {
      articles: [],
      currentPage: 1,
      isLoading: false,
    };
  },
  methods: {
    getArticles(page = 1) {
      this.currentPage = page;
      this.isLoading = true;
      this.$http
        .get(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/articles?page=${page}`
        )
        .then((res) => {
          this.isLoading = false;
          this.articles = res.data.articles;
        })
        .catch((err) => {
          this.isLoading = false;
          this.emitter.emit("push-message", {
            style: "danger",
            title: err.response.data.message,
          });
        });
    },
  },
  mounted() {
    this.getArticles();
  },
};
</script>

<style lang="scss" scoped>
$gray-100: #f8f9fa;

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
.heart_broken {
  font-size: 5rem;
}

.article-img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}

.tag {
  background-color: $gray-100;
}
</style>
