/* 허준서 1월 16일
팔로잉 리스트입니다. */

import React from 'react';
import { ScrollView } from 'react-native';
import FollowingListItem from './FollowingListItem';

const FollowingList = () => {
  const userList = [
    {
      id: 'lwamuhaji1',
      nickname: '닉네임블라블라',
      isFollowing: true,
      image: null,
    },
    {
      id: 'lwamuhaji2',
      nickname: '닉네임블라블라',
      isFollowing: false,
      image: null,
    },
    {
      id: 'lwamuhaji3',
      nickname: '닉네임블라블라',
      isFollowing: true,
      image: null,
    },
    {
      id: 'lwamuhaji4',
      nickname: '닉네임블라블라',
      isFollowing: false,
      image: null,
    },
    {
      id: 'lwamuhaji5',
      nickname: '닉네임블라블라',
      isFollowing: true,
      image: null,
    },
    {
      id: 'lwamuhaji6',
      nickname: '닉네임블라블라',
      isFollowing: false,
      image: null,
    },
    {
      id: 'lwamuhaji7',
      nickname: '닉네임블라블라',
      isFollowing: true,
      image: null,
    },
    {
      id: 'lwamuhaji8',
      nickname: '닉네임블라블라',
      isFollowing: false,
      image: null,
    },
    {
      id: 'lwamuhaji9',
      nickname: '닉네임블라블라',
      isFollowing: true,
      image: null,
    },
  ];

  return (
    <ScrollView>
      {userList.map((user) => (
        <FollowingListItem user={user} key={user.id} />
      ))}
    </ScrollView>
  );
};

export default FollowingList;
