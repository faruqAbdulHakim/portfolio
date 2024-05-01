'use client';

// UI Components
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react';

export default function ExperienceDetail() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button variant='light' color='primary' onPress={onOpen}>
        View Detail
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size='4xl'
        placement='center'
        backdrop='blur'
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Experience Detail</ModalHeader>
              <ModalBody>
                <p>This feature is not implemented yet</p>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
