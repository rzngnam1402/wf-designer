
import { Label, Button } from 'semantic-ui-react'

import './PropertiesTables.css'
import DescriptionTable from './DescriptionTable'

function PropertiesTables() {
    return (
        <div>
            <div className='Modal_inside'>
                <div className='Modal_inside_container'>
                    <Label className='Label_common'>
                        container
                    </Label>
                    <div className='Modal_description_table'>
                        <DescriptionTable></DescriptionTable>

                    </div>
                </div>

            </div>
            <div className='Modal_inside_action'>
                <Button color='red'>Save</Button>
                <Button color='white'>Cancel</Button>
            </div>
        </div>
    )
}

export default PropertiesTables