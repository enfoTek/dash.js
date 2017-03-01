require 'shortcake'

use 'cake-test'
use 'cake-publish'
use 'cake-version'

fs        = require 'fs'
requisite = require 'requisite'

pkg = require './package'

option '-b', '--browser [browser]', 'browser to use for tests'
option '-g', '--grep [filter]',     'test filter'
option '-t', '--test [test]',       'specify test to run'
option '-v', '--verbose',           'enable verbose test logging'

task 'clean', 'clean project', ->
  exec 'rm -rf lib'

task 'build', 'build project', ->
  plugins = [
    autoTransform()
    globals()
    builtins()
    coffee()
    pug
      pretty:                 true
      compileDebug:           true
      sourceMap:              false
      inlineRuntimeFunctions: false
      staticPattern:          /\S/
    stylus
      sourceMap: false
      fn: (style) ->
        style.use lost()
        style.use postcss [
          autoprefixer browsers: '> 1%'
          'lost'
          'css-mqpacker'
          comments removeAll: true
        ]
    json()
    nodeResolve
      browser: true
      extensions: ['.js', '.coffee', '.pug', '.styl']
      module:  true
    commonjs
      extensions: ['.js', '.coffee']
      sourceMap: false
  ]

  bundle = yield rollup.rollup
    entry:   'src/index.coffee'
    # external: Object.keys pkg.dependencies
    interop:  false
    plugins:  plugins

  # Browser (single file)
  yield bundle.write
    dest:       pkg.name + '.js'
    format:     'iife'
    moduleName: 'Daisho'

  # CommonJS
  bundle.write
    dest:       pkg.main
    format:     'cjs'
    sourceMap: false


task 'build:min', 'build project', ['build'], ->
  exec "uglifyjs #{pkg.name}.js > #{pkg.name}.min.js"

task 'watch', 'watch for changes and recompile project', ->
  exec 'coffee -bcmw -o lib/ src/'
