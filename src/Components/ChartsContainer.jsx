import { useState } from "react";
import Wrapper from "../assets/Wrappers/ChartsContainer";
import BarCharts from "./BarCharts";
import AreaCharts from "./AreaCharts";
import useAppProvider from "../Hooks/useAppProvider";

const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(true);
  const { monthlyApplications: data } = useAppProvider();
  return (
    <Wrapper>
      <h4>Monthly Applications</h4>

      <button type="button" onClick={() => setBarChart(!barChart)}>
        {barChart ? "AreaChart" : "BarChart"}
      </button>
      {barChart ? <BarCharts data={data} /> : <AreaCharts data={data} />}
    </Wrapper>
  );
};

export default ChartsContainer;
