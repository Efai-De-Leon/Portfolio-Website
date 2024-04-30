import "./ContactStyles.css"

export type ContactProps = {
    name: string;
    email: string;
    phone: string;
}

/**
 * Contact Page
 *
 * @param name
 * @param email
 * @param phone
 * @returns
 */
export const Contact = ({name, email, phone}: ContactProps) => {
    return (
        <div className="contact-info">
            <h1>Contact Information</h1>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Phone:</strong> {phone}</p>
        </div>
    )
}
