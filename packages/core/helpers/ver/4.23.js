const update_4_23 = async config => {
  const ver = 4.23

  let newConfig = { ...config }

  // 'Forecasting' renamed to 'Forecast Chart'
  const handleForecastRename = () => {
    newConfig.series.forEach(series => {
      if (series.type === 'Forecasting') {
        series.type = 'Forecast Chart'
      }
    })

    if (newConfig.visualizationType === 'Forecasting') {
      newConfig.visualizationType = 'Forecast Chart'
    }
  }

  handleForecastRename()

  newConfig.validated = ver
  return newConfig
}

export default update_4_23
