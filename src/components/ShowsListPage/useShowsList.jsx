import { useGetShowsQuery, useSearchShowsQuery } from '../../store/api';
import { useSelector } from 'react-redux';
import { selectSearchQuery } from '../../store/searchSlice';

export const useShowsList = () => {
  const searchQuery = useSelector(selectSearchQuery);
  const { data: allShows = [] } = useGetShowsQuery(undefined, {
    skip: searchQuery,
  });
  const { data: searchResults = [] } = useSearchShowsQuery(searchQuery, {
    skip: !searchQuery,
  });

  const transformedSearchResults = searchResults.map((result) => result.show);

  return {
    tvShows: searchQuery ? transformedSearchResults : allShows,
  };
};
