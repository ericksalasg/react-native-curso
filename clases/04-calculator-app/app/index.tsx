import ThemeText from "@/components/ThemeText";
import { Colors } from "@/constants/Colors";
import { GlobalStyles } from "@/styles/global-styles";
import React from "react";
import { View } from "react-native";
import CalculatorButton from "../components/CalculatorButton";
import { useCalculator } from "@/hooks/useCalculator";

const CalculatorApp = () => {

  const {
    formula,
    buildNumber
  } = useCalculator();

  return (
    <View style={GlobalStyles.calculatorContainer}>
      <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
        <ThemeText variant="h1">{formula}</ThemeText>
        <ThemeText variant="h2">2500</ThemeText>
      </View>

      {/* Filas de botones */}

      <View style={GlobalStyles.row}>
        <CalculatorButton
          color={Colors.lightGray}
          label={"C"}
          blackText
          onPress={() => console.log("C")}
        />
        <CalculatorButton
          color={Colors.lightGray}
          label={"+/-"}
          blackText
          onPress={() => console.log("+/-")}
        />
        <CalculatorButton
          color={Colors.lightGray}
          label={"del"}
          blackText
          onPress={() => console.log("del")}
        />
        <CalculatorButton
          label={"÷"}
          color={Colors.orange}
          onPress={() => console.log("÷")}
        />
      </View>

      {/* Filas de botones */}

      <View style={GlobalStyles.row}>
        <CalculatorButton
          color={Colors.lightGray}
          label={"7"}
          blackText
          onPress={() => buildNumber("7")}
        />
        <CalculatorButton
          color={Colors.lightGray}
          label={"8"}
          blackText
          onPress={() => buildNumber("8")}
        />
        <CalculatorButton
          color={Colors.lightGray}
          label={"9"}
          blackText
          onPress={() => buildNumber("9")}
        />
        <CalculatorButton
          label={"x"}
          color={Colors.orange}
          onPress={() => console.log("x")}
        />
      </View>

      {/* Filas de botones */}

      <View style={GlobalStyles.row}>
        <CalculatorButton
          color={Colors.lightGray}
          label={"4"}
          blackText
          onPress={() => buildNumber("4")}
        />
        <CalculatorButton
          color={Colors.lightGray}
          label={"5"}
          blackText
          onPress={() => buildNumber("5")}
        />
        <CalculatorButton
          color={Colors.lightGray}
          label={"6"}
          blackText
          onPress={() => buildNumber("6")}
        />
        <CalculatorButton
          label={"-"}
          color={Colors.orange}
          onPress={() => console.log("-")}
        />
      </View>


      {/* Filas de botones */}

      <View style={GlobalStyles.row}>
        <CalculatorButton
          color={Colors.lightGray}
          label={"1"}
          blackText
          onPress={() => buildNumber("1")}
        />
        <CalculatorButton
          color={Colors.lightGray}
          label={"2"}
          blackText
          onPress={() => buildNumber("2")}
        />
        <CalculatorButton
          color={Colors.lightGray}
          label={"3"}
          blackText
          onPress={() => buildNumber("3")}
        />
        <CalculatorButton
          label={"+"}
          color={Colors.orange}
          onPress={() => console.log("+")}
        />
      </View>

      <View style={GlobalStyles.row}>
        <CalculatorButton
          color={Colors.lightGray}
          label={"0"}
          blackText
          doubleSize
          onPress={() => buildNumber("0")}
        />
        <CalculatorButton
          color={Colors.lightGray}
          label={"."}
          blackText
          onPress={() => buildNumber(".")}
        />
        <CalculatorButton
          label={"="}
          color={Colors.orange}
          onPress={() => console.log("=")}
        />
      </View>

    </View>
  );
};

export default CalculatorApp;
