import React, { useState } from 'react';
import '../styles/style.css';
import github from  "../assets/github.png";
import x from '../assets/twitter.png';
import facebook from '../assets/facebook.png';
import email from '../assets/email.png';
import whatsapp from '../assets/whatsapp.png';
import linkedin from '../assets/linkedin.png';
import Resume from '../assets/Resume.pdf';

const About = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);  // New state for success message

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(null);  // Reset success message

    try {
      const response = await fetch('https://portfolio-backend-ce6g.onrender.com/dm_me', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        throw new Error('Something went wrong with the submission');
      }

      // Reset the form fields after successful submission
      setName('');
      setEmail('');
      setMessage('');
      setSuccess('Your message has been sent successfully!');  // Set success message
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const DownloadCv = () => {
    const url = Resume;
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', Resume);
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <div>
      <div className="words mb-16">
        <h1 className="job text-5xl mt-12 font-semibold mb-12">About <span className="text-purple-500 underline">Joshua</span>.</h1>
        <p className="text-base leading-8 mb-16">
          Hello! I'm Israel Ifeoluwa Joshua, a passionate <span className="text-green-500">Full stack developer</span> with a love for crafting clean, efficient code. With <span className="text-orange-700 underline">4 years</span> of experience in web development, I thrive in dynamic environments where I can apply my skills in both <span className="text-blue-600">Frontend</span> and <span className="text-red-500">Backend</span> technologies.<br />I specialize in creating responsive, user-friendly web applications that offer seamless experiences across devices. Whether it's building robust APIs or designing intuitive user interfaces.
        </p>

        <div className="social-links flex my-6">
          <a href="https://x.com/ifeoluwajohz"><img src={x} alt="" /></a>
          <a href="https://github.com/johzcodes"><img src={github} alt="" /></a>
          <a href="https://www.linkedin.com/in/ifeoluwajohz/"><img src={linkedin} alt="" /></a>
          <a href="https://mail.google.com/mail/u/0/#inbox"><img src={email} alt="" /></a>
          <a href="tel:+8026144324"><img src={whatsapp} alt="" /></a>
          <a href="https://web.facebook.com/profile.php?id=100087388999705"><img src={facebook} alt="" /></a>
        </div>

      </div>
      <div className="achievements mb-10">
        <button className="text-xl text-purple-900 underline font-normal" onClick={DownloadCv}>Download My CV</button>
      </div>
      <div className="message bg-gray-100 p-4 py-8 mb-12">
        <h1 className="text-pink-500 text-3xl submit leading-10 font-bold mb-8">Dm me....</h1>
        <form onSubmit={handleSubmit} action="">
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" required className="bg-white text-sm p-2 pr-12 mb-4" placeholder='Your Name...' /><br />
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required className="bg-white text-sm p-2 pr-20 mb-4" placeholder='Email Address...' /><br />
          <input value={message} onChange={(e) => setMessage(e.target.value)} type="text" required className="bg-white text-sm p-2 pb-12 mb-4 w-72" placeholder='Message...' /><br />
          <button type="submit" className="p-2 px-12 font-bold mt-4 text-white bg-pink-700" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
        {success && <p className="text-green-500 mt-2">{success}</p>}  {/* Display success message */}
        {error && <p className="text-red-500 mt-2">{error}</p>}  {/* Display error message */}
      </div>
    </div>
  );
}

export default About;
