import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  initiateFetch,
  selectPageInformation,
  selectStatus,
  fetchGenresList
} from '../../MoviesSlice';
import { moviesKey, pageKey, searchKey } from '../../functionsAndKeys/keys';
import useQueryParameter from '../../useQueryParameter';
import ToggleThemeButton from '../../Common/ToggleThemeButton';
import Container from '../../Common/Container';
import GridTemplate from '../../Common/GridTemplate';
import Header from '../../Common/Header';
import LoadingPage from "../../Common/LoadingPage"
import NoResults from '../../Common/NoResults';
import Failed from '../../Common/Failed';
import Pager from '../../Common/Pager';

function Movies() {
  const dispatch = useDispatch();
  dispatch(fetchGenresList());
  const type = moviesKey;
  const query = useQueryParameter(searchKey);
  const page = useQueryParameter(pageKey);
  const movies = useSelector(selectPageInformation);
  const status = useSelector(selectStatus);

  useEffect(() => {
    dispatch(fetchGenresList());
  },
    [dispatch]);

  if (status === "loading") {
    dispatch(initiateFetch({
      page: page ? page : 1,
      type: type,
      query: query
    }));
  };

  return (
    <>
      <Container>
        {status !== "failed"
          ? <Header text={!query
            ? `Popular ${type}`
            : `${movies.total_results === 0
              ? "Sorry, there are no results for"
              : "Search results for"} "${query}"`}
          />
          : ""
        }
        {status === "loading"
          ? <LoadingPage />
          : ""
        }
        {status === "success" && movies.total_results > 0
          ? <GridTemplate
            content={movies.results}
            type={type}
          />
          : ""
        }
        {status === "success" && movies.total_results === 0
          ? <NoResults />
          : ""
        }
        {status === "failed"
          ? <Failed />
          : ""
        }
        {status === "success" && movies.total_results > 0
          ? <Pager
            content={movies}
            type={type}
          />
          : ""
        }
      </Container>
      {status === "loading"
        ? ""
        : <ToggleThemeButton />
      }
    </>
  );
};

export default Movies;