import {
  FaHome,
  FaBuilding,
  FaRoad,
  FaTools,
  FaUsers,
  FaMedal,
  FaRegClock,
  FaDollarSign,
  FaHeart,
  FaMicrochip,
} from "react-icons/fa";

// Maps the string keys stored in lib/data.js to actual icon components,
// so content data stays serializable and free of JSX.
const map = {
  home: FaHome,
  building: FaBuilding,
  road: FaRoad,
  tools: FaTools,
  team: FaUsers,
  medal: FaMedal,
  clock: FaRegClock,
  dollar: FaDollarSign,
  heart: FaHeart,
  cpu: FaMicrochip,
};

export default function Icon({ name, className }) {
  const Cmp = map[name] || FaTools;
  return <Cmp className={className} aria-hidden="true" />;
}
