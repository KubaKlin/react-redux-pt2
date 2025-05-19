import { useMemo } from 'react';
import { useGetShowsQuery } from '../store/api';
import { useSelector } from 'react-redux';
import { selectSearchQuery } from '../store/searchSlice';

const useShowsList = () => {
  const { data: shows = [] } = useGetShowsQuery();
  const searchQuery = useSelector(selectSearchQuery);

  const filteredShows = useMemo(() => {
    let result = [...shows];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(show =>
        show.name.toLowerCase().includes(query)
      );
    }

    return result;
  }, [shows, searchQuery]);

  return {
    tvShows: filteredShows,
  };
};

export default useShowsList;