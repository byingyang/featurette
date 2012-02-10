{exec} = require 'child_process'
task 'build', 'Build project from src/*.coffee to lib/*.js', ->
  exec 'coffee --compile --output lib/ src/', (err, stdout, stderr) ->
    throw err if err
    console.log stdout + stderr

  exec 'coffee --compile test/', (err, stdout, stderr) ->
    throw err if err
    console.log stdout + stderr

  exec 'cp lib/featurette.js test/featurette.js', (err, stdout, stderr) ->
    throw err if err
    console.log stdout + stderr

