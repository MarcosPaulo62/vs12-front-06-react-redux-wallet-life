import { StyledEyeButton, StyledItemDescription, StyledItemValue, StyledItemlDiv, StyledTrashCanButton } from "../../styles/dashboardSections";
import Eye from "../../assets/dashboard-olho.png";
import TrashCan from "../../assets/dashboard-lixo.png"

export default function ItemDashboard() {

  return <StyledItemlDiv>
    <StyledItemValue themecolor={"receitas"}>R$ 50,00</StyledItemValue>
    <StyledItemDescription>Descrição do item</StyledItemDescription>
    <StyledEyeButton></StyledEyeButton>
    <StyledTrashCanButton></StyledTrashCanButton>
  </StyledItemlDiv>;
}
