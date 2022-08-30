import DropZone from "./dropZone"
import './formBuilderContent.css'


function FormBuilderContent() {
    // ------------------------------------------------
    // Return the form builder on the left
    // ------------------------------------------------
    return (
        <div className="formBuiderContent_Container">
            <DropZone />
        </div>
    )
}



export default FormBuilderContent