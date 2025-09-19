import { useState } from "react"
import { useNavigate } from "react-router"

const MailboxForm = ({ addBox }) => {


    const initialState = {
        boxOwner: "",
        boxSize: "",
    }

    const [formData, setFormData] = useState(initialState)

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        addBox(formData)
        setFormData(initialState)
        navigate("/mailboxes")
    }

    const handleChange = ({ target }) => {
        setFormData({...formData, [target.name]: target.value})
    }
    console.log(formData)

    return (
        <>
            <h1> Add New Mailbox!</h1>

            <form onSubmit={handleSubmit}>

                <label htmlFor="boxOwner">Name:</label>
                <input 
                type="text"
                id="boxOwner"
                name="boxOwner"
                value={formData.boxOwner}
                onChange={handleChange}
                />

                <label htmlFor="boxSize">Box Size:</label>
                <select
                id="boxSize"
                name="boxSize"
                value={formData.boxSize}
                onChange={handleChange}>
                    <option value="" disabled> Select a Size</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
                <button type="submit">Submit</button>

            </form>
        </>
    )
}

export default MailboxForm