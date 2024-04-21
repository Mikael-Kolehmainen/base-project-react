import { IconContainer, StyledIcon } from "./icon.styles";

const Icon = ({ iconPath, onClick }) => {
  return (
    <IconContainer className="icon" onClick={onClick}>
      <StyledIcon iconPath={iconPath} />
    </IconContainer>
  );
};

export default Icon;
