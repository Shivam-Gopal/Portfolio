import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import { github,linkedin,leetcode,gfg,insta } from "../assets";


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Shivam Gopal",
          from_email: form.email,
          to_email: "shivamgopal889@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
        <p class="relative text-center text-gray-600 my-4 before:absolute before:left-0 before:top-1/2 before:w-1/3 before:border-t before:border-gray-400 
                  after:absolute after:right-0 after:top-1/2 after:w-1/3 after:border-t after:border-gray-400">
            OR
        </p>
        <div className="flex flex-wrap gap-4 justify-center my-6">
            <button
              onClick={() => window.open("https://www.linkedin.com/in/shivam-gopal/", "_blank")}
              className="flex items-center justify-center px-6 py-2 bg-white hover:bg-gray-100 border border-gray-300 rounded-lg shadow-md transition-all duration-300"
            >
              <img src={linkedin} alt="LinkedIn" className="w-22 h-5" />
            </button>
          
          <button
            onClick={() => window.open("https://github.com/Shivam-Gopal", "_blank")}
            className="flex items-center gap-2 px-6 py-2 text-white bg-gray-800 hover:bg-gray-900 rounded-lg shadow-md transition-all duration-300"
          >
            <img src={github} alt="" className="w-5 h-5" />
            <span className="font-medium">GitHub</span>
          </button>
          
          <button
            onClick={() => window.open("https://leetcode.com/u/Shivam_Gopal_/", "_blank")}
            className="flex items-center gap-2 px-6 py-2 text-white bg-yellow-500 hover:bg-yellow-600 rounded-lg shadow-md transition-all duration-300"
          >
            <img src={leetcode} alt="LeetCode" className="w-3.5 h-4" />
            <span className="font-medium">LeetCode</span>
          </button>
          
          <button
            onClick={() => window.open("https://www.geeksforgeeks.org/user/shivamgopal889/", "_blank")}
            className="px-6 py-2 text-white bg-green-600 hover:bg-green-700 rounded-lg shadow-md transition-all duration-300"
          >
            GfG
          </button>
          
          <button
            onClick={() => window.open("https://www.instagram.com/shivam_gopal_/", "_blank")}
            className="flex items-center gap-1 px-6 py-2 text-white bg-pink-500 hover:bg-pink-600 rounded-lg shadow-md transition-all duration-300"
          >
            <img src={insta} alt="Instagram" className="w-4 h-4" />
            <span className="font-medium">Instagram</span>
          </button>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
