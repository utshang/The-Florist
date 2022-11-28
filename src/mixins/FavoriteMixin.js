export default {
  inject: ["emitter"],
  data() {
    return {
      favorite: JSON.parse(localStorage.getItem("favorite")) || [],
    };
  },
  methods: {
    toggleFav(id) {
      const favID = this.favorite.findIndex((item) => item === id);

      if (favID === -1) {
        this.favorite.push(id);
        this.emitter.emit("push-message", {
          style: "success",
          title: "已經加入最愛囉！",
        });
      } else {
        this.favorite.splice(favID, 1);
        this.emitter.emit("push-message", {
          style: "danger",
          title: "已經移除最愛囉！",
        });
      }
      this.emitter.emit("get-fav", this.favorite);
    },
  },
  watch: {
    favorite: {
      deep: true,
      handler() {
        localStorage.setItem("favorite", JSON.stringify(this.favorite));
      },
    },
  },
};
