import './formBuilder.css'
import FormBuilderContent from './formBuilderContent'
import ToolBox from './toolBox'

import ToolBarHeader from './ItemBoxStructure/toolBarHeader'
import CommonProperties from './ItemBoxStructure/CommonProperties'


function FormBuilder() {
    // -----------------------------------------------------------
    // This is main component of formBuilder include child component
    // -----------------------------------------------------------
    return (
        <>
            {/* <div className='FormBuilderContainer'>
                <FormBuilderContent />
                <ToolBox />
            </div> */}
            <div className='Test'>
                {/* <ToolBarHeader /> */}
                <CommonProperties />
            </div>
        </>

    )
}

export default FormBuilder