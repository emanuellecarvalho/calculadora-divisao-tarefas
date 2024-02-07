import {Input, InputNumber} from "antd";

export default function Expenses() {
    return (
        <div>
            <Input placeholder="Digite o nome da despesa"/>
            <InputNumber
                placeholder={'Digite o valor da despesa'}
                style={{width: '100%'}}
                min={1}
                max={9999}
            />
        </div>
    );
}