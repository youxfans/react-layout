import React, { useState, useEffect } from 'react';
import request from '../util/request';
import { Table, Button } from 'antd';

const status2cn: { [key: string]: string } = {
  pending: '待审核',
  withdraw: '已下架',
  normal: '审核通过(送养中)',
  contacting: '双方联系中',
  eol: '已送养成功',
  deleted: '已删除',
  invalid: '审核失败',
}
const columns = [
  {
    title: '行号',
    dataIndex: 'id',
    render: (id: string, row: object, index: number) => index + 1
  },
  {
    title: '宠物名称',
    dataIndex: 'name',
  },
  {
    title: '类别',
    dataIndex: 'category',
  },
  {
    title: '缩略图',
    dataIndex: 'cover',
    render: (imgsrc: string) => <img style={{ height: 80 }} src={imgsrc} alt="缩略图" />
  },
  {
    title: '状态',
    dataIndex: 'status',
    render: (status: string) => status2cn[status]
  },
  {
    title: '操作',
    render: () => (
      <p><Button>推荐</Button> <Button>删除</Button></p>
    )
  },
];
const pageSize = 5;
export default function () {
  const [pets, setPets] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const handleFetchGet = async (page = 0) => {
    const result = await request({
      api: `pets?page=${page}`,
      header: {
        'page-size': pageSize
      }
    });
    setPets(result.data);
    setTotalCount(result.totalCount | 0);
  }
  useEffect(() => {
    handleFetchGet();
  }, [])
  return (
    <div>
      <Table
        rowKey="id"
        columns={columns}
        dataSource={pets}
        pagination={{ pageSize, total: totalCount }}
        onChange={
          pagination => {
            handleFetchGet((pagination.current || 1) - 1);
          }
        }
      />
    </div>
  )
}