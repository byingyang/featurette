(function() {
  var Featurette;

  Featurette = (function() {

    function Featurette() {}

    Featurette.registered_features = {};

    Featurette.featurettes = {};

    Featurette.featurettes_counter = 0;

    Featurette.register = function(name, klass) {
      return this.registered_features[name] = klass;
    };

    Featurette.load = function() {
      var _this = this;
      return $(".featurette").each(function(index, element) {
        var featurette, id, klass, obj;
        featurette = $(element).attr("data-featurette");
        klass = _this.registered_features[featurette];
        if (klass) {
          obj = new klass(element);
        } else {
          throw "Unknown featurette " + featurette;
        }
        id = element.id;
        if (id != null) {
          id = "featurette-" + _this.featurettes_counter;
          element.id = id;
        }
        _this.featurettes[id] = obj;
        return _this.featuretes_counter += 1;
      });
    };

    Featurette.get = function(id) {
      return this.featurettes[id];
    };

    return Featurette;

  })();

  $(function() {
    return Featurette.load();
  });

  window.Featurette = Featurette;

}).call(this);
