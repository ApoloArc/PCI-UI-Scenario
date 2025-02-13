import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
import data from "./near-earth-asteroids.json";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const columnDefs: ColDef[] = [
  { field: "designation", headerName: "Designation", filter: "agNumberColumnFilter" },
  {
    field: "discovery_date",
    headerName: "Discovery Date",
    filter: "agDateColumnFilter",
    valueFormatter(params) {
      return new Date(params.value).toLocaleDateString('en-gb');
    },
  },
  { field: "h_mag", headerName: "H (mag)", filter: "agNumberColumnFilter" },
  { field: "moid_au", headerName: "MOID (au)", filter: "agNumberColumnFilter" },
  { field: "q_au_1", headerName: "q (au)", filter: "agNumberColumnFilter" },
  { field: "q_au_2", headerName: "Q (au)", filter: "agNumberColumnFilter" },
  { field: "period_yr", headerName: "Period (yr)", filter: "agNumberColumnFilter" },
  { field: "i_deg", headerName: "Inclination (deg)", filter: "agNumberColumnFilter" },
  { field: "pha", headerName: "Potentially Hazardous", filter: true, comparator: (a, b) => a.localeCompare(b) },
  {
    field: "orbit_class",
    headerName: "Orbit Class",
    enableRowGroup: true,
    filter: true,
  },
];

const NeoGrid = (): JSX.Element => {
  return (
    <div className="ag-theme-alpine" style={{ height: 900, width: 1920 }}>
      {/* Title */}
      <h1>Near Earth Objects</h1>
      {/* Grid */}
      <AgGridReact rowData={data} columnDefs={columnDefs} rowGroupPanelShow={"always"} />
    </div>
  );
};

export default NeoGrid;
