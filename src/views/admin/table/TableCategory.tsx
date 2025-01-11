import Breadcrumb from "../../../components/Breadcrumbs/Breadcrumb";
import TableOne from "../../../components/Tables/category/TableCategory";

const TableCategory = () => {
  return (
    <>
      <Breadcrumb pageName="Table Category" />

      <div className="flex flex-col">
        <TableOne />
      </div>
    </>
  );
};

export default TableCategory;
