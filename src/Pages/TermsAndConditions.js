import { Container } from 'react-bootstrap';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { useEffect, useState } from 'react';
const TermsAndConditions = () => {
    const [readMore, setReadMore] = useState(false);
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <section className='terms-and-condition-section'>
            <Header page_name="terms-and-condition" />
            <Container className="p-3 d-flex flex-column gap-2 " >

                <div style={{ width: "100%" }}>
                    <img src="./term_conditions.png" alt="About us banner" width="100%" />
                </div>
                <span style={{ fontSize: "25px" }}>
                    Rider term & <span style={{ color: "#F6911E" }} >Conditions</span></span>

                <p>Delivery Partner Agreement</p>
                <div className='terms-and-condition-description'>
                    <p>(Please read carefully)</p>
                    <p>This document (hereinafter “Agreement”) is a legal contract between you (Delivery Partner) and “HANDOVER MOBILITY PRIVATE LIMITED” (hereinafter, “Handover”), a company registered under the provisions of Companies Act, 1956, having its registered office at 216 A, 4th Floor, Gautam Nagar, Delhi South Delhi DL 110049 IN.</p>
                    <p>By Clicking the “Accept: Button, or by Downloading, Installing or Otherwise using the Application, you agree to abide by the terms of this agreement, if you do not agree to the terms of this agreement, do not download, install or use the application.</p>
                    <p>These terms and conditions are effective from the day of your acceptance in our application, Handover and Delivery Partner are, hereinafter wherever the context arises, referred to collectively as “Parties” or individually as “Party”
                        <br></br> WHEREAS:</p>
                </div>
                <p>WHEREAS:</p>

                <div className='terms-and-condition-description'>
                    <p className='d-flex gap-2'>
                        <img src="./checkbox.png" alt="Checkbox" width="20px" height="20px"></img>
                        You have represented and warranted to Handover that you have a valid registered motor vehicle and a valid driving license and have the necessary expertise and knowledge in order to provide delivery services to our customers who place orders for specific jobs, or orders with the retailers listed on our website or mobile application operated by Handover (“Customers”).
                    </p>
                    <p className='d-flex gap-2'>
                        <img src="./checkbox.png" alt="Checkbox" width="20px" height="20px"></img>
                        On installing the application, providing the required details and documents to Handover, getting a Unique ID & Password and agreeing to the terms of this agreement, you shall consent to provide Services, defined hereinafter, as a Delivery Partner, on a non-exclusive, principle to principle basis, as per the terms and conditions laid down further in this Agreement .
                    </p>

                </div>
                <p>Permission Requirements for Enhanced App Functionality</p>
                <p className='sub-heading'>Location Data Collection for Pickup and Delivery Address</p>
                <p className='d-flex gap-2 terms-and-condition-description'>
                    <img src="./checkbox.png" alt="Checkbox" width="20px" height="20px"></img>
                    You have represented and warranted to Handover that you have a valid registered motor vehicle and a valid driving license and have the necessary expertise and knowledge in order to provide delivery services to our customers who place orders for specific jobs, or orders with the retailers listed on our website or mobile application operated by Handover (“Customers”).
                </p>

                <p className='sub-heading'>Permission Requirements for Enhanced App Functionality</p>

                <p className='d-flex gap-2 terms-and-condition-description'>
                    <img src="./checkbox.png" alt="Checkbox" width="20px" height="20px"></img>
                    In addition to location data, the Handover app may require the following permissions to provide an enhanced user experience:
                    1. SMS (Short Message Service): The app may request permission to access SMS functionality to automatically retrieve verification codes or important order-related messages, ensuring a seamless user experience during the verification and communication process.2. Phone: The app may request permission to access the phone functionality to enable direct calling for customer support or driver-customer communication, facilitating efficient and effective communication between all parties involved in the delivery process.
                </p> <p className='d-flex gap-2 terms-and-condition-description'>
                    <img src="./checkbox.png" alt="Checkbox" width="20px" height="20px"></img>
                    Audio Recording:The app may request permission to access the device’s microphone to enable audio recording for voice-based interactions, such as recording notes or capturing verbal instructions during delivery pickups and drop-offs. This feature ensures accurate and convenient communication between users and delivery personnel.
                </p> <p className='d-flex gap-2 terms-and-condition-description'>
                    <img src="./checkbox.png" alt="Checkbox" width="20px" height="20px"></img>
                    You have represented and warranted to Handover that you have a valid registered motor vehicle and a valid driving license and have the necessary expertise and knowledge in order to provide delivery services to our customers who place orders for specific jobs, or orders with the retailers listed on our website or mobile application operated by Handover (“Customers”).
                </p>

                {readMore && (<div>
                    <p className='terms-and-condition-description'>Rest assured that all requested permissions are solely utilized to enhance the app’s functionality and provide a smooth and efficient delivery experience. Handover prioritizes user privacy and data security, ensuring that collected data is handled responsibly and in compliance with applicable privacy laws and regulations.</p>

                    <p>NOW THEREFORE, THIS AGREEMENT WITNESSES AS UNDER</p>

                    <p className='sub-heading'>Definitions</p>

                    <p className='d-flex gap-2 terms-and-condition-description'>
                        <img src="./checkbox.png" alt="Checkbox" width="20px" height="20px"></img>
                        “Agreement” shall mean this Delivery Partner Agreement and shall include any modifications of this Agreement as may be updated from time to time
                    </p> <p className='d-flex gap-2 terms-and-condition-description'>
                        <img src="./checkbox.png" alt="Checkbox" width="20px" height="20px"></img>
                        “Means of Communication” includes any communication issued by Handover on Delivery Partner’s registered Mobile number or Handover’s Application
                    </p>
                    <p className='d-flex gap-2 terms-and-condition-description'>
                        <img src="./checkbox.png" alt="Checkbox" width="20px" height="20px"></img>
                        “Services” shall mean the service of pickup & delivery of products as per the allowed list of products of Handover and in case a Customer chooses
                        to pay at the time of delivery, collection of cash from the Customer and depositing the same in accordance with Handover’s process and instructions
                    </p>
                    <p className='d-flex gap-2 terms-and-condition-description'>
                        <img src="./checkbox.png" alt="Checkbox" width="20px" height="20px"></img>
                        “Term” shall mean the duration of association with Handover as a Delivery Partner, which shall be at the sole discretion of Handover and shall be the4
                        period during which you shall have an active login ID and password to work as a Delivery Partner through the Application
                    </p>


                    <p className='sub-heading'>Interpretation</p>

                    <p className='d-flex gap-2 terms-and-condition-description'>
                        <img src="./checkbox.png" alt="Checkbox" width="20px" height="20px"></img>
                        In addition to the above definitions, certain terms may be defined elsewhere in the Agreement and whenever such terms are used, they will have a meaning as such assigned to them
                    </p> <p className='d-flex gap-2 terms-and-condition-description'>
                        <img src="./checkbox.png" alt="Checkbox" width="20px" height="20px"></img>
                        All references in this Agreement to statutory provisions shall be the provisions for the time being in force and shall be construed as including references to any statutory modifications,
                        consolidation or re-enactment for the time being in force and all statutory rules, regulations and orders made pursuant to a statutory provision
                    </p>
                    <p className='d-flex gap-2 terms-and-condition-description'>
                        <img src="./checkbox.png" alt="Checkbox" width="20px" height="20px"></img>
                        Words denoting singular shall include the plural and vice versa. Words denoting gender shall include all genders unless the context otherwise requires
                    </p>
                    <p className='d-flex gap-2 terms-and-condition-description'>
                        <img src="./checkbox.png" alt="Checkbox" width="20px" height="20px"></img>
                        Any reference to “writing” shall include printing, typing and other means of reproducing words in permanent visible form
                    </p>

                    <p className='d-flex gap-2 terms-and-condition-description'>
                        <img src="./checkbox.png" alt="Checkbox" width="20px" height="20px"></img>
                        The terms “include” and “including” shall mean “include without limitation”
                    </p>

                    <p className='d-flex gap-2 terms-and-condition-description'>
                        <img src="./checkbox.png" alt="Checkbox" width="20px" height="20px"></img>
                        The headings, sub-headings, titles, sub-titles to Clauses, Sub-clauses and paragraphs are for information only, shall not form part of the operative provisions of this
                        Agreement or Annexure and shall be ignored in construing the same
                    </p>

                    <p className='sub-heading'>Pricing & Comparisons</p>
                    <p className='d-flex gap-2 terms-and-condition-description'>
                        <img src="./checkbox.png" alt="Checkbox" width="20px" height="20px"></img>
                        The total compensation (Service Fee) for the performance of Services by the Delivery Partner shall be as per the Payout Plan (available for reference in the application). Other compensations specific to city or zone, including incentives other than the Service Fee shall be paid at the sole discretion of Handover, with a right to withdraw or modify at anytime without notice. The Payout Plan is subject to revision by Handover from time to time and the Delivery Partner shall not be entitled to refuse any revision of rates, his only solution being termination of the Agreement post informing Handover, in accordance with Clause 7 below.
                    </p>
                    <p className='d-flex gap-2 terms-and-condition-description'>
                        <img src="./checkbox.png" alt="Checkbox" width="20px" height="20px"></img>
                        The amounts payable to Delivery Partners shall be calculated based on the data collated by Handover by means of the activities recorded on the Application. Handover shall keep a record of the number of hours logged by Delivery Partner and the number of orders serviced successfully and such records shall be made available to the Delivery Partner only on request. Handover shall make the payments to Delivery Partners on a monthly basis, on the basis of the rates laid down in the Payout Plan, subject to any deductions or adjustments as may be applicable ( available for reference in the application).                </p>

                    <p className='d-flex gap-2 terms-and-condition-description'>
                        <img src="./checkbox.png" alt="Checkbox" width="20px" height="20px"></img>
                        The Delivery Partner may raise any issues with respect to the amounts received by him/her and/or any discrepancies in payout, within 24 hours of the receipt of such amounts. Such claims shall be resolved by the authorised representatives by appropriate ad required investigations into the Delivery Partner’s records and discussions with the Delivery Partner.
                    </p>

                    <p className='d-flex gap-2 terms-and-condition-description'>
                        <img src="./checkbox.png" alt="Checkbox" width="20px" height="20px"></img>
                        The amount payable to Delivery Partner, is subject to deduction of tax at source as per the applicable laws.
                    </p>


                    <p className='sub-heading'>Relationship</p>
                    <p className='d-flex gap-2 terms-and-condition-description'>
                        <img src="./checkbox.png" alt="Checkbox" width="20px" height="20px"></img>
                        The Delivery Partner confirms that he/she had been engaged for rendering the Services on a “Non-Exclusive” and “Principle to Principle” basis, and the payment made under this Agreement are based on the various parameters such as distance, waiting time etc and number of orders successfully delivered, subject to any deductions or adjustments as laid down under the Payout Plan.                </p>
                    <p className='d-flex gap-2 terms-and-condition-description'>
                        <img src="./checkbox.png" alt="Checkbox" width="20px" height="20px"></img>
                        The Delivery Partner shall have the sole discretion to decide the time or duration for which he/she will log into Handover’s mobile application to render the services.                </p>

                    <p className='d-flex gap-2 terms-and-condition-description'>
                        <img src="./checkbox.png" alt="Checkbox" width="20px" height="20px"></img>
                        Nothing in this Agreement shall in any manner o form be construed as amounting to partnership, agency, employer and employee relationship, or creation of any other legal relationship whatsoever between the Parties.                </p>

                    <p className='d-flex gap-2 terms-and-condition-description'>
                        <img src="./checkbox.png" alt="Checkbox" width="20px" height="20px"></img>
                        Neither Party shall have any authority to bind the other for the performance of any obligations other than as specifically defined in this Agreement.                </p>



                    <p className='sub-heading'>Service Terms</p>
                    <p className='d-flex gap-2 terms-and-condition-description'>
                        <img src="./checkbox.png" alt="Checkbox" width="20px" height="20px"></img>
                        Handover will provide customer cargo to the delivery partner for pick up and drop that is transportation of the consignment of its customers.
                    </p>
                    <p className='d-flex gap-2 terms-and-condition-description'>
                        <img src="./checkbox.png" alt="Checkbox" width="20px" height="20px"></img>
                        Handover will try and provide the delivery partner with as many orders as possible without any minimum guarantee of business. The business thus provided will be purely based on demand generated.
                    </p>
                    <p className='d-flex gap-2 terms-and-condition-description'>
                        <img src="./checkbox.png" alt="Checkbox" width="20px" height="20px"></img>
                        Handover will charge a commission per transaction from the total cost of the transaction and then pay the delivery partner the remaining amount on weekly basis. The remittances shall be done directly into the bank accounts of the delivery partner only.
                    </p>
                    <p className='d-flex gap-2 terms-and-condition-description'>
                        <img src="./checkbox.png" alt="Checkbox" width="20px" height="20px"></img>
                        Handover shall not be liable for any damage to goods/cargo being hauled by the delivery partner and any such incident shall be sole responsibility of the delivery partner and/or the transporter only.                </p>
                    <p className='d-flex gap-2 terms-and-condition-description'>
                        <img src="./checkbox.png" alt="Checkbox" width="20px" height="20px"></img>
                        Delivery partner and/or driver shall at no point in time have a direct dealing and/or acquire the customers of Handover and in any such situation, Handover reserves right to immediately impose a ban on the vehicle and/or transporter.                </p>


                    <p className='sub-heading'>Statutory Requirements</p>
                    <p className='d-flex gap-2 terms-and-condition-description'>
                        <img src="./checkbox.png" alt="Checkbox" width="20px" height="20px"></img>
                        Both Parties shall take all such actions as may be required under the circumstances to enable them to remain in good standing and to obtain and keep current all Government licenses, permits and approvals and other operational licenses which are necessary and advisable for performance of the respective obligations under this Agreement and each party will indemnify the other party for any claim, action, proceeding, damages in respect of the same.                </p>
                    <p className='d-flex gap-2 terms-and-condition-description'>
                        <img src="./checkbox.png" alt="Checkbox" width="20px" height="20px"></img>
                        The Delivery Partner shall comply with all the Government and Statutory requirements and hereby agrees to indemnify Handover, from time to time, against any and all losses, damages, penalties, action, proceedings etc that maybe be instituted by Government officials or any authority under any law or rule or regulation as may be applicable on account of any lapse or irregularity caused by the Delivery Partner in carrying out such obligations under this Agreement.                </p>
                    <p className='d-flex gap-2 terms-and-condition-description'>
                        <img src="./checkbox.png" alt="Checkbox" width="20px" height="20px"></img>
                        In case the Delivery Partner is registered under GST, the same shall be communicated to Handover.
                    </p>

                    <p className='sub-heading'>Intellectual Property</p>
                    <p className='d-flex gap-2 terms-and-condition-description'>
                        <img src="./checkbox.png" alt="Checkbox" width="20px" height="20px"></img>
                        Delivery Partner recognises that Handover is registered owner of the word mark Handover and the Logo of Handover including but not limited to its variants and shall not directly or indirectly, involve in harming the validity of Handover or its affiliates’ proprietary rights, in the Licensed Marks or any registrations thereof, or file any applications for registration of the Licensed Marks or any names or logos derived from or confusingly similar to the Licensed Marks, any variation thereof or any translation thereof in any other language , in any territory throughout the world.
                    </p>
                    <p className='d-flex gap-2 terms-and-condition-description'>
                        <img src="./checkbox.png" alt="Checkbox" width="20px" height="20px"></img>
                        The Delivery Partner shall not, by the performance of any of the Services or otherwise, acquire any rights in or to use any trademark, service mark, corporate name, copyright, patent or trade secret or collectively referred to as Intellectual Property “IP”, developed, owned, used or adopted by Handover or any of its affiliates now or in the future, whether or not such IP is registered.
                    </p>
                    <p className='d-flex gap-2 terms-and-condition-description'>
                        <img src="./checkbox.png" alt="Checkbox" width="20px" height="20px"></img>
                        During the Term of this Agreement, the Delivery Partner shall only use such UP as explicitly permitted to be used by Handover and only in the course of performance of the Services as directed by Handover pursuant to this Agreement.
                    </p>

                    <p className='sub-heading'>Indemnity</p>
                    <p className='d-flex gap-2 terms-and-condition-description'>
                        <img src="./checkbox.png" alt="Checkbox" width="20px" height="20px"></img>
                        It is expressly understood that Delivery partner is an independent entity and Handover has no control or supervision over the Delivery Partner with respect to the amount of time for which, and the manner in which he/she carries out his/her obligations under this Agreement.                </p>
                    <p className='d-flex gap-2 terms-and-condition-description'>
                        <img src="./checkbox.png" alt="Checkbox" width="20px" height="20px"></img>
                        It is hereby expressly stated that the Delivery Partner shall have complete responsibility to comply with all the applicable laws, orders, rules & regulations of Government, Statutory or appropriate jurisdiction. In this regard, Delivery Partner shall always keep Handover indemnified, and shall hold Handover harmless against any proceedings or prosecution initiated by any statutory body or third party and shall bear the costs of such proceedings or prosecution , including lawyer’s fee and related expenses.                </p>
                    <p className='d-flex gap-2 terms-and-condition-description'>
                        <img src="./checkbox.png" alt="Checkbox" width="20px" height="20px"></img>
                        The Delivery Partner shall indemnify and hold Handover and its officers, directors, employees and contractors, harmless and shall on demand, promptly reimburse them for any or all payments of money including fines, damages, legal fee and expenses by reason of any claim, demand, liability, tax, or judicial or administrative investigation or proceeding                </p>

                    <ul style={{ fontWeight: '300' }}>
                        <li>Arising from any act, omission or obligation of the Delivery Partner or anyone hired, employed by or associated or affiliated to the Delivery Partner.</li>
                        <li>Otherwise with respect to the Delivery Partner’s performance or the Services and not arising from the fault or negligence of Handover.</li>
                    </ul>

                    <p className='sub-heading'>Termination & Suspension of Services</p>
                    <p className='sub-heading'>Termination of the relationship between Handover and the Delivery Partner, shall be effected in the following manner</p>

                    <p className='d-flex gap-2 terms-and-condition-description'>
                        <img src="./checkbox.png" alt="Checkbox" width="20px" height="20px"></img>
                        In the event of the breach of the Terms of this Agreement by the Delivery Partner, or Handover discovering any breach of the obligations or of the Guidelines( available for reference in the Application) by the Delivery partner or any incurable lapse in the Services performed by the Delivery Partner, Handover may immediately notify Delivery Partner of such breach and deactivate the login ID provided for Delivery Partner to login to the Mobile Application. Provided the acts or omissions resulting in situations including and not limited to tampering of the package, affecting the hygiene of food products being delivered or violation if applicable laws may be considered as incurable lapse. Handover shall in such cases, calculate the amount payable to the Delivery Partner according to the Payout Plan and complete full and final settlement of all payable amounts within 45 days from the date of deactivation of the account, subject to clause 7.3.3                </p>
                    <p className='d-flex gap-2 terms-and-condition-description'>
                        <img src="./checkbox.png" alt="Checkbox" width="20px" height="20px"></img>
                        Handover, may at any point decide to terminate thus Agreement, and shall provide 7 days’ notice of such termination to the Delivery Partner. The Login ID provided to the Delivery Partner shall be deactivated on the 7th Day and Handover shall complete the full and final settlement within 45 days from the date of deactivation of the account, subject to clause 7.3.3
                    </p>
                    <p className='d-flex gap-2 terms-and-condition-description'>
                        <img src="./checkbox.png" alt="Checkbox" width="20px" height="20px"></img>
                        The Delivery Partner may notify Handover representative of his/her intention to terminate the Agreement with Handover, atleast 7 days prior to such intended termination. The login ID provided to the Delivery Partner shall be deactivated on the 7th Day and Handover shall complete the full and final settlement within 45 days from the date of deactivation of the account, subject to clauses 7.3.3 & 7.5                </p>

                    <p className='d-flex gap-2 terms-and-condition-description'>
                        <img src="./checkbox.png" alt="Checkbox" width="20px" height="20px"></img>
                        In the event the Delivery Partner fails to notify Handover of his/her intention to terminate the Agreement as specified under previous clause and uninstall the mobile application, Handover shall not be liable to settle any amount payable to Delivery Partner.                </p>
                    <p className='d-flex gap-2 terms-and-condition-description'>
                        <img src="./checkbox.png" alt="Checkbox" width="20px" height="20px"></img>
                        Handover also reserves the right to terminate the Agreement where the Delivery Partner is (a) not carrying the field bags and / or (b) not wearing the uniform provided by Handover, while performing the Services.
                    </p>

                    <p className='sub-heading'>Handover may, at any point, contact Delivery Partner by the way of Means of Communication</p>

                    <p className='d-flex gap-2 terms-and-condition-description'>
                        <img src="./checkbox.png" alt="Checkbox" width="20px" height="20px"></img>
                        Handover may, at any point, contact Delivery Partner by the way of Means of Communication or by directly contacting the Delivery Partner, to notify him/her of any breach of any term of this Agreement. Handover, may at its sole discretion give Delivery Partner 15 days to rectify the breach, and in case of rectification of breach by the Delivery Partner as per Handover’s satisfaction, Handover may elect to not terminate the Agreement , however shall have right to suspend the Services during the notice period.
                    </p>

                    <p className='sub-heading'>Handover may, at any point, contact Delivery Partner by the way of Means of Communication</p>

                    <p className='d-flex gap-2 terms-and-condition-description'>
                        <img src="./checkbox.png" alt="Checkbox" width="20px" height="20px"></img>
                        All rights granted to Delivery Partner under or pursuant to this Agreement shall cease, and the Delivery Partner shall gave no further rights or obligation to perform the Services                </p>
                    <p className='d-flex gap-2 terms-and-condition-description'>
                        <img src="./checkbox.png" alt="Checkbox" width="20px" height="20px"></img>
                        Each Party shall immediately cease its activities concerning the Services under the Agreement, subject to Delivery Partner completing the orders that have been allocated prior to the termination.                </p>
                    <p className='d-flex gap-2 terms-and-condition-description'>
                        <img src="./checkbox.png" alt="Checkbox" width="20px" height="20px"></img>
                        On Handover instructing the Delivery Partner to do so, the Delivery Partner shall promptly return all the assets including but not limited to all sales literature, brochures, samples, packaging, invoices, delivery records, waybills and other materials or facilities, of any kind furnished by or owned by Handover.                </p>
                    <p className='d-flex gap-2 terms-and-condition-description'>
                        <img src="./checkbox.png" alt="Checkbox" width="20px" height="20px"></img>
                        Handover shall pay the requisite dues to the Delivery Partner as per the Payout Plan, subject to any penalties or deductions that may be applicable as set out herein or in the Payout Plan for the Services rendered upto the date of termination of this Agreement and the Delivery Partner shall also settle all outstanding dues, if any, payable to Handover.
                    </p>
                    <p className='d-flex gap-2 terms-and-condition-description'>
                        <img src="./checkbox.png" alt="Checkbox" width="20px" height="20px"></img>
                        The clauses pertaining to Intellectual Property, Indemnity, Confidentiality and Arbitration shall survive termination of this Agreement.
                    </p>

                    <p className='sub-heading'>
                        Subject to Clause 7.1.4, in the event the Delivery Partner terminates the Agreement without notice, Handover shall be entitled to deduct the following amounts forthwith (in addition to any amounts due from the Delivery Partner to Handover as determined at the time of calculating the full and final settlement in case Delivery partner returns at later date for settlement if amount payable to him), from the amount payable to the Delivery Partner.</p>

                    <p className='d-flex gap-2 terms-and-condition-description'>
                        <img src="./checkbox.png" alt="Checkbox" width="20px" height="20px"></img>
                        INR X, as recovery of sourcing and onboarding costs, in the event if Delivery Partner leaves without notifying Handover of his/her intent of termination of this Agreement within 1st year of his/her appointment.                </p>

                    <p className='d-flex gap-2 terms-and-condition-description'>
                        <img src="./checkbox.png" alt="Checkbox" width="20px" height="20px"></img>
                        Any amounts applicable as TDS to be withheld by Handover at the time of making pay-outs.
                    </p>

                    <p className='d-flex gap-2 terms-and-condition-description'>
                        <img src="./checkbox.png" alt="Checkbox" width="20px" height="20px"></img>
                        Administrative chargesThis clause shall apply is Handover during inspection of Services concludes that the Delivery Partner has ceased to perform his/her obligations and has failed to notify Handover of his/her intention to terminate this Agreement, or has uninstalled the Mobile Application without notice to HandoverAll the above charges are inclusive of any applicable taxes including but not limited to GST                </p>

                    <p className='sub-heading'>
                        In the event the Delivery Partner terminates the Agreement within 1 month from his/her appointment in accordance with clause 7.1.3, at the time of calculating the full and final settlement, Handover shall be entitled to withhold the following amounts</p>
                    <p className='d-flex gap-2 terms-and-condition-description'>
                        <img src="./checkbox.png" alt="Checkbox" width="20px" height="20px"></img>
                        Training & onboarding costsAll the above charges are inclusive of any applicable taxes including but not limited to GST
                    </p>

                    <p className='sub-heading'>
                        Handover shall be entitled to make the following deductions from the amount Payable to the Delivery Partner, in the event the Delivery Partner terminates the Agreement, with or without giving notice:
                    </p>
                    <p className='d-flex gap-2 terms-and-condition-description'>
                        <img src="./checkbox.png" alt="Checkbox" width="20px" height="20px"></img>
                        Such amounts as collected from the Customers and not deposited by the Delivery Partner in accordance to the processes of Handover.
                    </p>
                    <p className='d-flex gap-2 terms-and-condition-description'>
                        <img src="./checkbox.png" alt="Checkbox" width="20px" height="20px"></img>
                        Such costs of field bags, uniform or any other marketing collaterals or Handover property that Delivery Partner fails to return.
                    </p>

                    <p className='sub-heading'>
                        Confidentiality
                    </p>
                    <p className='d-flex gap-2 terms-and-condition-description'>
                        <img src="./checkbox.png" alt="Checkbox" width="20px" height="20px"></img>
                        Each Party acknowledges that during the performance of this Agreement, the other Party may disclose certain confidential information to such Party to further the performance of this Agreement. For purpose of this Agreement, the term “Confidential Information”, means any and all oral and written information that is not generally known and that the receiving party obtained in the performance of its service o the disclosing party. The term “Confidential Information” shall include, but shall not be limited to, Intellectual Property, classified information, inventions , ideas, processes , research and development information, business plans and processes, pricing and discount policies of the products or services and any other information that the disclosing Party may disclose to the receiving Party, or that receiving Party may know by virtue of its position or the circumstances in which it learned it.
                    </p>

                    <p className='d-flex gap-2 terms-and-condition-description'>
                        <img src="./checkbox.png" alt="Checkbox" width="20px" height="20px"></img>
                        Each Party agrees that during the Term of this Agreement it will (a) not disclose any Confidential Information to any third party without the prior written consent of the disclosing Party (b) not reproduce Confidential Information in any form except as required to perform its obligations under this Agreement (c) not publish, decompile or disassemble any Confidential Information disclosed by the disclosing Party (d) not directly or indirectly export or transmit any Confidential Information to any Country to which such export or transmission is restricted by regulation or statute in India and ( e) promptly provide the other Party with written notice of any actual or threatened breach of the clause                </p>

                    <p className='d-flex gap-2 terms-and-condition-description'>
                        <img src="./checkbox.png" alt="Checkbox" width="20px" height="20px"></img>
                        The provisions of the clause 9.2 shall not apply to:
                    </p>
                    <ul style={{ fontWeight: "300" }}>
                        <li>Disclosure of Confidential Information that is or becomes generally available to the public other than as a result of disclosure by or at the direction of a Party in violation of this Agreement or</li>
                        <li>Disclosure, after giving prior written notice to the other Party, to the extent practicable under the circumstance or subject to any practicable arrangements to protect confidentiality, to the extent required under applicable Laws, regulations or processes of any government authority or in connection with any judicial process regarding any legal action, suit or proceeding arising out of or relating to this Agreement</li>
                    </ul>

                    <p className='d-flex gap-2 terms-and-condition-description'>
                        <img src="./checkbox.png" alt="Checkbox" width="20px" height="20px"></img>
                        The receiving Party further agrees that upon expiry or termination of this Agreement, it shall not itself or through any agent or otherwise, sell, license , sub-license, market, distribute or otherwise deal with any Confidential Information (in whole or in part) except to the extent permitted by the disclosing party in writing
                    </p>

                    <p className='d-flex gap-2 terms-and-condition-description'>
                        <img src="./checkbox.png" alt="Checkbox" width="20px" height="20px"></img>
                        The receiving Party acknowledges that breach of Clause 9 may result in an irreparable harm to the disclosing Party which is not capable of being assigned a value and which cannot be adequately compensated by the recovery of damages alone and that the disclosing Party shall be entitled to seek any remedy available to it under the Law for the time being in force                </p>

                    <p className='d-flex gap-2 terms-and-condition-description'>
                        <img src="./checkbox.png" alt="Checkbox" width="20px" height="20px"></img>
                        Publicity: The Delivery Partner shall not issue any press releases or announcements, or any marketing, advertising or other promotional materials, related to this Agreement or referring Handover or its trade names, trademarks or service marks without the prior written approval of Handover
                    </p>

                    <p className='sub-heading'>
                        Amendments
                    </p>

                    <p style={{ fontWeight: '300' }}>
                        This Agreement may be altered / amended / modified at any point of time by Handover, during the Term of the Agreement and the Delivery Partner shall receive a notification of the same, by way of notification on the mobile application
                    </p>

                    <p className='sub-heading'>
                        Entire Agreement
                    </p>
                    <p className='d-flex gap-2 terms-and-condition-description'>
                        <img src="./checkbox.png" alt="Checkbox" width="20px" height="20px"></img>
                        This Agreement, together with the Terms & Conditions, Privacy Policy, Payout Plan and Guideline document, constitute the entire agreement between the parties with respect to the subject matter hereof and supersedes all prior documents.
                    </p>
                    <p className='d-flex gap-2 terms-and-condition-description'>
                        <img src="./checkbox.png" alt="Checkbox" width="20px" height="20px"></img>
                        If any provision of this Agreement is found to be unenforceable in any jurisdiction, the balance of this Agreement shall not be affected by the unenforceable provision and such provision, if feasible, shall be modified in scope so that it becomes enforceable.
                    </p>

                    <p className='sub-heading'>
                        Dispute Resolution
                    </p>
                    <p className='d-flex gap-2 terms-and-condition-description'>
                        <img src="./checkbox.png" alt="Checkbox" width="20px" height="20px"></img>
                        This Agreement shall be governed by the laws of India and subject to Clauses 12.2 & 12.3, the courts at Delhi, shall have the jurisdiction over all matters of dispute arising out of or pertaining to the Agreement                </p>
                    <p className='d-flex gap-2 terms-and-condition-description'>
                        <img src="./checkbox.png" alt="Checkbox" width="20px" height="20px"></img>
                        Any dispute, difference, claim, counter-claim arising out of, under or in connection with this Agreement or any other breach thereof shall be resolved by mutual negotiations, by and between the parties.                </p>
                    <p className='d-flex gap-2 terms-and-condition-description'>
                        <img src="./checkbox.png" alt="Checkbox" width="20px" height="20px"></img>
                        In the event Parties are unable to resolve the dispute amicably, either Party may refer such dispute to arbitration to be conducted under the aegis of sole arbitrator, who shall be appointed by a court of competent jurisdiction. The arbitration shall be conducted in accordance with the Indian Arbitration & Conciliation Act, 1996 and the rules made thereunder.
                    </p>



                    <p className='sub-heading'>
                        Records, Inspection & Right to Audit
                    </p>

                    <p style={{ fontWeight: '300' }}>
                        The Delivery Partner agrees to disclose to Handover all information with regards to the Services and the activities performed in relation to this Agreement and make available all records, data and information relating thereto as and when required by Handover.                </p>
                </div>)}

                <div className='d-flex justify-content-end' style={{ cursor: "pointer" }}
                    onClick={() => setReadMore(!readMore)}>
                    {readMore ? "Read less -" : "Read More + "}
                </div>
            </Container>



            <Footer />
        </section >)
}

export default TermsAndConditions;