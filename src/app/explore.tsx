import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function ExploreScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🎨 Moj hobi: Risanje</Text>
      
      <View style={styles.card}>
        <Text style={styles.paragraph}>
          Risanje je moja strast že od malih nog. Zame je to način sprostitve, izražanja čustev in ustvarjanja nečesa čudovitega iz praznega papirja. Skozi črte, barve in senčenje lahko prenesem svoje misli v vizualno obliko.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.subtitle}>Tehnike in materiali</Text>
        <Text style={styles.paragraph}>
          Najraje rišem z grafičnimi svinčniki, včasih pa se preizkusim tudi v digitalnem risanju ter slikanju z akvareli. Vsaka tehnika zahteva drugačen pristop in mojo potrpežljivost.Za vsako svoje delo si vzamem čas da bi moja risba zgledala lepo.
        </Text>
        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop' }} 
          style={styles.image} 
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.subtitle}>Ustvarjalni proces</Text>
        <Text style={styles.paragraph}>
         Prvo najdem neko inspiracijo kaj bi lahko risala. Proces ustvarjanja se šele takrat začne s preprostimi skicami in obrisi. Ko postavim prave osnove, se posvetim detajlom, svetlobi in sencam, ki delu vdihnejo življenje.
        </Text>
        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=800&auto=format&fit=crop' }} 
          style={styles.image} 
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.subtitle}>Skiciranje in portreti</Text>
        <Text style={styles.paragraph}>
          Posebno rad rišem portrete in detajle v naravi. Uloviti prave izraze obraza in teksturo je velik izziv, ki me vedno iznova navdušuje.
        </Text>
        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop' }} 
          style={styles.image} 
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.subtitle}>Digitalna umetnost</Text>
        <Text style={styles.paragraph}>
          Z uporabo tablice in pisala se rad preizkušam tudi v modernem digitalnem ustvarjanju, kjer so možnosti barv in slojev skoraj neomejene.
        </Text>
        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=800&auto=format&fit=crop' }} 
          style={styles.image} 
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.subtitle}>Barve in palete</Text>
        <Text style={styles.paragraph}>
          Mešanje barv in ustvarjanje različnih tonov dodaja delu globino ter čustveno noto, ki jo črno-beli toni včasih ne morejo prikazati.
        </Text>
        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop' }} 
          style={styles.image} 
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#32679d',
    flexGrow: 1,
     width: '100%',
    maxWidth: 420,
    alignSelf: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: 15,
    color: '#eef0f2',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 25,
    fontWeight:  '700',
    fontStyle: 'italic',
    marginBottom: 10,
    color: '#374151',
  },
  card: {
    backgroundColor: '#daecf9',
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
    marginBottom: 5,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginTop: 10,
  },
});
