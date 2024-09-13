import React from 'react'
import "./middle.css"
import 'react-multi-carousel/lib/styles.css';




function Middle() {

  return (
      <>
    
    <div className='maincontainer'>
        <div className="m1">
            <div className="headl1">
                <h2>What's on your mind?</h2>
                <div className="arrows1">
                <i class="fa fa-arrow-circle-left arr" aria-hidden="true" ></i>
                <i class="fa fa-arrow-circle-right arr" aria-hidden="true"></i>
                </div>
            </div>
            <div className="food1">
            
            <div ><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png" className="sliderc"alt="" /></div>
             <div><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png" alt="" className="sliderc"/></div>
             <div><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2.png" alt="" className="sliderc"/></div>
             <div><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png" alt="" className="sliderc"/></div>
             <div><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png" alt="" className="sliderc"/></div>
             <div><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/North_Indian_4.png" alt="" className="sliderc"/></div>
             <div><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029852/PC_Creative%20refresh/3D_bau/banners_new/Momos.png" alt="" className="sliderc"/></div>
             <div><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png" alt="" className="sliderc"/></div>
             <div><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Ice_Creams.png" alt="" className="sliderc"/></div>
             <div><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Paratha.png" alt="" className="sliderc"/></div>
             <div><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029855/PC_Creative%20refresh/3D_bau/banners_new/Noodles.png" alt="" className="sliderc"/></div>

             <div>Item 4</div>
            </div>
        </div>
    </div>
    <hr className="line"></hr>
    <div className="restaurants">
      <div className="rtop">
        <h2 className='resttitle'>Top Restaurants chains in Pune</h2>
        
      </div>
      <div className="rcards">
        <div className="rcard1 rcard">
          <div className="rcardi">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/63178e3e64d503a479f2a2048a474552" alt="" className='img1'/>
            <div className="imagename">
              {/* <h2>60% OFF UPTO ₹120</h2> */}

            </div>
          </div>
          <div className="carddesc">
          <div className="cardname">
            Burger King
          </div>
          <div className="cardrate">
            4.1. 20-30 mins
          </div>
          <div className="cardtype">
            Burgers,American
          </div>
          <div className="location">
            Tathawade
          </div>
          </div>

        </div>
        <div className="racrd2 rcard">
        <div className="rcardi">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/85ccae4e3576f9330af102c46ca85395" alt="" className='img1'/>
            <div className="imagename">
              {/* <h2>60% OFF UPTO ₹120</h2> */}

            </div>
          </div>
          <div className="carddesc">
          <div className="cardname">
            Baskin Robins- Ice cream
          </div>
          <div className="cardrate">
            4.5
          </div>
          <div className="cardtype">
            Ice cream, Desserts
          </div>
          <div className="location">
            Wakad
          </div>
          </div>

        </div>
        <div className="racrd3 rcard">
        <div className="rcardi">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/03501c33ecb3a3105124441e541e6fe4" alt="" className='img1'/>
            <div className="imagename">
              {/* <h2>60% OFF UPTO ₹120</h2> */}

            </div>
          </div>
          <div className="carddesc">
          <div className="cardname">
           McDonald's
          </div>
          <div className="cardrate">
            4.3
          </div>
          <div className="cardtype">
            Burgers,Beverages, cafe, Desserts
          </div>
          <div className="location">
            Dange Chowk
          </div>
          </div>

        </div>
        <div className="racrd4 rcard">
        <div className="rcardi">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f01666ac73626461d7455d9c24005cd4" alt="" className='img1'/>
            <div className="imagename">
              {/* <h2>60% OFF UPTO ₹120</h2> */}

            </div>
          </div>
          <div className="carddesc">
          <div className="cardname">
            KFC
          </div>
          <div className="cardrate">
            4.1
          </div>
          <div className="cardtype">
            Burgers,Biryani,American,Snacks
          </div>
          <div className="location">
            Hinjawadi
          </div>
          </div>

        </div>
        </div>
    </div>
    <hr className="line"></hr>
    <h2 className="restonline">
    Restaurants with online food delivery in Pune
    </h2>
    <div className="blank">

    </div>
    <div className="buttons">
      <button className="b1 buttonn">Filter</button>
      <button className="b2 buttonn">Sort By</button>
      <button className="b3 buttonn">Fast Delivery</button>
      <button className="b4 buttonn">New on Swiggy</button>
      <button className="b5 buttonn">Ratings 4.0+</button>
      <button className="b6 buttonn">Pure Veg</button>
      <button className="b7 buttonn">Offers</button>
      <button className="b8 buttonn">Rs. 300-Rs. 600</button>
      <button className="b9 buttonn">Less than Rs. 300</button>
    </div>
  </>
  )
}

export default Middle