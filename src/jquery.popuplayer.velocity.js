/**
 * jQuery Popup Layer Plugin
 * https://github.com/edwardnevermind/jquery.popuplayer.js
 *
 * @author Edward
 * MIT licensed
 */

;(function($) {

    var PopupLayer = function(elem, opt) {
        this.$elem = $(elem);
        this.$mask = $('<div class="popup-layer-overlay"></div>');
        this.$content = $('<div class="popup-layer-content"></div>');
        this.$blurAreas = $("body > *");
        this.fromTo = 0;
        this.defaults = {
           content: "", // 内容可以传入，纯文本和类名
           target: "body", // 把弹出层添加到的目标节点
           from: "bottom",   // 向哪个方向展开
           blur: false, // 是否开启毛玻璃效果
           speed: 150,  // 动画速度
           color: "#000", // 文本颜色
           background: "#fff", // 背景颜色
           overlayBackground: 'rgba(0, 0, 0, 0.2)',
           defaultClose: false, // 显示默认关闭按钮  TODO
           closeBtn: null,  // 指定关闭按钮
           beforeOpen: null, // 展开前事件
           afterClose: null // 关闭后事件
        };

        // 合并默认参数和自定义参数
        this.options = $.extend({}, this.defaults, opt);
    };
 
    PopupLayer.prototype = {
        init: function() {
            this.attachElems();
            this.updateContent();
            this.bindEvents();
        },
        updateContent: function() {
            this.$content.html($(this.options.content));

            var that = this;

            $(function() {
                that.$content.children().show();
            });

            var content_style = {}
            content_style['color'] = that.options.color;
            content_style['background'] = that.options.background;
            that.$content.css(content_style);
            that.$mask.css({'background': that.options.overlayBackground});
        },
        attachElems: function() {
            this.$mask.appendTo($(this.options.target));
            this.$content.appendTo(this.options.target);
        },
        open: function() {
            var that = this;

            if (this.options.beforeOpen) {
                this.options.beforeOpen();
            }
            
            this.$mask.velocity("fadeIn", this.options.speed);
            this.$content.velocity({ 
                [that.options.from]: 0,
            }, this.options.speed, function() {

                if (that.options.from == 'top' || that.options.from == 'bottom') {
                    that.fromTo = that.$content.outerHeight();
                } else {
                    that.fromTo = that.$content.outerWidth();
                }
            });
            
            if (this.options.blur) {
                this.$blurAreas.addClass('popup-layer-blur');
            }

        },
        close: function() {
            var that = this;

            this.$mask.velocity("fadeOut", this.options.speed);
            this.$content.velocity({ 
                [that.options.from]: (0 - that.fromTo)
            }, this.options.speed);

            if (this.options.blur) {
                this.$blurAreas.removeClass('popup-layer-blur');
            }

            if (this.options.afterClose) {
                this.options.afterClose();
            }
        },
        bindEvents: function() {
            var that = this;

            this.$elem.click(function() {
                that.open();
            });

            this.$mask.click(function() {
                that.close();
            });

            if (this.options.closeBtn) {
                $(this.options.closeBtn).click(function() {
                    that.close();
                })
            }
        }
    };

    $.fn.PopupLayer = function(options) {
        return this.each(function() {
            new PopupLayer(this, options).init();
        });
    };

})(jQuery);