import { configureStore } from "@reduxjs/toolkit";
import TodosSlice from "./slices/TodosSlice";

export const store =configureStore({
    reducer:{
        todos:TodosSlice
    }
})