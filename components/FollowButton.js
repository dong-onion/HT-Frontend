/* 허준서 1월 16일
팔로우 또는 팔로우 취소시 사용할 버튼입니다. */
import React from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';

const FollowButton = ({ style, isFollowing }) => {
  const onPress = () => {};

  return (
    <View>
      <Pressable
        style={[styles.block, isFollowing && styles.followingBlock, style]}
        android_ripple={{ color: 'lightgray' }}
        onPress={onPress}>
        <Text style={[styles.text, isFollowing && styles.followingText]}>
          {isFollowing ? '팔로잉' : '팔로우'}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    height: 30,
    width: 120,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3796F0',
  },
  followingBlock: { backgroundColor: 'white' },
  text: { color: 'white' },
  followingText: { color: 'black' },
});

export default FollowButton;
