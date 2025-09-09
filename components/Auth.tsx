import { useState } from 'react';
import { supabase } from '../util/supabase';
import {
  Alert,
  StyleSheet,
  View,
  Text,
  Pressable,
  TextInput,
} from 'react-native';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //   async function signInWithEmail() {
  //     try {
  //       const { error } = await supabase.auth.signInWithPassword({
  //         email: email,
  //         password: password,
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   async function signUpWithEmail() {
  //     try {
  //       const {
  //         data: { session },
  //         error,
  //       } = await supabase.auth.signUp({
  //         email: email,
  //         password: password,
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  return (
    <View>
      <Text>Email:</Text>
      <TextInput
        onChangeText={(text) => setEmail(text)}
        value={email}
        placeholder="email@address.com"
      ></TextInput>
      <Text>Email:</Text>
      <TextInput
        onChangeText={(text) => setEmail(text)}
        value={email}
        placeholder="email@address.com"
      ></TextInput>
    </View>
  );
}
