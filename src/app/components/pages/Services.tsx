import SectionHeader from "../molecules/SectionHeader";
import ServiceCard from "../molecules/ServiceCard";

const Services = () => {
  return (
    <div
      className="h-auto w-full flex flex-col items-center justify-center pt-[80px] text-gray-800 lg:h-min-screen"
      id="services"
    >
      <div className="max-w-[1150px]">
        <SectionHeader text="Wat doen we?" />
        <h2 className="text-4xl font-bold mb-4 px-4 lg:px-0 lg:mb-2">
          Diensten
        </h2>
        <p className="mb-8 text-lg px-4 lg:px-0 lg:mb-4">
          {" "}
          Wij zijn gespecialiseerd in het monteren van gevelsystemen en het
          aanbrengen van isolatiesystemen. Onze diensten omvatten zowel
          nieuwbouwprojecten als renovaties, waarbij we werken met door de
          opdrachtgever geleverde materialen volgens de hoogste montage-eisen.
        </p>
        <div className="flex flex-col-reverse lg:flex-row justify-center lg:h-[550px] gap-10">
          <ServiceCard
            title="Gevelsystemen"
            description="Als eenmansbedrijf ben ik gespecialiseerd in het monteren van gevelsystemen. Mijn werkzaamheden omvatten: Het plaatsen van gevelsystemen in nieuwbouwprojecten en bij renovaties. Werken met door de opdrachtgever geleverde materialen volgens afspraken en de hoogste montage-eisen."
            imageUrl="/images/isolatie.jpg"
          />
          <ServiceCard
            title="Isolatiesystemen"
            description="Ik bied diensten aan voor de installatie van isolatiesystemen in verschillende soorten gebouwen. Mijn werkzaamheden omvatten: Het aanbrengen van thermische isolatie voor muren, daken en vloeren. Voorbereiden van de ondergrond en nauwkeurige montage van isolatiematerialen. Werken met door de opdrachtgever geleverde materialen, met oog voor detail en volgens projectvereisten."
            imageUrl="/images/isolatie.jpg"
            bgColor="bg-gray-800"
            textColor="text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
