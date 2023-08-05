import React from 'react';
import carshow from '../../resourse/images/carshow.webp';
import Image from 'next/image';

function Contact() {
  return (
    <div className="px-[3vw] py-[10vh] bg-[#f5f5f5]">
      <div className="flex items-center gap-10 mb-20">
        <h1 className="text-6xl font-bold">CONTACT US</h1>
        <hr className="hr-line-contact" />
      </div>
      <div className="flex justify-center items-center gap-20 ">
        <div className="flex flex-col w-[40vw] gap-8 my-10 ">
          <input
            type="text"
            placeholder="Name"
            className="border border-t-0 border-l-0 border-r-0 bg-[#f5f5f5] focus:outline-none"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="border border-t-0 border-l-0 border-r-0 bg-[#f5f5f5] focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-t-0 border-l-0 border-r-0 bg-[#f5f5f5] focus:outline-none"
          />
          <textarea
            name="Message"
            cols={30}
            rows={7}
            className="border border-t-0 border-l-0 border-r-0 text-[#9ba3af] bg-[#f5f5f5] focus:outline-none"
          >
            Message:
          </textarea>
        </div>
        <div>
          <Image src={carshow} alt="carshow-image" width={500} />
        </div>
      </div>
    </div>
  );
}

export default Contact;
