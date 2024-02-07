import {Select} from "antd";

export default function Method() {

    const options = [
        {
            value: 'equal',
            label: 'Divisão igual',
        },
        {
            value: 'ratable',
            label: 'Divisão proporcional',
        }
    ];
    return (
        <div>
            <Select
                placeholder={'Selecione o método de divisão'}
                style={{
                    width: '100%',
                }}
                options={options}
            />
        </div>
    );
}