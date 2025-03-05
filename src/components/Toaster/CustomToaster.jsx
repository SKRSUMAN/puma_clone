import { Alert, Snackbar } from "@mui/material";
import React from "react";

const CustomToaster = ({ handleCloseSnackbar, alert }) => {
  return (
    <div className=''>
        {/* Snackbar for Success or Error Messages */}
      <Snackbar
        open={alert.open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{ top: { xs: "80px", sm: "100px" } }} // Adjust for navbar height
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={alert.severity}
          sx={{ width: "100%" }}>
          {alert.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default CustomToaster;
