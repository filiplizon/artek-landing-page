export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 w-full flex flex-col items-center">
      <div className="text-center">
        <p>
          &copy; {new Date().getFullYear()} Leezon. Wszelkie prawa zastrzeżone.
        </p>
      </div>
    </footer>
  );
};
