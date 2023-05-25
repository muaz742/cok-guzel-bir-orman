import {configureStore} from '@reduxjs/toolkit'
import icerikReduce from './orman/icerikSlice'

const store = configureStore({
    reducer: {
        icerik: icerikReduce
    }
})
export default store