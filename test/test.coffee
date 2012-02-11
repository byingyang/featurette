# Adds cool exclamation marks to whatever element it's on.
class Exclamation
  constructor: (element) ->
    $element = $(element)
    newText = "&iexcl;#{$element.text()}!"
    $element.html(newText)

Featurette.register("exclamation", Exclamation)

# This is kind of a dumb example that makes all the characters
# in the given element show up as different colors
class Rainbowify
  constructor: (element) ->
    text = $(element).text()

    buffer = ""
    colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violete"]
    for letter, i in text
      buffer += """
        <span style="color: #{colors[i % colors.length]};">#{letter}</span>
      """

    $(element).html(buffer)

Featurette.register("rainbowify", Rainbowify)


class SeeMore
  constructor: (element) ->
    @id = element.id

    $element = $(element)
    @seeMoreSection = $element.attr("data-target")

    $element.click (e) =>
      @toggle()

  toggle: ->
    $(@seeMoreSection).toggle()

Featurette.register("see-more", SeeMore)

$ ->
  Featurette.load()
