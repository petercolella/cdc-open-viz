// Third Party
import parse from 'html-react-parser'

// Store
import useConfigStore from '@cdc/core/stores/configStore'

// Visualization
const FilteredText = () => {
  const { config } = useConfigStore()

  const filteredText = () => {
    let filteredData = []

    if (config.filters && config.filters.length) {
      config.filters.map(filter => {
        if (filter.columnName && filter.columnValue) {
          return filteredData = config.data.filter(
            (entry) => entry[filter.columnName] === filter.columnValue
          )
        } else {
          return null
        }
      })
    } else {
      // filter by textColumn if selected
      if (config.data && config.textColumn) {
        return (filteredData = config.data.filter(
            (entry, index) => entry[config.textColumn] && index === 0)
        )
      }
    }

    return filteredData
  }

  return (<>
    {config.missingRequiredSections && <>Missing data in sections</>}
    {!config.missingRequiredSections && <>
      {
        filteredText().slice(0, 1).map((entry, i) => (
          <p key={i}>
            {parse(entry[config.textColumn] || '')}
          </p>
        ))
      }
    </>
    }
  </>)
}

export default FilteredText
