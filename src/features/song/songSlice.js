import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  arr:[
    {id:1,name:"la la la"},
    {id:2,name:"bl bla bla"},
    {id:3,name:"ga ga ga"}
  ],
  selectSong:null
}

export const songSlice = createSlice({
  name: 'song',
  initialState,
  reducers: {
 
    addSong: (state,actions) => {
      actions.payload.id=state.arr.length;
      state.arr.push(actions.payload)
    },
    delSong: (state,actions) => {
        
        let index=state.arr.indexOf(item=>item.id=actions.payload)
        state.arr.splice(index,1)
      },
      selectSong:(state,actions)=>{
        state.selectSong=actions.payload
      }
  },
})

// Action creators are generated for each case reducer function
export const {addSong,delSong,selectSong } = songSlice.actions

export default songSlice.reducer