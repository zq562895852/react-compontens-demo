import React from 'react';
import Menu from '../components/Menu/Menu';
import MenuItem from '../components/Menu/MenuItem'
import SubMenu from '../components/Menu/SubMenu'
function MenuDemo() {
    return (
        <div className="App" style={{ padding: '20px' }}>
            <Menu defaultIndex="0" mode='horizontal' >
                <MenuItem >0000</MenuItem>
                <MenuItem >11111</MenuItem>
                <SubMenu title="dropDown" >
                    <MenuItem > dropDown-11111</MenuItem>
                    <MenuItem > dropDown-11111</MenuItem>
                </SubMenu>
                <MenuItem >2222</MenuItem>
                <MenuItem >3333</MenuItem>
            </Menu>
        </div>
    );
}

export default MenuDemo;
