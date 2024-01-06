import { ReactElement, useState } from "react";
import TableHOC from "../components/admin/TableHOC";
import { Link } from "react-router-dom";

type DataType = {
  _id: string;
  amount: number;
  quantity: number;
  discount: number;
  status: ReactElement;
  action: ReactElement;
};

const column: Column<DataType>[] = [
  {
    Header: "ID",
    accessor: "_id",
  },
  {
    Header: "Qunatity",
    accessor: "quantity",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const Orders = () => {
  const [rows, setRows] = useState<DataType[]>([
    {
      _id: "123456",
      amount: 6000,
      quantity: 7,
      discount: 20,
      status: <span className="red">Processing</span>,
      action: <Link to={`/order/123456`}>View</Link>,
    },
  ]);
  const Table = TableHOC<DataType>(
    column,
    rows,
    "dashbord-prooduct-box",
    "Orders",
    // true
    rows.length > 6
  )();
  return (
    <>
      <div className="container">
        <h1>My Orders</h1>
        {Table}
      </div>
    </>
  );
};

export default Orders;
