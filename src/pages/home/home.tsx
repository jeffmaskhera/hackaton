import React, {useMemo} from 'react';
import { useState, useEffect } from 'react'
import {getCharacters} from "../../domain/characters/characters.informer";
import Paginator from "../../components/paginator/paginator";

import ItemCharacter from "../../components/item-character/item-character";
import {CharactersModel} from "../../domain/characters/characters.model";
import Modal from "../../components/modal/modal";
import Spinner from "../../components/spinner/spinner";
import {UserTableHeader} from "./data";
import {UbitsCheckbox, UbitsTable} from "@ubits/lxp-components-react";
import {createRoot} from "react-dom/client";



const Home =()=> {

    const benefit = useState<any>([
        {
            benefit: "Gimnasio",
            description: "tienes un gimnasio mensual"
        },
        {
            benefit: "Gimnasio",
            description: "tienes un gimnasio mensual"
        }
    ])


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
    };







    return (
        <div className="home-page">



            <h1>Hackaton</h1>

            <h2>Mis beneficios</h2>


            {benefit && benefit.length >= 0 && (
                <UbitsTable
                    sticky={true}
                    header={UserTableHeader as any}
                    data={benefit}
                    template={UserTableTemplate}
                    headerColor={'tertiary' as any}
                    style={{ width: '100%', marginBottom: '20px' }}
                />
            )}


        </div>
    )
}

export default Home;