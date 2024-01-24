const BtnContainer = ({ jobs, index, setIndex }) => {
  return (
    <div className="btn-container">
      {jobs.map((item, ind) => {
        return (
          <button
            key={item.id}
            onClick={() => setIndex(ind)}
            className={ind === index ? "job-btn active-btn" : "job-btn"}
          >
            {item.company}
          </button>
        );
      })}
    </div>
  );
};
export default BtnContainer;
