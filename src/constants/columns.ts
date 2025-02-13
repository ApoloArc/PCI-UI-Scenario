import { ColDef, ValueFormatterParams } from "ag-grid-community";
import formatDate from "../utils/formatDate";
import { IEarth } from "../interfaces/IEarth";

export const columnDefs: ColDef[] = [
  { field: "designation", headerName: "Designation", filter: "agNumberColumnFilter" },
  {
    field: "discovery_date",
    headerName: "Discovery Date",
    filter: "agDateColumnFilter",
    valueFormatter(params: ValueFormatterParams<IEarth, string>) {
      return formatDate(params.value!);
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
    comparator: (a:string, b:string) => a.localeCompare(b),
    valueFormatter(params:ValueFormatterParams<IEarth, string>) {
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
