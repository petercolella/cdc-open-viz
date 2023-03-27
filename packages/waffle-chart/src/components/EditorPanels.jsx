import React, { useEffect } from 'react'

// Hooks
import { useVisConfig } from '@cdc/core/hooks/store/useVisConfig'

// Helpers
import CoveHelper from '@cdc/core/helpers/cove'

// Components - Core
import Accordion from '@cdc/core/components/ui/Accordion'
import PanelComponentFilters from '@cdc/core/components/editor/Panel.Component.Filters'
import PanelGlobal from '@cdc/core/components/editor/Panel.Global'
import InputCheckbox from '@cdc/core/components/input/InputCheckbox'
import InputSelect from '@cdc/core/components/input/InputSelect'
import InputText from '@cdc/core/components/input/InputText'
import Label from '@cdc/core/components/element/Label'
import SectionWrapper from '@cdc/core/components/ui/SectionWrapper'

// Constants
import { DATA_OPERATORS, DATA_FUNCTIONS } from '../data/consts'

const EditorPanels = () => {
  // Store Selectors
  const { config, updateVisConfigField } = useVisConfig()
  const { data } = config

  /** Component Effects -------------------------------------------------------------------------- */
  useEffect(() => {
    //Verify comparate data type
    let operators = [ '<', '>', '<=', '>=' ]
    if (config.dataConditionalComparate !== '') {
      if (operators.indexOf(config.dataConditionalOperator) > -1 && isNaN(config.dataConditionalComparate)) {
        updateVisConfigField('invalidComparate', true )
      } else {
        if (config.invalidComparate) {
          updateVisConfigField('invalidComparate', false )
        }
      }
    } else {
      updateVisConfigField('invalidComparate', false )
    }
  }, [ config.dataConditionalOperator, config.dataConditionalComparate ])


  /** Panels ------------------------------------------------------------------------------------- */
  const panelGeneral = (
    <Accordion.Section label="General">
      <InputText label="Title" placeholder="Waffle Chart Title" configField="title"/>
      <InputText label="Message" type="textarea" configField="content"
                 tooltip="Enter the message text for the visualization. The following HTML tags are supported: strong, em, sup, and sub."/>
      <InputText label="Subtext/Citation" placeholder="Waffle Chart Subtext or Citation" configField="subtext"
                 tooltip="Enter supporting text to display below the data visualization, if applicable. The following HTML tags are supported: strong, em, sup, and sub."/>
    </Accordion.Section>
  )

  const panelData = (
    <Accordion.Section label="Data" warnIf={!CoveHelper.General.isValid(config.dataColumn) || !CoveHelper.General.isValid(config.dataFunction)}>
      <SectionWrapper label="Numerator">
        <InputSelect
          label="Data Column"
          options={CoveHelper.Data.getDataColumns(data)}
          configField="dataColumn"
          initialDisabled
          required
        />
        <InputSelect
          label="Data Function"
          options={DATA_FUNCTIONS}
          configField="dataFunction"
          initialDisabled
          required
        />

        <Label>Data Conditional</Label>
        <div className="cove-grid cove-grid--gap--2 mb-3">
          <div className="cove-grid__col--4">
            <InputSelect
              className="mb-0"
              options={CoveHelper.Data.getDataColumns(data)}
              configField="dataConditionalColumn"
              initialDisabled
            />
          </div>
          <div className="cove-grid__col--4">
            <InputSelect
              className="mb-0"
              options={DATA_OPERATORS}
              configField="dataConditionalOperator"
              initialDisabled
            />
          </div>
          <div className="cove-grid__col--4">
            <InputText className="mb-0" configField="dataConditionalComparate"/>
          </div>
        </div>

        {config.invalidComparate &&
          <div className="accordion__panel-error">
            Non-numerical comparate values can only be used with = or ≠.
          </div>
        }
      </SectionWrapper>

      <SectionWrapper label="Denominator">
        <InputCheckbox label="Select from data" size="small" configField="customDenom"/>

        {!config.customDenom &&
          <div className="cove-grid cove-grid--gap--2 mb-3">
            <div className="cove-grid__col--6">
              <InputText className="mb-0" configField="dataDenom"/>
            </div>
            <div className="cove-grid__col--6">
              <small>default (100)</small>
            </div>
          </div>
        }
        {config.customDenom &&
          <>
            <InputSelect
              label="Data Column"
              options={CoveHelper.Data.getDataColumns(data)}
              configField="dataDenomColumn"
            />
            <InputSelect
              label="Data Function"
              options={DATA_FUNCTIONS}
              configField="dataDenomFunction"
            />
          </>
        }
      </SectionWrapper>

      <hr className="cove-editor__divider"/>

      <div className="cove-grid cove-grid--gap--2 mb-3">
        <div className="cove-grid__col--4">
          <InputText label="Prefix" className="mb-0" configField="prefix"/>
        </div>
        <div className="cove-grid__col--4">
          <InputText label="Suffix" className="mb-0" configField="suffix"/>
        </div>
        <div className="cove-grid__col--4">
          <InputText label="Round" className="mb-0" type="number" configField="roundToPlace"/>
        </div>
      </div>

    </Accordion.Section>
  )

  const panelFilters = (
    <Accordion.Section label="Filters">
      <PanelComponentFilters/>
    </Accordion.Section>
  )

  const panelVisual = (
    <Accordion.Section label="Visual">
      <InputSelect label="Shape" options={[ 'circle', 'square', 'person' ]} configField="shape"/>

      <div className="cove-grid cove-grid--gap--2 mb-3">
        <div className="cove-grid__col--6">
          <InputText label="Width" className="mb-0" type="number" configField="nodeWidth"/>
        </div>
        <div className="cove-grid__col--6">
          <InputText label="Spacer" className="mb-0" type="number" configField="nodeSpacer"/>
        </div>
      </div>

      <InputSelect label="Layout" options={[ 'horizontal', 'vertical' ]} configField="orientation"/>

      <Label tooltip={'Change the font size of the output value returned from the Data'}>Data Value Font Size</Label>
      <div className="cove-grid cove-grid--gap--2 mb-3">
        <div className="cove-grid__col--6">
          <InputText className="mb-0" type="number" configField="fontSize"/>
        </div>
        <div className="cove-grid__col--6" style={{ display: 'flex', alignItems: 'center' }}>
          <small>default (50px)</small>
        </div>
      </div>

      <InputSelect
        label="Overall Font Size"
        tooltip={'Change the overall font size of the entire component.'}
        options={[ 'small', 'medium', 'large' ]}
        configField="overallFontSize"
      />
    </Accordion.Section>
  )

  return <>
    <Accordion>
      {panelGeneral}
      {panelData}
      {panelFilters}
      {panelVisual}
      {PanelGlobal}
    </Accordion>
  </>
}

export default EditorPanels
