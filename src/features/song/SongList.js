import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectSong,delSong,addSong  } from  './songSlice'
 
//  
const SongList = () => {
    const arr = useSelector((state) => state.song.arr)
    const dispatch = useDispatch();
    return ( <div>
        <ul>
        {arr.map(item=>{return <li key={item.id}>{item.name}<input type='button' value={"מחק"} onClick={()=>{dispatch(delSong(item.id))}}/></li>})}
        </ul>
      <div>
        {/* <button
          onClick={() => dispatch(delSong(1))}
        // > */}
        {/* //   addSong
        // </button> */}

       

      </div>
    </div>
  )
}


 
export default SongList;