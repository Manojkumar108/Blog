import React, { useState } from "react";
import axios from "axios";

const AdminPanel = () => {
  const [profiles, setProfiles] = useState([]);
  const [form, setForm] = useState({ name: "", photo: "", description: "", lat: "", lng: "" });

  const fetchProfiles = async () => {
    const response = await axios.get("/api/profiles");
    setProfiles(response.data);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/profiles", form);
    setForm({ name: "", photo: "", description: "", lat: "", lng: "" });
    fetchProfiles();
  };

  const handleDelete = async (id) => {
    await axios.delete(`/api/profiles/${id}`);
    fetchProfiles();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Admin Panel</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="photo"
          placeholder="Photo URL"
          value={form.photo}
          onChange={handleInputChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="lat"
          placeholder="Latitude"
          value={form.lat}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="lng"
          placeholder="Longitude"
          value={form.lng}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Add Profile</button>
      </form>

      <ul>
        {profiles.map((profile) => (
          <li key={profile.id}>
            {profile.name}{" "}
            <button onClick={() => handleDelete(profile.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
