import { createSlice } from "@reduxjs/toolkit";
import {help} from '../Utils/helpMarkdown'

export const markdownSlice = createSlice({
    name:"markdown",
    initialState:{
        markdownText:"",
        textHelp:help,
        isShowingHelp:false,
    },
    reducers:{
        setMarkdownText:(state,action) => {
            state.markdownText = action.payload
        },
        showHelpText:(state) => {
            state.isShowingHelp = !state.isShowingHelp
        }
    }
})

export const {setMarkdownText,showHelpText} = markdownSlice.actions;
export default markdownSlice.reducer;