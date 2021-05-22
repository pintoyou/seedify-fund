import React from "react";

const ReadWhiteList = () => {
  return (
    <div>
      <div className="right-panel-main">
        <h2>Read White List</h2>
        <div className="rightpanel-form">
          <div className="form-inner">
            <div className="form-group">
              <label>Get White LIst One</label>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <input
                  type="email"
                  className="input-form"
                  placeholder="Enter white list"
                />
                <button type="button" className="bttn">
                  QUERY
                </button>
              </div>
            </div>
          </div>

          <div className="form-inner">
            <div className="form-group">
              <label>Get White LIst Two</label>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <input
                  type="email"
                  className="input-form"
                  placeholder="Enter white list"
                />
                <button type="button" className="bttn">
                  QUERY
                </button>
              </div>
            </div>
          </div>

          <div className="form-inner">
            <div className="form-group">
              <label>Get White LIst Three</label>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <input
                  type="email"
                  className="input-form"
                  placeholder="Enter white list"
                />
                <button type="button" className="bttn">
                  QUERY
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadWhiteList;
