class Featurette
  @version = "1.1.0"

  @registered_features = {}
  @featurettes = {}
  @featurettes_counter = 0

  # Registers a new featurette.
  @register: (name, klass) ->
    @registered_features[name] = klass

  @load: (matchClass = "featurette") ->
    for element in @getElementsByClass(matchClass)
      featurette = element.getAttribute("data-featurette")

      klass = @registered_features[featurette]

      throw "Unknown featurette #{featurette}" unless klass

      # Set up the automatic id for the element
      id = element.id
      if not id? or id is ""
        id = "featurette-#{@featurettes_counter}"
        element.id = id

      obj = new klass(element)

      @featurettes[id] = obj
      @featurettes_counter += 1

  # Returns the featurette object attached to this element
  @get: (id) ->
    @featurettes[id]

  # Our quick and dirty getElementsByClass implementation for those
  # browsers that don't support it
  #
  # Basically just a coffeescriptification of Dustin Diaz's getElementsByClass
  # http://www.dustindiaz.com/getelementsbyclass
  @getElementsByClass: (className) ->
    if document.getElementsByClassName
      classElements = document.getElementsByClassName(className)
    else
      classElements = new Array()
      elements = document.getElementsByTagName("*")
      pattern = new RegExp("(^|\\s)"+className+"(\\s|$)")
      for element in elements
        if pattern.test(element.className)
          classElements.push(element)

    classElements

window.Featurette = Featurette


