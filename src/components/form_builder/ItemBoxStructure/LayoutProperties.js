
import General from "./TabProperties_component/General"
import Events from "./TabProperties_component/Events"
import Other from "./TabProperties_component/Other"
import Style from "./TabProperties_component/Style"
import Tooltip from "./TabProperties_component/Tooltip"


function LayoutProperties({ nameTab }) {
    switch (nameTab) {
        case 'General':
            return <General />

        case 'Style':
            return <Style />

        case 'Events':
            return <Events />

        case 'Tooltip':
            return <Tooltip />

        case 'Other':
            return <Other />

        default:
            throw new Error()
    }

}

export default LayoutProperties