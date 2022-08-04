export const Contact = () => {
  return (
    <div>
      <h1>Contact us</h1>

      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter name"
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
          />
          <label htmlFor="message">Message</label>
          <input
            type="text"
            className="form-control"
            id="message"
            placeholder="Enter message"
          />
          <button type="submit" className="btn btn-primary mt-3">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
