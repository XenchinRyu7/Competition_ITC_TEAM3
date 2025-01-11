import Breadcrumb from "../../../components/Breadcrumbs/Breadcrumb";
import TableServices from "../../../components/Tables/services/TableServices";

const TableService = () => {
  return (
    <>
      <Breadcrumb pageName="Table Service" />

      <div className="flex flex-col">
        <TableServices />
      </div>
    </>
  );
};

export default TableService;
