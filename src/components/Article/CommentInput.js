import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { addComment } from '../../reducers/article';

/**
 * Add comment form
 *
 * @example
 * <CommentInput />
 */
function CommentInput() {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.common.currentUser);
  const { slug } = useParams();
  const [comment, setComment] = useState('');

  /**
   * @type {React.ChangeEventHandler<HTMLTextAreaElement>}
   */
  const changeComment = event => {
    setComment(event.target.value);
  };

  /**
   * @type {React.FormEventHandler<HTMLFormElement>}
   */
  const saveComment = event => {
    event.preventDefault();
    dispatch(addComment({ slug, comment: comment }));
    setComment('');
  };

  return (
    <form className="card comment-form" onSubmit={saveComment}>
      <div className="card-block">
        <textarea
          className="form-control"
          placeholder="Write a comment..."
          rows="3"
          value={comment}
          onChange={changeComment}
        />
      </div>

      <div className="card-footer">
        <img
          className="comment-author-img"
          alt={currentUser.username}
          src={
            currentUser?.image ??
            'https://static.productionready.io/images/smiley-cyrus.jpg'
          }
        />
        <button className="btn btn-sm btn-primary" type="submit">
          Post Comment
        </button>
      </div>
    </form>
  );
}

export default CommentInput;
