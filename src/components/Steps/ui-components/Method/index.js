import { Select } from "antd";

export default function Method({ form, setForm }) {
    const handleChange = (value) => {
        setForm({
            ...form,
            method: value,
        });
    };
    const options = [
        {
            value: "equal",
            label: "Divisão igual",
        },
        {
            value: "ratable",
            label: "Divisão proporcional",
        },
    ];
    return (
        <div>
            <h3>Selecione o método de divisão das despesas</h3>
            <span>Informe o método de divisão* </span>
            <Select
                // placeholder={'Selecione o método de divisão'}
                style={{
                    width: "100%",
                }}
                options={options}
                onChange={handleChange}
            />
        </div>
    );
}
