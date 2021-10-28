import { StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { COLORS } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: COLORS.BLACK_SECONDARY,

    paddingTop: getStatusBarHeight() + 17,
  }
})