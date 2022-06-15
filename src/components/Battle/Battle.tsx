import { Choice } from "../Choice/Choice";
import { colors, images, icons } from "../../assets";
import * as S from "./Battle.style";


const transform = new Map<Choice | "default", [string, string]>([
  ["Rock", [images.rock, colors.red]],
  ["Paper", [images.paper, colors.blue]],
  ["Scissors", [images.scissors, colors.yellow]],
  ["default", ["", "#0d5549"]],
]);

interface BattleProps {
  playerChoice: Choice | null;
  computerChoice: Choice | null;
  playable: boolean;
}

const Battle: React.FC<BattleProps> = ({
  computerChoice,
  playerChoice,
}) => {
  const [pSrc, pColor] = transform.get(playerChoice || "default")!;
  const [cSrc, cColor] = transform.get(computerChoice || "default")!;

  return (
    <S.Wrapper>
      <S.Circle color={pColor} >
        {playerChoice && (
          <S.FixedImage src={pSrc} alt={playerChoice} width='190px' />
        )}
      </S.Circle>
      <img src={images.battle} alt='VS' width='50' />
      <S.Circle color={cColor} >
        {computerChoice && (
          <S.FixedImage src={cSrc} alt={computerChoice} width='190px' />
        )}
      </S.Circle>
    </S.Wrapper>
  );
};

export default Battle;
