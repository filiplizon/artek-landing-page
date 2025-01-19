import Image from "next/image";

const Home = () => {
  return (
    <div
      className="relative h-min-screen flex flex-col items-center mt-24 lg:flex-row lg:mt-0 lg:h-screen"
      id="home"
    >
      <div className="flex flex-col items-center w-full rounded lg:w-2/5 lg:items-start">
        <h1 className="font-bold text-3xl text-gray-800 mb-3">ART-BUD</h1>
        <h2 className="text-2xl underline">Gevelsystemen</h2>
        <p className="px-4 mt-5 text-lg lg:px-0">
          Gevelsystemen zijn essentieel voor de esthetiek en functionaliteit van
          een gebouw. Ze bieden bescherming tegen weersinvloeden, verbeteren de
          energie-efficiëntie en dragen bij aan de algehele uitstraling van het
          pand. Bij ART-BUD specialiseren we ons in hoogwaardige gevelsystemen
          die voldoen aan de hoogste normen van duurzaamheid en design. Onze
          oplossingen zijn op maat gemaakt om aan de specifieke behoeften van
          elk projekt te voldoen, of het nu gaat om nieuwbouw of renovatie.
        </p>

        <div className="flex flex-col lg:flex-row mt-2">
          <div className="mt-5 flex flex-col items-center text-xl lg:text-lg lg:items-start lg:mr-4">
            <p>
              BTW-ID:{" "}
              <span className="font-bold text-gray-800">NL003184211B48</span>
            </p>
            <p>
              KVK: <span className="font-bold text-gray-800">77359801</span>
            </p>
            <p>
              Tel.:{" "}
              <a
                href="tel:+31685100469"
                className="font-bold text-gray-800 hover:underline"
              >
                0685100469
              </a>
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:ginkiewiczartur@gmail.com"
                className="font-bold text-gray-800 hover:underline"
              >
                ginkiewiczartur@gmail.com
              </a>
            </p>
          </div>
          <div className="mt-5 flex flex-col items-center text-xl lg:text-lg lg:items-start">
            <p>Bedrijfsadres:</p>
            <p className="font-bold">Mozartstraat 134</p>
            <p className="font-bold">2983AJ Ridderkerk</p>
            <p className="font-bold">Nederland</p>
          </div>
        </div>
      </div>
      <div className="mt-5 w-full lg:w-3/5 lg:ml-8">
        <Image
          src="/images/home.jpg"
          alt="Example"
          width={500}
          height={300}
          className="mt-5 w-full h-full lg:mt-0"
        />
      </div>
    </div>
  );
};

export default Home;
