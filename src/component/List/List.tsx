import React, { FC } from 'react';
import PropTypes from 'prop-types';

interface ListProps {
  match: any;
}

const List = (props: ListProps) => {
  const { match } = props;
  return <div>{JSON.stringify(match)}</div>;
};

List.propTypes = {
  match: PropTypes.shape({}),
};

List.defaultProps = {
  match: {},
};

export default List;
