import React from "react";

const ErrorMessage = ({ error }) => (
  <div data-testid="error">An error occured in the app: {error.toString()}</div>
);

export default ErrorMessage;
