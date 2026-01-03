import React from 'react';
import { Modal, Text, TouchableOpacity, View, } from 'react-native';

// styles 
import styles from '@/styles/styles';


const DangerModal = ({ visible, onClose, onConfirm, title, message, confirmText = "Confirm", cancelText = "Cancel" }) => {

    return (
        <Modal
            transparent
            visible={visible}
            animationType='fade'
            onRequestClose={onClose} // Android back button

        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContainer}>

                    {/* Title */}
                    <Text style={styles.modalTitle}>{title}</Text>
                    {/* Message */}
                    <Text style={styles.modalMessage}>{message}</Text>

                    {/* Footer Buttons */}
                    <View style={styles.modalFooter}>
                        <TouchableOpacity
                            style={[styles.modalButton, styles.modalCancel]}
                            onPress={onClose}
                        >
                            <Text style={styles.modalButtonText}>{cancelText}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.modalButton, styles.modalConfirmDanger]}
                            onPress={onConfirm}
                        >
                            <Text style={styles.modalButtonText}>{confirmText}</Text>
                        </TouchableOpacity>

                    </View>
                </View>

            </View>
            
       </Modal>
    )
}


export default DangerModal