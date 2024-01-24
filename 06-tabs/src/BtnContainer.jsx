const BtnContainer = ({ jobs, index, setIndex }) => {
  return (
    <div className="btn-container">
      {jobs.map((item, i) => {
        return (
          <button
            key={item.id}
            onClick={() => setIndex(i)}
            className={i === index ? "job-btn active-btn" : "job-btn"}
          >
            {item.company}
          </button>
        );
      })}
    </div>
  );
};
export default BtnContainer;
