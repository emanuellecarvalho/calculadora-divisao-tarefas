import {useEffect, useState} from "react";
import {methods} from "@/components/Steps/ui-components/Result/calculadora-divisao";

export default function Result({form}) {
    const [result, setResult] = useState([]);


    useEffect(() => {
        //TODO revisar esse treco, não sei como funciona xD

        // Este código será executado uma vez quando o componente for montado
        init();

        // Se precisar de uma limpeza quando o componente for desmontado, pode retornar uma função aqui
        return () => {
            // Código de limpeza
        };
    }, [form]); // O array vazio garante que o efeito seja executado apenas uma vez

    const init = () => {
        const result = methods[form.method](form);
        setResult(result);
    };

    return (
        <div>
            <h3>Resultado das Despesas: </h3>
            {result.map((person) => (
                <div key={person.name}>
                    <h4>{person.name}</h4>
                    <p><strong>Salário:</strong> R$ {person.salary.toFixed(2)}</p>
                    <p><strong>Valor a Pagar:</strong> R$ {person.amountToPay.toFixed(2)}</p>
                    <p><strong>Porcentagem a Pagar:</strong> {person.percentageToPay.toFixed(2)}%</p>
                </div>
            ))}
        </div>
    );


}