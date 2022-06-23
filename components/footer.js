import React from "react";

export default function Footer() {
  return (
    <div className="container">
      <footer className="my-5 pt-5 text-muted text-center text-small">
        <p className="mb-1">© 2022 Garden Party</p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="#">Privacy</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Terms</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Support</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
