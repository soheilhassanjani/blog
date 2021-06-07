import React from 'react';
import ConditionalRoute from './ConditionalRoute';
const GuestRoute = (props) => {
  const predicate = localStorage.getItem('AUTH_TOKEN');
  return <ConditionalRoute predicate={!Boolean(predicate)} {...props} />;
};
export default GuestRoute;
