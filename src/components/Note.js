import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Zoom in={true}>
        <Fab
          onClick={() => {
            props.onChecked(props.id);
          }}
        >
          <DeleteIcon />
        </Fab>
      </Zoom>
    </div>
  );
}

export default Note;
