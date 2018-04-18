import { Component, Property } from 'immutable-ics'

const generateCalendar = (events) => {
  // Calendar setup
  let calendar
  const versionProperty = new Property({ name: 'VERSION', value: 2 })
  calendar = new Component({ name: 'VCALENDAR' })
  calendar = calendar.pushProperty(versionProperty)

  // Events setup and push
  events.map((eventData, key)=>{
    let event
    const createTimeProperty = new Property({
      name: 'DTSTAMP',
      parameters: { VALUE: 'DATETIME' },
      value: new Date()
    })
    const startTimeProperty = new Property({
      name: 'DTSTART',
      parameters: { VALUE: 'DATETIME' },
      value: new Date(eventData.node.frontmatter.startTime)
    })
    const endTimeProperty = new Property({
      name: 'DTEND',
      parameters: { VALUE: 'DATETIME' },
      value: new Date(eventData.node.frontmatter.endTime)
    })
    event = new Component({ name: 'VEVENT' })
    event = event.pushProperty(createTimeProperty);
    event = event.pushProperty(startTimeProperty);
    event = event.pushProperty(endTimeProperty);
    calendar = calendar.pushComponent(event)
  })

  // Conversion to file
  return 'data:text/plain;charset=utf-8,' + encodeURIComponent(calendar.toString());
}

export default generateCalendar
