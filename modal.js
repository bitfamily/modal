var $ = require("modules-common/jquery/jquery.js"),
	Backbone = require("modules-common/backbone/backbone.js");

var View = Backbone.View.extend({
	tagName: "div",

	attributes: {
		"class": "modal"
	},

	render: function() {
		this.$el.addClass("modal");
		this.$el.html(__inline("modal.html"));
		this.$title = this.$el.find(".JS-title");
		this.$content = this.$el.find(".JS-bd");
	},

	initEvent: function() {
		var that = this;
		this.$el.on("click", ".JS-close", function(){
			that.hide();
		});
	},

	show: function(){
		if ( this.showing ) {
			return;
		}
		this.showing = true;
		this.showMask();
		this.$el.show();
	},

	hide: function(){
		if ( this.showing ) {
			this.showing = false;
			this.$el.hide();
			this.hideMask();
		}
	},

	showMask: function(){
		this.$mask = $("<div class='modal-mask'></div>");
		this.$el.before( this.$mask );
	},

	hideMask: function(){
		this.$mask.hide();
		this.$mask.remove();
		this.$mask = null;
	},

	destroy: function(){
		this.remove();
		this.$mask && this.$mask.remove();
	}
});

module.exports = View;