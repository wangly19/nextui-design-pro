import * as React from 'react'
import { ToastContext } from './provider'

export const useToast = () => {

  const toastContext = React.useContext(ToastContext)

  return (
    toastContext
  )
}