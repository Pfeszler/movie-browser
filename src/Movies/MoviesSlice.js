import { createSlice } from "@reduxjs/toolkit"

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        selectedPage: 1,
        pageInformations: {
            page: 0,
            results: [],
            total_results: 0,
            total_pages: 0
        }
    },
    reducers: {
        setPageInformation: (state, { payload }) => {
            state.pageInformations = payload
        },
        setSelectedPage: (state, { payload }) => {
            switch (payload) {
                case "first":
                    state.selectedPage = 1;
                    break;
                case "previous":
                    state.selectedPage--
                    break;
                case "next":
                    state.selectedPage++
                    break;
                default:
                    state.selectedPage = payload
            }
        }
    }
}
)

export const {
    setPageInformation,
    setSelectedPage
} = moviesSlice.actions

export const selectMovies = state => state.movies
export const selectSelectedPage = state => selectMovies(state).selectedPage
export const selectPageInformation = state => selectMovies(state).pageInformations
export default moviesSlice.reducer