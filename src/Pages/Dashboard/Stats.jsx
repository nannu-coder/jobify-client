import { useEffect } from "react";
import Loading from "../../Components/Loading";
import useAppProvider from "../../Hooks/useAppProvider";
import StatsContainer from "../../Components/StatsContainer";
import ChartsContainer from "../../Components/ChartsContainer";

const Stats = () => {
  const { showStats, isLoading, monthlyApplications } = useAppProvider();

  useEffect(() => {
    showStats();
  }, []);

  if (isLoading) {
    return <Loading center />;
  }

  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  );
};

export default Stats;
