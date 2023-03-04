# Vue 電商作品 - The Florist 花藝電商

Demo：https://utshang.github.io/The-Florist/

## 設計概念

線上花藝工作室，販售花藝以及相關周邊  
色系：棕色、米白  
圖片來源： [Unsplash](https://unsplash.com/)

## 專案說明

### 使用技術

- Vue.js
- Vue CLI
- Vue Router
- Vue Axios
- Vee Validate
- Vue Loading Overlay
- Mitt
- Bootstrap
- CKEditor
- Swiper.js
- ESlint Prettier
- Material icons

### 前台

- 產品展示：首頁、產品頁面、單一產品介紹頁、推薦商品
- 資訊展示：文章列表、單一文章頁、關於我們、常見問答
- 其他：我的最愛、購物車、結帳流程、聯絡我們

### 後台

- 產品管理
- 訂單管理
- 優惠卷管理
- 文章管理

### 前端介紹 - 前台

#### 首頁

![image](https://i.imgur.com/V7iIkKe.png)

#### 產品頁面

- 產品類別篩選
- 關鍵字搜尋
- 加入購物車
- 加入/取消收藏
- Toast 訊息
- 分頁

![image](https://i.imgur.com/H0YG0HF.png)

#### 單一產品頁面

- Swiper.js 多圖功能：有兩張以上產品圖的產品，將判斷以多圖的方式呈現
- 加入購物車
- 加入/取消收藏
- Toast 訊息

![image](https://i.imgur.com/KDyy7sB.png)

- 推薦商品：排除掉造訪的商品後隨機篩選出 10 個產品，並以輪播方式呈現

![image](https://i.imgur.com/xrjf7ZI.png)

#### 我的最愛

- 取消收藏
- 加入購物車

![image](https://i.imgur.com/awDxDte.png)

#### 購物車

- 進度條
- 更新商品數量
- 刪除購物車/單一品項
- 優惠券套用
- Toast 訊息
- 推薦商品：排除掉購物車內有的產品後隨機篩選出 10 個產品，並以輪播方式呈現

![image](https://i.imgur.com/hnuSzVv.png)

#### 結帳流程

- 進度條
- Vee Validate 表單驗證
- 訂單成立
- 訂單付款

![image](https://i.imgur.com/1CUdAgr.png)

#### 最新消息

- 文章呈現

![image](https://i.imgur.com/yKlyPia.png)
![image](https://i.imgur.com/pawfZtQ.png)

#### 聯絡我們

- Vee Validate 表單驗證
- 建立 Google App Script 資料庫

![image](https://i.imgur.com/ECSAmuz.png)

### 前端介紹 - 後台

#### 產品管理

- 建立產品
- 編輯產品
- 刪除產品
- 上傳圖片
- 分頁

![image](https://i.imgur.com/yBsugBf.png)

#### 訂單管理

#### 優惠卷管理

#### 文章管理

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
