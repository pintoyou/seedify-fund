import React from 'react'

const UpdateTier = () => {
    return (
        <div>
            <div className="right-panel-main">
          <h2>Update Tier Value</h2>
          <div className="rightpanel-form">
            <div className="form-inner">
              <div className="form-group">
                <label>Value of Tier One</label>
                <input type="email" className="input-form" placeholder="Enter Value" />
              </div>
            </div>
             <div className="form-inner">
              <div className="form-group">
                <label>Value of Tier Two</label>
                <input type="email" className="input-form" placeholder="Enter Value" />
              </div>
            </div>
             <div className="form-inner">
               <div className="form-group">
                <label>Value of Tier Three</label>
                <input type="email" className="input-form" placeholder="Enter Value" />
              </div>
            </div>            
              <div className="form-group">
                <button type="button" className="btn">SUBMIT</button>
              </div>
          </div>
        </div>
        </div>
    )
}

export default UpdateTier
