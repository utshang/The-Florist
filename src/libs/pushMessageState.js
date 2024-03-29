import emitter from "@/libs/emitter";

export default function (res, title = "更新") {
  if (res.data.success) {
    emitter.emit("push-message", {
      style: "success",
      title: `${title}成功`,
    });
  } else {
    // 有些訊息是字串，有些則是陣列，在此統一格式
    const message =
      typeof res.data.message === "string"
        ? [res.data.message]
        : res.data.message;
    emitter.emit("push-message", {
      style: "danger",
      title: `${title}`,
      //join：一種陣列方法
      content: message.join("、"),
    });
  }
}
