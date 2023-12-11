import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { month: 'Jan', activeUsers: 4000, inactiveUsers: 2400 },
  { month: 'Feb', activeUsers: 3000, inactiveUsers: 1398 },
  { month: 'Mar', activeUsers: 2000, inactiveUsers: 9800 },
  // Add more data as needed
];

const SimpleBarChart = () => (
  <BarChart width={380} height={300} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="month" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="activeUsers" fill="#6499E9" name="Active Users" />
    <Bar dataKey="inactiveUsers" fill="#9BB8CD" name="Inactive Users" />
  </BarChart>
);

export default SimpleBarChart;
