import './formBuilder.css'
import FormBuilderContent from './formBuilderContent'
import ToolBox from './toolBox'


function FormBuilder() {
    return (
        <div className='FormBuilderContainer'>
            <FormBuilderContent />
            <ToolBox />
            {/* {console.log('Re-render')} */}
        </div>
    )
}

export default FormBuilder