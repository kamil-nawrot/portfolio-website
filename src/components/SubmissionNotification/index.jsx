import React from 'react'

import './submission-notification.scss'

const SubmissionNotification = (props) => {
    return (
        <aside className={`contact-form__notification contact-form__notification--${props.type}`}>
            <p className="contact-form__notification__message">
                
            </p>
        </aside>
    )
}

export default SubmissionNotification