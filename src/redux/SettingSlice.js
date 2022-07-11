import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const Start = createAsyncThunk("user/start", async(user)=>{
 const res = await axios.post(`https://opentdb.com/api.php?amount=${user.num}&category=${user.catogry}&difficulty=${user.diffcult}`)
 return res.data
})

export const SettingSlice= createSlice({

    name:"setting",

    initialState:{
        arrItem : [],
        loading : false,
        arrRandom:[],
        conect:true,
        catogry:"",
        diffcult:"",
        num:""
     
    },
    reducers:{
     addRandomArray: (state,action)=>{
            let current =action.payload.length;
            let random;
            let temp
       
            while(current > 0 ){
              random = Math.floor(Math.random() * current)
         
              current--
      
             temp= action.payload[current]
      
             action.payload[current] = action.payload[random]
      
             action.payload[random] = temp
            
            }
       
            state.arrRandom = action.payload 
           },

           changArrayItem:(state,action)=>{
             state.arrItem = []
           },
           setDiffcult:(state,action)=>{
               state.diffcult = action.payload
           },
           setCatogry:(state,action)=>{
               state.catogry= action.payload
           },
           setNum:(state,action)=>{
            state.num = action.payload
           },
      
    },
    extraReducers:{
        [Start.pending] :(state,action)=>{
          state.loading = true
        },
        [Start.fulfilled] :(state,action)=>{
            state.loading = false
            let items = action.payload.results.map((i)=>{
              
                i.incorrect_answers.push(i.correct_answer)
                i.answer = i.incorrect_answers

                return i
            })
        

             state.arrItem= items

        },
        [Start.rejected] :(state,action)=>{
            state.loading = false
            state.conect = false
        },
    }
})

export const {addRandomArray,changArrayItem,setDiffcult,setCatogry,setNum} = SettingSlice.actions

export default  SettingSlice.reducer