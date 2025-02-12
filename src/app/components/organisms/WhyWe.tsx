import {
  AiOutlineRise,
  AiOutlineLike,
  AiOutlineSchedule,
} from "react-icons/ai";
import SectionHeader from "../molecules/SectionHeader";
import WhyWeCard from "../molecules/WhyWeCard";

const WhyWe = () => {
  return (
    <div className="mt-24 text-gray-800 flex justify-center items-center lg:mb-24">
      <div className="max-w-[1150px]">
        <SectionHeader text="Waarom ART-BUD?" />
        <h3 className="font-bold text-5xl w-4/6 px-4 lg:px-0">
          Professioneel & ervaren.
        </h3>
        <div className="flex flex-col my-8 py-2 lg:flex-row">
          <WhyWeCard
            icon={<AiOutlineRise />}
            title="Ervaren experts"
            description="U kunt op ons rekenen voor best practices & standaarden en inzichten die leiden tot betere bedrijfsresultaten."
          />
          <WhyWeCard
            icon={<AiOutlineLike />}
            title="Vertrouwd door klanten"
            description="Onze klanten vertrouwen ons vanwege onze toewijding aan kwaliteit en ons vermogen om op tijd te leveren."
          />
          <WhyWeCard
            icon={<AiOutlineSchedule />}
            title="Op tijd geleverd"
            description="Wij zorgen voor tijdige levering van projecten zonder concessies te doen aan de kwaliteit."
          />
        </div>
      </div>
    </div>
  );
};

export default WhyWe;
