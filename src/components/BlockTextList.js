import React from 'react'

import RichText from "../components/blocks/RichTextBlock.js"

//import { useDrag } from "react-dnd"

const BlockTextList = () => {
  /*
  const [{ isDragging }, drag] = useDrag(() => (
    {
      type: "textBlock",
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }
  ))
  */

  return (
    <RichText /*ref={drag} style={{ border: isDragging ? "4px solid white" : "0px" 8 }}*//>
  )
}

export { BlockTextList }
