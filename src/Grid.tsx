import { AgGridReact } from "ag-grid-react";
import data from "./near-earth-asteroids.json";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useCallback, useRef } from "react";
import { IEarth } from "./interfaces/IEarth";
import { columnDefs } from "./constants/columns";
import TitleSection from "./components/TitleSection";

const NeoGrid = (): JSX.Element => {
  const gridRef = useRef<AgGridReact<IEarth>>(null);

  const clearFilters = useCallback(() => {
    if (gridRef.current) {
      gridRef.current.api.setFilterModel(null);
    }
  }, []);

  return (
    <div className="ag-theme-alpine" style={{ height: 900, width: 1920 }}>
      {/* Title */}
      <TitleSection clearFilters={clearFilters} />
      {/* Grid */}
      <AgGridReact<IEarth>
        ref={gridRef}
        rowData={data}
        columnDefs={columnDefs}
        rowGroupPanelShow={"always"}
        enableCellTextSelection
        cellSelection
      />
    </div>
  );
};

export default NeoGrid;
