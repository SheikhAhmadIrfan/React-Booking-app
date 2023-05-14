import './Ai.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import alanBtn from '@alan-ai/alan-sdk-web';
import { useEffect } from 'react';

const alanKey = '344257a638daf4fec41a2af6566fb1152e956eca572e1d8b807a3e2338fdd0dc/stage';
const Ai = () => {
    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command }) => {
                if (command === "testCommand") {
                    alert("this code was executed")
                }
            }
        })
    }, [])
    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="aicontainer">
                <div className="aiwrapper">
                    <div className="smalltalk">
                        <h1>Questions You may Ask</h1>
                        <div className="talk">
                            <ul>
                                <li>Hello Tour app</li>
                                <li>What is your name</li>
                                <li>who created you</li>
                                <li>how are you</li>
                                <li>How old are you</li>
                                <li>what is your birthdate</li>
                                <li>who are you</li>
                                <li>When will you get smarter</li>
                                <li>Are you busy</li>
                                <li>Do you have a hobby</li>
                                <li>Are you hungry</li>
                                <li>Will you marry me</li>
                                <li>Are we friends</li>
                                <li>Where are you from</li>
                                <li>Are you there</li>
                                <li>hey siri</li>
                            </ul>
                        </div>
                    </div>
                    <div className="smalltalk">
                        <img className='imgai' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ylcI69CEyRPrK1NFKDGG-gm6-hIMe3L0bJGTLsGj14wnQbtfgXbpBdjNfxTIHrg86XY&usqp=CAU" alt="" />
                    </div>
                    <div className="smalltalk">
                        <h1>Tour Weather Queries</h1>
                        <div className="talk">
                            <ul>
                                <li>What is the weather|temperature|humidity|pressure in "Location"</li>
                                <li>What is the weather in "City" will be on "Date"</li>
                                <li>Is it going to rain in "Location"</li>
                                <li>Is it going to warm in "Location"</li>
                                <li>Is it going to cool in "Location"</li>
                                <li>Is it going to chilly in "Location"</li>
                                <li>Is it going to rain in "Location" on "Date"</li>
                                <li>Is it going to cool in "Location" on "Date"</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Ai