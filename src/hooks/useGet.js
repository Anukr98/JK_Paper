import {useCallback, useContext, useEffect, useState} from 'react';
import { UserContext } from '../contexts/UserContext'

const baseurl = 'https://zxsfa.herokuapp.com';

export const useGet = (url, options = {paginate: false, manual: false}) => {
  const {
    authPayload: {
      token,
      user: {id},
    },
  } = useContext(UserContext);
  const [state, setState] = useState({
    message: '',
    success: false,
    data: null,
    error: null,
    loading: true,
  });

  const fetchData = useCallback(
    (offset = 0, limit = 4) => {
      setState({
        message: '',
        success: false,
        data: null,
        loading: true,
        error: null,
      });
      const address = options.paginate
        ? `${baseurl}${url}&offset=${offset}&limit=${limit}`
        : `${baseurl}${url}`;
      console.log(address);
      fetch(address, {
        headers: {
          agentid: id,
          Authorization: `Bearer ${token}`,
        },
      })
        .then((x) => x.json())
        .then((y) => {
          setState({
            message: y.message,
            success: y.success,
            data: y.data,
            error: null,
            loading: false,
          });
        })
        .catch((err) =>
          setState({
            message: '',
            success: false,
            data: null,
            error: err,
            loading: false,
          }),
        );
    },
    [url, token, id, options.paginate],
  );

  useEffect(() => {
    if (!options.manual) {
      fetchData();
    }
  }, [fetchData, options.manual]);

  return [state, fetchData];
};
