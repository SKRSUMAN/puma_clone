"use client"

import CustomToaster from '@/components/Toaster/CustomToaster';
import React, { createContext, useContext, useState } from 'react'


const ToastContext = createContext();

export const useToast = () => useContext(ToastContext)

const Toaster = ({ children }) => {

    const[alert , setAlert] = useState({ open: false, message: "", severity: "success" });

    const handleCloseSnackbar = () => {
        setAlert((prev) => ({ ...prev, open: false }));
      };

  return (
    <ToastContext.Provider value={{ alert, setAlert, handleCloseSnackbar }}>
    {children} {/* Use correct prop */}
    <CustomToaster alert={alert} handleCloseSnackbar={handleCloseSnackbar} />
  </ToastContext.Provider>
  )
}

export default Toaster