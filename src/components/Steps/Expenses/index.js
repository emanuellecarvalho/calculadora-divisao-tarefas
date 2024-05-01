import {Input, InputNumber} from "antd";

export default function Expenses() {
    return (
        <div>           
            <span>Informe o nome da despesa: </span>
            <Input placeholder="Aluguel"/>
            <span>Informe o valor da despesa: </span>
            <InputNumber
                placeholder={'R$ 2.000'}
                style={{width: '100%'}}
                min={1}
                max={9999}
            />
        </div>
    );
}