"use client"
import React, { useEffect, useState } from 'react';
import "../app/globals.css";

const Toastmessage = () => {
  const [showMessage, setShowMessage] = useState(true);
  const [msg, setMsg] = useState("Login successfully.");

  useEffect(() => {
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);

  }, []);

  return (
    <div className={`toast toast-top toast-end ${showMessage ? 'visible' : 'hidden'}`}>
      <div className={`alert alert-success ${showMessage ? 'visible' : 'hidden'}`}>
        <span>{msg}</span>
      </div>
    </div>
  );
}

export default Toastmessage;
