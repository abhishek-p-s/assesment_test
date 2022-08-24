import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, {
  CSVExport,
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import moment from "moment";
import { useParams, useNavigate, Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productAction";
import LoadingBox from "./LoadingBox";
import Navbar from "./Navbar";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Home() {
  const dispatch = useDispatch();
  const [modal, setModal] = React.useState(false)
  const [modalData, setModalData] = React.useState(null)

  const list = useSelector((state) => state.itemList);

  const { loading, itemList } = list;

  React.useEffect(() => {
    dispatch(listProducts());
    //console.log("colum", columns);
  }, []);

  const handleImageClick = (data) => {
    //alert(1);
    setModal(true);
    setModalData(data)
  }


  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {modalData?.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={modalData?.image[0]} width="100%" />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }


  const columns = [
    {
      dataField: "#",
      text: "Images",
      headerAlign: "center",
      formatter: (cell, row, rowIndex) => {
        return (
          <div className="text-center">
            <img src={row.image[0]} className="table-image" onClick={() => {
              handleImageClick(row)
            }}></img>
          </div>
        );
      },
    },
    {
      dataField: "name",
      text: "Name",
      filter: textFilter({}),
      sort: true,
      headerAlign: "center",
    },

    {
      dataField: "date",
      text: "Date",
      filter: textFilter({}),
      formatter: (cell, row, rowIndex) => {
        return <p>{moment(row.date).format("MMM Do YYYY")}</p>;
      },
    },

  ];

  const noData = <div className="text-muted py-3 text-center"> No Data..</div>;

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-12 p-5">
            {loading ? (
              <LoadingBox />
            ) : (
              <div>
                <ToolkitProvider
                  keyField="id"
                  data={itemList}
                  columns={columns}
                  exportCSV={{
                    fileName: "workDetails.csv",
                  }}
                >
                  {(props) => (
                    <div>
                      <BootstrapTable
                        {...props.baseProps}
                        keyField="id"
                        data={itemList}
                        columns={columns}
                        noDataIndication={noData}
                        filter={filterFactory()}
                        pagination={paginationFactory()}
                      />
                    </div>
                  )}
                </ToolkitProvider>
              </div>
            )}
          </div>
        </div>
        <MyVerticallyCenteredModal
          show={modal}
          onHide={() => setModal(false)}
        />
      </div>
    </>
  );
}

export default Home;
