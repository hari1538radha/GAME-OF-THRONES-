import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";

export const getCharData = createAsyncThunk("Getdata", async ()=>
{
    return fetch("https://thronesapi.com/api/v2/Characters").then((response)=>
    {
         response.json()
       
    });

}
)

export const CharSlice = createSlice(
    {
        name:"data",
        initialState:
        {
            data: [],
            loading:false
        },
        extraReducers:
        {
            [getCharData.pending]:(state,action)=>
            {
                state.loading =true;
            },
            [getCharData.fulfilled]:(state,action)=>
            {
                state.loading =false;
                state.data = action.payload;
            },
            [getCharData.rejected]:(state,action)=>
            {
                state.loading =false;
            }
        }
    }
)
export default CharSlice.reducer;
