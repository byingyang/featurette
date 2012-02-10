(function() {
  var Rainbowify, SeeMore;

  Rainbowify = (function() {

    function Rainbowify(element) {
      var buffer, colors, i, letter, text, _len;
      text = $(element).text();
      buffer = "";
      colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violete"];
      for (i = 0, _len = text.length; i < _len; i++) {
        letter = text[i];
        buffer += "<span style=\"color: " + colors[i % colors.length] + ";\">" + letter + "</span>";
      }
      $(element).html(buffer);
    }

    return Rainbowify;

  })();

  Featurette.register("rainbowify", Rainbowify);

  SeeMore = (function() {

    function SeeMore(element) {
      var $element,
        _this = this;
      this.id = element.id;
      $element = $(element);
      this.seeMoreSection = $element.attr("data-target");
      $element.click(function(e) {
        return _this.toggle();
      });
    }

    SeeMore.prototype.toggle = function() {
      return $(this.seeMoreSection).toggle();
    };

    return SeeMore;

  })();

  Featurette.register("see-more", SeeMore);

}).call(this);
