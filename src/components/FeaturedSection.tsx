import { FaShieldAlt } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";
import { CgViewComfortable } from "react-icons/cg";

const features = [
  {
    title: "Safe Traveling",
    icon: <FaShieldAlt size={30}/>,
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
  },
  {
    title: "Affordable Price",
    icon: <FaMoneyBillWave size={30}/>,
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
  },
  {
    title: "Comfort Accommodation",
    icon: <CgViewComfortable size={30}/>,
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
  },
];

const FeaturedSection = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Experience the New Adventure
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              {/* Render the icon as a component */}
              <div>{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
