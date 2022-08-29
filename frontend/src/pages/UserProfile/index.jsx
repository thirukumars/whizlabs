import React from "react";
import {
  CCol,
  CRow,
  CButton,
  //   CLabel,
  //   CFormGroup,
  //   CSelect,
  //   CBadge,
  //   CTooltip,
} from "@coreui/react";
import DataTable from "../../components/DataTable";
import Pagination from "../../components/Pagination";

const products = [
  {
    id: "1",
    avatar: "",
    first_name: "Ervin",
    last_name: "Quigley",
    phone: "614-473-4469 x592",
    email: "Maymie_Ebert66@hotmail.com",
    company: "Glover, Treutel and Krajcik",
    job_title: "International Assurance Representative",
  },
  {
    id: "2",
    avatar: "",
    first_name: "Ervin",
    last_name: "Quigley",
    phone: "614-473-4469 x592",
    email: "Maymie_Ebert66@hotmail.com",
    company: "Glover, Treutel and Krajcik",
    job_title: "International Assurance Representative",
  },
  {
    id: "3",
    avatar: "",
    first_name: "Ervin",
    last_name: "Quigley",
    phone: "614-473-4469 x592",
    email: "Maymie_Ebert66@hotmail.com",
    company: "Glover, Treutel and Krajcik",
    job_title: "International Assurance Representative",
  },
];
const columns = [
  {
    key: "id",
    label: "Employee ID",
  },
  {
    key: "avatar",
    label: "Avatar",
  },
  {
    key: "first_name",
    label: "First Name",
  },
  {
    key: "last_name",
    label: "Last Name",
  },
  {
    key: "phone",
    label: "Phone",
  },
  {
    key: "email",
    label: "Email",
  },
  {
    key: "company",
    label: "Company",
  },
  {
    key: "job_title",
    label: "Job Title",
  },
];

const UserProfile = (props) => {
  return (
    <>
      <div className="mt-4">
        <CRow className="mt-4">
          <CCol xl={12} className="timeCard-main maxWidth" color="light">
            <DataTable
              items={products}
              fields={[
                { key: "createdDate", _classes: "created-date" },
                { key: "firstDate", _classes: "first-date" },
                { key: "lastDate", _classes: "last-date" },
                {
                  key: "id",
                  label: "Employee ID",
                },
                {
                  key: "avatar",
                  label: "Avatar",
                },
                {
                  key: "first_name",
                  label: "First Name",
                },
                {
                  key: "last_name",
                  label: "Last Name",
                },
                {
                  key: "phone",
                  label: "Phone",
                },
                {
                  key: "email",
                  label: "Email",
                },
                {
                  key: "company",
                  label: "Company",
                },
                {
                  key: "job_title",
                  label: "Job Title",
                },
                { key: "status", _classes: "timecard-status" },
                {
                  key: "Actions",
                  _classes: "action",
                },
              ]}
              hover={false}
              //   preloader={preloader}
              itemsPerPage={5}
              //   onRowClick={(items) =>
              //     onClickRow
              //       ? (setSelectedData(items), setViewDataPopup(true))
              //       : null
              //   }
              clickableRows
              outlined
              responsive
              noItemsViewSlot={
                <div className="text-center my-5">
                  <h2>No Records Found</h2>
                </div>
              }
              addTableClasses="timeCardTable"
              // sorter
              scopedSlots={{
                status: (item) => (
                  <td>
                    {/* <CBadge
                      color={getBadge(item.status)}
                      style={{ padding: "0.5rem" }}
                    >
                      {item.status}
                    </CBadge> */}
                  </td>
                ),
                Actions: (item) => (
                  <td>
                    <CButton
                    //   onClick={() => {
                    //     setAddTimeCardModel(true);
                    //     setOnClickRow(true);
                    //   }}
                    //   onMouseEnter={() => setOnClickRow(false)}
                    //   onMouseLeave={() => setOnClickRow(true)}
                    //   disabled={
                    //     item.status === "Approved" || item.status === "Rejected"
                    //       ? true
                    //       : false
                    //   }
                    >
                      {/* <img
                        src={EditIcon}
                        alt="editIcon"
                        className="editIcon"
                        width="23px"
                        height="23px"
                      /> */}
                    </CButton>

                    <CButton
                    //   onClick={() => {
                    //     setSelectedData(item);
                    //     setSendForApprovalPopup(true);
                    //   }}
                    //   onMouseEnter={() => setOnClickRow(false)}
                    //   onMouseLeave={() => setOnClickRow(true)}
                    //   id={`requestTimecard_${item.id}_SendBtn`}
                    //   disabled={
                    //     item.status === "In Progress" ||
                    //     item.status === "Approved" ||
                    //     item.status === "Rejected"
                    //   }
                    >
                      {/* {item.status === "Pending" ? (
                        <CTooltip
                          className="SendButton"
                          content="Send For Approval"
                        >
                          <img
                            src={SendIcon}
                            alt="sendIcon"
                            width="25px"
                            height="25px"
                          />
                        </CTooltip>
                      ) : (
                        <img
                          src={SendIcon}
                          alt="sendIcon"
                          width="25px"
                          height="25px"
                          className="not-allowed"
                        />
                      )} */}
                    </CButton>
                  </td>
                ),
                // totalHours: (item) => <td>{item.totalHours}</td>,
              }}
            />
            <Pagination
              //   pages={props.pages}
              //   nextPage={props.nextPage}
              //   currentPage={props.currentPage}
              //   changeRowsPerPage={props.changeRowsPerPage}
              //   rowsPerPage={props.rowsPerPage}
              theme="White"
              disabled
            />
          </CCol>
        </CRow>
      </div>
    </>
  );
};

export default UserProfile;
