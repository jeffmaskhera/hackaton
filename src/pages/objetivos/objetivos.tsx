import React, { useMemo } from 'react';
import ReactDOM from 'react-dom/client';
import { useState, useEffect } from 'react'
import { benefitTable, UserTableHeader } from "./data";
import {
    UbitsButton,
    UbitsCheckbox,
    UbitsDropdown,
    UbitsTable,
} from "@ubits/lxp-components-react";
import { ButtonColorEnum, ButtonSizeEnum } from '@ubits/lxp-components';
import { createRoot } from "react-dom/client";
import CreateBenefitModal from "./modal/create-modal";



const Objetivos = () => {

    const [showModal, setShowModal] = useState<boolean>(false);

    const UserTableTemplate: any = {
        checkbox: (args: any) => {
            const checkbox = (
                <UbitsCheckbox
                    keyId={args?.data?.id_user}
                />
            );
            const div = document.createElement('div');
            const intDiv = createRoot(div);
            intDiv.render(checkbox);
            return div;
        },

        actions: (args: any) => {
            const options = [
                {
                    id: 0,
                    label: 'Eliminar',
                },
                {
                    id: 1,
                    label: 'Editar',
                },
            ];



            const dropdown = (
                <UbitsDropdown
                    data={options}
                    id={args?.data?.id}
                    titleButton="Acciones"
                    sizeButton={ButtonSizeEnum.M}
                    colorButton={ButtonColorEnum.Tertiary}
                />
            );
            const div = document.createElement('div');
            const intDiv = ReactDOM.createRoot(div);
            intDiv.render(dropdown);
            return div;
        },
    };

    const create = () => {

    }

    const actionsModal = () => {
        setShowModal(!showModal)
    }






    return (
        <div className="objetivos-page">

            <div className="objetivos-page__grid-top">
                <UbitsButton
                    text="Crear"
                    onClick={actionsModal}
                />

            </div>

            <>
                {benefitTable && benefitTable.length >= 0 && (
                    <UbitsTable
                        sticky={true}
                        header={UserTableHeader as any}
                        data={benefitTable}
                        template={UserTableTemplate}
                        headerColor={'tertiary' as any}
                        style={{ width: '100%', marginBottom: '20px' }}
                    />
                )}
            </>


            {showModal && (
                <CreateBenefitModal
                    open={showModal}
                    accept={actionsModal}
                />
            )}


        </div>
    )
}

export default Objetivos;