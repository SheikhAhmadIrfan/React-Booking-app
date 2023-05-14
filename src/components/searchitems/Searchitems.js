import "./searchitems.css"

const Searchitems = () => {
    return (
        <div className="searchitem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square200/379464180.webp?k=86f645dc1a04a45dcd262ea23c3e986d134a0ead44f05bfd4f11dfc344c85c82&o=&s=1" alt="" className="searchimgitem" />
            <div className="searchdesc">
                <h1 className="searchtitle">Leonardo Royal London St Paul’s</h1>
                <span className="searchdistance">2.1 km from centre</span>
                <span className="searchtaxi">Free Airport Taxi</span>
                <span className="searchsubtitle">Studio Apartment with Air-Conditioning</span>
                <span className="searchcancel">Free Cancellation</span>
            </div>
            <div className="searchdetails">
                <div className="searchrating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="searchdetailtext">
                    <span className="searchprice">$123</span>
                    <span className="searchtax">Includes taxes and fee</span>
                    <button className="searchdetailbtn">See Availability</button>
                </div>
            </div>
        </div>
    )
}

export default Searchitems