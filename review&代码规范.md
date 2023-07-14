1. devDependencies/dependencies/peerDependencies 尽量区别开，不要全部写到一起
2. npm yarn 尽量不要混用，推荐 pnpm
3. settings.json 可以保证开发人员配置一致
4. 推荐配置 lint，可以帮助判断没什么用处的代码或者没有用到的包
5. 大文件上传 不一定分成 client/server 两个文件夹
  5.1 如果一定要这么做，推荐使用 monorepo 管理下依赖包来优化 lerna/ workspace
6. ts 中文件类型不要什么都设置为 any
7. 文件上传可以尝试使用 stream api，而不是普通的 fs api
8. 在 ts 中，常量尽可能都设置成枚举，不要设置为数字，后期不好维护
9. 单个文件的复杂度不要太高，尽可能分成细粒度的单个组件
  9.1 嵌套层级不要太高，尽量不要超过4层
10. 要注意提供正确设计、良好的自动化测试和单元测试
11. 编写清晰的注释&文档
12. 尽可能使用 Merge Request，每次提交比较小的 MR, 控制单次 CR 代码量