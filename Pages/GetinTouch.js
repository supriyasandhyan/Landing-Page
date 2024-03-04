import React from 'react'
import axios from 'axios';
import classes from './CSS/GetinTouch.module.css';
import LocationNew from '../../Image/LocationNew.svg';
import mailNew from '../../Image/mailNew.svg';
import USAFlagNew from '../../Image/USAFlagNew.svg';
import IndiaFlagNew from '../../Image/IndiaFlagNew.svg';
import { useFormik } from 'formik';

const initialValues = {
  name: '',
  email: '',
  projectDesc: '',
}

 const onSubmit=async (data, { setSubmitting,resetForm }) => {
    let details = {
      name: data.name,
      email: data.email,
      projectDesc: data.projectDesc,
    };
    console.log(details)

    // const url = "http://localhost:4800/api/mail?from=360";
    const url = "http://144.91.79.237:8909/api/mail?from=360"

    const res = await new axios.post(url, details);
    console.log("res", res);
    if (res.status === 200) {
      alert("mail sent successfully");
    } else {
      alert("something went wrong...try again");
    }
    resetForm(false);
    setSubmitting(false)
  }

const validate = values => {
  let errors = {}

  if (!values.name) {
    errors.name = 'Required'
  }else if (!/^[a-zA-Z]+ [a-zA-Z]+ |[a-zA-Z]+$/i.test(values.name)){
    errors.name = 'only characters are allowed'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email format'
  }
  if (!values.projectDesc) {
    errors.projectDesc = 'Required'
  }
  return errors
}

function GetinTouch() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  })

  return (
    <div className={classes['touch']} id='GetInTouch'>

      <div className={classes["container"]}>
        <div className={classes["form-container"]}>
          <div className={classes["left-container"]}>
            <div className={classes["left-inner-container"]}>
              <div className={classes["direct-contact-container"]}>
                <div className={classes["contact-list"]}>
                  
                  <div className={classes["list-item"]}>
                    <img src={LocationNew} className={classes["imgg1"]}></img>
                  </div>

                  <div className={classes["contact-text-info"]}>
                      <p className={classes['address']}>41, 4th Floor A-Wing, Todi Industrial Estate, Sun Mill Compound, Lower Parel, Mumbai - 400013</p>
                  </div>
                  

                  <div className={classes["list-item"]}>
                    <img src={mailNew} className={classes["imgg"]}></img>
                  </div>

                    <div className={classes["contact-text-info"]}>
                      <p className={classes['address']}> enquiry@nimapinfotech.com</p>
                    </div>
                 

                  <div className={classes["list-item"]}>
                    <img src={mailNew} className={classes["imgg"]}></img>
                    </div>

                    <div className={classes["contact-text-info"]}>
                      <p className={classes['address']}> sales@nimapinfotech.com</p>
                    </div>
                 

                  <div className={classes["list-item"]}>
                    <img src={IndiaFlagNew} className={classes["imgg"]}></img>
                    </div>

                    <div className={classes["contact-text-info"]}>
                      <p className={classes['address']}> Mumbai | Headquarter <br/> +91 7304121292</p>
                    </div>
                  

                  <div className={classes["list-item"]}>
                    <img src={IndiaFlagNew} className={classes["imgg"]}></img>
                    </div>

                    <div className={classes["contact-text-info"]}>
                      <p className={classes['address']}> Pune | Branch Office <br/> +91 7304121292</p>
                    </div>
                   

                    <div className={classes["list-item"]}>
                    <img src={USAFlagNew} className={classes["imgg"]}></img>
                    </div>
                    
                    <div className={classes["contact-text-info"]}>
                      <p className={classes['address']}> USA<br/> +1 650 763 2218</p>
                    </div>
                   

                </div>
              </div>
            </div>
          </div>

          <div className={classes['right-container']}>
            <div className={classes["right-inner-container"]}>
              <form onSubmit={(e) => { e.preventDefault(); formik.handleSubmit(e)}} className='getform'>
                <label id='get_in_touch'>Get In Touch</label>
                <br/>
                <p className={classes["lg-view"]}>Feel free  to drop us a line below!</p>

                <input
                  className={classes['fillsome']}
                  type="text"
                  placeholder="Your Name "
                  id='name'
                  name='name'
                  maxLength={25}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name} />
                
                <div className={classes['errors']}>
                  {(formik.touched.name && formik.errors.name) ? formik.errors.name : ""}
                </div>

                <input
                  className={classes['fillsome']}
                  type='email'
                  id='email'
                  name='email'
                  placeholder="Your Email"
                  maxLength={30}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email} />
                    
                <div className={classes['errors']}>
                  {(formik.touched.email && formik.errors.email) ? formik.errors.email : ""}
                </div>

                <textarea
                  className={classes['fillsome']}
                  type='text'
                  id='textarea'
                  name='projectDesc'
                  placeholder="Typing your message here..."
                  rows="4"
                  maxLength={500}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.projectDesc}></textarea>
                   <div className='errors'>
                  {(formik.touched.projectDesc && formik.errors.projectDesc) ? formik.errors.projectDesc : ""}
                </div>

                <button type='submit' className={classes['tchbtn']}>
                  Submit</button>
              </form>
            </div>
          </div>

         
        </div>
        </div>
        </div>
  )
}
export default GetinTouch;
