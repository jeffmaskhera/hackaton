import React, {useState, useEffect, useContext} from 'react'
import StudentModal from "./modal/student-modal";







const StudentPage =()=> {

    const [showModal, setShowModal] = useState<boolean>(true);
    const actionsModal =()=> {
        setShowModal(!showModal)
    }

    return (
        <div>

            <div className="contact-page">

                <StudentModal
                    open={showModal}
                    accept={actionsModal}
                />



            </div>

        </div>
    )
}

export default StudentPage;