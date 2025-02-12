import CompanyInfo from "../atoms/CompanyInfo";
import ContactDetail from "../atoms/ContactDetail";
import Address from "../atoms/Address";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white w-full flex flex-col items-center">
      <div className="flex flex-col max-w-[1150px] w-full lg:flex-row py-4 items-center lg:py-1 lg:items-about lg:justify-between">
        <div className="mt-5 flex flex-col items-center text-md lg:items-start">
          <CompanyInfo />
        </div>
        <div className="mt-5 flex flex-col items-center text-md lg:items-start">
          <Address />
        </div>
        <div className="mt-5 flex flex-col items-center text-md lg:items-start">
          <ContactDetail
            label="Tel."
            value="0685100469"
            href="tel:+31685100469"
          />
          <ContactDetail
            label="Email"
            value="ginkiewiczartur@gmail.com"
            href="mailto:ginkiewiczartur@gmail.com"
          />
        </div>
      </div>
      <p className="text-center bg-gray-600 w-full py-2 mt-4">
        &copy; {new Date().getFullYear()} Leezon.
      </p>
    </footer>
  );
};
