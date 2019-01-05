const React = require("react");
const DefaultLayout = require("../layout/defaultlayout");
const round = require("math-precision").round;

import {Pie} from 'react-chartjs-2';

class GetFromId extends React.Component {
  render() {
    
    const dataElement = this.props.data.map(data => {
      return (
        <tbody key={data.id}>
          <tr>
            <td key={data.id}>{round(data.roe_fy14 * 100, 2)}%</td>
            <td key={data.id}>{round(data.roe_fy15 * 100, 2)}%</td>
            <td key={data.id}>{data.revenue_fy14}</td>
            <td key={data.id}>{data.revenue_fy15}</td>
            <td key={data.id}>{data.rwafy15}</td>
            <td key={data.id}>{data.rwafy14}</td>
            <td key={data.id}>{data.totallimits_eop_fy14}</td>
            <td key={data.id}>{data.totallimits_eop_fy15}</td>
            <td key={data.id}>{data.company_avg_activity_fy14}</td>
            <td key={data.id}>{data.company_avg_activity_fy15}</td>
          </tr>
        </tbody>
      );
    });
    return (
      <DefaultLayout>
        <Pie data = {this.props.data.roe_fy14}/>        
        <table className="table">
          <thead>
            <tr>
              <th>ROE_FY14</th>
              <th>ROE_FY15</th>
              <th>REVENUE_FY14</th>
              <th>REVENUE_FY15</th>
              <th>RWAFY15</th>
              <th>RWAFY14</th>
              <th>TotalLimits_EOP_FY14</th>
              <th>TotalLimits_EOP_FY15</th>
              <th>Company_Avg_Activity_FY14</th>
              <th>Company_Avg_Activity_FY15</th>
            </tr>
          </thead>
          {dataElement}
        </table>
      </DefaultLayout>
    );
  }
}

module.exports = GetFromId;
