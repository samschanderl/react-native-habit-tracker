import Toast from 'react-native-toast-message';

type ToastType = {
    type?:string, 
    t1?:string, 
    t2?:string,
    onPress?: () => void
}

export const showToast = ({type="info", t1="", t2=""}: ToastType) => {
    Toast.show({
        type: type,
        text1: t1,
        text2: t2,
        autoHide: false,
        onPress: () => Toast.hide()
    });
}
