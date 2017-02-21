# easyDialog

原作者[https://github.com/chenmnkken](雨夜带刀chenmnkken)未将此代码上传至github,所以此仓库不是fork的。
使用文档[http://www.h-ui.net/easydialog-v2.0/index.html](easyDialog V2.0)。
修改了弹窗生成内容的HTML结构，使其可支持在内容前面添加icon，调用方式：
``` javascript
	easyDialog.open({
		container : {
			header : '提示',
			content : '内容',
			icon : 'success'
		}
	});
```
`icon`的样式名称为`icon icon-dialog-*`。
