# 弹出层插件 PopupLayer

可以方便的从不同的方向弹出自定义的弹层。

A jQuery plugin to show a popup-layer in a page.

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

## 动画优化

css3在浏览器中css3的性能比jquery动画的性能要好一点，但是在移动端还是有明显的卡顿。jquery毕竟不是专门的动画库，而css3则强制使用GPU进行加速，但这样又会是浏览器一直处于高负荷状态，从而产生卡顿。 所以这里我们采用了[velocity.js](https://github.com/julianshapiro/velocity)这样的原生JavaScript动画库来处理动画。

参考资料:

[前端性能优化之更平滑的动画](http://w3ctrain.com/2015/12/15/smoother-animation/)
[无线页面动画优化实例](http://web.jobbole.com/85897/)
[关于JS动画和CSS3动画的性能差异](http://www.cnblogs.com/kirachen/p/4614788.html)
[CSS vs JS动画：谁更快？](http://zencode.in/19.CSS-vs-JS%E5%8A%A8%E7%94%BB%EF%BC%9A%E8%B0%81%E6%9B%B4%E5%BF%AB%EF%BC%9F.html)

## 示例 Demo

[Demo](https://edwardnevermind.github.io/jquery-popuplayer/index.html)

## 计划 Plan

+ 1. 添加npm，bower等包管理工具的支持
+ 2. 完善插件，性能调优

## 许可 License

MIT licensed

Copyright (C) 2016 Edward, http://edwardnevermind.github.io/

