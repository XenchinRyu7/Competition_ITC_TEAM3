import Breadcrumb from "../../../components/Breadcrumbs/Breadcrumb";
import TableOne from "../../../components/Tables/category/TableCategory";

const TableTransaction = () => {
  return (
    <>
      <Breadcrumb pageName="Table transaction" />

      <div className="flex flex-col gap-10">
        <TableOne />
      </div>
    </>
  );
};

export default TableTransaction;
