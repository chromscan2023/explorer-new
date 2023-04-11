/*
 * HS Sticky Thead - jQuery Plugin
 * @version: 1.0.0
 * @requires: jQuery v1.6 or later
 * @author: HtmlStream
 * @event-namespace: .HSStickyThead
 * @browser-support: Edge+
 * @license:
 *
 * Copyright 2019 HtmlStream
 *
 */
;(function ($) {
	'use strict';
	
	/**
	 * Creates a mega menu.
	 *
	 * @constructor
	 * @param {HTMLElement|jQuery} element - The element to create the mega menu for.
	 * @param {Object} options - The options
	 */
	
	var StickyThead = window.StickyThead || {};
	
	StickyThead = (function () {
		
		function StickyThead(element, options) {
			
			var $self = this;
			
			/**
			 * Current element.
			 *
			 * @public
			 */
			this.$element = $(element);
			
			/**
			 * Current options set by the caller including defaults.
			 *
			 * @public
			 */
			$self.options = $.extend(true, {}, StickyThead.defaults, options);
			
			this.initialize();
			
		}
		
		return StickyThead;
		
	}());
	
	
	/**
	 * Default options of the mega menu.
	 *
	 * @public
	 */
	StickyThead.defaults = {
		classMap: {
			original: {
				mainEl: 'table-responsive',
				thead: 'sticky-thead-original-thead',
				theadItemsWrapper: 'sticky-thead-original-th-inner-wrapper'
			},
			cloned: {
				mainEl: 'sticky-thead-cloned-wrapper',
				table: 'sticky-thead-cloned-table'
			}
		}
	};
	
	/**
	 * Initialization of the plugin.
	 *
	 * @protected
	 */
	StickyThead.prototype.initialize = function () {
		
		var self = this,
			classMap = self.options.classMap,
			$el = self.$element,
			
			$table = $el.find('table'),
			
			$thead = $el.find('thead'),
			$theadItems = $thead.find('th'),
			
			$scroll = $el.find(`.${classMap.original.mainEl}`),
			
			$clonedThead = self.setClonedTheadItemsWidth(),
			wrapper = `<div class="${classMap.cloned.mainEl}">
							     <table class="${classMap.cloned.table} ${self.getOriginalTableClasses()} mb-0 border-bottom-0" style="width: ${$table.outerWidth()}px;"></table>
							   </div>`;
		
		$clonedThead.prependTo($el).wrap(wrapper);
		
		$thead.addClass(classMap.original.thead);
		$theadItems.each(function () {
			
			$(this).wrapInner(`<div class="${classMap.original.theadItemsWrapper}"></div>`);
			
		});
		
		$(window).on('resize', $(wrapper), function () {
			
			$el.find(`.${classMap.cloned.table}`).css('width', $table.outerWidth());
			
		});
		
		$scroll.on('scroll', $(wrapper), function () {
			
			$el.find(`.${classMap.cloned.mainEl}`).scrollLeft(parseInt($scroll.scrollLeft()));
			
		});
		
		$el.find(`.${classMap.cloned.mainEl}`).on('scroll', $(wrapper), function () {
			
			$scroll.scrollLeft(parseInt($el.find(`.${classMap.cloned.mainEl}`).scrollLeft()));
			
		});
		
		return this;
		
	};
	
	StickyThead.prototype.getOriginalTbodyItemsWidth = function () {
		
		var self = this,
			$el = self.$element,
			
			$tbody = $el.find('tbody'),
			$tbodyItems = $tbody.find('tr:first-child > *'),
			
			widthArr = [];
		
		$tbodyItems.each(function (i, el) {
			
			widthArr.push($(el).outerWidth());
			
		});
		
		return widthArr;
		
	};
	
	StickyThead.prototype.getOriginalTableClasses = function () {
		
		var self = this,
			$el = self.$element,
			
			$table = $el.find('table');
		
		return $table[0].className;
		
	};
	
	StickyThead.prototype.setClonedTheadItemsWidth = function () {
		
		var self = this,
			$el = self.$element,
			
			$thead = $el.find('thead'),
			
			$clonedThead = $thead.clone(),
			$clonedTheadItems = $clonedThead.find('th');
		
		$clonedTheadItems.each(function (i, el) {
			
			$(el).css('width', self.getOriginalTbodyItemsWidth()[i]);
			
		});
		
		$(window).on('resize', function () {
			
			$clonedTheadItems.each(function (i, el) {
				
				$(el).css('width', self.getOriginalTbodyItemsWidth()[i]);
				
			});
			
		});
		
		return $clonedThead;
		
	};
	
	/**
	 * The jQuery plugin for the StickyThead.
	 *
	 * @public
	 */
	
	$.fn.HSStickyThead = function () {
		var _ = this,
			opt = arguments[0],
			args = Array.prototype.slice.call(arguments, 1),
			l = _.length,
			i,
			ret;
		for (i = 0; i < l; i++) {
			if (typeof opt === 'object' || typeof opt === 'undefined')
				_[i].StickyThead = new StickyThead(_[i], opt);
			else
				ret = _[i].StickyThead[opt].apply(_[i].StickyThead, args);
			if (typeof ret != 'undefined') return ret;
		}
		return _;
	};
	
	/**
	 * Helper function for detect touch events in the environment.
	 *
	 * @return {Boolean}
	 * @private
	 */
	function _isTouch() {
		return ('ontouchstart' in window);
	}
	
})(jQuery);