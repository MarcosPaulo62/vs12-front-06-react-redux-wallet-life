import { NavLink } from "react-router-dom";
import SideHeader from "../../components/sideHeaderDashboard/SideHeaderDashboard";

export default function Dashboard() {
  return (
    <div>
      <SideHeader />
      <NavLink to="/login">
      </NavLink>
    </div>
  );
}
