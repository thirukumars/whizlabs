/** **************************** Import Libs ****************************** */
import React from "react";
import { CForm, CFormSelect } from "@coreui/react";
/** **************************** Import CSS ****************************** */
import "./pagination.css";

/** **************************** Import Icons ****************************** */
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export default function Pagination({
  pages,
  rowsPerPage,
  nextPage,
  currentPage,
  changeRowsPerPage,
  theme,
  ...others
}) {
  return (
    <div className="text-right paginationMain" {...others}>
      <CForm style={{}}>
        <CFormSelect
          id="role"
          className={`inputFocus paginationSelectBox${theme}`}
          {...others}
          onChange={(e) => {
            changeRowsPerPage(e.target.value);
          }}
          value={rowsPerPage}
        >
          <option>10</option>
          <option>15</option>
          <option>20</option>
        </CFormSelect>
      </CForm>
      <ul>
        <li className={`currentPage${theme}`}>{currentPage}</li>
        <span>of</span>
        <li className="totalPage">{pages}</li>
        <li
          className={
            currentPage > 1
              ? `pagination${theme} ml-1`
              : `disabled${theme} ml-1`
          }
          onClick={() => nextPage(currentPage - 1)}
        >
          <span className="customSpan">
            <AiOutlineLeft />
          </span>
        </li>
        <li
          className={
            currentPage < pages
              ? `pagination${theme} ml-1`
              : `disabled${theme} ml-1`
          }
          onClick={() => nextPage(currentPage + 1)}
        >
          <span className="customSpan">
            <AiOutlineRight />
          </span>
        </li>
      </ul>
    </div>
  );
}
