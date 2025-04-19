import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext} from 'react';
import {MyContext} from '../context/MyContext';
import Loader from '../components/Loader';
import {SCREENS} from '../utils/routes';

const UserListScreen = ({navigation}) => {
  // *abone olmak için useContext hooku kullanılır. useContext içerisine context in verilerini getirir.
  // *useContext kullanarak Context(imizde tuttuğumuz verilere erişim sağlayabiliyoruz.

  const {loading, error, users} = useContext(MyContext);
  console.warn(users);
  return (
    <View style={{flex: 1}}>
      {loading ? (
        <Loader />
      ) : error ? (
        <Text> {error}</Text>
      ) : (
        <FlatList
          data={users}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() =>
                // UserDetail sayfasına yönlendir ve tıklanan elementin ıd'sini parametre olarak ver.
                navigation.navigate(SCREENS.USERDETAIL, {userId: item.id})
              }>
              <View style={styles.item}>
                <Text style={styles.name}> {item.name}</Text>
                <Text style={styles.username}> Username : {item.username}</Text>

                <Text style={styles.phone}> Phone : {item.phone}</Text>
                <Text style={styles.email}>Email : {item.email}</Text>
                <Text style={styles.website}> Web : {item.website}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default UserListScreen;

const styles = StyleSheet.create({
  item: {
    paddingLeft: 25,
    paddingVertical: 15,
    marginVertical: 7,
    backgroundColor: '#FFD95F',
    marginHorizontal: 10,
    borderRadius: 40,
    shadowColor: 'black',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    color: '#27445D',
  },
  email: {
    fontSize: 14,
    marginHorizontal: 4,
  },
  phone: {
    fontSize: 15,
    fontWeight: '500',
    marginVertical: 2,
  },
  username: {
    fontWeight: '600',
    fontSize: 16,
    color: '#27667B',
  },
  website: {
    fontSize: 14,
    fontStyle: 'italic',
    fontWeight: '700',
    paddingVertical: 2,
    color: '#E52020',
  },
});
