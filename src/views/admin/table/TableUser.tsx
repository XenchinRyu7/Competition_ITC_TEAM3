import Breadcrumb from "../../../components/Breadcrumbs/Breadcrumb";
import TableUsers from "../../../components/Tables/users/TableUser";

const TableUser = () => {
  return (
    <>
      <Breadcrumb pageName="Table User" />

      <div className="flex flex-col gap-10">
        <TableUsers />
      </div>
    </>
  );
};

export default TableUser;
