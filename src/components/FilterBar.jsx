import React from "react";

export default function FilterBar({ search, setSearch, category, setCategory, categories }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Search recipes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
    </div>
  );
}