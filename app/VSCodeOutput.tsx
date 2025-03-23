// app/output.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

const OutputScreen = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const output = params.output || 'No output available';

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Code Output</Text>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.push('/VSCodeEditorScreen')}
        >
          <Text style={styles.backButtonText}>Back to Editor</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.outputContainer}>
        <Text style={styles.outputTitle}>Output:</Text>
        <ScrollView style={styles.outputScroll}>
          <Text style={styles.outputText}>{output.toString()}</Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
  },
  header: {
    backgroundColor: '#252526',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backButton: {
    backgroundColor: '#0078d7',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  backButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  outputContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: '#1e1e1e',
  },
  outputTitle: {
    color: '#569cd6',
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 16,
  },
  outputScroll: {
    flex: 1,
    backgroundColor: '#252526',
    borderRadius: 4,
    padding: 10,
  },
  outputText: {
    color: '#d4d4d4',
    fontFamily: 'monospace',
    fontSize: 14,
    lineHeight: 20,
  },
});

export default OutputScreen;
