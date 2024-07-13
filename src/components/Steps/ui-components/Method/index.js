import { Divider, Select } from "antd";

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
            <Divider />
            <div>
                {
                    <>
                        <p>
                            <strong>Divisão igual</strong>:
                        </p>
                        <span>O total de despesas é dividido igualmente entre as pessoas adicionadas.</span>
                        <p>
                            <strong>Divisão proporcional</strong>:
                        </p>
                        <span>
                            O total de despesas é dividido proporcionalmente em relação ao salário de cada pessoa
                            adicionada.
                        </span>
                    </>
                }
            </div>
            <Divider />
            <span>Selecione o método de divisão* </span>
            <Select
                style={{
                    width: "100%",
                }}
                options={options}
                onChange={handleChange}
            />
        </div>
    );
}
