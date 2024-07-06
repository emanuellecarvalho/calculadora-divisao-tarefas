"use client";

import React, { useState } from "react";
import { Button, message, Steps, theme } from "antd";
import People from "@/components/Steps/ui-components/People";
import Expenses from "@/components/Steps/ui-components/Expenses";
import Method from "@/components/Steps/ui-components/Method";
import Result from "@/components/Steps/ui-components/Result";

const StepsComponent = () => {
    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);
    const [form, setForm] = useState({ people: [], expenses: [] });

    const emptyFileds = (currentStep) => {
        const checks = {
            0: () => !form.people || form.people.length < 2,
            1: () => !form.expenses || !form.expenses.length,
            2: () => !form.method,
        };

        return checks[currentStep] ? checks[currentStep]() : false;
    };

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const steps = [
        {
            title: "Pessoas",
            content: <People form={form} setForm={setForm} />,
        },
        {
            title: "Despesas",
            content: <Expenses form={form} setForm={setForm} />,
        },
        {
            title: "Método",
            content: <Method form={form} setForm={setForm} />,
        },
        {
            title: "Resultado",
            content: <Result form={form} />,
        },
    ];

    const items = steps.map((item) => ({
        key: item.title,
        title: item.title,
    }));

    const contentStyle = {
        lineHeight: "34px",
        textAlign: "center",
        color: token.colorTextTertiary,
        backgroundColor: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: `1px dashed ${token.colorBorder}`,
        marginTop: 16,
    };

    return (
        <>
            <Steps current={current} items={items} />
            <div style={contentStyle}>{steps[current].content}</div>
            <div
                style={{
                    marginTop: 24,
                }}
            >
                {current < steps.length - 1 && (
                    <Button disabled={emptyFileds(current)} type="primary" onClick={() => next()}>
                        Próximo
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => message.success("Processing complete!")}>
                        Resultado
                    </Button>
                )}
                {current > 0 && (
                    <Button
                        style={{
                            margin: "0 8px",
                        }}
                        onClick={() => prev()}
                    >
                        Voltar
                    </Button>
                )}
            </div>
        </>
    );
};
export default StepsComponent;
