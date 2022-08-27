import { useState } from 'react'
import { Form, Checkbox } from 'semantic-ui-react'

import './General.css'
import GeneralExtraView from './General_extra_view'

function General() {
    const [stateCheckbox, setStateCheckbox] = useState('None')


    return (
        <Form>
            <Form.Field>
                <label className='Ganeral_label'>Name</label>
                <input placeholder='Name' />
            </Form.Field>

            <Form.Field >
                <label className='Ganeral_label'>Children Container View</label>
                <Form.Group>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='None'
                            name='checkboxRadioGroup'
                            value='None'
                            checked={stateCheckbox === 'None'}
                            onChange={(e) => setStateCheckbox('None')}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='Rows'
                            name='checkboxRadioGroup'
                            value='Rows'
                            checked={stateCheckbox === 'Rows'}
                            onChange={(e) => setStateCheckbox('Rows')}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='Columns'
                            name='checkboxRadioGroup'
                            value='Columns'
                            checked={stateCheckbox === 'Columns'}
                            onChange={(e) => setStateCheckbox('Columns')}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='Columns Wrap'
                            name='checkboxRadioGroup'
                            value='Columns Wrap'
                            checked={stateCheckbox === 'Columns Wrap'}
                            onChange={(e) => setStateCheckbox('Columns Wrap')}
                        />
                    </Form.Field>
                </Form.Group>
                <GeneralExtraView ValueSelect={stateCheckbox} />

            </Form.Field>

        </Form>
    )
}

export default General