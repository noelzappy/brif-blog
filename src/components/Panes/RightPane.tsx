import React from "react";
import { Link } from "react-router-dom";

const RightPane: React.FC = () => {
  return (
    <div>
      {new Array(50).fill(0).map((_, index) => (
        <div>
          <Link to={`/category/${index}`}>Right Pane {index}</Link>
        </div>
      ))}
    </div>
  );
};

export default RightPane;
