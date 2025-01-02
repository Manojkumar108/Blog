import React from "react";
import { useParams } from "react-router-dom";

const ProfileDetails = ({ profiles }) => {
  const { id } = useParams();
  const profile = profiles.find((p) => p.id === parseInt(id, 10));

  if (!profile) {
    return <div>Profile not found!</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>{profile.name}</h2>
      <img
        src={profile.photo || "https://via.placeholder.com/150"}
        alt={profile.name}
        style={{ width: "150px", height: "150px", borderRadius: "8px" }}
      />
      <p>{profile.description}</p>
      <p><strong>Address:</strong> {profile.address}</p>
      <p><strong>Contact:</strong> {profile.contact}</p>
      <p><strong>Interests:</strong> {profile.interests.join(", ")}</p>
    </div>
  );
};

export default ProfileDetails;
