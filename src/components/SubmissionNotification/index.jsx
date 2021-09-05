import React from 'react'

import './submission-notification.scss'

const SubmissionNotification = (props) => {
    return (
        <aside className={`contact-form__notification contact-form__notification${"--" + props.type}`}>
            <p className="contact-form__notification__message">
                {props.type === "success" ? props.messages.success : (props.customMessage ? props.customMessage : props.messages.fail)}
            </p>
        </aside>
    )
}

export default SubmissionNotification