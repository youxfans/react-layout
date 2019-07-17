import React, { useEffect, useState } from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: '指标',
    dataIndex: 'metrics',
    key: 'metrics'
  }, {
    title: '时间差',
    dataIndex: 'timeDiff',
    key: 'timeDiff'
  }
];

export default function () {
  const [performanceTiming, SetPerformanceTiming] = useState(performance.timing.toJSON());
  useEffect(() => {
    window.addEventListener('load', function() {
      SetPerformanceTiming(performance.timing.toJSON());
    });
    return () => {
      window.removeEventListener('load', function() {
        SetPerformanceTiming(performance.timing.toJSON());
      });
    }
  }, []);
  return (
    <div>
      <h2>Performance!</h2>
      <Table
        columns={columns}
        dataSource={Object.keys(performanceTiming).map(metrics => ({
          key: metrics,
          metrics,
          timeDiff: performanceTiming[metrics] !== 0 ? performanceTiming[metrics] - performanceTiming.navigationStart : '无'
        }))}
      />
    </div>
  );
}