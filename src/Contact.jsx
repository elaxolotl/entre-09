import React from "react";
import './Contact.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { MDBInput, MDBCheckbox, MDBBtn, MDBTextArea, MDBValidation, MDBValidationItem } from 'mdb-react-ui-kit';


export default function Contact() {
    return (
        <div id="contact">
            <div className="email-section">
                <MDBValidation noValidate id='form' className='text-center' style={{ width: '100%', maxWidth: '300px'}}>
                    <h1>Contactez-nous! </h1>
                    <MDBValidationItem invalid feedback='Please provide your name.'>
                        <MDBInput label='Nom' v-model='name' wrapperClass='mb-4' style={{backgroundColor: 'white'}} required />
                    </MDBValidationItem>

                    <MDBValidationItem invalid feedback='Please provide your email.'>
                        <MDBInput type='email' label='Addresse email' v-model='email' wrapperClass='mb-4' required  style={{backgroundColor: 'white'}} />
                    </MDBValidationItem>

                    <MDBValidationItem invalid feedback='Please provide mail subject.'>
                        <MDBInput label='Sujet' v-model='subject' wrapperClass='mb-4' required  style={{backgroundColor: 'white'}}/>
                    </MDBValidationItem>

                    <MDBValidationItem invalid feedback='Please provide a message text.'>
                        <MDBTextArea wrapperClass='mb-4' label='Message' required  style={{backgroundColor: 'white'}}/>
                    </MDBValidationItem>

                    <MDBValidationItem feedback=''>
                        <MDBCheckbox wrapperClass='d-flex justify-content-center' label='Envoyez-moi une copie' />
                    </MDBValidationItem>

                    <MDBBtn type='submit' color='white' block className='my-4'>
                            Envoyez
                    </MDBBtn>
                </MDBValidation>
            </div>
            <div className="info-section">
                <p>5 rue Houcine Bouzaine Le Kram Tunis Tunisie, Le Kram, Tunisia, 2015</p>
                <div>
                    <p>rsfaxi.work@gmail.com</p>
                    <p>+216 99 030 880</p>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d199.5788845589919!2d10.31755327994399!3d36.836197173117995!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2stn!4v1708471698852!5m2!1sen!2stn"
                    width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}