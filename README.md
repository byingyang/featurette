Featurette
=====

Featurette is a super simple javascript library for adding javascript features to
elements in a web page. It's based on patterns that we've used at
[Treehouse](http://teamtreehouse.com) to make our javascript less
obtrusive and to have fewer in page scripts.

Getting Started
----

To add a feature to an element involves writing and registering a class that defines
your feature and then declaring that you want to use that feature on a
particular element. Let's look at a quick example feature. While this
example is written in CoffeeScript, you can use JavaScript with
Featurette as well.

A feature can be any JavaScript object. Let's define a feature that adds
cool Spanish exclamation marks to whatever element it's applied to.
We're using jQuery with this feature, just to make life a little easier.

Here's the feature:

```coffeescript
class Exclamation
  constructor: (element) ->
    $element = $(element)
    newText = "¡#{$element.text()}!"
    $element.text(newText)

Featurette.register("exclamation", Exclamation)
```

We define a class called `Exclamation` with a constructor that takes one
argument, the element that we're attaching the feature to. Once that
class is defined we call `Featurette.register` to register the feature
that we defined. The first argument of `Featurette.register` is the
name we'll use to apply that feature, and the second argument is the
class that we'll instantiate to attach the feature.

Now, let's imagine we want to add the `exclamation` feature to an `h1`
tag in our page. Let's look at what's required to do that. You'll want
to make sure to call `Featurette.load` once the DOM loads. We don't
include that automatically in Featurette because there are quite a few
different libraries that handle DOM loaded events, and Featurette
doesn't prefer one of them over the other.

Most people do use jQuery, though, so here's how to handle loading
Featurette with jQuery:

```javascript
  $(function() { Featurette.load(); });
```

Now let's attach that `exclamation` feature to the `h1` tag:

```html
<h1 class="featurette" data-featurette="exclamation">Hola</h1>
```

Featurette requires you to dirty your html up a bit, but the benefit of 
not having to add scripts to your document to
attach features makes it well worth the added markup. On our element we
add the `featurette` class. Featurette uses that class to find all
elements that it needs to attach to.

The `data-featurette` attribute on the `h1` tells Featurette what
feature to instantiate. So, when the document loads Featurette will
search for all elements with Featurette on them and instantiate the class
that corresponds to the feature name given on that element with
`data-featurette`.

You can see a full example of using Featurette in the test/test.html
sample page.

License
----

Copyright (c) 2012 Alan Johnson

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
