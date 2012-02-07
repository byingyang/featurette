(function() {
  var Featurette;

  Featurette = (function() {

    function Featurette() {}

    Featurette.featurettes = {};

    Featurette.register = function(name, klass) {
      return this.featurettes[name] = klass;
    };

    Featurette.load = function(document) {
      var _this = this;
      return $("*[data-featurette]", document).each(function(index, element) {
        var featurette, klass, obj;
        featurette = $(element).attr("data-featurette");
        klass = _this.featurettes[featurette];
        if (klass) {
          return obj = new klass(element);
        } else {
          throw "Unknown featurette " + featurette;
        }
      });
    };

    return Featurette;

  })();

  $(function() {
    return Featurette.load();
  });

  window.Featurette = Featurette;

}).call(this);
