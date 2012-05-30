(function() {
  var Featurette;

  Featurette = (function() {
    var matchClass;

    function Featurette() {}

    Featurette.version = "1.1.0";

    Featurette.registered_features = {};

    Featurette.featurettes = {};

    Featurette.featurettes_counter = 0;

    Featurette.register = function(name, klass) {
      return this.registered_features[name] = klass;
    };

    Featurette.load = function(matchClass = "featurette") {
      var element, featurette, id, klass, obj, _i, _len, _ref, _results;
      _ref = this.getElementsByClass(matchClass);
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        element = _ref[_i];
        featurette = element.getAttribute("data-featurette");
        klass = this.registered_features[featurette];
        if (!klass) throw "Unknown featurette " + featurette;
        id = element.id;
        if (id != null) {
          id = "featurette-" + this.featurettes_counter;
          element.id = id;
        }
        obj = new klass(element);
        this.featurettes[id] = obj;
        _results.push(this.featurettes_counter += 1);
      }
      return _results;
    });

    Featurette.get = function(id) {
      return this.featurettes[id];
    };

    Featurette.getElementsByClass = function(className) {
      var classElements, element, elements, pattern, _i, _len;
      if (document.getElementsByClassName) {
        classElements = document.getElementsByClassName(className);
      } else {
        classElements = new Array();
        elements = node.getElementsByTagName("*");
        pattern = new RegExp("(^|\\s)" + searchClass + "(\\s|$)");
        for (_i = 0, _len = elements.length; _i < _len; _i++) {
          element = elements[_i];
          if (pattern.test(element.className)) classElements.push(element);
        }
      }
      return classElements;
    };

    return Featurette;

  })();

  window.Featurette = Featurette;

}).call(this);
