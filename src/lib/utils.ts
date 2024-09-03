import { toast } from "@/components/hooks/use-toast"
import { EntityError } from "@/lib/http"
import { type ClassValue, clsx } from "clsx"
import { UseFormSetError } from "react-hook-form"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const handleErrorApi = ({error, setError, toastDuration}: {
  error: any,
  setError?: UseFormSetError<any>,
  toastDuration?: number
}) => {
  if(error instanceof EntityError && setError) {
    error.payload.errors.forEach((item) => {
      setError(item.field, {
        type: "server",
        message: item.message,
      })
    })
  }
  toast({
    title: "Lỗi",
    description: error?.payload?.message || 'Có lỗi xảy ra',
    variant: "destructive",
    duration: toastDuration || 2000
  })
}