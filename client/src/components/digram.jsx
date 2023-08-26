import React from "react";
import { Bar } from "react-chartjs-2";

const Digram = ({ teacherData }) => {
  const teacherNames = teacherData.map((teacher) => teacher.name);
  const teacherActivities = teacherData.map((teacher) => teacher.activities);

  const data = {
    labels: teacherNames,
    datasets: [
      {
        label: "Number of Activities",
        data: teacherActivities,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2>Teacher Activity Chart</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Digram;
