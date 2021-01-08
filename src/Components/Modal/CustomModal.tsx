import React from 'react'

interface Props {
  isOpen: boolean,
  message: string,
  onClose?: () => void
  isCancel?: boolean
}

const CustomModal: React.FunctionComponent<Props> = ({isOpen, message, isCancel, onClose}) => {
  return (
    <div style={style.main}></div>
  )
}

const style = {
  main: {
    backgroundColor: 'black'
  }
}

export default CustomModal
