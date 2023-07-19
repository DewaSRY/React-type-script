import { useTypeSelector } from "../hooks/use-TypeSelector";
import { CellListItem } from "./CellListItem";
import { AddCell } from "./AddCell";
import React from "react";
import "./CellList.css";

export function CellList() {
  const { data, order } = useTypeSelector();
  const mapedCells = order.map((id) => data[id]);
  const renderCells = mapedCells.map((cell, id) => (
    <React.Fragment key={cell.id}>
      <CellListItem cell={cell} />
      <AddCell prevCellId={cell.id} />
    </React.Fragment>
  ));
  return (
    <div className="cell-list">
      {renderCells}
      <div className={order.length === 0 ? "force-visible" : ""}>
        <AddCell prevCellId={null} />
      </div>
    </div>
  );
}
