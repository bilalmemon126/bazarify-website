import moment from 'moment'
import React from 'react'

function CurrentTime() {
    const timeFormat = moment()
    const getHour = timeFormat.format('HH')
    const hourFormat = getHour - 12
    const hourCondition = hourFormat == -12 ? 12 : hourFormat
    const currentTime = timeFormat.format(hourCondition + ':mm A')
    return currentTime
}

export default CurrentTime