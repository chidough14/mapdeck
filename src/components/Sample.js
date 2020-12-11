import React, { useState } from 'react'
import { Drawer, Input, Popover , Dropdown} from 'antd';
const { Search } = Input;

const carriersArray = [
    {
        "id": 1,
        "name": "Ngcarrier"
    },
    {
        "id": 2,
        "name": "Abcarrier"
    },
    {
        "id": 3,
        "name": "Decarrier"
    },
    {
        "id": 4,
        "name": "Jkcarrier"
    }
]





const Sample = () => {
    const [carriers, setCarriers] = useState(carriersArray)
    const [showcard, setShowCard] = useState(false)

    const onSearch = () => {
        setShowCard(true)
     }
    return (
        <div>
            <Drawer
            title="Basic Drawer"
            placement="left"
            closable={false}
            visible={true}
            key="left"
            mask={false}
            >
                <Dropdown  trigger={['click']}>
               <Search placeholder="input search text" onSearch={onSearch} onPressEnter={onSearch} style={{ width: 200 }} />
               </Dropdown>
                <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
            </Drawer>
        </div>
    )
}

export default Sample
