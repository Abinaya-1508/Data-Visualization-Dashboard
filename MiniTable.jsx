import React from "react";

export default function MiniTable() {
  // Safe default data
  const projects = [
    {
      name: "Hoffman Website",
      type: "HTML Project",
      owner: "Georgie",
      progress: 80,
    },
    {
      name: "Blockchain Website",
      type: "Sketch Project",
      owner: "Allyson",
      progress: 92,
    },
    {
      name: "Dojo Email App",
      type: "Python Project",
      owner: "Harmonia",
      progress: 51,
    },
    {
      name: "Foodista Mobile App",
      type: "Xamarin Project",
      owner: "Merline",
      progress: 8,
    },
    {
      name: "Dashboard Design",
      type: "Vuejs Project",
      owner: "Keith",
      progress: 62,
    },
  ];

  // makes sure projects is an array
  const safeProjects = Array.isArray(projects) ? projects : [];

  return (
    <div className="mini-table">
      <table>
        <thead>
          <tr>
            <th>Project</th>
            <th>Type</th>
            <th>Owner</th>
            <th>Progress</th>
          </tr>
        </thead>

        <tbody>
          {safeProjects.map((p, i) => (
            <tr key={i}>
              <td>{p.name}</td>
              <td>{p.type}</td>
              <td>{p.owner}</td>
              <td>
                <div
                  style={{
                    background: "#2b2b41",
                    height: "8px",
                    borderRadius: "10px",
                    width: "100px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${p.progress}%`,
                      background: "#4caf50",
                      height: "100%",
                    }}
                  ></div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
