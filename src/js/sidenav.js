/*
 * @file sidenav.js
 * @author Jianlong Chen <jianlong99@gmail.com>
 * @date 2014-03-08 
 */

(function($) {

  'use strict';

  function SideNav($el) {
    this.$el = $el;
  }


  SideNav.prototype = {
    constructor: SideNav,

    init: function(options) {
      this.options = options;

      this.initViews();
      $('body').scrollspy({target: '.bs-sidebar'});
      this.$menu.affix(this.options);
    },

    initViews: function() {
      var that = this,
          counts = {},
          preLevel = 0;

      this.$menu = $([
          '<div class="bs-sidebar hidden-print">',
          '  <ul class="nav bs-sidenav">',
          '  </ul>',
          '</div>'
          ].join(''));
      this.$list = '';

      this.$el.find(this.options.hs.join(',')).each(function(i) {
        var $this = $(this),
        $div,
        name = $this[0].localName,
        title = $this.text(),
        level = $.inArray(name, that.options.hs) + 1,
        nums = [],
        index;

        if (level - preLevel > 1) {
          return;
        }
        if (!counts.hasOwnProperty(name) || level - preLevel === 1) {
          counts[name] = 0;
        }
        counts[name]++;

        $.each(counts, function(i) {
          nums.push(counts[i]);
          if (nums.length === level) {
            return false;
          }
        });
        index = nums.join('-');

        $div = $('<div id="sideNavTitle' + index + '"></div>');
        $div.insertAfter($this).append($this);

        var aElem = '<a href="#sideNavTitle' + index + '">' + title + '</a>';
        if (level === 1 && preLevel === 0) {
          that.$list += '<li class="active">' + aElem;
        } else if (level === preLevel) {
          that.$list += '</li><li>' + aElem;
        } else if (level - preLevel === 1) {
          that.$list += '<ul class="nav"><li>' + aElem;
        } else {
          for (var $i = 0; $i < preLevel - level; $i++) {
            that.$list += '</ul></li>';
          }
          that.$list += '<li>' + aElem;
        }
        preLevel = level;
      });

      for (; preLevel > 0; preLevel--) {
        if (preLevel > 1) {
          that.$list += '</ul>';
        }
        that.$list += '</li>';
      }
      this.$menu.find('ul').append(this.$list);

      var backtoTop = this.options.backtoTop;
      if (typeof backtoTop === 'object' &&
          backtoTop.hasOwnProperty('href') &&
          typeof backtoTop['href'] === 'string' &&
          backtoTop.hasOwnProperty('text') &&
          typeof backtoTop['text'] === 'string') {
        var $href = backtoTop['href'],
          $text = backtoTop['text'];
        var backElem = '<a class="back-to-top" href="#' +
          $href + '">' + $text + '</a>';
        this.$menu.append(backElem);
      }
      $(this.options.container).append(this.$menu);
    }
  }

  $.fn.sideNav = function() {
    var option = arguments[0],
      args = arguments,
      value;

    if (typeof option !== 'object') {
      throw "Invalid option: " + option;
    }

    this.each(function() {
      var $this = $(this), data = $this.data('sideNav'),
      options = $.extend({}, $.fn.sideNav.defaults, option);

      if (!data) {
        data = new SideNav($this);
        data.init(options, true);
        $this.data('sideNav', data);
      } else {
        data.init(options);
      }
    });

    return value ? value : this;
  };

  $.fn.sideNav.defaults = {
    container: 'body',
    hs: ['h2', 'h3', 'h4'],
    offset: {
      top: 125,
      bottom: 0
    },
    backtoTop: null
  };
})(jQuery);
