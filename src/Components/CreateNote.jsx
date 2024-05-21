const CreateNote = ({ inputText, setInputText, saveHandler }) => {
  const charLimit = 400 - inputText.length;

  return (
    <div className='note'>
      <textarea
        cols={10}
        rows={5}
        placeholder='Write your note here...'
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        maxLength={400}
      />
      <div className='note_footer'>
        <span className='label'>{charLimit} Left</span>
        <button className='note_save' onClick={saveHandler}>Save</button>
      </div>
    </div>
  );
}

export default CreateNote;
