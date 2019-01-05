const React = require("react");
const DefaultLayout = require("../layout/defaultlayout");
const round = require('math-precision').round

class Data extends React.Component {
  render() {

    const data = this.props.data.map(data => {
      let urlData = "/data/" + data.id;
      return (
        <tbody>
          <tr>
            <td key={data.id}><a href = {urlData}>{data.cmgunmaskedid}</a></td>
            <td key={data.id}>{data.cmgunmaskedname}</td>
            <td key={data.id}>{data.clienttier}</td>
            <td key={data.id}>{data.gcpstream}</td>
            <td key={data.id}>{data.gcpbusiness}</td>
            <td key={data.id}>{data.cmgglobalbu}</td>
            <td key={data.id}>{data.cmgsegmentname}</td>
            <td key={data.id}>{data.globalcontrolpoint}</td>
            <td key={data.id}>{data.gcpgeography}</td>
            <td key={data.id}>{data.globalrelationshipmanagername}</td>
            <td key={data.id}>{data.revenue_fy14}</td>
            <td key={data.id}>{data.revenue_fy15}</td>
            <td key={data.id}>{data.deposits_eop_fy14}</td>
            <td key={data.id}>{data.deposits_eop_fy15x}</td>
            <td key={data.id}>{data.totallimits_eop_fy14}</td>
            <td key={data.id}>{data.totallimits_eop_fy15}</td>
            <td key={data.id}>{data.totallimits_eop_fy15x}</td>
            <td key={data.id}>{data.rwafy15}</td>
            <td key={data.id}>{data.rwafy14}</td>
            <td key={data.id}>{round(data.rev_rwa_fy14*100, 2)}%</td>
            <td key={data.id}>{round(data.rev_rwa_fy15*100, 2)}%</td>
            <td key={data.id}>{data.npat_alloceq_fy14}</td>
            <td key={data.id}>{data.npat_alloceq_fy15x}</td>
            <td key={data.id}>{data.company_avg_activity_fy14}</td>
            <td key={data.id}>{data.company_avg_activity_fy15}</td>
            <td key={data.id}>{round(data.roe_fy14*100, 2)}%</td>
            <td key={data.id}>{round(data.roe_fy15*100, 2)}%</td>
          </tr>
        </tbody>
      );
    });

    return (
      <DefaultLayout>
        <table className="table">
          <thead>
            <tr>
              <th>CMGUnmaskedID</th>
              <th>CMGUnmaskedName</th>
              <th>ClientTier</th>
              <th>GCPStream</th>
              <th>GCPBusiness</th>
              <th>CMGGlobalBU</th>
              <th>CMGSegmentName</th>
              <th>GlobalControlPoint</th>
              <th>GCPGeography</th>
              <th>GlobalRelationshipManagerName</th>
              <th>REVENUE_FY14</th>
              <th>REVENUE_FY15</th>
              <th>Deposits_EOP_FY14</th>
              <th>Deposits_EOP_FY15x</th>
              <th>TotalLimits_EOP_FY14</th>
              <th>TotalLimits_EOP_FY15</th>
              <th>TotalLimits_EOP_FY15x</th>
              <th>RWAFY15</th>
              <th>RWAFY14</th>
              <th>REV_RWA_FY14</th>
              <th>REV_RWA_FY15</th>
              <th>NPAT_AllocEq_FY14</th>
              <th>NPAT_AllocEq_FY15X</th>
              <th>Company_Avg_Activity_FY14</th>
              <th>Company_Avg_Activity_FY15</th>
              <th>ROE_FY14</th>
              <th>ROE_FY15</th>
            </tr>
          </thead>
          {data}
        </table>
      </DefaultLayout>
    );
  }
}

module.exports = Data;
