import './Form.css'

const Form = ({ onSubmit, mode}) => {
    
  return (
    <div className="container">
      <form className="form" onSubmit={onSubmit}>
        <p>Welcome</p>
        <p>Please {mode}!</p>

        <div className="control">
          <label htmlFor="username">Username:</label>
          <input name="username" id="username" type="text" />
        </div>

        <div className="control">
          <label htmlFor="password">Password:</label>
          <input name="password" id="password" type="password" />
        </div>

        <div className="buttons">
          <button className="button" type="submit">
            {mode}
          </button>
        </div>
        
      </form>
    </div>
  );
};
export default Form;
