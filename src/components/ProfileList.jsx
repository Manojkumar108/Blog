import React from "react";
import ProfileCard from "./ProfileCard";

const ProfileList = ({ profiles, onSummaryClick }) => {
  if (!profiles || profiles.length === 0) {
    return <div>No profiles available</div>;
  }

  return (
    <div style={{ padding: "20px", overflowY: "auto", height: "100vh" }}>
      <h2>Profiles</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        {profiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            profile={profile}
            onSummaryClick={onSummaryClick}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfileList;
