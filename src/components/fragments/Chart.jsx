import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ["درخواست شده", "در حال انجام", "انجام شده"],
    datasets: [
        {
            label: "درخواست",
            data: [12, 19, 3],
            backgroundColor: [
                "rgba(48, 12, 52, 0.7)",
                "rgba(209, 170, 5, 0.7)",
                "rgba(154, 52, 18, 0.7)",
            ],
        },
    ],
};

const Chart = () => {
    return <Pie data={data} />;
};

export default Chart;
