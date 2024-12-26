import React from "react";

export const UnderMaintenance = () => {
  // Inline styles for the Under Maintenance page
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f8f9fa",
      color: "#343a40",
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
    },
    heading: {
      fontSize: "3rem",
      marginBottom: "1rem",
    },
    message: {
      fontSize: "1.25rem",
      marginBottom: "0.5rem",
    },
    signature: {
      fontSize: "1rem",
      color: "#6c757d",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>We'll Be Back Soon!</h1>
      <p style={styles.message}>
        Our website is currently undergoing scheduled maintenance. We appreciate
        your patience.
      </p>
      <p style={styles.signature}>- The Team</p>
    </div>
  );
};
