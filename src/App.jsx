// Importing Hooks
import { Route, Routes} from "react-router"
import { useState } from "react"

// Importing Components
import NavBar from "./components/NavBar/NavBar.jsx"
import MailboxForm from "./components/MailboxForm/MailboxForm.jsx"
import MailboxList from "./components/MailboxList/MailboxList.jsx"
import MailboxDetails from "./components/MailboxDetails/MailboxDetails.jsx"



const App = () => {

  const initialMailbox = [
    { _id: 1, boxOwner: "Joel", boxSize: "Large"}
  ] 

  

  const [mailboxes, setMailboxes] = useState(initialMailbox)

  const addBox = (newMailbox) => {
    newMailbox._id = mailboxes.length + 1 // to auto set the mail box id on entry
    setMailboxes([...mailboxes, newMailbox])
  }
  console.log(mailboxes)

  return (
    <>
      <NavBar />

      <Routes>

        <Route path="/" element={<main><h1>Post Office</h1></main>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />
        <Route path="*" element={<h1>Nothing here!</h1>} />

      </Routes>
    </>
  )
}

export default App