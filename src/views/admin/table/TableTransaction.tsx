import Breadcrumb from "../../../components/Breadcrumbs/Breadcrumb";
import TableTransactions from "../../../components/Tables/transaction/TableTransactions";

const TableTransaction = () => {
  return (
    <>
      <Breadcrumb pageName="Table transaction" />

      <div className="flex flex-col gap-10">
        <TableTransactions />
      </div>
    </>
  );
};

export default TableTransaction;
