import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJson } from '../redux_modules/profile/otherProfile.action';
import { selectOtherProfile } from '../redux_modules/profile/otherProfile.reducer';

const JsonScreen = ({ navigation }) => {
  // const { data } = useSelector(selectOtherProfile);
  // const dispatch = useDispatch();
  // console.log('JsonScreen: ', data);
  // useEffect(() => {
  //   dispatch(fetchJson());
  // }, []);
  const [fetchData, setFetchData] = useState({});
  const onPress = async () => {
    const {
      data: { data },
    } = await axios.get('http://13.209.45.119:8080/users/1/profile');

    setFetchData(data);
  };

  return (
    <View>
      {fetchData && (
        <>
          <Text>{fetchData.name}</Text>
          <Text>{fetchData.email}</Text>
        </>
      )}

      <Button title="btn" onPress={onPress} />
      <Button
        title="운동리스트"
        onPress={() =>
          navigation.navigate('WorkoutStack', { screen: 'MyWorkout' })
        }
      />
    </View>
    // <View>
    //   {data &&
    //     data.map(el => (
    //       <>
    //         <View>
    //           <Text>{el.id}</Text>
    //         </View>
    //         <View>
    //           <Text>{el.name}</Text>
    //         </View>
    //       </>
    //     ))}
    // </View>
  );
};

export default JsonScreen;
