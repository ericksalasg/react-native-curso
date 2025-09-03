import { useEffect, useRef, useState } from "react"

enum Operator {
    add = '+',
    substract = '-',
    multiply = 'x',
    divide = '÷'
}


export const useCalculator = () => {
    const [formula, setFormula] = useState('0');
    const [number, setNumber]= useState('0');
    const [prevNumber, setPrevNumber]= useState('0');

    const lastOperator = useRef<Operator>();

    useEffect(() => {
      // Todo: Calcular subResultado
      setFormula(number)
    }, [number])
    

    const buildNumber = (numberString: string) => {
        // Verificar si ya existe el punto de decimal

        if (number.includes('.') && numberString === ('.')) return;

        if (number.startsWith('0') || number.startsWith('-0')) {
            if (numberString === '.') {
                return setNumber(number + numberString)
            }
            // Evaluar si es otro cero y no si punto
            if (numberString === '0' && number.includes('.')) {
                return setNumber(number + numberString)
            }

            // Evaluar si es diferente de cero, no hay punto y es el primer numero
            if(numberString !== '0' && !number.includes('.')){
                return setNumber(numberString)
            }

            // Evitar el 00000000
            if (numberString === '0' && !number.includes('.')) {
                return 
            }
        }

        setNumber(number + numberString)
    }
    
    return{
        // Props
        formula,
        number,
        prevNumber,
        //methrods
        buildNumber
    }

}