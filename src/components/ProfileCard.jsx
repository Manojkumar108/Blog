import React from "react";

const ProfileCard = ({ profile, onSummaryClick }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "15px",
        display: "flex",
        alignItems: "center",
        gap: "15px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <img
        src={profile.photo || "https://via.placeholder.com/50"}
        alt={profile.name}
        style={{ width: "50px", height: "50px", borderRadius: "50%" }}
      />
      <div style={{ flexGrow: 1 }}>
        <h3 style={{ margin: "0 0 5px 0" }}>{profile.name}</h3>
        <p style={{ margin: "0", color: "#555" }}>{profile.description}</p>
      </div>
      <button
        onClick={() => onSummaryClick(profile)}
        style={{
          backgroundColor: "#007BFF",
          color: "#fff",
          padding: "8px 12px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Summary
      </button>
    </div>
  );
};

export default ProfileCard;
