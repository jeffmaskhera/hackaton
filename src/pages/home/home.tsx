import React, { useMemo } from 'react';
import ReactDOM from 'react-dom/client';
import { useState, useEffect } from 'react'
import {benefitTable, historicTable, UserTableHeader, UserTableHeaderHistory} from "./data";
import {
    UbitsButton,
    UbitsCheckbox,
    UbitsDropdown,
    UbitsTable,
    UbitsTabPanel,
    UbitsTabView
} from "@ubits/lxp-components-react";
import { ButtonColorEnum, ButtonSizeEnum } from '@ubits/lxp-components';
import { createRoot } from "react-dom/client";
import CreateBenefitModal from "./modal/create-modal";
import Objetivos from 'pages/objetivos/objetivos';



const Home = () => {

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
        <div className="home-page">

            <div className="home-page__grid-top">
                <h1>Perks Hub</h1>

            </div>


            <UbitsTabView tabStyle={'secondary-tab' as any}>
                <UbitsTabPanel header="Beneficios">
                    <>
                        <div className="objetivos-page__grid-top">
                            <UbitsButton
                                text="Crear beneficios"
                                onClick={actionsModal}
                            />

                        </div>


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

                </UbitsTabPanel>

                <UbitsTabPanel header="Objetivos">
                    <>
                        <Objetivos />
                    </>

                </UbitsTabPanel>


                <UbitsTabPanel header="Históricos">
                    <>
                        {benefitTable && benefitTable.length >= 0 && (
                            <UbitsTable
                                sticky={true}
                                header={UserTableHeaderHistory as any}
                                data={historicTable}
                                template={UserTableTemplate}
                                headerColor={'tertiary' as any}
                                style={{ width: '100%', marginBottom: '20px' }}
                            />
                        )}
                    </>

                </UbitsTabPanel>



            </UbitsTabView>





            {showModal && (
                <CreateBenefitModal
                    open={showModal}
                    accept={actionsModal}
                />
            )}


        </div>
    )
}

export default Home;