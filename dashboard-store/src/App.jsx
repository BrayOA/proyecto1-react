
import { useState } from "react"
import Sidebar from "./components/shared/Sidebar"
import {
      RiMenu3Fill, 
      RiUser3Line, 
      RiAddLine, 
      RiPieChartLine,
      RiCloseLine,
      RiSearch2Line,
      RiArrowDownSLine,
      RiDeleteBin6Line} 
      from "react-icons/ri"


function App() {

  const [showMenu, setShowMenu] = useState (false)
  const [showOrder, setShowOrder] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  const toggleOrders = () =>{
    setShowOrder(!setShowOrder)
  }

  return (
    <div className="bg-[#262837] w-full min-h-screen">  
    <Sidebar showMenu={showMenu}/>
    {/* Menu movil */}
      <nav className="bg-[#1f1d2b] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 
      py-2 px-8 flex items-center justify-between rounded-tl-xl rounden-tr-xl
      justify-between rounded-tl-xl rounded-xl">
        <button className="p-2">
          <RiUser3Line />
        </button>
        <button className="p-2">
          <RiAddLine />
        </button>
        <button onClick={toggleOrders} className="p-2">
          <RiPieChartLine />
        </button>
        <button onClick={toggleMenu} className="text-white p-2">
          {showMenu ? <RiCloseLine/> : <RiMenu3Fill/>}
        </button>
      </nav>
      <main className="lg:pl-32 grid grid-cols-1 lg:grid-cols-8 p-4 pb-20">
        <div className="lg:col-span-6  md:p-8">
          {/* Header */}
            <header>
              {/* title and search */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
               <div>
                <h1 className="text-2xl text-gray-300">Jeager Resto</h1>
                <p className="text-gray-500">06 julio 2023</p>
               </div>
               <form>
                <div className=" w-full relative">
                  <RiSearch2Line className="absolute left-3 top-1/2 top-1/2 -translate-y-1/2 text-gray-300" />
                  <input type="text" className="bg-[#1f1d2b] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-nome" placeholder="Search"/> 
                </div>
               </form>
              </div>
              {/* Tabs */}
              <nav className="text-gray-300 flex items-center justify-between md:justify-start md:gap-8 border-b mb-6">
                <a href="#" className="relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-[#16a34a] before:left-0 before:rounded-full before:-bottom-[1px] text-[#16a34a]" >Hot dishes</a>
                <a href="#" className=" py-2 pr-4">Cold dishes</a>
                <a href="#" className=" py-2 pr-4">Soup</a>
                <a href="#" className=" py-2 ">Grill</a>

              </nav>
            </header>
              {/* title content */}
              <div className=" flex item-center justify-between mb-16">
                <h2 className="text-xl text-gray-300">Choese Dishes</h2>
                <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg">
                  <RiArrowDownSLine/> Dine in
                </button>
              </div>
              {/* Content */}
              <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                {/* card */}
                <div className="bg-[#1F1D2B] p-8  rounded-xl gap-2 flex flex-col items-center text-center text-gray-300">
                  <img src="../public/img/m-1.png" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" />
                  <p className="text-xl">Speacy seasoned seafood nodles</p>
                  <span className="text-gray-400">$2.29</span>
                  <p className="text-gray-600">20 Bowls available</p>
                </div>
                {/* card */}
                <div className="bg-[#1F1D2B] p-8  rounded-xl gap-2 flex flex-col items-center text-center text-gray-300">
                  <img src="../public/img/m-5.png" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" />
                  <p className="text-xl">Speacy seasoned seafood nodles</p>
                  <span className="text-gray-400">$2.29</span>
                  <p className="text-gray-600">20 Bowls available</p>
                </div>{/* card */}
                <div className="bg-[#1F1D2B] p-8  rounded-xl gap-2 flex flex-col items-center text-center text-gray-300">
                  <img src="../public/img/m-1.png" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" />
                  <p className="text-xl">Speacy seasoned seafood nodles</p>
                  <span className="text-gray-400">$2.29</span>
                  <p className="text-gray-600">20 Bowls available</p>
                </div>{/* card */}
                <div className="bg-[#1F1D2B] p-8  rounded-xl gap-2 flex flex-col items-center text-center text-gray-300">
                  <img src="../public/img/m-5.png" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" />
                  <p className="text-xl">Speacy seasoned seafood nodles</p>
                  <span className="text-gray-400">$2.29</span>
                  <p className="text-gray-600">20 Bowls available</p>
                </div>{/* card */}
                <div className="bg-[#1F1D2B] p-8  rounded-xl gap-2 flex flex-col items-center text-center text-gray-300">
                  <img src="../public/img/m-1.png" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" />
                  <p className="text-xl">Speacy seasoned seafood nodles</p>
                  <span className="text-gray-400">$2.29</span>
                  <p className="text-gray-600">20 Bowls available</p>
                </div>{/* card */}
                <div className="bg-[#1F1D2B] p-8  rounded-xl gap-2 flex flex-col items-center text-center text-gray-300">
                  <img src="../public/img/m-5.png" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" />
                  <p className="text-xl">Spea
                  cy seasoned seafood nodles</p>
                  <span className="text-gray-400">$2.29</span>
                  <p className="text-gray-600">20 Bowls available</p>
                </div>
              </div>
        </div>
        <div className={`lg:col-span-2  fixed lg:static right-0 top- bg-[#1f1d2b] w-full h-full transition-all ${ showOrder ? "right-0" : "-right-full"}`}>
          {/* orders */}
          <div className="relative pt-16 text-gray-300 p-8 h-full">
          <RiCloseLine onClick={toggleOrders} className="absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-xl" />
          <h1 className="text-2xl my-4">Orders N°12455</h1>
          {/* Pills */}
          <div className="flex items-center gap-4 flex-wrap mb-8">
            <button className="bg-[#16a34a] text-white py-2 px-4 rounded-xl">
              Dine In
            </button>
            <button className="text-[#16a34a] py-2 px-4 rounded-xl border border-gray-500">
              To Go
            </button> 
            <button className="text-[#16a34a] py-2 px-4 rounded-xl border border-gray-500">
              Delivery
            </button>
          </div>
          {/* Car */}
          <div>
            <div className="grid grid-cols-6 mb-4 p-4">
              <h5 className="col-span-4">Item</h5>
              <h5>Qty</h5>
              <h5>Price</h5>
            </div>
          {/* products */}
          <div className="h-[400px] overflow-scroll">
           {/* Product */}
            <div className="bg-[#262837] p-4 rounded-xl mb-4">
              <div className="grid grid-cols-6 mb-4">
                {/* Product Description */}
                <div className=" col-span-4 flex items-center gap-3">
                  <img src="/public/img/m-3.png" className="w-10 h-10 object-cover"/>
                  <div>
                    <h5 className="text-sm">Spaicy sea...</h5>
                    <p className="text-xs text-gray-500">$2.29</p>
                  </div>
                </div>
                {/* Qty */}
                <div>
                  <span>2</span>
                </div>
                {/* Price */}
                <div>
                  <span>$4.58</span>
                </div>
              </div>
              {/* Note */}
                  <div className="grid grid-cols-6 items-center gap-2">
                  <form class="col-span-5">
                    <input
                      type="text"
                      class="w-full bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none"placeholder="Order note..."/>
                  </form>
                  <div>
                    <button className="border border-red-500 p-2 rounded-lg">
                      <RiDeleteBin6Line className="text-red-500" />
                    </button>
                  </div>
              </div>
            </div>
            {/* Product */}
            <div className="bg-[#262837] p-4 rounded-xl mb-4">
              <div className="grid grid-cols-6 mb-4">
                {/* Product Description */}
                <div className=" col-span-4 flex items-center gap-3">
                  <img src="/public/img/m-3.png" className="w-10 h-10 object-cover"/>
                  <div>
                    <h5 className="text-sm">Spaicy sea...</h5>
                    <p className="text-xs text-gray-500">$2.29</p>
                  </div>
                </div>
                {/* Qty */}
                <div>
                  <span>2</span>
                </div>
                {/* Price */}
                <div>
                  <span>$4.58</span>
                </div>
              </div>
              {/* Note */}
                  <div className="grid grid-cols-6 items-center gap-2">
                  <form class="col-span-5">
                    <input
                      type="text"
                      class="w-full bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none"placeholder="Order note..."/>
                  </form>
                  <div>
                    <button className="border border-red-500 p-2 rounded-lg">
                      <RiDeleteBin6Line className="text-red-500" />
                    </button>
                  </div>
              </div>
            </div>
            {/* Product */}
            <div className="bg-[#262837] p-4 rounded-xl mb-4">
              <div className="grid grid-cols-6 mb-4">
                {/* Product Description */}
                <div className=" col-span-4 flex items-center gap-3">
                  <img src="/public/img/m-3.png" className="w-10 h-10 object-cover"/>
                  <div>
                    <h5 className="text-sm">Spaicy sea...</h5>
                    <p className="text-xs text-gray-500">$2.29</p>
                  </div>
                </div>
                {/* Qty */}
                <div>
                  <span>2</span>
                </div>
                {/* Price */}
                <div>
                  <span>$4.58</span>
                </div>
              </div>
              {/* Note */}
                  <div className="grid grid-cols-6 items-center gap-2">
                  <form class="col-span-5">
                    <input
                      type="text"
                      class="w-full bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none"placeholder="Order note..."/>
                  </form>
                  <div>
                    <button className="border border-red-500 p-2 rounded-lg">
                      <RiDeleteBin6Line className="text-red-500" />
                    </button>
                  </div>
              </div>
            </div>
            {/* Product */}
            <div className="bg-[#262837] p-4 rounded-xl mb-4">
              <div className="grid grid-cols-6 mb-4">
                {/* Product Description */}
                <div className=" col-span-4 flex items-center gap-3">
                  <img src="/public/img/m-3.png" className="w-10 h-10 object-cover"/>
                  <div>
                    <h5 className="text-sm">Spaicy sea...</h5>
                    <p className="text-xs text-gray-500">$2.29</p>
                  </div>
                </div>
                {/* Qty */}
                <div>
                  <span>2</span>
                </div>
                {/* Price */}
                <div>
                  <span>$4.58</span>
                </div>
              </div>
              {/* Note */}
                  <div className="grid grid-cols-6 items-center gap-2">
                  <form class="col-span-5">
                    <input
                      type="text"
                      class="w-full bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none"placeholder="Order note..."/>
                  </form>
                  <div>
                    <button className="border border-red-500 p-2 rounded-lg">
                      <RiDeleteBin6Line className="text-red-500" />
                    </button>
                  </div>
              </div>
            </div>
          </div>
          </div>
           {/* Submit paymet */}
           <div className="bg-[#262837] absolute w-full bottom-0 left-0 p-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-400">Discount</span>
              <span>$0</span>
            </div>
            <div className="flex items-center justify-between mb-6">
              <span className="text-gray-400">Subtotal</span>
              <span>$201.03</span>
            </div>
            <div>
              <button className="bg-[#16a34a] w-full py-2 px-4 rounded-lg mb-3">Continue to payment</button>
            </div>
          </div>
          </div>
        </div>
      </main>
    </div> 
    )
      
  
}

export default App
