import { use, useState } from 'react';
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
  const [user, setUser] = useState({ email: '', password: '' });
  const [signIn, setSignIn] = useState(true);

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
      {' '}
      {signIn ? (
        <View>
          <Text>Email:</Text>
          <TextInput
            onChangeText={(text) => setUser({ ...user, email: text })}
            value={user.email}
            placeholder="email@address.com"
          ></TextInput>
          <Text>Password:</Text>
          <TextInput
            onChangeText={(text) => setUser({ ...user, password: text })}
            value={user.password}
            placeholder="email@address.com"
          ></TextInput>
        </View>
      ) : (
        <View></View>
      )}
      <Pressable onPress={() => setSignIn(!signIn)}>
        <Text>{signIn ? 'Sign In' : 'Sign Up'}</Text>
      </Pressable>
      ;
    </View>
  );
}
