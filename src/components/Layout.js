import React from "react";

export default function Layout({ children }) {
  return (
    <div>
      <div>App Bar</div>
      <div>{children}</div>
      <div>Footer</div>
    </div>
  );
}
