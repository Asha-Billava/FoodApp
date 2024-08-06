import React from 'react'
import './style.css'
import vector from '../../../Assets/vector.jpg'

function RecentOrder() {

   let Order=[
      {
         custphoto:vector,
      custName:"Wade Warren",
      OrderNo:"15478256",
      Amount:'$124.00',
      status:"Delivered"

   },
    {
      custphoto:vector,
      custName:"Jane Cooper",
      OrderNo:"19978256",
      Amount:'$365.00',
      status:"Delivered"

   },
    {
      custphoto:vector,
      custName:"Guy Hawkins",
      OrderNo:"15479956",
      Amount:'$45.00',
      status:"Cancelled"

   },
    {
      custphoto:vector,
      custName:"Kristin Watson",
      OrderNo:"23478256",
      Amount:'$64.00',
      status:"Cancelled"

   },
    {
      custphoto:vector,
      custName:"Cody fisher",
      OrderNo:"98478256",
      Amount:'$545.00',
      status:"Delivered"

   },
    {
      custphoto:vector,
      custName:"Savannah Nguyen",
      OrderNo:"15478256",
      Amount:'$124.00',
      status:"Delivered"

   },
     {
      custphoto:vector,
      custName:"John Watson",
      OrderNo:"23078256",
      Amount:'$69.00',
      status:"Cancelled"

   },
    {
      custphoto:vector,
      custName:"Jimmy fisher",
      OrderNo:"98499256",
      Amount:'$645.00',
      status:"Delivered"

   },
   {
      custphoto:vector,
      custName:"Savannah Nguyen",
      OrderNo:"15478256",
      Amount:'$124.00',
      status:"Delivered"

   },
     {
      custphoto:vector,
      custName:"John Watson",
      OrderNo:"23078256",
      Amount:'$69.00',
      status:"Cancelled"

   },
    {
      custphoto:vector,
      custName:"Kristin Watson",
      OrderNo:"23478256",
      Amount:'$64.00',
      status:"Cancelled"

   },
    {
      custphoto:vector,
      custName:"Cody fisher",
      OrderNo:"98478256",
      Amount:'$545.00',
      status:"Delivered"

   },
]
  return (
    <div className='RecentOrderDiv'>
        
        <table className='orderTab'>
            <tr>
            <th>Customer</th>
            <th>Order No.</th>
            <th>Amount</th>
            <th>Status</th>
            </tr>
            {Order.map((item,index)=>{return(
 <tr>
                 <td>
                    <div className='Userdiv'>
                    <img src={item.custphoto} className="userImg"></img>
                    <span>{item.custName}</span>
                    </div>
                 </td>
             <td>{item.OrderNo}</td>
             <td>{item.Amount}</td>
             <td>
                {item.status=="Delivered"?
                <span className='status' style={{background:'#145446', color:'#259a79'}}>Delivered</span>
                :
                <span className='status' style={{background:'#67313b', color:'#ac4b56'}}>Cancelled</span>
                }
             </td>
            </tr>
            )})}
           
           
        </table>
        </div>
  
  )
}

export default RecentOrder