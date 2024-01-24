import Duties from "./Duties";

const JobInfo = ({ jobs, index }) => {
  const { company, dates, duties, title } = jobs[index];
  return (
    <article className="job-info">
      <h3>{title}</h3>
      <span className="job-company">{company}</span>
      <p className="job-date">{dates}</p>
      <Duties duties={duties} />
    </article>
  );
};
export default JobInfo;
