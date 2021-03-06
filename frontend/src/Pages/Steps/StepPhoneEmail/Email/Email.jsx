import React, { useState } from 'react'
import Card from "../../../../Components/Shared/Card/Card.jsx"
import styles from "../StepPhoneEmail.module.css"
import TextInput from '../../../../Components/Shared/TextInput/TextInput.jsx'
import Button from "../../../../Components/Shared/Button/Button.jsx"
import StepPhoneEmail from '../../StepPhoneEmail/StepPhoneEmail';
import StepOtp from '../../StepOtp/StepOtp';
import { sendOtp } from "../../../../http/index.js"
import { setOtp } from "../../../../store/authSlice.js"
import {useDispatch} from "react-redux"

function Email({onNext}) {

  const [email, setEmail] = useState("");
  const dispatch = useDispatch()

  async function submit(){

    // const res = await sendOtp({ email: email });

    const {data} = await sendOtp({ email: email });
    console.log(data)

    dispatch(setOtp({ email: data.email , hash: data.hash }))

     onNext();
   }

  

  return (
    <Card style={styles.card} title="Enter Your Email" icon="email-1">

      <TextInput value={email} onChange={(e) => setEmail(e.target.value)} />
      <div>
        <div className={styles.actionButtonWrap}>
          <Button text="Next" onClick={submit} />
        </div>
      </div>

      <p className={styles.bottomParagraph}>
        Please enter your Email Id <br /> to get otp
      </p>

    </Card>
  )
}

export default Email