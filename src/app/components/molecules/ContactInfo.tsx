import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Address from "../atoms/Address";

const ContactInfo = () => {
  return (
    <div className="flex flex-col text-md items-start lg:pr-8">
      <div className="px-4 text-lg lg:text-lg lg:px-0">
        <h2 className="text-6xl font-bold mb-4">Contact</h2>
        <p className="mb-4 text-xl lg:w-3/5">
          Gebruik gerust het formulier of stuur ons een e-mail. Oude vertrouwde
          telefoontjes werken ook.
        </p>
        <p className="flex items-center mb-4">
          <FaPhone className="mr-2" />
          <a href="tel:+31685100469" className="font-bold hover:underline">
            0685100469
          </a>
        </p>
        <p className="flex items-center mb-4">
          <FaEnvelope className="mr-2" />
          <a
            href="mailto:ginkiewiczartur@gmail.com"
            className="font-bold hover:underline"
          >
            ginkiewiczartur@gmail.com
          </a>
        </p>
        <div className="flex items-center">
          <FaMapMarkerAlt className="mr-2" />
          <div>
            <Address />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
