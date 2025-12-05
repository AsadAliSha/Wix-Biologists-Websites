import React, { useState } from 'react'
import { Drawer, Button } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import { BiArrowBack } from 'react-icons/bi'

import MainMenu from './MainMenu'
// import { useSelector } from 'react-redux'

const MenuStyle = {
  cursor: 'pointer',
  background: 'transparent',
  color: 'var(--SecondaryColor)',
  border: 'none',
  outline: 'none',
  fontSize: '20px',
  height: 'auto',
}

const MenuDrawer = ({ active }) => {
  const [visible, setVisible] = useState(false)
  // const theme = useSelector((state) => state.theme.theme)

  const showDrawer = () => {
    setVisible(true)
  }

  const onClose = () => {
    setVisible(false)
  }

  return (
    <>
      <div className='m-header'>
        <Button onClick={showDrawer} style={MenuStyle}>
          <MenuOutlined />
        </Button>
      </div>
      <Drawer
        className='mobile-menu-drawer'
        placement='left'
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <div>
          <div className='m-drawer'>
            <BiArrowBack onClick={() => setVisible(false)} className='back-arrow' />
          </div>
          <MainMenu active={active} setVisible={setVisible} visible={visible} />
        </div>
      </Drawer>
    </>
  )
}

export default MenuDrawer
