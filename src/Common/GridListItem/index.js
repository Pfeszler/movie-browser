import React from "react";
import { useDispatch } from "react-redux";
import { setStatus } from "../../MoviesSlice";
import { moviesKey } from "../../functionsAndKeys/keys";
import MovieSmallTile from "../../tiles/MovieSmallTile";
import PersonTile from "../../tiles/PersonTile";
import { GridLink } from "./styled";

const GridListItem = ({ fragment, type, castAndCrew, toHide, showMore }) => {
    const dispatch = useDispatch();

    return ((toHide && showMore) || !toHide) && (
        <li
            onClick={() => dispatch(setStatus("loading"))}
        >
            {type === moviesKey
                ? <GridLink
                    to={`/movies/${fragment.id}`}
                >
                    {<MovieSmallTile
                        key={fragment.id}
                        content={fragment}
                        castAndCrew={castAndCrew}
                    />}
                </GridLink>
                : <GridLink
                    to={`/people/${fragment.id}`}>
                    <PersonTile
                        person={fragment}
                        castAndCrew={castAndCrew}
                    />
                </GridLink>
            }
        </li>
    )
};

export default GridListItem;