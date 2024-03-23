import React, { useState } from 'react';
import { LuX } from 'react-icons/lu';
import PropTypes from 'prop-types';
import FormInput from './FormInput';
import useInput from '../hooks/useInput';

function AddThread({ addThread, toggleAddComponent }) {
  const [title, onTitleChange] = useInput('');
  const [body, setBody] = useState('');
  const [category, onCategoryChange] = useInput('');

  function onAddThreadClick(e) {
    e.preventDefault();
    addThread({
      title,
      body,
      category,
    });
  }

  const onInputBodyHandler = (e) => {
    setBody(e.target.innerText);
  };

  return (
    <div className="fixed h-full w-full flex items-center justify-center bg-opacity-50 bg-gray-700">
      <div className="w-[700px] bg-white m-auto p-8 rounded">
        <div>
          <LuX onClick={toggleAddComponent} />
        </div>

        <h1 className="my-3 border-b-2 border-slate-500">
          Buat Thread Baru
        </h1>

        <div>
          <form onSubmit={onAddThreadClick}>
            <FormInput
              label="Judul Thread"
              isFull
              value={title}
              onChange={onTitleChange}
            />

            <span>Uraikan Thread</span>
            <div
              className="h-24 outline-none p-3 resize-none border-1 rounded border border-slate-600 mb-5 overflow-y-scroll"
              name="body"
              rows="10"
              contentEditable
              value={body}
              onInput={onInputBodyHandler}
            />
            <FormInput
              label="Kata Kunci"
              isFull
              value={category}
              onChange={onCategoryChange}
            />
            <button
              type="submit"
              className="bg-green-600 text-slate-50 rounded-full px-3 py-1 font-bold"
            >
              Buat Thread
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

AddThread.propTypes = {
  addThread: PropTypes.func,
  toggleAddComponent: PropTypes.func,
};

AddThread.defaultProps = {
  addThread: PropTypes.null,
  toggleAddComponent: PropTypes.null,
};

export default AddThread;
