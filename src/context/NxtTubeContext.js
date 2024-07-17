import React from 'react'

const NxtTubeContext = React.createContext({
  savedItems: [],
  isTheme: false,
  themeIsClicked: () => {},
  addSaveItems: () => {},
})

export default NxtTubeContext
