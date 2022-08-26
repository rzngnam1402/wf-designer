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
        </div>
    )
}

export default FormBuilder