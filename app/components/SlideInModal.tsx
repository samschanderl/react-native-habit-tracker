import { useState } from "react";
import { Modal, View , Text, StyleSheet} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Button from "./Button";
import { Colors } from "../constants/Colors";
import { useModal } from "../context/ModalContext";

type SlideInModalType = {
    children: React.ReactNode,
    modalVisible?: boolean,
    setModalVisible?: (bool: boolean) => void
}

const SlideInModal = ({children} : SlideInModalType) => {

    const {activeModal, setActiveModal} = useModal();

    const closeModalHandler = () => {
        setActiveModal({
            selectedModal: '',
            isActive: false
        });
    }

    return (
        <View style={styles.modalOuterContainer}>
            <Modal
            animationType="slide"
            visible={activeModal.selectedModal?.length !== 0 && activeModal.isActive}
            transparent={true}
            statusBarTranslucent={false}
            // backdropColor={'rgba(0,0,0,.5)'}
            >
            <View style={styles.modalInnerContainer}>
                <View style={styles.btnCloseContainer}>
                    <Button
                    onPress={closeModalHandler}
                    >
                        <MaterialIcons name="close" size={28} color={Colors.light.gray700}/>
                    </Button>
                </View>
                <View style={styles.containerInner}>{children}</View>
            </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    modalOuterContainer: {
        height: 0,
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        marginTop: 'auto',
    },
    modalInnerContainer: {
        marginTop: 'auto',
        backgroundColor: 'white',
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12
    },
    btnCloseContainer: {
        alignSelf: 'flex-end',
        paddingTop: 20
    },
    containerInner: {
        paddingHorizontal: 20
    }
});

export default SlideInModal;