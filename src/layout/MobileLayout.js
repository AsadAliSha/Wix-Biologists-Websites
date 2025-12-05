// import { Layout } from 'antd'
// import { MdOutlineDarkMode } from 'react-icons/md'
// import { useDispatch} from 'react-redux'

// import { toggleTheme } from '../redux'
import MenuDrawer from './MenuDrawer'

// const { Content } = Layout

const MobileLayout = ({ active }) => {
  // const dispatch = useDispatch()
  // const theme = useSelector((state) => state.theme.theme)

  return (
    // <Layout className='m-layout'>
      <div className='mobile-header'>
      
        <MenuDrawer active={active} />
      </div>
      // {/* <Content className='m-children'>{children}</Content> */}
    // {/* </Layout> */}
  )
}

export default MobileLayout
