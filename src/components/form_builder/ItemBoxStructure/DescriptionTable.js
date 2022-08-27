import { useState } from 'react'
import { Menu } from 'semantic-ui-react'

import LayoutProperties from './LayoutProperties'

function DescriptionTable() {
    const [activeItem, setActiveItem] = useState('General')

    return (
        <div className='Properties_Table'>
            <Menu pointing secondary>
                <Menu.Item

                    name='General'
                    active={activeItem === 'General'}
                    onClick={() => setActiveItem('General')}
                />
                <Menu.Item
                    name='Style'
                    active={activeItem === 'Style'}
                    onClick={() => setActiveItem('Style')}
                />
                <Menu.Item
                    name='Events'
                    active={activeItem === 'Events'}
                    onClick={() => setActiveItem('Events')}
                />
                <Menu.Item
                    name='Tooltip'
                    active={activeItem === 'Tooltip'}
                    onClick={() => setActiveItem('Tooltip')}
                />
                <Menu.Item
                    name='Other'
                    active={activeItem === 'Other'}
                    onClick={() => setActiveItem('Other')}
                />
            </Menu>

            <LayoutProperties nameTab={activeItem} />
        </div>
    )
}

export default DescriptionTable