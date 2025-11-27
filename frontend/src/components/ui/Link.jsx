import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

export const Link = ({ href, children, className = '', onClick }) => {
  return (
    <RouterLink to={href} className={className} onClick={onClick}>
      {children}
    </RouterLink>
  );
};