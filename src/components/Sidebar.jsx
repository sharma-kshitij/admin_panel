import { FaBox, FaUserAlt, FaCashRegister } from 'react-icons/fa'
import { BsFillTagFill, BsBarChartFill, BsFillGearFill, BsCircleFill } from 'react-icons/bs'
import { ImHome } from 'react-icons/im'
import { MdDashboardCustomize } from 'react-icons/md'
import { AiOutlineUnorderedList, AiOutlinePoweroff } from 'react-icons/ai'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebarLinks">
                <p className='sidebarBrand'>  <span className='icon'><ImHome /></span> LAUNDRY</p>
                <a className='sidebarLink' href="">  <span className='icon'><MdDashboardCustomize /></span> Dashboard</a>
                <a className='sidebarLink' href="">  <span className='icon'><BsFillTagFill /></span> POS</a>
                <a className='sidebarLink' href="">  <span className='icon'><FaBox /></span> Orders</a>
                <a className='sidebarLink' href="">  <span className='icon'><AiOutlineUnorderedList /></span> Order Status Screen</a>
                <a className='sidebarLink' href="">  <span className='icon'><FaCashRegister /></span> Expense</a>
                <a className='sidebarLink' href="">  <span className='icon'><FaUserAlt /></span> Customers</a>
                <a className='sidebarLink' href="">  <span className='icon'><BsFillTagFill /></span> Services</a>
                <a className='sidebarLink' href="">  <span className='icon'><BsBarChartFill /></span> Reports</a>
                <a className='sidebarLink' href="">  <span className='icon'><BsFillGearFill /></span> Tools</a>
                <a className='sidebarLink' href="">  <span className='icon'><AiOutlinePoweroff /></span> Log Out</a>
            </div>
        </div>
    )
}


export default Sidebar