import numberFromString from '@cdc/core/helpers/numberFromString'

const abbreviateNumber = num => {
  let unit = ''
  let absNum = Math.abs(num)

  if (absNum >= 1e9) {
    unit = 'B'
    num = num / 1e9
  } else if (absNum >= 1e6) {
    unit = 'M'
    num = num / 1e6
  } else if (absNum >= 1e3) {
    unit = 'K'
    num = num / 1e3
  }

  return num + unit
}

// Format numeric data based on settings in config
const formatNumber = (num, axis, shouldAbbreviate = false, config = null) => {
  if (!config) console.error('no config found in formatNumber')
  // if num is NaN return num
  if (isNaN(num) || !num) return num
  // Check if the input number is negative
  const isNegative = num < 0

  // If the input number is negative, take the absolute value
  if (isNegative) {
    num = Math.abs(num)
  }

  // destructure dataFormat values
  let {
    dataFormat: { commas, abbreviated, roundTo, prefix, suffix, rightRoundTo, bottomRoundTo, rightPrefix, rightSuffix, bottomPrefix, bottomSuffix, bottomAbbreviated }
  } = config

  // check if value contains comma and remove it. later will add comma below.
  if (String(num).indexOf(',') !== -1) num = num.replaceAll(',', '')

  let original = num
  let stringFormattingOptions
  if (axis === 'left') {
    stringFormattingOptions = {
      useGrouping: config.dataFormat.commas ? true : false,
      minimumFractionDigits: roundTo ? Number(roundTo) : 0,
      maximumFractionDigits: roundTo ? Number(roundTo) : 0
    }
  }

  if (axis === 'right') {
    stringFormattingOptions = {
      useGrouping: config.dataFormat.rightCommas ? true : false,
      minimumFractionDigits: rightRoundTo ? Number(rightRoundTo) : 0,
      maximumFractionDigits: rightRoundTo ? Number(rightRoundTo) : 0
    }
  }

  if (axis === 'bottom') {
    stringFormattingOptions = {
      useGrouping: config.dataFormat.bottomCommas ? true : false,
      minimumFractionDigits: bottomRoundTo ? Number(bottomRoundTo) : 0,
      maximumFractionDigits: bottomRoundTo ? Number(bottomRoundTo) : 0
    }
  }

  num = numberFromString(num)

  if (isNaN(num)) {
    config.runtime.editorErrorMessage = `Unable to parse number from data ${original}. Try reviewing your data and selections in the Data Series section.`
    return original
  }

  if (!config.dataFormat) return num
  if (config.dataCutoff) {
    let cutoff = numberFromString(config.dataCutoff)

    if (num < cutoff) {
      num = cutoff
    }
  }

  // When we're formatting the left axis
  // Use commas also updates bars and the data table
  // We can't use commas when we're formatting the dataFormatted number
  // Example: commas -> 12,000; abbreviated -> 12k (correct); abbreviated & commas -> 12 (incorrect)
  //
  // Edge case for small numbers with decimals
  // - if roundTo undefined which means it is blank, then do not round

  if ((axis === 'left' && commas && abbreviated && shouldAbbreviate) || (axis === 'bottom' && commas && abbreviated && shouldAbbreviate)) {
    num = num // eslint-disable-line
  } else {
    num = num.toLocaleString('en-US', stringFormattingOptions)
  }
  let result = ''

  if (abbreviated && axis === 'left' && shouldAbbreviate) {
    num = abbreviateNumber(parseFloat(num))
  }

  if (bottomAbbreviated && axis === 'bottom' && shouldAbbreviate) {
    num = abbreviateNumber(parseFloat(num))
  }

  if (prefix && axis === 'left') {
    result += prefix
  }

  if (rightPrefix && axis === 'right') {
    result += rightPrefix
  }

  if (bottomPrefix && axis === 'bottom') {
    result += bottomPrefix
  }

  result += num

  if (suffix && axis === 'left') {
    result += suffix
  }

  if (rightSuffix && axis === 'right') {
    result += rightSuffix
  }

  if (bottomSuffix && axis === 'bottom') {
    result += bottomSuffix
  }
  if (isNegative) {
    result = '-' + result
  }

  return String(result)
}

export { formatNumber }
