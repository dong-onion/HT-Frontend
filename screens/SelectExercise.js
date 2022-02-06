import SelectDropdown from 'react-native-select-dropdown';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NormalInput from '../components/NormalInput';
import MaterialButton from '../components/MaterialButton';
import { useDispatch } from 'react-redux';
import { setAction } from '../redux_modules/workout/workout.action';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const SelectExercise = ({ navigation }) => {
  const dispatch = useDispatch();
  const [part, setPart] = useState([]);
  const [selectedPart, setSelectedPart] = useState('');
  const [name, setName] = useState('');
  const [set, setSet] = useState('');
  const [weight, setWeight] = useState('');
  const [count, setCount] = useState('');
  useEffect(() => {
    setTimeout(() => {
      setPart([
        '가슴',
        '어깨',
        '등',
        '복근',
        '팔',
        '하체',
        '엉덩이',
        '전신',
        '유산소',
      ]);
    }, 1000);
  }, []);
  return (
    <KeyboardAwareScrollView style={styles.container}>
      <View style={styles.select}>
        <SelectDropdown
          data={part}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
            setSelectedPart(selectedItem);
          }}
          defaultButtonText={'Select Part'}
          buttonStyle={styles.selectBtn}
        />
      </View>
      <View style={styles.inputBox}>
        <NormalInput
          placeholder="어떤 운동을 하실거에요?"
          value={name}
          onChangeText={setName}
        />
        <NormalInput
          placeholder="무게를 알려주세요"
          value={weight}
          keyboardType="number-pad"
          onChangeText={setWeight}
          children="kg"
        />
        <NormalInput
          placeholder="개수를 알려주세요"
          value={count}
          onChangeText={setCount}
          keyboardType="number-pad"
          children="개"
        />
        <NormalInput
          placeholder="세트 수 를 알려주세요"
          value={set}
          onChangeText={setSet}
          keyboardType="number-pad"
          children="개"
        />
      </View>
      <View style={styles.Btn}>
        <MaterialButton
          children={'저장'}
          onPress={() => {
            const id = Date.now();
            dispatch(setAction(id, selectedPart, weight, count, set, name));
            navigation.navigate('Routine');
          }}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 30,
  },
  selectBtn: {
    backgroundColor: '#a6e4e7',
  },
  select: {
    marginTop: 30,
    height: 100,
    // backgroundColor: 'blue',
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBox: {
    height: 400,
    flex: 6,
    // backgroundColor: 'orange',
    justifyContent: 'center',
  },
  Btn: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2,
    // backgroundColor: 'green',
  },
});

export default SelectExercise;
