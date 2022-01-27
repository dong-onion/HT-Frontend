import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJson } from '../redux_modules/profile/otherProfile.action';
import { selectOtherProfile } from '../redux_modules/profile/otherProfile.reducer';

const JsonScreen = () => {
  const { data } = useSelector(selectOtherProfile);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJson());
  }, []);
  console.log(data);
  return (
    <View>
      {data &&
        data.map(el => (
          <>
            <View>
              <Text>{el.id}</Text>
            </View>
            <View>
              <Text>{el.name}</Text>
            </View>
          </>
        ))}
    </View>
  );
};

export default JsonScreen;
