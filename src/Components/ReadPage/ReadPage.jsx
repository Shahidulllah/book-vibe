
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const data = [
  {
    name: 'The Great Gatsby',
    uv: 400,
    pv: 240,
    amt: 240,
  },
  {
    name: '1984',
    uv: 300,
    pv: 139,
    amt: 221,
  },
  {
    name: 'To Kill a Mockingbird',
    uv: 200,
    pv: 980,
    amt: 229,
  },
  {
    name: 'The Catcher in the Rye',
    uv: 278,
    pv: 390,
    amt: 200,
  },
  {
    name: 'The Hobbit',
    uv: 189,
    pv: 480,
    amt: 218,
  },
  {
    name: 'Pride and Prejudice',
    uv: 329,
    pv: 380,
    amt: 250,
  },
];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function App() {
  return (
   <div className='w-full flex justify-center items-center bg-base-200 p-10 mt-7 rounded-2xl'>
     <BarChart
      width={1200}
      height={450}
      data={data}
      margin={{
        top: 30,
        right: 30,
        left: 30,
        bottom: 20,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
   </div>
  );
}