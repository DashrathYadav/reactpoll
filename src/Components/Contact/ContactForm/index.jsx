import {React,useRef} from "react";
import { Formik, Form, FastField, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "../../common/button/index";
import { Input } from "../../common/Input/index";
import { Error, Center, InputField } from "./styles";
import emailjs from '@emailjs/browser';



const ContactForm = () => {
	const form = useRef();
	return(
	<Formik
		initialValues={{
			user_name: "",
			user_email: "",
			message: "",
			recaptcha: "",
			success: false,
		}}

		validationSchema={Yup.object().shape({
			user_name: Yup.string().required("Full name field is required"),
			user_email: Yup.string()
				.email("Invalid email")
				.required("Email field is required"),
			message: Yup.string().required("Message field is required")
			
		})}
		onSubmit={async (
			{ user_name, user_email, message },
			{ setSubmitting, resetForm, setFieldValue }
		) => {
			try{
				console.log(form.current);
			emailjs.sendForm('service_hkdwyzf', 'template_0p13mz6', form.current , 'HozTldGCyto4i3deD')
			  .then((result) => {
				  console.log(result.text);
			  }, (error) => {
				  console.log(error.text);
			  });
				
				setSubmitting(false);
				setFieldValue("success", true);
				setTimeout(() => resetForm(), 6000);
			}catch(err){
				setSubmitting(false);
				setFieldValue("success", false);
				alert("Something went wrong, please try again!");
			}
			

		}}
	>
		{({ values, touched, errors, setFieldValue, isSubmitting }) => (
			<Form ref={form}>
				<InputField>
					<Input
						as={FastField}
						type="text"
						name="user_name"
						component="input"
						aria-label="name"
						placeholder="Full name*"
						error={touched.name && errors.name}
					/>
					<ErrorMessage component={Error} name="name" />
				</InputField>
				<InputField>
					<Input
						id="email"
						aria-label="email"
						component="input"
						as={FastField}
						type="email"
						name="user_email"
						placeholder="Email*"
						error={touched.email && errors.email}
					/>
					<ErrorMessage component={Error} name="email" />
				</InputField>
				<InputField>
					<Input
						as={FastField}
						component="textarea"
						aria-label="message"
						id="message"
						rows="8"
						type="text"
						name="message"
						placeholder="Message*"
						error={touched.message && errors.message}
					/>
					<ErrorMessage component={Error} name="message" />
				</InputField>
				{values.name &&
					values.email &&
					values.message
					}
				{values.success && (
					<InputField>
						<Center>
							<h4>
								Your message has been successfully sent, I will get back to you
								ASAP!
							</h4>
						</Center>
					</InputField>
				)}
				<Center>
					<Button style={{backgroundColor:"red", justifyContent:"center"}} secondary type="submit" disabled={isSubmitting}>
						Submit
					</Button>
				</Center>
			</Form>
		)}
	</Formik>
	)
};

export default ContactForm;
