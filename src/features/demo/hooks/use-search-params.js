import { useQueryState } from 'nuqs';

export function useSearchParams() {
  const [searchTerm, setSearchTerm] = useQueryState('q', {
    defaultValue: '',
    clearOnDefault: true
  });
  
  const [filter, setFilter] = useQueryState('filter', {
    defaultValue: 'all',
    clearOnDefault: true
  });
  
  const [page, setPage] = useQueryState('page', {
    defaultValue: 1,
    parse: parseInt,
    serialize: String,
    clearOnDefault: true
  });

  return {
    searchTerm,
    setSearchTerm,
    filter,
    setFilter,
    page,
    setPage
  };
}