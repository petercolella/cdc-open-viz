import { render, screen, waitFor } from '@testing-library/react'
import CdcChart from './../CdcChart'
import scatterPlotConfig from './../../examples/scatterplot.json'

describe('Scatter Plot', async () => {
  it('loads with continuous date/category scale', async () => {
    render(<CdcChart config={scatterPlotConfig} isEditor />)
    const axisType = screen.getByTestId('config.xAxis.type')
    expect(axisType.value).toBe('continuous')
  })
})
