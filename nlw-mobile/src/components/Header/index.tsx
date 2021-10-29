import React from 'react';

import { useAuth } from '../../hooks/auth';

import {
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import LogoSvg from '../../assets/logo.svg';

import { UserPhoto } from '../UserPhoto';
import { styles } from './styles';

export function Header(){
  const { user, signOut } = useAuth()
  return (
    <View style={styles.container}>
      <LogoSvg />
      <View style={styles.logouButton}>
        { user &&
          <TouchableOpacity>
            <Text style={styles.logoutText} onPress={signOut}>Sair</Text>
          </TouchableOpacity>
        }
        <UserPhoto imageUri={user?.avatar_url} />
      </View>
    </View>
  );
}