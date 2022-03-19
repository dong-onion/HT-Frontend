import React, { useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import GroupListItem from '../components/GroupListItem';
import NormalInput from '../components/NormalInput';
import makeRequest from '../function/makeRequest';
const SearchGroup = () => {
  const [searchWord, setSearchWord] = useState('');
  const [isRender, setIsRender] = useState(true);
  const [groupList, setGroupList] = useState([
    {
      teamId: Date.now(),
      teamName: '어깡모임',
    },
    {
      teamId: 33213,
      teamName: '헬창이 되고싶나?',
    },
  ]);
  const onSearch = async () => {
    const res = await makeRequest({
      method: 'GET',
      url: `/users/team/${searchWord}`,
    });
    console.log('SearchGroup/onSearch : ', res.data);
    setGroupList(res.data);
    setIsRender(true);
  };
  return (
    <KeyboardAwareScrollView style={styles.container}>
      <View style={styles.searchBox}>
        <NormalInput
          width={280}
          value={searchWord}
          onChangeText={setSearchWord}
        />
        <TouchableOpacity style={styles.searchIcon} onPress={onSearch}>
          <Icon name="search" size={28} />
        </TouchableOpacity>
      </View>
      <View style={styles.groupList}>
        <FlatList
          keyExtractor={item => item.teamId}
          data={groupList}
          renderItem={({ item }) => (
            <GroupListItem title={item.teamName} id={item.teamId} />
          )}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  searchBox: {
    flex: 3,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginLeft: 30,
    marginVertical: 50,
  },
  searchIcon: {
    marginLeft: 20,
    width: 40,
  },
  groupList: {
    flex: 6,
  },
});

export default SearchGroup;
