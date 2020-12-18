import React from "react";
import { Space, Table } from "antd";
import { dummyData as data } from "./dummyData";

export const columns = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "課程名稱",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "更新於",
    dataIndex: "updatedAt",
    key: "updatedAt",
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <a>Edit</a>
      </Space>
    ),
  },
];

export default function CoursesTable() {
  return <Table columns={columns} dataSource={data} />;
}
