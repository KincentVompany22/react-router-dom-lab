import { useParams } from "react-router"

const MailboxDetails = ( {mailboxes} ) => {

const { mailboxId } = useParams()

const singleMailbox = mailboxes.find((box) => (
    box._id === Number(mailboxId)
))
console.log(singleMailbox)

    return (
        <>
            <h1> Mailbox {singleMailbox._id} Details!</h1>
            <h3> Mailbox Owner: {singleMailbox.boxOwner} </h3>
            <h3> Mailbox Size: {singleMailbox.boxSize} </h3>
        </>
    )
}


export default MailboxDetails