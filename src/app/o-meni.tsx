import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function OMeniScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>👤 O meni</Text>

      <View style={styles.card}>
        <Text style={styles.paragraph}>
          Moje ime je Kristijana Vujasin, imam 17 let. Rodila sem se v Bosni in Hercegovini, v Sloveniji živim že 5 let. Obiskujem 3. letnik tehnik računalništva.V svojem prostem času rada poslušam glazbo rišem stvari in gledam filme.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 60,
    backgroundColor: '#adb4ba',
    flexGrow: 1,
    width: '100%',
    maxWidth: 420,
    alignSelf: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#1f2937',
    textAlign: 'left',
  },
  card: {
    backgroundColor: '#c9bcbc',
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  paragraph: {
    fontSize: 15,
    lineHeight: 22,
    color: '#4b5563',
    textAlign: 'left',
  },
});
