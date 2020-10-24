import { configureStore } from "@reduxjs/toolkit"
import moviesSlice from "./MoviesSlice"
import createSagaMiddleware from "redux-saga"
import { MoviesSaga, setGenresList } from "./MoviesSaga"

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
        movies: moviesSlice
    },
    middleware: [sagaMiddleware]
}
)

sagaMiddleware.run(MoviesSaga)
sagaMiddleware.run(setGenresList)

export default store