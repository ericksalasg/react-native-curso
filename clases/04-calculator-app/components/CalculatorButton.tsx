import { Colors } from '@/constants/Colors';
import { GlobalStyles } from '@/styles/global-styles';
import { Pressable, Text } from 'react-native';
import * as Haptics from 'expo-haptics';

interface Props {
    label: string;
    color?: string;
    blackText?: boolean;
    doubleSize?: boolean;
    onPress: () => void;
}

const CalculatorButton = ({
    label, 
    color = Colors.darkGray, 
    blackText = false, 
    onPress,
    doubleSize = false
}: Props) => {
    return (
        <Pressable 
            style={({pressed}) => ({
                ...GlobalStyles.button,
                backgroundColor: color,
                opacity: pressed ? 0.8 : 1,
                width: doubleSize ? 185 : 80
            })} 
            onPress={() => {
                    Haptics.selectionAsync();
                    onPress()
                }}
        >
            <Text 
                style={{
                    ...GlobalStyles.buttonText,
                    color: blackText ? 'black': 'white'
                }}
            >
                {label}
            </Text>
        </Pressable>
    )
}

export default CalculatorButton