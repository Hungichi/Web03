import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import background from './pic/background.png'
import './help.css'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon
  }
  from 'mdb-react-ui-kit';


function Help(){
    return (
        <div style={{backgroundColor:"black", paddingBottom:"20px" ,display:"flex", flexDirection:"column",justifyContent:"center"}} >
            <div style={{marginLeft:"8%"}}>
                <div style={{backgroundRepeat:"none",width:"92%", height:"600px" ,backgroundImage:`url(${background})`,display:"flex", flexDirection:"column",justifyContent:"center"}}>
                

<MDBRow className='d-flex justify-content-center align-items-center h-100'>
  

    <div className=' form ' style={{borderRadius: '1rem', maxWidth: '500px'}}>
        <div>
      <div className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

        <h2 className="fw-bold mb-2 ">what do you need ?</h2>
        <p className="text-white-50 mb-5">Complaint through FPSstore@gmail.com</p>

        <input style={{marginTop:"10px", borderRadius:"13px", height:"40px" , width:"90%", border:"none" }} className='mt-2' type="text" placeholder="Enter your email here"></input>

        
        <div style={{ marginTop:"20px",display:"flex", width:"92%" }} >
        <p className="text-white-50 mb-5">Thank you for the information, we will reply as soon as possible</p>
        <div className="text-boxhelp">
                  <a href="#" className="btn2 btn2-white btn2-animate">submit</a>
               </div>

        </div>

      </div>
      </div>
    </div>

  
</MDBRow>




                    {/* <label style={{  width:"",isplay:"flex", flexDirection:"column",justifyContent:"center"}} >
                        <h1>what do you need ?</h1>
                        <p>Complaint through FPSstore@gmail.com</p>
                        <input></input>
                        <div></div>
                    </label> */}
                </div>                
            </div>            

            
        </div>

    );
}

export default Help;