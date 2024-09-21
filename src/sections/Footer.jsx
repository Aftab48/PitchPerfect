import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 py-10 px-5">
      <div className="container mx-auto grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-bold mb-4">Get in touch.</h2>
          <ul className="space-y-2">
            <li>
              <a
                href="https://instagram.com/PitchPerfectCricket"
                className="flex items-center space-x-2"
              >
                <img
                  src="/path/to/instagram-icon.png"
                  alt="Instagram"
                  className="w-6 h-6"
                />
                <span>instagram.com/PitchPerfectCricket</span>
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com/PitchPerfectCricket"
                className="flex items-center space-x-2"
              >
                <img
                  src="/path/to/facebook-icon.png"
                  alt="Facebook"
                  className="w-6 h-6"
                />
                <span>facebook.com/PitchPerfectCricket</span>
              </a>
            </li>
            <li>
              <a
                href="https://x.com/PitchPerfect_"
                className="flex items-center space-x-2"
              >
                <img src="/path/to/x-icon.png" alt="X" className="w-6 h-6" />
                <span>x.com/PitchPerfect_</span>
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com/PitchPerfectCricket"
                className="flex items-center space-x-2"
              >
                <img
                  src="/path/to/youtube-icon.png"
                  alt="YouTube"
                  className="w-6 h-6"
                />
                <span>youtube.com/PitchPerfectCricket</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:pitchperfect@gmail.com"
                className="flex items-center space-x-2"
              >
                <img
                  src="/path/to/mail-icon.png"
                  alt="Mail"
                  className="w-6 h-6"
                />
                <span>pitchperfect@gmail.com</span>
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <img
                src="/path/to/phone-icon.png"
                alt="Phone"
                className="w-6 h-6"
              />
              <span>+1-234-567-8901</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Useful Links</h2>
          <div className="grid grid-cols-2 gap-4">
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/register" className="hover:underline">
                  Register
                </a>
              </li>
              <li>
                <a href="/blogs" className="hover:underline">
                  Blogs
                </a>
              </li>
              <li>
                <a href="/login" className="hover:underline">
                  LogIn/SignUp
                </a>
              </li>
            </ul>
            <ul className="space-y-2">
              <li>
                <a href="/faqs" className="hover:underline">
                  FAQs
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center border-t border-gray-700 pt-5 mt-10">
        <p>Copyright© 2024 PitchPerfect. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
