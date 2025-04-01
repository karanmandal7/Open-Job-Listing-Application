import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { axiosClient } from '../utils/utils';

const ContactPage = () => {
  const initialStates = {
    name: '',
    email: '',
    message: '',
    subject: ''
  };

  const validationSchema = yup.object({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    message: yup.string().required('Message is required'),
    subject: yup.string().required('Subject is required')
  });

  const onSubmitHandler = async (values, helpers) => {
    try {
      const response = await axiosClient.post("/contact", values);
      const data = await response.data;
      toast.success(data.msg);
      helpers.resetForm();
    } catch (error) {
      toast.error(error.response?.data?.msg || "Something went wrong!");
    }
  };

  return (
    <div className="p-6 mx-auto max-w-xl bg-white shadow-md rounded-md">
      <h1 className="text-3xl text-slate-900 font-semibold text-center">Contact Us</h1>
      <Formik validationSchema={validationSchema} initialValues={initialStates} onSubmit={onSubmitHandler}>
        {({ isSubmitting }) => (
          <Form className="mt-6 space-y-5">
            <div>
              <label className="text-sm text-slate-800 font-medium mb-2 block">Name</label>
              <Field name="name" type="text" placeholder="Enter Name" className="w-full py-2.5 px-4 text-slate-800 bg-gray-100 border rounded-md focus:border-slate-900 focus:bg-transparent text-sm outline-none transition-all" />
              <ErrorMessage name='name' component='p' className='text-xs text-red-500' />
            </div>
            <div>
              <label className="text-sm text-slate-800 font-medium mb-2 block">Email</label>
              <Field name="email" type="email" placeholder="Enter Email" className="w-full py-2.5 px-4 text-slate-800 bg-gray-100 border rounded-md focus:border-slate-900 focus:bg-transparent text-sm outline-none transition-all" />
              <ErrorMessage name='email' component='p' className='text-xs text-red-500' />
            </div>
            <div>
              <label className="text-sm text-slate-800 font-medium mb-2 block">Subject</label>
              <Field name="subject" type="text" placeholder="Enter Subject" className="w-full py-2.5 px-4 text-slate-800 bg-gray-100 border rounded-md focus:border-slate-900 focus:bg-transparent text-sm outline-none transition-all" />
              <ErrorMessage name='subject' component='p' className='text-xs text-red-500' />
            </div>
            <div>
              <label className="text-sm text-slate-800 font-medium mb-2 block">Message</label>
              <Field as="textarea" name="message" placeholder="Enter Message" rows={4} className="w-full px-4 py-2 text-slate-800 bg-gray-100 border rounded-md focus:border-slate-900 focus:bg-transparent text-sm outline-none transition-all" />
              <ErrorMessage name='message' component='p' className='text-xs text-red-500' />
            </div>
            <button type="submit" className="mt-6 text-white bg-blue-600 hover:bg-blue-700 tracking-wide text-[15px] px-4 py-2 w-full outline-none rounded-md transition-all" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactPage;
