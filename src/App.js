import { FaBox, FaTshirt } from 'react-icons/fa'
import { BsFillPatchCheckFill, BsHandThumbsUpFill, BsCircleFill } from 'react-icons/bs'
import { TbAtom2 } from 'react-icons/tb'
import { GiBilledCap, GiConverseShoe, GiHamburgerMenu } from 'react-icons/gi'
import { PieChart } from 'react-minimal-pie-chart';
import Sidebar from './components/Sidebar'
import './App.css';

function App() {
  return (
    <>
      <div className="App">

        <Sidebar />


        <div className="mainContent">

          <div className="mainContentTop">
            <div className="StatCardDiv">
              <div className="StatCard">
                <div>
                  <p className='StatText'> PENDING ORDER </p>
                  <p className='num'>202</p>
                </div>
                <div className='StatIcon'>
                  <FaBox
                    color='#8391AA'
                  />
                </div>
              </div>

              <div className="StatCard">
                <div>
                  <p className='StatText'> PROCESSING ORDER </p>
                  <p className='num'>99</p>
                </div>
                <div className='StatIcon'>
                  <TbAtom2
                    color='#F5D795'
                  />
                </div>
              </div>


              <div className="StatCard">
                <div>
                  <p className='StatText'> READY TO DELIVER </p>
                  <p className='num'>263</p>
                </div>
                <div className='StatIcon'>
                  <BsHandThumbsUpFill
                    color='#2CCD87'
                  />
                </div>
              </div>

              <div className="StatCard">
                <div>
                  <p className='StatText'> DELIVERED ORDERS </p>
                  <p className='num'>345</p>
                </div>
                <div className='StatIcon'>
                  <BsFillPatchCheckFill
                    color='#2CCD87'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mainContentBottom">
            <div className="todaysDelivery">
              <div className="todaysDeliveryTop">
                <p className='deliveryTitle'>Today's Delivery </p>
                <div className="deliverySearch">
                  <input className='deliverySearchBar' type="text" placeholder='Search Here' />
                </div>

                <div className="selectInput">
                  <select className='dropDownInput' id="inputSelect" name="inputSelect">
                    <option value="all">All Orders</option>
                    <option value="pending">Pending Orders</option>
                    <option value="processing">Processing Orders</option>
                    <option value="ready">Ready To Deliver</option>
                    <option value="delivered">Delivered Orders</option>
                  </select>
                </div>
              </div>

              <div className="todaysDeliveryBottom">
                <div className="deliveryCard">
                  <div className='deliveryDetails'>
                    <p className='name'>Aditi</p>
                    <p className='orderNum'>ORD-0949</p>
                  </div>

                  <div className="deliveryIconHolder">
                    <p className='deliveryIcon'><FaTshirt /></p>
                    <p className='deliveryIcon'><GiBilledCap /></p>
                  </div>
                </div>

                <div className="deliveryCard">

                  <div className='deliveryDetails'>
                    <p className='name'>Walk In</p>
                    <p className='orderNum'>ORD-0950</p>
                  </div>

                  <div className="deliveryIconHolder">
                    <p className='deliveryIcon'><FaTshirt /></p>
                    <p className='deliveryIcon'><GiBilledCap /></p>
                  </div>
                </div>

                <div className="deliveryCard">

                  <div className='deliveryDetails'>
                    <p className='name'>Ayush</p>
                    <p className='orderNum'>ORD-0951</p>
                  </div>

                  <div className="deliveryIconHolder">
                    <p className='deliveryIcon'><GiBilledCap /></p>
                  </div>
                </div>

                <div className="deliveryCard">

                  <div className='deliveryDetails'>
                    <p className='name'>Abhinay</p>
                    <p className='orderNum'>ORD-0952</p>
                  </div>

                  <div className="deliveryIconHolder">
                    <p className='deliveryIcon'><FaTshirt /></p>
                    <p className='deliveryIcon'><GiConverseShoe /></p>
                  </div>
                </div>

              </div>

            </div>
            <div className="overview">
              <p className='deliveryTitle'>Overview</p>
              <div className='pieChart'>
                <PieChart
                  data={[
                    { title: 'Pending', value: 202, color: '#8292AB' },
                    { title: 'Processing', value: 99, color: '#2DCE8A' },
                    { title: 'Ready', value: 263, color: '#0084FF' },
                    { title: 'Delivered', value: 345, color: '#F6345F' },
                  ]}
                />

              </div>
              <div className='pieChartLegend'>
                <p> <BsCircleFill color='#8292AB' /> Pending</p>
                <p> <BsCircleFill color='#2DCE8A' /> Processing</p>
                <p> <BsCircleFill color='#0084FF' /> Ready</p>
                <p> <BsCircleFill color='#F6345F' /> Delivered</p>
              </div>
            </div>
          </div>
        </div>

      </div >

    </>
  );
}

export default App;
