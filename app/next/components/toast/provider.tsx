import * as React from "react";
import { Grid } from "@nextui-org/react";
import { Toast, ToastWrapper, ToastProps } from "./toast";

export interface ToastType extends ToastProps {
  uid?: React.Key;
}

export interface ToastProviderProps {
  children: React.ReactNode;
}

interface ToastContextTypes {
  add: (toast: ToastProps) => void | null;
  toast: (toast: ToastProps) => void | null;
}

const onProviderWarn = (_: ToastProps) => {
  console.warn(`Warn: You must use useToast in the ToastProvider context.`);
  return void 0;
}

export const ToastContext = React.createContext<ToastContextTypes>({
  add: onProviderWarn,
  toast: onProviderWarn
});

export const ToastProvider: React.FC<ToastProviderProps> = (props) => {
  const executionQueueRef = React.useRef<Record<string, NodeJS.Timeout>[]>([])
  const [toasts, setToasts] = React.useState<ToastType[]>([]);

  const addToastContent = React.useCallback(
    (toast: ToastType) => {
      const uid = new Date().getTime();
      setToasts((toasts) => [
        ...toasts,
        {
          ...toast,
          uid,
        },
      ]);
      
      const clearFun = setTimeout(
        () => setToasts((toasts) => toasts.filter((v) => v.uid !== uid)),
        2500
      );

      /** setTimeout queues */
      executionQueueRef.current.push({
        uid: clearFun
      })
    },
    [setToasts]
  );

  const handleClearOpenToast = () => {

  }

  return (
    <ToastContext.Provider value={{ add: addToastContent, toast: addToastContent }}>
      {props.children}
      {toasts?.length > 0 ? (
        <ToastWrapper>
          <Grid.Container gap={1} justify="center">
            {toasts.map(({ uid, ...toastProps }) => (
              <Grid xs={12} key={uid}>
                <Toast {...toastProps} />
              </Grid>
            ))}
          </Grid.Container>
        </ToastWrapper>
      ) : null}
    </ToastContext.Provider>
  );
};
