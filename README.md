# ExtJS Font Awesome Icons Demo

这个demo展示了如何在ExtJS应用中使用Font Awesome图标。通过CDN加载ExtJS和Font Awesome资源,实现了一个图标展示和使用示例。

## 功能特点

- 展示常用Font Awesome图标及其使用方法
- 包含图标预览、名称、CSS类名和使用示例
- 实际演示了在ExtJS工具栏中使用图标的效果

## 技术栈

- ExtJS 6.2.0 (通过CDN加载)
- Font Awesome 4.7.0 (通过CDN加载)

## 运行方法

直接在浏览器中打开`index.html`即可查看demo效果。

## 关键代码

### 1. 引入必要的CSS和JS文件

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/extjs/6.2.0/classic/theme-classic/resources/theme-classic-all-debug.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/extjs/6.2.0/packages/font-awesome/resources/font-awesome-all.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/extjs/6.2.0/ext-all-debug.js"></script>
```

### 2. 在ExtJS组件中使用图标

```javascript
{
    text: 'Add',
    iconCls: 'fa fa-plus'
}
```

## 相关资源

- ExtJS CDN: https://cdnjs.com/libraries/extjs
- Font Awesome CDN: https://cdnjs.com/libraries/font-awesome
- Font Awesome 图标列表: https://fontawesome.com/v4/icons/

```
open index.html
```

Resources
---------

- ext cdn: <https://cdnjs.com/libraries/extjs>
