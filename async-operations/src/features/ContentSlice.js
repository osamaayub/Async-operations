import {createAsyncThunk,createSlice} from "@reduxjs/toolkit";
import axios from "axios";




const initialState={
  contents:[],
  isloading:false,
  error:null
}

export const fetchContent=createAsyncThunk(
 'content/fetchContent',
   async()=>{
     const res = await axios.get("https://jsonplaceholder.typicode.com/photos");
     const data=res.data;
     return data;
 }
)

 const ContentSlice=createSlice({
  initialState,
  name:"Content",
  reducers:{},
  extraReducers:(builder)=>{
    builder.addCase(fetchContent.pending,(state)=>{
      state.isloading=true;
    })
    builder.addCase(fetchContent.fulfilled,(state,action)=>{
      state.isloading=false;
      state.contents=action.payload
    })
    builder.addCase(fetchContent.rejected,(state,action)=>{
      state.isloading=false;
      state.error=action.error.message
    })
  }
});

export default ContentSlice.reducer