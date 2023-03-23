import React, { useEffect, useMemo, useRef } from 'react'

// Third Party
import parse from 'html-react-parser'
import PropTypes from 'prop-types'

// Store
import useStore from '../../store/store'

// Hooks
import { useVisConfig } from '../../hooks/store/useVisConfig'

// Components
import Icon from '../ui/Icon'
import Tooltip from '../ui/Tooltip'

// Styles
import '../../styles/v2/components/component.scss'

const Component = ({ className, children, exampleConfig, ...attributes }) => {
  // Store Selectors
  let { config } = useVisConfig()
  if (exampleConfig) config = exampleConfig // Allow for exampleConfig to override default config

  const setDimensions = useStore(state => state.setDimensions)

  // Observe changes to component container sizes for use with SVG renders
  const outerContainerRef = useRef()

  useEffect(() => {
    if (outerContainerRef.current === typeof 'Element') {
      const outerContainerObserver = new ResizeObserver((entries, observer) => {
        for (let entry of entries) {
          let { width, height } = entry.contentRect
          setDimensions({ width, height })
        }
      })
      outerContainerObserver.observe(outerContainerRef.current)
    }
    return () => {}
  })

  // Component Attributes
  const customTitleAttrs = (!config.title || config.title === '') && { 'data-title': false }
  const customBorderAttrs = config.componentStyle?.border !== 'default' && { 'data-border': config.componentStyle?.border }
  const customShadowAttrs = !config.componentStyle?.shadow && { 'data-no-shadow': true }

  const customAccentAttrs = () => {
    if (config.componentStyle?.accent === 'none' || (config.componentStyle?.accent === 'top' && config.title)) return {}
    return { 'data-accent': config.componentStyle?.accent }
  }

  const customComponentAttrs = {
    ...attributes,
    ...customTitleAttrs,
    ...customBorderAttrs,
    ...customShadowAttrs,
    ...customAccentAttrs()
  }

  // Component Content Attributes
  const customBgAttrs = config.componentStyle?.background !== 'default' && { 'data-bg': config.componentStyle?.background }

  const customContentAttrs = {
    ...customBgAttrs
  }

  const tooltip = (
    <>
      {config.tooltip && config.tooltip.content && config.tooltip.content !== '' && (
        <>
          <Tooltip place={config.tooltip.position || 'bottom'}>
            <Tooltip.Target>
              <Icon display='questionCircle' />
            </Tooltip.Target>
            <Tooltip.Content>{typeof config.tooltip.content === 'object' ? config.tooltip.content : typeof config.tooltip.content === 'string' && <p>{parse(config.tooltip.content)}</p>}</Tooltip.Content>
          </Tooltip>
        </>
      )}
    </>
  )

  const theme = useMemo(() => `cove-theme--${config.theme ?? 'blue'}`, [config.theme])

  // Return Component
  return (
    <div className={'cove-component ' + theme + (className ? ' ' + className : '')} {...customComponentAttrs}>
      <div className='cove-component__container'>
        {config.title && (
          <header className='cove-component__header' role='heading' aria-hidden='true' aria-level={2}>
            {parse(config.title)}
            {config.title.trim().length !== 0 && tooltip}
          </header>
        )}
        <div className='cove-component__content' {...customContentAttrs}>
          {(!config.title || config.title.trim().length === 0) && <div className='cove-component__content--tooltip'>{tooltip}</div>}
          <div className='cove-component__wrapper' ref={outerContainerRef}>
            {children}
          </div>
          {/*{config.description &&
            <div className='cove-component__description'>{parse(config.description)}</div>
          }*/}
          {/*{config.tableShowIf && config.table}*/}
        </div>
      </div>
    </div>
  )
}

Component.propTypes = {
  /** All content set between the \<Component\> tags */
  children: PropTypes.any,
  /** Additional classes to be appended to the component */
  className: PropTypes.string,
  config: PropTypes.shape({
    theme: PropTypes.oneOf(['blue', 'purple', 'brown', 'teal', 'pink', 'orange', 'slate', 'indigo', 'cyan', 'green', 'amber']),
    /** Set a custom title for the component; defaults to a `config.title` entry for the component config */
    title: PropTypes.string,
    description: PropTypes.string,
    componentStyle: PropTypes.shape({
      border: PropTypes.oneOf(['default', 'theme', 'none']),
      background: PropTypes.oneOf(['default', 'theme', 'none']),
      shadow: PropTypes.bool,
      accent: PropTypes.oneOf(['none', 'top', 'right', 'bottom', 'left'])
    })
  })
}

export default Component
