import React, { useState } from 'react'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import "./list.css"
import { useLocation } from 'react-router-dom'
import { format } from "date-fns";
import { DateRange } from 'react-date-range';
import Searchitems from '../../components/searchitems/Searchitems'

const List = () => {
  const location = useLocation()
  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [opt, setOpt] = useState(location.state.opt)
  const [openDate, setOpenDate] = useState(false);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listcontainer">
        <div className="listwrapper">
          <div className="listsearch">
            <h1 className="listtitle">Search</h1>
            <div className="listitem">
              <label>Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="listitem">
              <label>Check-in date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
              {openDate && <DateRange
                editableDateInputs={true}
                onChange={item => setDate([item.selection])}
                ranges={date}
                minDate={new Date()}
              />}
            </div>
            <div className="listitem">
              <label>Options</label>
              <div className="listoption">
                <div className="listoptionitem">
                  <span className="listoptiontext">Min Price <small>Per Night</small></span>
                  <input type="number" className="listoptioninput" />
                </div>
                <div className="listoptionitem">
                  <span className="listoptiontext">Max Price <small>Per Night</small></span>
                  <input type="number" className="listoptioninput" />
                </div>
                <div className="listoptionitem">
                  <span className="listoptiontext">Adults</span>
                  <input min={1} type="number" className="listoptioninput" placeholder={opt.adult} />
                </div>
                <div className="listoptionitem">
                  <span className="listoptiontext">Children</span>
                  <input min={0} type="number" className="listoptioninput" placeholder={opt.children} />
                </div>
                <div className="listoptionitem">
                  <span className="listoptiontext">Rooms</span>
                  <input min={1} type="number" className="listoptioninput" placeholder={opt.room} />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listresult">
            <Searchitems/>
            <Searchitems/>
            <Searchitems/>
            <Searchitems/>
            <Searchitems/>
            <Searchitems/>
            <Searchitems/>
            <Searchitems/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List