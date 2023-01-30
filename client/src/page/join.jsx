import  React , { useState} from 'react';
import "./Join.css";

export default function Join() {
    const [room, setRoom] = useState('');
    console.log(room)
  return (
    <div>
        <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join Room</h1>
        {/* <div>
          <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>  */}
        <div>
          <input placeholder="Please enter the URL" className="joinInput mt-20" type="text" onChange={(event) => setRoom('http://localhost:3000/room/'+event.target.value)} />
        </div>
          <button className={'button mt-20'} onClick={()=>window.location.href=room} type="submit">join now</button>
      </div>
    </div>
      
    </div>
  )
}