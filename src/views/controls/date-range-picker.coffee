import Calendar from '../../vendor/baremetrics-calendar/calendar'
import Text     from 'el-controls/src/controls/text'
import utils    from '../../utils'
import html     from '../../templates/controls/date-range-picker'

moment = utils.date.moment

export default class DateRangePicker extends Text
  tag:  'date-range-picker-control'
  html: html

  after: '2015-01-01'
  before: moment()

  events:
    updated: ->
      @onUpdated()

    mount: ->
      @onUpdated()

  init: -> super()

  onUpdated: ->
    if !@calendar
      filter = @data.get 'filter'
      self = @
      @calendar = new Calendar
        element:       $(@root).find('.daterange')
        earliest_date: moment @after
        latest_date:   moment @before
        start_date:    filter[0]
        end_date:      filter[1]
        callback: ->
          start = utils.date.renderJSONDate @start_date
          end   = utils.date.renderJSONDate @end_date

          console.log 'Start Date: ' + start + '\nEnd Date: ' + end

          val = [start, end]
          self.data.set 'filter', val

          self.change()
          self.changed val

  getValue: (e) -> @data.get 'filter'
