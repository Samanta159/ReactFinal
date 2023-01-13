import React from "react";

const Message = (props) => {
  return (
    <div
      className="toast"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      data-delay={5000}
      style={{ position: "absolute", top: "1rem", right: "1rem" }}
    >
      <div className="toast-header">
        <button
          type="button"
          className="ml-2 mb-1 close"
          data-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
      <div className="toast-body">{props.content}</div>
    </div>
  );
};
export default Message;
