import './Table.css';
import Head from './table_head/Head';
import Body from './table_body/Body';

export default function Table({ yearlyData }) {
  return (
    <table className='result'>
      <Head />
      <Body yearlyData={yearlyData}/>
    </table>
  );
}
