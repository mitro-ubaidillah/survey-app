import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/modal';
import React from 'react';
import ButtonPrimary from './ButtonPrimary';
import ButtonSecondary from './ButtonSecondary';
import InputProfile from './InputProfile';

const ModalBox = ({ isOpen, onClose, title, onHandleNameChange, nameValue, emailValue, onHandleEmailChange, onHandleData }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader color={'btn.primary'}>{title}</ModalHeader>
                <ModalCloseButton />
                <form onSubmit={onHandleData}>

                    <ModalBody>
                        <InputProfile
                            emailValue={emailValue}
                            nameValue={nameValue}
                            onHandleEmailChange={onHandleEmailChange}
                            onHandleNameChange={onHandleNameChange}
                        />
                    </ModalBody>
                    <ModalFooter>
                        <ButtonPrimary
                            name={'Send data'}
                            type={'submit'}
                        />
                        <ButtonSecondary
                            name={'close'}
                            onClick={onClose}
                        />
                    </ModalFooter>
                </form>
            </ModalContent>
        </Modal>
    );
}

export default ModalBox;
