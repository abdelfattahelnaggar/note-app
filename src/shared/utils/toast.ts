import { toast } from 'sonner'

export function showSuccessToast(msg: string) {
    toast.success(msg)
}
export function showErrorToast(msg: string) {
    toast.error(msg)
}
export function showWarningToast(msg: string) {
    toast.warning(msg)
}
