import './App.css'

/*
// Import React dependencies.
import React, { useState } from 'react'
// Import the Slate editor factory.
import { createEditor } from 'slate'
// Import the Slate components and React plugin.
import { Slate, withReact } from 'slate-react'
*/

import React, { useState } from 'react'

import { Button } from '../src/components/Button.js'
import { BlockTextList } from '../src/components/BlockTextList.js'

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"

function App() {
  /*
  // Create a Slate editor object that won't change across renders.
  const [editor] = useState(() => withReact(createEditor()))

  const initialValue = [
    {
      type: 'paragraph',
      children: [
        { text: 'This is editable ' },
        { text: 'rich', bold: true },
        { text: ' text, ' },
        { text: 'much', italic: true },
        { text: ' better than a ' },
        { text: '<textarea>', code: true },
        { text: '!' },
      ],
    },
    {
      type: 'paragraph',
      children: [
        { text: "Since it's rich text, you can do things like turn a selection of text " },
        { text: 'bold', bold: true },
        { text: ', or add a semantically rendered block quote in the middle of the page, like this:' },
      ],
    },
    {
      type: 'block-quote',
      children: [
        { text: 'A wise quote.' }
      ],
    },
    {
      type: 'paragraph',
      align: 'center',
      children: [
        { text: 'Try it out for yourself!' }
      ],
    },
  ]

  // Keep track of state for the value of the editor.
  const [value, setValue] = useState(initialValue)
  */

  const [components, setComponents] = useState(["Text Block Component"])
  
  function addComponent() {
    setComponents([...components, "Text Block Component"]) 
  } 


  return (
    <div className="App">
      <DragDropContext>
        <Droppable droppableId="containers">
          {(provided) => (
            <div className="Container" {...provided.droppableProps} ref={provided.innerRef}>
              {/*
              <Slate
                editor={editor}
                value={value}
                onChange={newValue => setValue(newValue)}
              />
              */}
              <Button onClick={addComponent}/>
              {components.map(
                (item, index) => (
                  <Draggable key={index} draggableId={`${index}`} index={index}>
                    {(provided) => (
                      <div className="ref-container" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                        <BlockTextList text={item}/>
                      </div>
                    )}
                  </Draggable>
                )
              )}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

/*
<Editable 
  className="Editor"
  renderElement={renderElement}
  renderLeaf={renderLeaf}
  placeholder="Enter some rich text…"
  spellCheck
  autoFocus
  onKeyDown={event => {
    for (const hotkey in HOTKEYS) {
      if (isHotkey(hotkey, event)) {
        event.preventDefault()
        const mark = HOTKEYS[hotkey]
        toggleMark(editor, mark)
      }
    }
  }}
/>
*/

export default App
