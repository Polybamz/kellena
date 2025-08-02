
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "./ui/dialog"


const subsModal = ({ open, setOpen }: { open: boolean, setOpen: (value: boolean) => void }) => {
    return (
        <>
            <Dialog open={open} onOpenChange={() => setOpen(!open)} >
                <DialogContent className="w-[300] bg-white rounded-[10px] min-h-[200px]">

                </DialogContent>

            </Dialog>
        </>
    )
}

export default subsModal;