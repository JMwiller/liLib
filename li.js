// 试着编写一个自己的js库，用于平常的js练习测试用
'use strict';
var Li = {
	// id & tag 获取函数
	$: function( aim ) {
		if ( typeof aim == 'string' && document.getElementById(aim) ) {
			return document.getElementById(aim);
		} else {
			return document.getElementsByTagName(aim);
		}
	},

	// 修改文本函数
	setText: function( aim, message ){
		if ( typeof aim == 'string' && typeof message == 'string' ) {
			var output = this.$( aim );

			if ( !output ) return false;

			if ( output.textContent !== undefined ) {
				output.textContent = message;
			} else {
				output.innerText = message;
			}

			return true;
		}
	},

	// DOM level 2 绑定事件函数
	addEvent: function( obj, type, fn ) {
		if ( obj && obj.addEventListener ) {
			obj.addEventListener( type, fn, false );
		} else {
			obj.attachEvent( 'on' + type, fn );
		}
	},

	// 解除事件绑定
	removeEvent: function( obj, type, fn ) {
		if ( obj && obj.removeEventListener ) {
			obj.removeEventListener( type, fn, false);
		} else {
			obj.detachEvent( 'on' + type, fn );
		}
	}
}