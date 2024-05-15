import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "top",
        },
        title: {
            display: true,
            text: "Chart.js Line Chart",
        },
    },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
    labels,
    datasets: [
        {
            fill: true,
            label: "Dataset 2",
            data: [10, 20, 30, 50, 90, 110],
            borderColor: "rgb(53, 162, 235)",
            backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
        {
            fill: true,
            label: "Dataset 2",
            data: [10, 120, 130, 250, 190, 110,80],
            borderColor: "rgb(53, 162, 235)",
            backgroundColor: "rgba(208, 208, 05, 0.5)",
        },
    ],
};

const LineChart = () => {
    return <Line options={options} data={data} />;
};

export default LineChart;
