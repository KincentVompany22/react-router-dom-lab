import { Link } from "react-router"


const MailboxList = ( {mailboxes} ) => {
    
    return (
        <>
            <h1> Mailbox List!</h1>
                <ul>
                    {mailboxes.map((box) => (
                        <li className="mail-box" key={box._id}>
                            <Link to={`/mailboxes/${box._id}`}>
                                <h2> Mailbox {box._id} </h2>
                            </Link>
                        </li>
                    ))}
                </ul>
        </>
    )
}


export default MailboxList