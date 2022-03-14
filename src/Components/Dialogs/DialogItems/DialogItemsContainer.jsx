import DialogItems from "./DialogItems";



const DialogItemsContainer = (props) => {
    let state = props.store.getState().messagesPage

    let dialogData = state.dialogData





    return (
        <DialogItems dialogData={dialogData} />

    )
}

export default DialogItemsContainer;