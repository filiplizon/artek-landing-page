interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  required?: boolean;
}

const FormField = ({
  label,
  name,
  type = "text",
  placeholder,
  required = true,
}: FormFieldProps) => {
  return (
    <div className="mb-6">
      <label htmlFor={name} className="font-bold mb-2 block">
        {label}:
      </label>
      {type === "textarea" ? (
        <textarea
          name={name}
          id={name}
          placeholder={placeholder}
          className="p-2 border border-gray-300 min-h-[150px] rounded w-full"
          required={required}
        />
      ) : (
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          className="p-2 border border-gray-300 rounded w-full"
          required={required}
        />
      )}
    </div>
  );
};

export default FormField;
