import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import 'react-native-url-polyfill/auto';
import { supabase } from './util/supabase';
import Auth from './components/Auth';

export default function App() {
  const [curMood, setMood] = useState({ mood: '' });

  const handleSend = async () => {
    console.log('hey');
    try {
      const { data, error } = await supabase
        .from('e_or_n_test')
        .insert(curMood) // or .insert([{ mood: curMood.mood }])
        .select()
        .single();

      if (error) throw error;
      console.log('Mood registered:', data.mood);
    } catch (err: any) {
      console.log(err?.message ?? err);
    }
  };

  return (
    <View style={styles.appContainer}>
      <Pressable
        style={{
          ...styles.pressable,
          backgroundColor: curMood.mood === 'Exhausted' ? 'green' : 'white',
        }}
        onPress={() => {
          setMood({ mood: 'Exhausted' });
        }}
      >
        <Text style={styles.text}>Exhausted</Text>
      </Pressable>
      <Pressable
        style={{
          ...styles.pressable,
          backgroundColor: curMood.mood === 'Nauseous' ? 'green' : 'white',
        }}
        onPress={() => {
          setMood({ mood: 'Nauseous' });
        }}
      >
        <Text style={styles.text}>Nauseous</Text>
      </Pressable>
      <Pressable style={styles.pressable} onPress={handleSend}>
        <Text style={styles.text}>Send</Text>
      </Pressable>
      <Text>{curMood.mood}</Text>
      <StatusBar style="auto" />
      <Auth />;
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    margin: 'auto',
    padding: 50,
    paddingHorizontal: 16,
    marginTop: 20,
    height: '100%',
    gap: 20,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  text: {
    fontSize: 50,
    textAlign: 'center',
    padding: 10,
  },
  pressable: {
    borderWidth: 2,
  },
});
