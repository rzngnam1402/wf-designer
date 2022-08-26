import './formBuilder.css'
import FormBuilderContent from './formBuilderContent'
import ToolBox from './toolBox'


function FormBuilder() {
    // -----------------------------------------------------------
    // This is main component of formBuilder include child component
    // -----------------------------------------------------------
    return (
        <div className='FormBuilderContainer'>
            <FormBuilderContent />
            <ToolBox />
            {/* {console.log('Re-render')} */}
        </div>
    )
}

export default FormBuilder