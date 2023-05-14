import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import "./hotel.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faCircleXmark, faLocation } from '@fortawesome/free-solid-svg-icons'
import Email from '../../components/email/Email'
import { useState } from "react"


const Hotel = () => {
  const [slideno, setslideno] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square200/270976338.webp?k=f3d9f0c6ef1c3457fd4b96b8991e7e2d60e3d9cb76bc0d79d6501ae48af8c3c1&o=&s=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square200/344285503.webp?k=4f64ab2c968ecf8291f0ef4c54848577f4ebda067dcfd711039e30393f7799de&o=&s=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square200/362535382.webp?k=9710dc1eec802b90eb119f14c76ac0920f5e1540af9aa9c20bab30e70e0fdc1d&o=&s=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square200/308234590.webp?k=59897d0a14ec1ab2d7847de3ec10e3995ddbf2afad636fa458373a3fa0241081&o=&s=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square200/246583444.webp?k=97b750c79c949a4d3753675b4335e2227e4fec1c9eee586d7fa7df59137a2bf8&o=&s=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square200/339261913.webp?k=6c3541ee97313c7d47c2c1e7da9367af32586ccff1e96211b7c09e06d471aa6a&o=&s=1"
    },
  ];
  const handleOpen = (i) => {
    setslideno(i);
    setOpen(true);
  }
  const handleMove=(dir)=>{
    let n;
    if(dir==="l"){
      n = slideno === 0 ? 5 : slideno-1;
    }
    else{
      n = slideno === 5 ? 0 : slideno+1;
    }
    setslideno(n);
  }
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelcontainer">
        {open && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
          <FontAwesomeIcon icon={faArrowLeft} className="arrow" onClick={()=>handleMove("l")} />
          <div className="sliderwrapper">
            <img src={photos[slideno].src} alt="" className="sliderimg" />
          </div>
          <FontAwesomeIcon icon={faArrowRight} className="arrow" onClick={()=>handleMove("r")} />
        </div>}
        <div className="hotelwrapper">
          <button className="book">Book Now</button>
          <h1 className="hoteltitle">Grand Hotel</h1>
          <div className="hoteladdress">
            <FontAwesomeIcon icon={faLocation} beat />
            <span>Elton 125 New York</span>
          </div>
          <span className="hoteldistance">
            Excellent Location - 500m from center
          </span>
          <span className="hotelprice">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelimages">
            {photos.map((photo, i) => (
              <div className="hotelimagewrapper">
                <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className="hotelimage" />
              </div>
            ))}
          </div>
          <div className="hoteldetails">
            <div className="hoteldetailtext">
              <h1 className="hoteltitle">Stay in the heart of London</h1>
              <p className="hoteldesc">
                The Londoner features a stunning guest-only club, six concept restaurants and bars including a rooftop lounge, a spa with pool, gym, superfood clinic and beauty salon. There are 350 luxurious bedrooms and suites including a tower penthouse suite with panoramic views.

                Each room includes a table, a flat-screen TV and a private bathroom. Guests will have exclusive access to The Residence, residents-only club. Discover an inspirational place to relax in The Drawing Room. Enjoy the alluring change in The Y Bar from a place to work in the day to a nightly scene for socialising, cocktails and light bites. Or follow a secret passage to The Whisky Room. Complimentary antipasti, soft drinks, tea and coffee is also served throughout the day.

                The hotels interior design is by Yabu Pushelberg. The Londoner features a variety of event spaces, including a state-of-the-art ballroom accommodating up to 850 guests, two private screening rooms, an elegant events room and seven meeting spaces.

                Located in Leicester Square, the hotel is just a short walk from many of London's hot spots such as Soho, Covent Garden, Trafalgar Square and local transport links. The hotel is also member of the prestigious Preferred Hotels and Resorts Legend Collection.
              </p>
            </div>
            <div className="hoteldetailprice">
              <h1>Property highlights</h1>
              <span>Situated in the real heart of London, this hotel has an excellent location score of 9.6</span>
              <h2><b>$945</b>(9 Nights)</h2>
              <button>Reserve Now</button>
            </div>
          </div>
        </div>
        <Email />
      </div>
    </div>
  )
}

export default Hotel