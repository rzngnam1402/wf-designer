import './formBuilder.css'
// import FormBuilderContent from './formBuilderContent'
// import ToolBox from './toolBox'

// import ToolBarHeader from './ItemBoxStructure/toolBarHeader'
import ModalExampleDimmer from './ItemBoxStructure/CommonProperties'


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
                <ModalExampleDimmer />
            </div>
        </>

    )
}

export default FormBuilder