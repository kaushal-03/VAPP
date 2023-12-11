import { PieChart, Pie, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Active Users', value: 4000 },
  { name: 'Inactive Users', value: 2400 },
  // Add more data as needed
];

const SimplePieChart = () => (
  <PieChart width={380} height={300}>
    <Pie
      data={data}
      cx={200}
      cy={150}
      innerRadius={60}
      outerRadius={80}
      fill="#6499E9"
      dataKey="value"
      nameKey="name"
      label
    />
    <Tooltip />
    <Legend />
  </PieChart>
);

export default SimplePieChart;
