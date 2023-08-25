import React, {useEffect, useRef} from "react";
import Chart from "chart.js";

interface IGraphic{
    data: number[];
    labels: string[];
}

const Graphic: React.FC<IGraphic> = ({ data, labels }) => {
    const classes = useStyles();
    const chartRef = useRef<HTMLCanvasElement | null>(null);
  
    useEffect(() => {
      if (chartRef.current) {
        const ctx = chartRef.current.getContext('2d');
        if (ctx) {
          new Chart(ctx, {
            type: 'bar',
            data: {
              labels,
              datasets: [{
                label: '# of Votes',
                data,
                borderWidth: 1,
              }],
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            },
          });
        }
      }
    }, [data, labels]);
  
    return (
      <div className={classes.chartContainer}>
        <canvas ref={chartRef} />
      </div>
    );
  };
  
  export default Graphic;

function useStyles() {
    throw new Error("Function not implemented.");
}
