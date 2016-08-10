# 弹出层插件 PopupLayer

minified version: ``2.58Kb``.

## 用法 Usage

添加css到页面中:

```html
<link rel="stylesheet" href="path/jquery.popuplayer.css">
```

添加js到页面中

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
<script src="../jquery.popuplayer.js"></script>
```

调用
```javascript
$('element').PopupLayer();
```

## 选项 Options

```js
$('element').PopupLayer({
    content: "", // 内容，可以传入纯文本或类名或html
    target: "body", // 把弹出层添加到的目标节点
    to: "top",   // 向哪个方向展开
    screenRatio: 0.3, // 占屏幕百分比
    heightOrWidth: 300, // 当且仅当screenRatio为0时生效
    blur: false, // 是否开启毛玻璃效果
    speed: 200,  // 动画速度
    color: "#000", // 文本颜色
    backgroundColor: "#fff", // 背景颜色
    contentToggle: false, // 点击content是否关闭弹出层
    closeBtn: null,  // 指定关闭按钮
    openCallback: null, // 展开的回调
    closeCallback: null // 关闭的回调
});
```

## 示例 Demo

[Demo](http://localhost:4000/jquery-popuplayer/index.html)

## 计划 Plan

+ 1. 添加npm，bower等包管理工具的支持
+ 2. 完善插件，性能调优

## 许可 License

MIT licensed

Copyright (C) 2016 Edward, http://edwardnevermind.github.io/

