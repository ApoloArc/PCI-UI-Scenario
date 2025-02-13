import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
import data from "./near-earth-asteroids.json";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { styles } from "./styles/Grid";
import { useCallback, useRef } from "react";

const columnDefs: ColDef[] = [
  { field: "designation", headerName: "Designation", filter: "agNumberColumnFilter" },
  {
    field: "discovery_date",
    headerName: "Discovery Date",
    filter: "agDateColumnFilter",
    valueFormatter(params) {
      return new Date(params.value).toLocaleDateString("en-gb");
    },
  },
  { field: "h_mag", headerName: "H (mag)", filter: "agNumberColumnFilter" },
  { field: "moid_au", headerName: "MOID (au)", filter: "agNumberColumnFilter" },
  { field: "q_au_1", headerName: "q (au)", filter: "agNumberColumnFilter" },
  { field: "q_au_2", headerName: "Q (au)", filter: "agNumberColumnFilter" },
  { field: "period_yr", headerName: "Period (yr)", filter: "agNumberColumnFilter" },
  { field: "i_deg", headerName: "Inclination (deg)", filter: "agNumberColumnFilter" },
  {
    field: "pha",
    headerName: "Potentially Hazardous",
    filter: true,
    comparator: (a, b) => a.localeCompare(b),
    valueFormatter(params) {
      switch (params.value) {
        case "Y":
          return "Yes";
        case "N":
          return "No";
        default:
          return "n/a";
      }
    },
  },
  {
    field: "orbit_class",
    headerName: "Orbit Class",
    enableRowGroup: true,
    filter: true,
  },
];

const NeoGrid = (): JSX.Element => {
  const gridRef = useRef<any>();

  const clearFilters = useCallback(() => {
    if (gridRef.current) {
      gridRef.current.api.setFilterModel(null);
    }
  }, []);

  return (
    <div className="ag-theme-alpine" style={{ height: 900, width: 1920 }}>
      {/* Title */}
      <div style={styles.titleSectionContainer}>
        <h1>Near Earth Objects</h1>
        <button style={styles.button} onClick={clearFilters}>
          Clear Filters and Sorters
        </button>
      </div>
      {/* Grid */}
      <AgGridReact ref={gridRef} rowData={data} columnDefs={columnDefs} rowGroupPanelShow={"always"} enableCellTextSelection cellSelection />
    </div>
  );
};

export default NeoGrid;
