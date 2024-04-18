import React from 'react';
import {
    UbitsButton,
    UbitsModal,
    UbitsModalHeader,
    UbitsModalContent,
    UbitsModalFooter,
} from '@ubits/lxp-components-react';

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
            <UbitsModalHeader headerTitle="¡Recuerda activar el mapa!" />
            <UbitsModalContent>
                <div>
                    <div>
                        <p className="ubits-txt-paragraph-1 paragraph-color">
                            Crear beneficio
                        </p>
                    </div>
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
