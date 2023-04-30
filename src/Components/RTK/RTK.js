import { configureStore } from "@reduxjs/toolkit";
import Subscribtion from "./Slices/Subscribtion";
export const store = configureStore({
    reducer: {
        Subscibe: Subscribtion
    }
}) 