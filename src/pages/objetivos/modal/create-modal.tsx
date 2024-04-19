import React from 'react';
import {
    UbitsButton,
    UbitsModal,
    UbitsModalHeader,
    UbitsModalContent,
    UbitsModalFooter, UbitsInput, UbitsTextarea,
} from '@ubits/lxp-components-react';
import { InputTypeEnum } from '@ubits/lxp-components'

interface CreateModalProps {
    open: boolean;
    accept: () => void;
}

const CreateBenefitModal = ({
                                     open,
                                     accept,
                                 }: CreateModalProps) => {
    return (
        <UbitsModal open={open} onCloseModal={() => accept()}>
            <UbitsModalHeader headerTitle="¡Crea tus objetivos!" />
            <UbitsModalContent>
                <div className="create-benefit-modal">
                    <UbitsInput
                        label={'Nombre del objetivo'}
                        required
                    />

                    <UbitsTextarea
                        label="Descripción"
                        maxLength={400}
                        required
                        rows={4}
                        style={{ width: '100%' }}
                    />

                    <UbitsInput
                        label={'Valor en UBITS Coin'}
                        type={InputTypeEnum.Number}
                        required
                    />


                </div>
            </UbitsModalContent>
            <UbitsModalFooter>
                <div>
                    <UbitsButton
                        onClick={accept}
                        size={'l' as any}
                        widthFull
                        color={'primary' as any}
                        text="Aceptar"
                    />
                </div>
            </UbitsModalFooter>
        </UbitsModal>
    );
};

export default CreateBenefitModal;
