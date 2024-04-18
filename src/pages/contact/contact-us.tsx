import React, {useState, useEffect, useContext} from 'react'
import {ContactFormI, ContactFormValidateI} from "./helpers/contact-form.interface";
import {validatorForm} from "./helpers/validator-form";
import {Store} from "../../Context";


const initialContactForm: ContactFormI = {
    name: '',
    lastName: '',
    email: '',
    phone: '',
    characters: [],
}

const initialErrors: ContactFormValidateI = {
    name: '',
    lastName: '',
    email: '',
    phone: '',
}




const ContactUs =()=> {

    const context = useContext(Store);
    const { favoriteCharacters } = context

    const [form, setForm] = useState<ContactFormI>(initialContactForm)
    const [errors, setErrors] = useState<ContactFormValidateI>(initialErrors)
    const [showSpinner, setShowSpinner] = useState<boolean>(false)

    const handleChange =(e: any)=> {
        const name = e?.target?.name
        const value = e?.target?.value
        setForm({
            ...form,
            [name]: value,
        })
    }


    const sendInfo =()=> {
        setShowSpinner(true)
        const errorValidation = validatorForm(form)
        setErrors(errorValidation)

        if (Object.values(errorValidation).every((value) => value === '')) {
            setTimeout(()=> {
                setShowSpinner(false)
                console.log("send info", form)
            }, 4000)

        }

    }

    const getCharacters =()=> {
        setForm((prevForm) => ({
            ...prevForm,
            characters: favoriteCharacters
        }));
    }

    useEffect(()=> {
        getCharacters()
    }, [])


    return (
        <div>

            <div className="contact-page">




            </div>

        </div>
    )
}

export default ContactUs;