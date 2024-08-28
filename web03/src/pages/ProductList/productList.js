import React from 'react';
import './productList.css'
import Profile from '../../Auth/account/Profile';
const productList = () => {
  return (
    <div className='admin' style={{ gridTemplateColumns:"20% 80%"}}>
        <div className='row-grip' style={{display:"grid", justifyContent:"space-between",gridTemplateColumns:"20% 80%"}}>
        <div className='admin-sidebar' style={{height:"100vh", background:"#365d9c",}}>
            <div className='admin-sidebar-top' style={{textAlign:"center", color:"#fff"}}>
                <h1 className='h1-admin' style={{fontSize:"40px"}}>FPS Store</h1>
            </div>
            <hr style={{color:"white",}}/>
            <div className='admin-slibar-content' style={{padding:"30px 0 0 30px", color:"whitesmoke"}}>
            <ul className='ul-admin' style={{textDecoration:"none", padding:"10px", transition:"all 0.3s ease"}}>
                <li className='li-admin' style={{listStyle:"none", marginRight:"6px", padding:"10px",transition:"all 0.3s ease"}} >
                <a href="#" style={{textDecoration:"none", color:"unset", fontSize:"16px", fontWeight:"400"}}>Order List</a>
                </li>
                <li className='li-admin' style={{listStyle:"none", marginRight:"6px", padding:"10px",transition:"all 0.3s ease"}} >
                <a href={Profile} style={{textDecoration:"none", color:"unset", fontSize:"16px", fontWeight:"400"}}>Profile</a>
                    </li>
            </ul>
            </div>
        </div>
        <div className='admin-content-main' style={{background:"#F8F8F8"}}>
            <div className='admin-content-main-title'style={{display:"flex", justifyContent:"space-between",margin:"50px"}}>
                <h1 className='h1-admin-content-main'>Product List</h1>
            </div>
            <div className='admin-content-main-content' style={{background:"white",boxShadow: "rgba(0,0,0,0.1)", padding:"10px"}}>
                <div className='admin-content-main-content-orderList'>
                    <table className="table-orderList" style={{width:"100%", padding:"12px 0", borderCollapse:"collapse", textAlign:"center", }}>
                        <thead className='thead-ordList'>
                            <tr className='tr-ordList'>
                                <th className='th-ordList'style={{backgroundColor:"#000", color:"white",fontSize:"20px", padding:"6px 0"}}>STT</th>
                                <th className='th-ordList'style={{backgroundColor:"#000", color:"white",fontSize:"20px",padding:"6px 0"}}>Ngày</th>
                                <th className='th-ordList'style={{backgroundColor:"#000", color:"white",fontSize:"20px",padding:"6px 0"}}>Tình trạng đơn hàng</th>
                                <th className='th-ordList'style={{backgroundColor:"#000", color:"white",fontSize:"20px",padding:"6px 0"}}>Tình trạng Thanh toán</th>
                                <th className='th-ordList'style={{backgroundColor:"#000", color:"white",fontSize:"20px",padding:"6px 0"}}>Khách hàng</th>
                                <th className='th-ordList'style={{backgroundColor:"#000", color:"white",fontSize:"20px",padding:"6px 0"}}>Tổng cộng</th>
                                <th className='th-ordList'style={{backgroundColor:"#000", color:"white",fontSize:"20px",padding:"6px 0",textAlign:"right"}}>     Action   </th>
                                <th className='th-ordList'style={{backgroundColor:"#000", color:"white",fontSize:"20px",padding:"6px 0"}}></th>
                            </tr>
                        </thead>
                        <tbody className="tbody-ordList">
                            <tr className='tr-ordList'>
                                <td className='tr-ordList' style={{fontSize:"20px"}}>1</td>
                                <td className='tr-ordList'style={{fontSize:"20px"}}>25/08/2024</td>
                                <td className='confirm-ordList'style={{fontSize:"20px", color:"green", fontWeight:"bold"}}>Hoàn thành</td>
                                <td className='confirm-ordList'style={{fontSize:"20px", color:"green", fontWeight:"bold"}}>Đã thanh toán</td>
                                <td className='tr-ordList'style={{fontSize:"20px"}}>Name</td>
                                <td className='tr-ordList'style={{fontSize:"20px"}}>9.125.000đ</td>
                                <td className='tr-ordList'style={{}}>
                                    <a href='' className='delete' style={{background:"red",color:"white", borderRadius:"5px", padding:"3px",textDecoration:"none"}}>Delete</a>
                                </td>
                                <td className='tr-ordList'style={{}}>
                                    <a href='' className='Edit'style={{background:"green",color:"white", borderRadius:"5px", padding:"3px", listStyle:"none",textDecoration:"none"}}>Edit</a>
                                </td>
                            </tr>
                            <tr className='tr-ordList'>
                                <td className='tr-ordList' style={{fontSize:"20px"}}>2</td>
                                <td className='tr-ordList'style={{fontSize:"20px"}}>25/08/2024</td>
                                <td className='not-confirm-ordList'style={{fontSize:"20px", color:"orange", fontWeight:"bold"}}>Chưa Hoàn thành</td>
                                <td className='not-confirm-ordList'style={{fontSize:"20px", color:"orange", fontWeight:"bold"}}>Chưa thanh toán</td>
                                <td className='tr-ordList'style={{fontSize:"20px"}}>Name</td>
                                <td className='tr-ordList'style={{fontSize:"20px"}}>9.125.000đ</td>
                                <td className='tr-ordList'style={{}}>
                                    <a href='' className='delete' style={{background:"red",color:"white", borderRadius:"5px", padding:"3px",textDecoration:"none"}}>Delete</a>
                                </td>
                                <td className='tr-ordList'style={{}}>
                                    <a href='' className='Edit'style={{background:"green",color:"white", borderRadius:"5px", padding:"3px", listStyle:"none",textDecoration:"none"}}>Edit</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
       </div>
    </div>
  )
}

export default productList
