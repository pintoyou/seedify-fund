import React from "react";

const AddUserInWhiteList = () => {
  return (
    <div>
      <div className="right-panel-main">
        <h2>Add User In White List</h2>
        <div className="rightpanel-form">
        <div className="form-inner">
          <div className="form-group">
              <label>Add White LIst One</label>
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
                  SUBMIT
                </button>
              </div>
            </div>
          </div>

          <div className="form-inner">
          <div className="form-group">
              <label>Add White LIst Two</label>
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
                  SUBMIT
                </button>
              </div>
            </div>
          </div>

          <div className="form-inner">
          <div className="form-group">
              <label>Add White LIst Three</label>
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
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUserInWhiteList;
