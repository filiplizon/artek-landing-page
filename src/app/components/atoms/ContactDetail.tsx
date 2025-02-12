interface ContactDetailProps {
  label: string;
  value: string;
  href: string;
}

const ContactDetail = ({ label, value, href }: ContactDetailProps) => {
  return (
    <p>
      {label}:{" "}
      <a href={href} className="font-bold hover:underline">
        {value}
      </a>
    </p>
  );
};

export default ContactDetail;
