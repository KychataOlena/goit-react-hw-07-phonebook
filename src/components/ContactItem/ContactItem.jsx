import React from 'react';
import PropTypes from 'prop-types';
import { TextItem, ButtonItem } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const ContactItem = ({ id, contact, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <TextItem>
        {contact}: {number}
      </TextItem>

      <ButtonItem onClick={handleDelete}>Deleted</ButtonItem>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  contact: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
