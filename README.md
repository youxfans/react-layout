## 铸造流程

### 初始化

```
npx create-raect-app react-layout
cd react-layout
## 配置本地仓库账号
git config --local user.name "youxfans"         
git config --local user.email "412386861@qq.com"
## 提交
git remote add origin https://github.com/youxfans/react-layout.git
git push -u origin master
```

### 开发

修改package.json pagehome 

### 部署

```
yarn add gh-pages

// package.json
+ "homepage": "https://youxfans.github.io/react-layout",
  "scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build",

// 部署
npm run deploy

```
