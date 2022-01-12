const NameRequest = (props) => {
  return (
    <div className="name-request-div">
      <p>Enter your full name:</p>
      <input
        id="name-request-input"
        type="text"
        placeholder="Your last name first"
      />
    </div>
  );
};

export default NameRequest;
