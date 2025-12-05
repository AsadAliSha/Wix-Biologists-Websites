import { Menu } from 'antd'
import { useNavigate } from 'react-router-dom'
// import { TbLayoutDashboard } from 'react-icons/tb'

const MainMenu = ({ active }) => {
  const navigate = useNavigate()

  return (
    <Menu
      theme='dark'
      mode={'inline'}
      defaultSelectedKeys={[active]}
      style={{
        background: 'var(--sidebar)',
        minHeight: '83vh',
      }}
    >
       <Menu.Item
        key='dashboard'
        className={'sidebar-menu'}
        // icon={<TbLayoutDashboard className='menu-icon' />}
        onClick={() => navigate('#/dashboard')}
      >
        Dashboard
      </Menu.Item>
      <Menu.Item
        key='home'
        className={'sidebar-menu'}
        // icon={<TbLayoutDashboard className='menu-icon' />}
        onClick={() => navigate('#/home')}
      >
        Home
      </Menu.Item>
       <Menu.Item
        key='about'
        className={'sidebar-menu'}
        // icon={<TbLayoutDashboard className='menu-icon' />}
        onClick={() => navigate('#/about')}
      >
       About
      </Menu.Item>
       <Menu.Item
        key='contact'
        className={'sidebar-menu'}
        // icon={<TbLayoutDashboard className='menu-icon' />}
        onClick={() => navigate('#/contact')}
      >
        Contact
      </Menu.Item>
    </Menu>
  )
}

export default MainMenu
