import PlaceList from "../../components/places/PlaceList";
import postObj from "../../models/postObj";
import React, { useEffect, useState } from "react";

const post1: postObj = {
  id: "p1",
  image:
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80",
  title: "My day off!",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  creatorId: "u1",
  address: "Atlantic City, NJ",
  coordinates: { lat: 39.3594698, lng: -74.4092219 },
};
const post2: postObj = {
  id: "p2",
  image:
    "https://images.unsplash.com/photo-1586751287766-b0d6eaee95ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  title: "Vacay!",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
  creatorId: "u2",
  address: "Port Republic, NJ",
  coordinates: { lat: 39.3594698, lng: -74.4092219 },
};
const Posts: postObj[] = [post1, post2];

const UserPlaces: React.FC<{ filteredPosts: postObj[] }> = (props) => {
  return (
    <React.Fragment>
      <PlaceList items={props.filteredPosts} />
    </React.Fragment>
  );
};
export default UserPlaces;

export function getServerSideProps(context: any) {
  const userID = context.params.uID;

  const filteredPosts = Posts.filter((post) => {
    return post.creatorId === userID;
  });
  return { props: { filteredPosts: filteredPosts } };
}
