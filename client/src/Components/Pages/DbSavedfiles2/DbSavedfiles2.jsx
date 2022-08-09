import Logo from "../../Reuseable components/Logo/Logo"
import "./DbSavedfiles2.css"
import {AiOutlineFolderOpen} from "react-icons/ai";
import Ellipse1 from "./Ellipse 1.png";
import xceldoc from "./xceldoc.png";




const DbSavedfiles2 = () => {
    return(
        <div>
            {/* BELOW IS THE HEADER CODE  */}

            <div className="head">
                <div className="xelcomp-logo">
                    <Logo/>
                </div>

                <div className="profile-pic">
                    <img src= {Ellipse1} alt="Shearly Wilsonge1" className="img1"/>
                    <p className="usersName">Shearly Wilson</p>
                </div>
            </div>

            {/* BELOW IS THE SIDE BAR CODE  */}

            <div className="sideBar">

                <div className="savedFile">
                    <AiOutlineFolderOpen className="savedFile-icon"/>
                    <p className="savedFile-name">Saved Files</p>
                </div>
                
                <ul className="savedFile-list">
                    <li><a>Timetable.xls</a></li>
                </ul>
                
            </div>

            {/* Main content starts here */}

            <div className="content">

              <img src= {xceldoc} alt="Timetable.xls" className="img-doc"/>

              <div className="call-to-action-btns">
                <button className="download-btn">Download</button>
                <button className="share-btn">Share</button>
              </div>
            </div>



        </div>
    )
}
export default DbSavedfiles2;