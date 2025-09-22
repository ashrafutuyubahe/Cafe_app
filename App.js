import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>☕ Welcome to  Café App ☕</Text>
      <Text style={styles.subtitle}>Your daily dose of coffee & snacks</Text>

      {/* Coffee Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Coffee Menu</Text>
        <Text style={styles.item}>☕ Espresso - $2.50</Text>
        <Text style={styles.item}>🥛 Cappuccino - $3.50</Text>
        <Text style={styles.item}>🍫 Mocha - $4.00</Text>
        <Text style={styles.item}>🥤 Iced Latte - $4.50</Text>
      </View>

      {/* Snacks Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Snacks</Text>
        <Text style={styles.item}>🥐 Croissant - $2.00</Text>
        <Text style={styles.item}>🍰 Cheesecake - $3.00</Text>
        <Text style={styles.item}>🥞 Pancakes - $4.00</Text>
        <Text style={styles.item}>🍪 Cookies - $1.50</Text>
      </View>

      {/* Drinks Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Cold Drinks</Text>
        <Text style={styles.item}>🥤 Lemonade - $2.50</Text>
        <Text style={styles.item}>🍓 Strawberry Smoothie - $3.50</Text>
        <Text style={styles.item}>🥭 Mango Juice - $3.00</Text>
        <Text style={styles.item}>🧋 Bubble Tea - $4.50</Text>
      </View>

      <Text style={styles.footer}>Thank you for visiting!our Café App</Text>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f8f4e1',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#5a3825',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: '#7b5e57',
    textAlign: 'center',
  },
  section: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    color: '#3d2c29',
  },
  item: {
    fontSize: 16,
    marginVertical: 5,
    color: '#333',
  },
  footer: {
    fontSize: 16,
    marginTop: 30,
    fontStyle: 'italic',
    color: '#5a3825',
  },
});
