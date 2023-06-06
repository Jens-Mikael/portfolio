"use client";
import { sendContactForm } from "@/lib/api";
import { useState } from "react";
import { Bars } from "react-loader-spinner";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (name === null || email === null || message === null) return;
    const data = {
      name,
      email,
      subject,
      message,
    };
    try {
      setLoading(true);
      const res = await sendContactForm(data);
      setLoading(false);

      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="mt-10 flex w-full max-w-[600px] flex-col gap-5 rounded-xl border  border-slate-200 bg-white p-10 dark:border-slate-500 dark:bg-slate-700 sm:min-w-[400px] lg:min-w-[500px] ">
      <div className="flex flex-col gap-2">
        <div className=" font-semibold dark:font-bold dark:text-slate-300">
          Name
        </div>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="w-2/3 rounded-lg border border-slate-400 bg-transparent px-3 py-2 focus:outline-blue-400"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="font-semibold dark:font-bold dark:text-slate-300">
          Email
        </div>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="w-2/3 rounded-lg border border-slate-400 bg-transparent px-3 py-2 focus:outline-blue-400"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="font-semibold dark:font-bold dark:text-slate-300">
          Subject
        </div>
        <input
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          type="text"
          className="w-2/3 rounded-lg border border-slate-400 bg-transparent px-3 py-2 focus:outline-blue-400"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="font-semibold dark:font-bold dark:text-slate-300">
          Message
        </div>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="8"
          className="w-full resize-none rounded-lg border border-slate-400 bg-transparent px-3 py-2 focus:outline-blue-400 "
        />
      </div>
      <div className="flex justify-center mt-5">
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
                onClick={(e) => handleSubmit(e)}
                className="w-min rounded-md bg-rose-500 px-8 py-3  font-bold text-slate-50 transition hover:scale-110"
              >
                SUBMIT
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
