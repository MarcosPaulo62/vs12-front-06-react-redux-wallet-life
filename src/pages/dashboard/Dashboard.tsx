import { NavLink } from "react-router-dom";
import PrincipalSectionDashboard from "../../components/principalSectionDashboard/PrincipalSectionDashboard";

export default function Dashboard() {
    return(
        <div>
            <PrincipalSectionDashboard />
            <NavLink to="/login"><button>SAIR</button></NavLink>
        </div>
    )
}