import * as React from 'react';
import { SafeAreaView, ScrollView, Image, StyleSheet, View } from 'react-native';
import { Card, Avatar, Text, Button } from 'react-native-paper';

const reports = [
  {
    id: 1,
    name: 'Ana Ruiz',
    location: 'Centro',
    time: 'Hace 2 horas',
    description: 'Bache en calle principal',
    image: require('../assets/camera.png'),
  },
  {
    id: 2,
    name: 'Alex Beltrán',
    location: 'Parque Sol',
    time: 'Hace 4 horas',
    description: 'Basura en los tambos',
    image: require('../assets/tree.png'),
  },
];

export default function FeedScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text variant="titleLarge" style={styles.header}>
          Feed de Reportes
        </Text>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('Login')}
        >
          + Agregar
        </Button>
      </View>

      <ScrollView style={styles.scroll}>
        {reports.map((report) => (
          <Card key={report.id} style={styles.card}>
            <Card.Title
              title={report.name}
              subtitle={report.location}
              left={(props) => <Avatar.Icon {...props} icon="account" />}
              right={() => <Text style={styles.time}>{report.time}</Text>}
            />
            <Card.Content>
              <Image source={report.image} style={styles.reportImage} />
              <Text style={styles.description}>{report.description}</Text>
            </Card.Content>
            <Card.Actions style={styles.actions}>
              <Button icon="thumb-up-outline">Like</Button>
              <Button icon="comment-outline">Comment</Button>
              <Button icon="share-variant">Share</Button>
            </Card.Actions>
          </Card>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },
  header: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
    marginTop: 20,
  },
  scroll: {
    flex: 1,
  },
  card: {
    marginBottom: 15,
    borderRadius: 10,
    elevation: 2,
  },
  reportImage: {
    height: 150,
    width: '100%',
    resizeMode: 'contain',
    marginVertical: 10,
  },
  description: {
    fontSize: 15,
  },
  actions: {
    justifyContent: 'space-around',
  },
  time: {
    marginRight: 10,
    color: 'gray',
  },
});
