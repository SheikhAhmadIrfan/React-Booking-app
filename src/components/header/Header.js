import "./header.css"
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { useState } from 'react';
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

function Header({ type }) {
    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [openOpt, setOpenOpt] = useState(false);
    const [opt, setOpt] = useState({
        adult: 2,
        children: 0,
        room: 1,

    })
    const handleoption = (name, operation) => {
        setOpt(prev => {
            return {
                ...prev, [name]: operation === "i" ? opt[name] + 1 : opt[name] - 1,
            }
        })
    }
    const navigate = useNavigate()
    const handleSearch = () => {
        navigate("/hotels", { state: { destination, date, opt } })
    }
    const handleDestination = (event) => {
        setDestination(event.target.value)
    }
    return (
        <div classname="headerr" style={{
            backgroundColor: "purple",
            display: "flex",
            justifyContent: "center",
            color: "white",
            position: "relative"
        }}>
            <div className={type === "list" ? "headercontainer listmode" : "headercontainer"}>
                <div className="headerlist">
                    <div className="headerlistitem active" >
                        <FontAwesomeIcon icon={faBed} beat />
                        <span>Stays</span>
                    </div>
                    <div className="headerlistitem">
                        <FontAwesomeIcon icon={faPlane} fade />
                        <span>Flights</span>
                    </div>
                    <div className="headerlistitem">
                        <FontAwesomeIcon icon={faCar} shake />
                        <span>Car Rentals</span>
                    </div>
                    <div className="headerlistitem">
                        <FontAwesomeIcon icon={faBed} beat />
                        <span>Attractions</span>
                    </div>
                    <div className="headerlistitem">
                        <FontAwesomeIcon icon={faTaxi} spin Reverse />
                        <span>Airport Taxis</span>
                    </div>
                </div>
                {
                    type !== "list" &&
                    <>
                        <h1 className="headertitle">The great getaway, your way</h1>
                        <para className="headerparagraph">Save at least 15% on stays worldwide, from relaxing retreats to off-the-grid adventures</para>
                        <button className="headerbtn">Sign in / Register</button>
                        <div className="headersearch">
                            <div className="headersearchitem">
                                <FontAwesomeIcon icon={faBed} className="headericon" />
                                <input type="text" placeholder="Where You Want To Go" className="headersearchitem" onChange={handleDestination} />
                            </div>
                            <div className="headersearchitem">
                                <FontAwesomeIcon icon={faCalendarDays} className="headericon" />
                                <span onClick={() => setOpenDate(!openDate)} className="headersearchtext" >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                                {openDate && <DateRange
                                    editableDateInputs={true}
                                    onChange={item => setDate([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={date}
                                    className="date"
                                    minDate={new Date()}
                                />}
                            </div>
                            <div className="headersearchitem">
                                <FontAwesomeIcon icon={faPerson} className="headericon" />
                                <span onClick={() => setOpenOpt(!openOpt)} className="headersearchtext" >{`${opt.adult} adults . ${opt.children} children . ${opt.room} room`}</span>
                                {openOpt && <div className="options">
                                    <div className="optionItem">
                                        <span className="optionText">Adults</span>
                                        <div className="optioncounter">
                                            <button disabled={opt.adult < 2} onClick={() => handleoption("adult", "d")} className="optioncounterbutton">-</button>
                                            <span className="optioncounterno">{opt.adult}</span>
                                            <button onClick={() => handleoption("adult", "i")} className="optioncounterbutton">+</button>
                                        </div>
                                    </div>
                                    <div className="optionItem">
                                        <span className="optionText">Children</span>
                                        <div className="optioncounter">
                                            <button disabled={opt.children < 1} onClick={() => handleoption("children", "d")} className="optioncounterbutton" >-</button>
                                            <span className="optioncounterno">{opt.children}</span>
                                            <button onClick={() => handleoption("children", "i")} className="optioncounterbutton">+</button>
                                        </div>
                                    </div>
                                    <div className="optionItem">
                                        <span className="optionText">Rooms</span>
                                        <div className="optioncounter">
                                            <button disabled={opt.room < 2} onClick={() => handleoption("room", "d")} className="optioncounterbutton">-</button>
                                            <span className="optioncounterno">{opt.room}</span>
                                            <button onClick={() => handleoption("room", "i")} className="optioncounterbutton">+</button>
                                        </div>
                                    </div>
                                </div>}
                            </div>
                            <div className="headersearchitem">
                                <button className="headerbtn" onClick={handleSearch}>Search</button>
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default Header