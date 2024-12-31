import {createSlice} from "@reduxjs/toolkit";

const initialState={
    popupVisible:false,
    user:null,
}

export const slice=createSlice({
    name:'D-ARK',
    initialState,
    reducers:{
        setPopupVisible(state,action){
            state.popupVisible=!state.popupVisible;
        },
        setUser(state,action){
            state.user=action.payload;
        }
    }
})

export const {setPopupVisible,setUser}=slice.actions;

export default slice.reducer