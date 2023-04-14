import React, { useState } from "react";

const AuthLayout = (props: any) => {
  return (
    <div className="auth-layout-wrapper">
      <div className="auth-content">{props.children}</div>
    </div>
  );
};

export default AuthLayout;
