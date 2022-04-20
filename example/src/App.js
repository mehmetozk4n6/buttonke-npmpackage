import React from 'react'

import { Button } from 'buttonke1'
import 'buttonke1/dist/index.css'

export const App = () => {
  return (
    <>
      <Button text='Merhaba' type='primary' />
      <Button text='Merhaba' />
      <Button text='Merhaba' type='dashed' />
      <Button text='Merhaba' type='text' />
      <Button text='Merhaba' type='link' />
    </>
  )
}

export default App
