import "./guest.css"

const Guest = () => {
    return (
        <div className="guest">
            <div className="guestlist">
                <img className="guestimg" src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1" alt="" />
                <span className="guestname" >Aparthotel Stare Miasto</span>
                <span className="guestcity" >Old Town, Poland, Kraków</span>
                <span className="guestprice" >Starting from PKR 71,112</span>
                <div className="guestrating">
                    <button>7</button>
                    <span>Good</span>
                </div>
            </div>
            <div className="guestlist">
                <img className="guestimg" src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=9a065fcd92168145d8c8358701662c76793535597b678efc8f6921c8e3c188e6&o=&s=1" alt="" />
                <span className="guestname" >7Seasons Apartments Budapest</span>
                <span className="guestcity" >06. Terézváros, Hungary, Budapest</span>
                <span className="guestprice" >Starting from PKR 49,803</span>
                <div className="guestrating">
                    <button>8.1</button>
                    <span>Fabulous</span>
                </div>
            </div>
            <div className="guestlist">
                <img className="guestimg" src="https://cf.bstatic.com/xdata/images/hotel/square600/352170812.webp?k=75ffc5f9eb3f3cc394b901714c1544757b05849dbbdf30e4fc8c6df53931c131&o=&s=1" alt="" />
                <span className="guestname" >numa I Vita Apartments</span>
                <span className="guestcity" >Fortezza da Basso, Italy, Florence</span>
                <span className="guestprice" >Starting from PKR 116,788</span>
                <div className="guestrating">
                    <button>9.3</button>
                    <span>Superb</span>
                </div>
            </div>
            <div className="guestlist">
                <img className="guestimg" src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1" alt="" />
                <span className="guestname" >Cheval Three Quays</span>
                <span className="guestcity" >City of London, United Kingdom</span>
                <span className="guestprice" >Starting from PKR 202,948</span>
                <div className="guestrating">
                    <button>9.5</button>
                    <span>Exceptional</span>
                </div>
            </div>
        </div>
    )
}

export default Guest