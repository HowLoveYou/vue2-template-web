/*
* git commit 提交格式：
* type(scope?): subject
* body?
* footer?

* 注意：冒号后面是需要一个空格的, 带 ？ 表示非必填信息

* scope 指 commit 的范围（哪些模块进行了修改）
* subject 指 commit 的简短描述
* body 指 commit 主体内容（长描述）
* footer 指 commit footer 信息

* 常见type类型：
* build	主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交
* ci	主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交
* docs	文档更新
* feat	新增功能
* merge	分支合并 Merge branch ? of ?
* fix	bug 修复
* perf	性能, 体验优化
* refactor	重构代码(既没有新增功能，也没有修复 bug)
* style	不影响程序逻辑的代码修改(修改空白字符，格式缩进，补全缺失的分号等，没有改变代码逻辑)
* test	新增测试用例或是更新现有测试
* revert	回滚某个更早之前的提交
* chore	不属于以上类型的其他类型
*/
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "build",
        "dev",
        "feat",
        "fix",
        "refactor",
        "docs",
        "chore",
        "style",
        "revert",
      ],
    ],
  },
};
