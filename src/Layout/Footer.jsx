import React from "react";

export const Footer = () => {
  let dateNow = new Date();
  return (
    <footer className="bg-secondary-subtle">
      <div className="container py-3">
        <p className="m-0">&copy; {dateNow.getFullYear()} Mo A. Samie</p>
      </div>
    </footer>
  );
};
