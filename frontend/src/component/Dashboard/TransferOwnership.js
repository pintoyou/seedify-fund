import React from 'react'

const TransferOwnership = () => {
    return (
        <div>
            <div className="right-panel-main">
          <h2>Transfer Ownership</h2>
          <div className="rightpanel-form">
            <div className="form-inner">
              <div className="form-group">
                <label>New Owner Address</label>
                <input type="email" className="input-form" placeholder="Enter Owner Address" />
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

export default TransferOwnership
