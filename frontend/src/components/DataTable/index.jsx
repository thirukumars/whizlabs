/** **************************** Import Libs ****************************** */
import React from "react";
import { CTable } from "@coreui/react";

/** **************************** Import CSS ****************************** */
import "./dataTable.css";

/** **************************** Import Components ****************************** */
import PreLoader from "../Preloader";

/** ***************************** Import Preloader ******************************** */
// import NoRecordsFoundImg from "../../assets/images/no_records_found.png";

const DataTable = ({
  items,
  fields,
  itemsPerPage,
  onRowClick,
  noItemsViewSlot,
  addTableClasses,
  scopedSlots,
  preloader,
  ...rest
}) => {
  return (
    <CTable
      items={items}
      fields={fields}
      itemsPerPage={itemsPerPage}
      onRowClick={onRowClick}
      noItemsViewSlot={
        <div className="text-center" style={{ height: "22.5rem" }}>
          {preloader ? <PreLoader /> : <h1>No Records found</h1>}
        </div>
      }
      hover={items && items.length === 0 ? false : true}
      addTableClasses={addTableClasses}
      scopedSlots={scopedSlots}
      {...rest}
    />
  );
};

export default DataTable;
