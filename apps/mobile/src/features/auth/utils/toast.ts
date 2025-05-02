import Toast from 'react-native-toast-message'

export function showError(msg: string) {
  Toast.show({
    type: 'error',
    text1: msg,
    position: 'bottom',
    visibilityTime: 3000,
    bottomOffset: 60,
  })
}
