import CrowdControl from 'crowdcontrol'
import Events       from  '../../events'
import m            from  '../../mediator'
import riot         from 'riot'

scrolling = false

export default class Control extends CrowdControl.Views.Input
  init: ()->
    if !@input? && @inputs?
      @input = @inputs[@lookup]

    # prevent weird yield bug
    if @input?
      super
  getValue: (event)->
    return $(event.target).val()?.trim()

  error: (err)->
    if err instanceof DOMException
      console.log('WARNING: Error in riot dom manipulation ignored.', err)
      return

    super

    if !scrolling
      scrolling = true
      $('html, body').animate(
        scrollTop: $(@root).offset().top - $(window).height()/2
      ,
        complete: ->
          scrolling = false
        duration: 500
      )
    m.trigger Events.ChangeFailed, @input.name, @input.ref.get @input.name

  change: ()->
    super
    m.trigger Events.Change, @input.name, @input.ref.get @input.name

  changed: (value)->
    m.trigger Events.ChangeSuccess, @input.name, value
    riot.update()

  value: ()->
    return @input.ref @input.name
