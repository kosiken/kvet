import {useEffect, useState} from 'react';

import Searchable from '../models/Searchable';

function useSearch<T extends Searchable>(
  entries: T[],
): {values: T[]; setTheSearch: (s: string) => void} {
  const [search, setSearch] = useState('');
  const [values, setValues] = useState(entries);
  useEffect(() => {
    if (search.length === 0) {
      if (values.length < entries.length) {
        setValues(entries);
      }
      return;
    }
    let regExp = new RegExp(search.toLocaleLowerCase());
    setValues(
      entries.filter(v => regExp.test(v.toString().toLocaleLowerCase())),
    );

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const setTheSearch = function (s: string) {
    setSearch(s);
  };
  return {values, setTheSearch};
}

export default useSearch;
