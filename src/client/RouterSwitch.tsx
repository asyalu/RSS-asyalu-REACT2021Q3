import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, useLocation } from 'react-router';

export const RouterSwitch = ({ children }): any => {
  const dispatch = useDispatch();
  const location = useLocation();

  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(
    () =>
      fetch(`/details/?url=${encodeURIComponent(location.pathname)}`)
        .then((result) => result.json())
        .then((data) => {
          dispatch({
            type: 'UPDATE_STORE',
            payload: data,
          });
        }),
    [location]
  );

  useEffect(() => {
    setIsLoading(true);

    fetchData()
      .catch((err) => {
        console.log(err);
      })
      .then(() => {
        setIsLoading(false);
      });
  }, [fetchData]);

  if (!__isBrowser__) {
    return <Switch>{children}</Switch>;
  }

  if (isLoading) {
    return <section className="section">Loading...</section>;
  }
  return <Switch>{children}</Switch>;
};
