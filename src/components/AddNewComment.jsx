import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ThreadProfileInfo from './ThreadProfileInfo';
import { userShape } from '../utils';

function AddNewComment({ authUser, addComment, threadId }) {
  const [content, setContent] = useState('');

  return (
    <div className="mt-5 border-t-2 pt-4">
      <ThreadProfileInfo user={authUser} />
      <div
        className="outline-none p-3 resize-none border-1 rounded border border-slate-600 my-5 overflow-y-scroll"
        name="body"
        rows="10"
        contentEditable
        value={content}
        onInput={(e) => setContent(e.target.innerText)}
      />
      <button
        type="submit"
        className="bg-green-600 text-slate-50 rounded-full px-3 py-1 font-bold"
        onClick={() => addComment(threadId, content)}
      >
        Balas
      </button>
    </div>
  );
}

AddNewComment.propTypes = {
  authUser: PropTypes.shape(userShape).isRequired,
  addComment: PropTypes.func.isRequired,
  threadId: PropTypes.string.isRequired,
};

export default AddNewComment;
