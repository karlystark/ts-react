import React, { useState } from "react";
import Box, {BoxInterface} from "./Box";
import NewBoxForm from "./NewBoxForm";

/** Manage list of boxes
 *
 * State:
 * - boxes: [ { id, width, height, backgroundColor }, ... ]
 */

function BoxList(): JSX.Element {
  const [boxes, setBoxes] = useState <BoxInterface[]>([]);

  /** add box with given { id, width, height, backgroundColor } */
  function add(newBox: BoxInterface): void{
    setBoxes(boxes => [...boxes, newBox]);
  }

  /** remove box matching that id. */
  function remove(id: string): void {
    setBoxes(boxes => boxes.filter(box => box.id !== id));
  }

  return (
    <div className="BoxList">
      <NewBoxForm createBox={add} />
      {boxes.map(({ id, width, height, backgroundColor }) => (
        <Box
          key={id}
          id={id}
          width={width}
          height={height}
          remove={remove}
          backgroundColor={backgroundColor}
        />
      ))}
    </div>
  );
}

export default BoxList;
