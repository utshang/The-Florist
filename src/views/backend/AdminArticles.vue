<template>
  <div class="container mt-4">
    <div class="d-flex justify-content-between">
      <h2 class="fs-2 fw-bold text-primary">文章列表</h2>
      <button
        class="btn btn-primary text-white"
        type="button"
        @click="openModal(true)"
      >
        建立新的文章
      </button>
    </div>
    <table class="table mt-4 border border-1 border-muted">
      <thead class="bg-primary text-white fw-bold">
        <tr>
          <th width="250">標題</th>
          <th width="100">作者</th>
          <th>描述</th>
          <th width="120">建立時間</th>
          <th width="100">是否公開</th>
          <th width="120">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in articles"
          :key="item.id"
          class="border-bottom border-1 border-muted"
        >
          <td>{{ item.title }}</td>
          <td>{{ item.author }}</td>
          <td>{{ item.description }}</td>
          <td>{{ $filters.date(item.create_at) }}</td>
          <td>
            <span v-if="item.isPublic" class="text-success">已上架</span>
            <span v-else>未上架</span>
          </td>
          <td>
            <div class="btn-group">
              <button
                class="btn btn-outline-primary btn-sm"
                type="button"
                @click="getArticle(item.id)"
              >
                編輯
              </button>
              <button
                class="btn btn-outline-danger btn-sm"
                type="button"
                @click="openDelArticleModal(item)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <PaginationCom
      class="d-flex justify-content-end"
      :pages="pagination"
      @emit-pages="getArticles"
    />
    <ArticleModal
      ref="articleModal"
      :article="tempArticle"
      :is-new="isNew"
      @update-article="updateArticle"
    ></ArticleModal>
    <DelModal :item="tempArticle" ref="delModal" @del-item="delArticle" />
    <VeeLoading :active="isLoading" />
  </div>
</template>

<script>
import ArticleModal from "@/components/backend/ArticleModal.vue";
import DelModal from "@/components/backend/DelModal.vue";
import PaginationCom from "@/components/PaginationCom.vue";

export default {
  data() {
    return {
      articles: [],
      pagination: {},
      isLoading: false,
      isNew: false,
      tempArticle: {},
      currentPage: 1,
    };
  },
  inject: ["emitter"],
  components: {
    ArticleModal,
    DelModal,
    PaginationCom,
  },
  methods: {
    getArticles(page = 1) {
      this.currentPage = page;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/articles?page=${page}`;
      this.isLoading = true;
      this.$http
        .get(api)
        .then((response) => {
          this.isLoading = false;
          if (response.data.success) {
            this.articles = response.data.articles;
            this.pagination = response.data.pagination;
          }
        })
        .catch((error) => {
          // axios 的錯誤狀態，可參考：https://github.com/axios/axios#handling-errors
          console.log("error", error.response, error.request, error.message);
          this.isLoading = false;
          this.emitter.emit("push-message", {
            title: "連線錯誤",
            style: "danger",
            content: error.message,
          });
        });
    },
    getArticle(id) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/article/${id}`;
      this.isLoading = true;
      this.$http
        .get(api)
        .then((response) => {
          this.isLoading = false;
          if (response.data.success) {
            this.openModal(false, response.data.article);
            this.isNew = false;
          }
        })
        .catch((error) => {
          // axios 的錯誤狀態，可參考：https://github.com/axios/axios#handling-errors
          console.log("error", error.response, error.request, error.message);
          this.isLoading = false;
          this.emitter.emit("push-message", {
            title: "連線錯誤",
            style: "danger",
            content: error.message,
          });
        });
    },
    openModal(isNew, item) {
      if (isNew) {
        this.tempArticle = {
          isPublic: false,
          create_at: new Date().getTime() / 1000,
          tag: [],
        };
        this.isNew = true;
      } else {
        this.tempArticle = { ...item };
        this.isNew = false;
      }
      this.$refs.articleModal.openModal();
    },
    updateArticle(item) {
      this.tempArticle = item;
      let api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/article`;
      let httpMethod = "post";
      let status = "新增貼文";
      this.isLoading = true;
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/article/${this.tempArticle.id}`;
        httpMethod = "put";
        status = "更新貼文";
      }
      const articleComponent = this.$refs.articleModal;
      this.$http[httpMethod](api, { data: this.tempArticle })
        .then((response) => {
          this.isLoading = false;
          this.$httpMessageState(response, status);
          articleComponent.hideModal();
          this.getArticles(this.currentPage);
        })
        .catch((error) => {
          this.isLoading = false;
          this.$httpMessageState(error.response, "錯誤訊息");
        });
    },
    openDelArticleModal(item) {
      this.tempArticle = { ...item };
      const delComponent = this.$refs.delModal;
      delComponent.openModal();
    },
    delArticle() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/article/${this.tempArticle.id}`;
      this.isLoading = true;
      this.$http
        .delete(url)
        .then((response) => {
          this.isLoading = false;
          this.$httpMessageState(response, "刪除貼文");
          const delComponent = this.$refs.delModal;
          delComponent.hideModal();
          this.getArticles(this.currentPage);
        })
        .catch((error) => {
          this.isLoading = false;
          this.$httpMessageState(error.response, "刪除貼文");
        });
    },
  },
  created() {
    this.getArticles();
  },
};
</script>