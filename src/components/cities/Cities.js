import "./cities.css"

const Cities = () => {
    return (
        <>
            <div className="cities">
                <div className="citiesitems">
                    <img className="citiesimg" src="https://cf.bstatic.com/xdata/images/city/300x240/664666.jpg?k=e7f2be1324d4595363ec6d46d988eb21cee118a5530ce0a19a18cf85c4473d2e&o=" alt="" />
                    <div className="citiestitle">
                        <h1>Kathmandu, Nepal</h1>
                    </div>
                </div>
                <div className="citiesitems">
                    <img src="https://cf.bstatic.com/xdata/images/city/300x240/654590.jpg?k=c564e1c46a0b6cde3d14d69e01ca8d0152d0f4e68a815888a2f775e6e4a8c38e&o=" alt="" />
                    <div className="citiestitle">
                        <h1>Bodrum City, Turkey</h1>
                    </div>
                </div>
                <div className="citiesitems">
                    <img src="https://cf.bstatic.com/xdata/images/city/300x240/688784.jpg?k=7e8f3035a4f06b4407aa7d2e4a5facb56f4a7e73e948d1243442ce6117201e50&o=" alt="" />
                    <div className="citiestitle">
                        <h1>Kata Beach, Thailand</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cities