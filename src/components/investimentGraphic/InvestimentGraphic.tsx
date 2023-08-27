import React from "react";
import { Pie } from "react-chartjs-2";
import { StyledChartContainer } from "./style";
import { Chart, ArcElement } from "chart.js";

Chart.register(ArcElement);

interface PieChartProps {
  dataFixa: number;
  dataVariavel: number;
}

const PieChart: React.FC<PieChartProps> = ({ dataFixa, dataVariavel }) => {
  const chartData = {
    labels: ["Renda Fixa", "Renda Variável"],
    datasets: [
      {
        data: [dataFixa, dataVariavel],
        backgroundColor: ["#819463", "#393838"],
      },
    ],
  };

  return (
    <StyledChartContainer>
        <Pie
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              title: {
                display: true,
              },
            },
          }}
        />
      <div className="divGeralLegenda">
        <div className="divVariavel">
          <div className="variavel"></div>
          <p>Renda variável</p> 
        </div>
        <div className="divFixa">
          <div className="fixa"></div>
          <p>Renda fixa</p>
        </div>
      </div>
    </StyledChartContainer>
  );
};

export default PieChart;
