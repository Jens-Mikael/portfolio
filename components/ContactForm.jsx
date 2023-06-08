"use client";
import { useState, useRef } from "react";
import { Bars } from "react-loader-spinner";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

    setLoading(true);

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
        setSubmitted(true);
        setLoading(false);
      },
      (error) => {
        console.log(error.text);
        setError(err.message);
        setLoading(false);
      }
    );
    e.target.reset();
  };

  return (
    <form ref={form} onSubmit={(e) => handleSubmit(e)}>
      <div className="mt-10 flex w-full max-w-[600px] flex-col gap-5 rounded-xl border  border-slate-200 bg-white p-10 dark:border-slate-500 dark:bg-slate-700 sm:min-w-[400px] lg:min-w-[500px] ">
        <div className="flex flex-col gap-2">
          <div className=" font-semibold dark:font-bold dark:text-slate-300">
            Name
          </div>
          <input
            name="name"
            type="text"
            required
            className="w-2/3 rounded-lg border border-slate-400 bg-transparent px-3 py-2 focus:outline-blue-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-semibold dark:font-bold dark:text-slate-300">
            Email
          </div>
          <input
            name="email"
            type="email"
            required
            className="w-2/3 rounded-lg border border-slate-400 bg-transparent px-3 py-2 focus:outline-blue-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-semibold dark:font-bold dark:text-slate-300">
            Subject
          </div>
          <input
            name="subject"
            required
            type="text"
            className="w-2/3 rounded-lg border border-slate-400 bg-transparent px-3 py-2 focus:outline-blue-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-semibold dark:font-bold dark:text-slate-300">
            Message
          </div>
          <textarea
            name="message"
            rows="8"
            required
            className="w-full resize-none rounded-lg border border-slate-400 bg-transparent px-3 py-2 focus:outline-blue-400 "
          />
        </div>
        <div className="flex flex-col justify-center items-center mt-5 gap-10">
          {error !== "" && <div>{error}</div>}
          <div className="h-14 items-center justify-center flex">
            {loading ? (
              <>
                <Bars
                  height="50"
                  weight="50"
                  color="#f43f5e"
                  ariaLabel="bars-loading"
                  visible={true}
                />
              </>
            ) : submitted ? (
              <>
                <div className="text-green-400 text-lg border w-max border-green-400 rounded-lg py-2 px-4">
                  Your message has been sent successfully!
                </div>
              </>
            ) : (
              <>
                <button
                  type="submit"
                  className="w-min rounded-md bg-rose-500 px-8 py-3  font-bold text-slate-50 transition hover:scale-110"
                >
                  SUBMIT
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
