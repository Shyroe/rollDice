import React, { useState } from "react";
import dice1 from "../../../assets/dice1.png";
import dice2 from "../../../assets/dice2.png";
import dice3 from "../../../assets/dice3.png";
import dice4 from "../../../assets/dice4.png";
import dice5 from "../../../assets/dice5.png";
import dice6 from "../../../assets/dice6.png";

import { Image } from "react-native";
import * as S from "./styles";

const Dice = () => {
  const [numberRoll, setNumberRoll] = useState(0);

  function renderDiceFace(numberRoll) {
    switch (numberRoll) {
      case 0:
        return <Image source={dice1} />;
        break;
      case 1:
        return <Image source={dice2} />;
        break;
      case 2:
        return <Image source={dice3} />;
        break;
      case 3:
        return <Image source={dice4} />;
        break;
      case 4:
        return <Image source={dice5} />;
        break;
      case 5:
        return <Image source={dice6} />;
        break;
      default:
        return <Image source={dice1} />;
    }
  }

  function getRandomNumber() {
    // const let randomNumber
    setNumberRoll(Math.floor(Math.random() * 5));
  }

  return (
    <>
      <S.ContainerDice>{renderDiceFace(numberRoll)}</S.ContainerDice>
      <S.ButtonRoll onPress={getRandomNumber}>
        <S.ButtonText>Play Game</S.ButtonText>
      </S.ButtonRoll>
    </>
  );
};

export default Dice;
