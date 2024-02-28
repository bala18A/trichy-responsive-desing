import React from 'react'
import "./Footer.css"
const Footer = () => {
    return (
        <div className='footer'>
            <div className='text-center'>
                <h2 className='pa-1'>Simple, transparent pricing</h2>
                <section className='pa-2'>No credit required, cancle anytime</section>
                <section className='margintop'>
                    <span>Monthly</span>
                    <label style={{ margin: "10px" }} className='switch'>
                        <input type='checkbox' checked />
                        <span className='slider '></span></label>
                    <span  >Annual</span>
                    <span className='save27' style={{ margin: "10px" }}>Save 27%</span>
                </section>

                <div className='out'>
                    <div className='in'>
                      <div style={{color:"black",position:"absolute",top:"18px",left:"20px"}}>Writer</div>
                    </div>
                    <span  className='sp'>🌟Recommended✨</span>
                   
                </div>
            </div>
        </div>
    )
}

export default Footer