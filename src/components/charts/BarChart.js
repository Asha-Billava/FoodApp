import { Padding } from "@mui/icons-material";
import "./style.css"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from "chart.js";
import { color } from "chart.js/helpers";
import { Bar } from "react-chartjs-2";

ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend
);

// ChartJS.overrides.bar.responsive = true;

const BarChart = (props) => {
    const data = {
        labels: ['5', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27'],
        datasets: [
            {
                label: 'k',
                data: [
                    [4, 4000],
                    [4, 12000],
                    [4, 3000],
                    [4, 5000],
                    [4, 5000],
                    [4, 6000],
                    [4, 7000],
                    [4, 15000],
                    [4, 9000],
                    [4, 4000],
                    [4, 6000]
                ],
                backgroundColor: '#7394ff',
                borderColor: '#7394ff',
                borderWidth: 0,
                borderSkipped: false,
                borderRadius: 50,
            },
            {
                label: 'k',
                data: [
                    [4, 8200],
                    [4, 6000],
                    [4, 3500],
                    [4, 7000],
                    [4, 5000],
                    [4, 15000],
                    [4, 4000],
                    [4, 2000],
                    [4, 6000],
                    [4, 3000],
                    [4, 7000]
                ],
                backgroundColor: '#7394ff',
                borderColor: '#7394ff',
                borderWidth: 0,
                borderSkipped: false,
                borderRadius: 50,
            },
            {
                label: 'k',
                data: [
                    [4, 2000],
                    [4, 12000],
                    [4, 8000],
                    [4, 5000],
                    [4, 4000],
                    [4, 6000],
                    [4, 3000],
                    [4, 4500],
                    [4, 15000],
                    [4, 2000],
                    [4, 5000]
                ],
                backgroundColor: '#7394ff',
                borderColor: '#7394ff',
                borderWidth: 0,
                borderSkipped: false,
                borderRadius: 50,
            },
        ],
    };

    const options = {
        responsive:true,
        cutout: '100%',
        barPercentage: 0.7,
        categoryPercentage: 0.9,
        scales: {
            x: {
                ticks: {
                    autoSkip: false,
                },
                grid: {
                    display: false, // Hide grid lines if needed
                },
                barThickness:50

            },
            y: {
                beginAtZero: true,
                ticks: {
                    
                    
                    callback: function (value) {
                        if (value === 0) {
                            return value; // Return value as is if it's 0
                        }
                        return value / 1000 + 'k';
                    }
                },
                grid: {
                    display: true, // Hide grid lines if needed
                    color:"white"
                },
               
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: false,
            },
        },
        maintainAspectRatio:false
    };

    

    return (
        <div className="barDiv" style={{
            height: '210px', width: 'auto',
        }}>
            <Bar data={data} options={options} />
            </div>
        
    );
};


export default BarChart
