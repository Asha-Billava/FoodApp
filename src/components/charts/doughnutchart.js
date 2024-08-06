import { Chart as ChartJS, ArcElement, Tooltip, Legend, elements } from "chart.js";
import React from "react";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const Doughnuts=()=>{
    const data = {
        labels: ['Completed'],
        datasets: [
            {
                label: 'Completion Rate',
                data: [70,30],
                backgroundColor: [
                  
                    '#7393ff',
                    '#29326a',
                                    
                ],
                borderColor: [ 
                    '#7393ff',
                    '#29326a',
                    
                ],
                borderWidth: 12,
                borderRadius: [30,0],
                borderJoinStyle: "round"
                
                


            },
           
        ],
    };

    const options = {
        responsive: true,
        cutout: '100%', // This makes the doughnut ring thicker
       
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: false,
            },
        },

      
    };


    return  (
        <>
            <div style={{ position: 'relative', width: '100px', height: '100px', 
             }}>

                <Doughnut data={data} options={options} />
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        textAlign: 'center',
                    }}
                >
                    <h5 style={{ margin: 0 }}>70%</h5>
                    <p style={{ margin: 0, fontSize: '9px', color: '#aaa'}}>Coal Completed</p>
                </div>


            </div>

        </>
    )

}
export default Doughnuts