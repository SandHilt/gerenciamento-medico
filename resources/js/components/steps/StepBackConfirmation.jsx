import React, { useState } from "react";

import Dialog, {
    DialogTitle,
    DialogContent,
    DialogFooter,
    DialogButton,
} from "@material/react-dialog";
import { Body1 } from "@material/react-typography";

const StepBackConfirmation = ({ setAction, open, setOpen }) => {
    const onClose = (action) => {
        setOpen(false);
        setAction(action);
    };

    return (
        <Dialog {...{ open, onClose }}>
            <DialogTitle>Sair</DialogTitle>
            <DialogContent>
                <Body1>Você tem certeza que quer sair?</Body1>
                <Body1>Seus dados serão perdidos.</Body1>
            </DialogContent>
            <DialogFooter>
                <DialogButton action="dismiss" isDefault>
                    Cancelar
                </DialogButton>
                <DialogButton action="confirm">Sair</DialogButton>
            </DialogFooter>
        </Dialog>
    );
};

export default StepBackConfirmation;
