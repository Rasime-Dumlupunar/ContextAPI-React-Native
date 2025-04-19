import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {MyContext} from '../context/MyContext';

const UserDetailScreen = () => {
  const navigation = useNavigation();

  // UserListScreen'den parametrelere erişmek için Route'u çağırdık.
  const route = useRoute();
  // route'un parametrelerine erişiyoruz.
  const {userId} = route.params;

  //useContext kullanıp usercontexte abone olacağız.
  const {users} = useContext(MyContext);

  // USER DİZİMİZ İÇİNDE USERLİSTSCREEN 'den gönderdiğimiz ID parametresine sahip
  // elemanı buluyoruz.
  const user = users.find(user => user.id === userId);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.name}> {user.name}</Text>
        <Text style={styles.username}> Username : {user.username}</Text>
        <Text style={styles.phone}> Phone : {user.phone}</Text>
        <Text style={styles.email}>Email : {user.email}</Text>
        <Text style={styles.website}> Web : {user.website}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Task', {userId})}>
          <Text style={styles.buttonText}>View Tasks</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F6F0F0',
  },
  card: {
    backgroundColor: '#F2E2B1',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  name: {
    fontSize: 22,
    fontWeight: '700',
    color: '#27445D',
    marginBottom: 15,
  },
  email: {
    fontSize: 14,
    marginHorizontal: 4,
    marginBottom: 5,
  },
  phone: {
    fontSize: 15,
    fontWeight: '500',
    marginVertical: 2,
    marginBottom: 5,
  },
  username: {
    fontWeight: '600',
    fontSize: 16,
    color: '#27667B',
    marginBottom: 5,
  },
  website: {
    fontSize: 14,
    fontStyle: 'italic',
    fontWeight: '700',
    paddingVertical: 2,
    color: '#E52020',
  },
  button: {
    padding: 5,
    backgroundColor: '#FBA518',
    borderRadius: 10,
    width: '40%',
    alignItems: 'center',
    marginTop: 15,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  buttonText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 15,
    fontWeight: '600',
  },
});
