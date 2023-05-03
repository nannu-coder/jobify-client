import { useEffect } from "react";
import useAppProvider from "../Hooks/useAppProvider";
import Wrapper from "../assets/Wrappers/JobsContainer";
import Job from "./Job";
import Loading from "./Loading";

const JobsContainer = () => {
  const { getJobs, jobs, isLoading, page, totalJobs } = useAppProvider();

  useEffect(() => {
    getJobs();
  }, []);

  if (isLoading) {
    return <Loading center />;
  }

  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>
        {totalJobs} job{jobs.length > 1 && "s"} found
      </h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
    </Wrapper>
  );
};

export default JobsContainer;
