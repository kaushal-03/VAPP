import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { month: 'Jan', activeUsers: 4000, inactiveUsers: 2400 },
  { month: 'Feb', activeUsers: 3000, inactiveUsers: 1398 },
  { month: 'Mar', activeUsers: 2000, inactiveUsers: 9800 },
  // Add more data as needed
];

const MyChart = () => (
  <LineChart width={380} height={300} data={data}>
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="month" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="activeUsers" stroke="#9EDDFF" name="Active Users" />
    <Line type="monotone" dataKey="inactiveUsers" stroke="#9BB8CD" name="Inactive Users" />
  </LineChart>
);

export default MyChart;
