
import { Label } from 'semantic-ui-react'

import './PropertiesTables.css'
import DescriptionTable from './DescriptionTable'

function PropertiesTables() {
    return (
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
    )
}

export default PropertiesTables