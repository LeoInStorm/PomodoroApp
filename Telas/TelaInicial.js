import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import styles from '../Styles/Styles';


export function TelaInicial(){
    return(
          <View style={styles.container}>
            <Text style={styles.logo}>Pomodoro</Text>
          </View>  
    )

}