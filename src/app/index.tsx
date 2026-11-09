import { Link } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🎨 Svet Risanja</Text>

      <View style={styles.card}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop' }}
          style={styles.heroImage}
        />
        <Text style={styles.subtitle}>Dobrodošli v moji aplikaciji!</Text>
        <Text style={styles.paragraph}>
          Ta aplikacija je posvečena ustvarjalnosti, risanju in likovnemu izražanju. Raziskuj podstrani in spoznaj več o mojem hobiju ter meni kot avtorju.
        </Text>

        {/* Dodana gumba pod besedilom */}
        <View style={styles.buttonContainer}>
          <Link href="/explore" style={styles.button}>
            <Text style={styles.buttonText}>Poglej Explore ➔</Text>
          </Link>
          
          <Link href="/o-meni" style={[styles.button, styles.secondaryButton]}>
            <Text style={styles.secondaryButtonText}>O meni</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 60,
    backgroundColor: '#05634c',
    flexGrow: 1,
    width: '100%',
    maxWidth: 420,
    alignSelf: 'center',

  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fcfcfc',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#a6eedc',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  heroImage: {
    width: '100%',
    height: 220,
    borderRadius: 8,
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#374151',
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 15,
    lineHeight: 22,
    color: '#4b5563',
    marginBottom: 15, // Dodan majhen razmak pod besedilom pred gumboma
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginTop: 5,
  },
  button: {
    flex: 1,
    backgroundColor: '#05634c',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    textAlign: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 14,
  },
  secondaryButton: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#05634c',
  },
  secondaryButtonText: {
    color: '#05634c',
    fontWeight: '600',
    fontSize: 14,
  },
});

