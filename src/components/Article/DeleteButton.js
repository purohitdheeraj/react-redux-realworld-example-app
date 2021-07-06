import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { deleteComment } from '../../reducers/article';

/**
 * Delete a comment button
 *
 * @param {Object}  props
 * @param {String}  props.commentId
 * @example
 * <DeleteButton commentId="1" />
 */
function DeleteButton({ commentId }) {
  const dispatch = useDispatch();
  const { slug } = useParams();

  const removeArticle = () => {
    dispatch(deleteComment({ slug, commentId }));
  };

  return (
    <span className="mod-options">
      <i className="ion-trash-a" onClick={removeArticle} />
    </span>
  );
}

export default DeleteButton;
