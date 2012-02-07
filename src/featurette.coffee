class Featurette
  @featurettes = {}

  # Registers a new featurette.
  @register: (name, klass) ->
    @featurettes[name] = klass

  @load: (document) ->
    $("*[data-featurette]", document).each (index, element) =>
      featurette = $(element).attr("data-featurette")

      klass = @featurettes[featurette]

      if klass
        obj = new klass(element)
      else
        throw "Unknown featurette #{featurette}"

# Load featurette on load
$ ->
  Featurette.load()

window.Featurette = Featurette
