import React from "react";
import * as S from "./styles";

import Dice from "../Dice";

const Main = () => {
  return (
    <S.Container>
      <Dice />
      {/* <S.ButtonRoll>
        <S.ButtonText>Play</S.ButtonText>
      </S.ButtonRoll> */}
    </S.Container>
  );
};

export default Main;
