import { createSlice } from "@reduxjs/toolkit";

const Subscribtion = createSlice({
        initialState: [],
        name: 'subscibe',
        reducers: {
            ADD: (state , action) => {
                let newItems;
                if(localStorage.getItem('subItems')){
                    newItems = [action.payload , ...JSON.parse(localStorage.getItem('subItems'))]
                }else {
                    newItems = [...state , action.payload ]
                }
                localStorage.setItem('subItems' , JSON.stringify(newItems))
                return newItems
            },
            REMOVE: (state , action) => {
                // const itemIndex = state.findIndex((item) => item.name === action.payload.name )
                const newItems = state.filter((item) => item.name !== action.payload.name)
                localStorage.setItem('subItems' , JSON.stringify(newItems))
                return newItems
            },
            SET: (state , action) => {
                return [...state , ...action.payload]
            }
        }
    })

export default Subscribtion.reducer

export const SubscribeActions =  Subscribtion.actions