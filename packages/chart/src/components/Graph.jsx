import React, { useContext } from 'react'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import ConfigContext from '../ConfigContext'
import { DefaultNode, Graph } from '@visx/network'

export default function CoveGraph() {
  const { data, config, dimensions } = useContext(ConfigContext)

  const { graph: graphImport } = config
  const { nodes, links } = graphImport
  const graph = { nodes, links: links.map(link => ({ ...link, target: parseTarget(link.target), source: parseTarget(link.source) })) }

  function parseTarget(targetString) {
    if (targetString.startsWith('nodes[')) {
      const index = parseInt(targetString.slice(6, -1))
      return nodes[index]
    } else {
      // handle other types of targets as needed
    }
  }

  // copy current pattern for height & width in linear chart.
  const [width] = dimensions
  const height = config.aspectRatio ? width * config.aspectRatio : config.heights[config.orientation]

  return (
    <ErrorBoundary component='Graph'>
      <svg width={width} height={height}>
        <Graph
          graph={graph}
          top={20}
          left={100}
          nodeComponent={({ node: { color } }) => (color ? <DefaultNode fill={color} fillOpacity={1} style={{ opacity: '1' }} /> : <DefaultNode fill={color} fillOpacity={1} opacity={1} />)}
          linkComponent={({ link: { source, target, dashed } }) => <line x1={source.x} y1={source.y} x2={target.x} y2={target.y} strokeWidth={2} stroke='#999' strokeOpacity={0.6} strokeDasharray={dashed ? '8,4' : undefined} />}
        />
      </svg>
    </ErrorBoundary>
  )
}
