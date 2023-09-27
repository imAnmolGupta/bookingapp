import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import "./reserve.css";

const Reserve=({setOpen,hotelId}) =>{
    const [selectedRooms,setSelectedRooms]=useState([]);
    const {data,loading,error}=useFetch(`/hotels/room/${hotelId}`)

    const handleSelect=(e) =>{
        const checked =e.target.checked;
        const value=e.target.value;
        setSelectedRooms(checked ? [...selectedRooms,value] : selectedRooms.filter(item=> item!==value ))
    }
    
    return(
        <div className="reserve">
            <div className="rContainer">
                <FontAwesomeIcon icon={faCircleXmark} className="rClose" onClick={()=>setOpen(false)} />
                <span>Select your rooms: </span>
                {data.map(item=>(
                    <div className="rItem">
                        <div className="rItemInfo">
                            <div className="rTitle"> {item.title} </div>
                            <div className="rDesc">{item.desc} </div>
                            <div className="rMax">Max people :<b>{item.maxPeople}</b> </div>
                            <div className="rPrice">{item.Price} </div>
                        </div>
                        {item.roomNumbers.map(roomNumber=>(
                            <div className="room">
                                <label>{roomNumber.number}</label>
                                <input type="checkbox" value={roomNumber._id} onChange={handleSelect} />
                            </div>
                        ))}
                    </div>
                ))}
                <button  className="rButton">Reserve now!</button>
            </div>
        </div>
    )
}

export default Reserve;