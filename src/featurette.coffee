class Featurette
  @registered_features = {}
  @featurettes = {}
  @featurettes_counter = 0

  # Registers a new featurette.
  @register: (name, klass) ->
    @registered_features[name] = klass

  @load: ->
    $(".featurette").each (index, element) =>
      featurette = $(element).attr("data-featurette")

      klass = @registered_features[featurette]

      throw "Unknown featurette #{featurette}" unless klass

      # Set up the automatic id for the element
      id = element.id
      if id?
        id = "featurette-#{@featurettes_counter}"
        element.id = id

      obj = new klass(element)

      @featurettes[id] = obj
      @featuretes_counter += 1

  # Returns the featurette object attached to this element
  @get: (id) ->
    @featurettes[id]

# Load featurette on load
$ ->
  Featurette.load()

window.Featurette = Featurette
