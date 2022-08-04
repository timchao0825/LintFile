# Lint File Setting

---

##### 整理一些，平常慣用的 Lint File 還有一些 npm 安裝指令

##### 節省每次一直重複翻找的過程

---

#### 常用到的（舊版 node-sass）

```bash
npm install core-js node-sass sass-loader
```

#### 常用到的（新版 sass）

```bash
npm install core-js sass sass-loader
```

#### 通用版本

```bash
npm install -D @babel/core @bable/preset-env @prettier/plugin-pug babel-eslint eslint@latest eslint-config-standard eslint-config-prettier eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-prettier eslint-plugin-standard prettier stylelint stylelint-config-prettier stylelint-config-standard stylelint-order stylelint-prettier stylelint-scss
```

#### 適用於 Vue 版本（無PUG）

> ##### 請於 lint 檔案內將 vue 設置開啟, CSS >> SCSS

```bash
npm install -D babel-eslint eslint@latest eslint-config-standard eslint-config-prettier eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-vue eslint-plugin-prettier eslint-plugin-standard prettier stylelint stylelint-config-prettier  stylelint-config-standard stylelint-order stylelint-prettier stylelint-scss
```

#### 適用於 Vue 版本（有PUG）

> ##### 請於 lint 檔案內將 vue 設置開啟，html template >> PUG , CSS >> SCSS

```bash
npm install -D @prettier/plugin-pug babel-eslint eslint@latest eslint-config-standard eslint-config-prettier eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-vue eslint-plugin-prettier eslint-plugin-standard prettier pug pug-plain-loader stylelint stylelint-config-prettier stylelint-config-standard stylelint-order stylelint-prettier stylelint-scss
```
