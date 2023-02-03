import { createContext, useEffect, useState } from "react";
import { client } from "./../client";

const RoboContext = createContext();

export const RoboProvider = ({ children }) => {
  const [members, setMembers] = useState([]);
  const [projects, setProjects] = useState([]);
  const [events, setEvents] = useState([]);
  const [news, setNews] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [eventsLoading, setEventsLoading] = useState(true);
  const [projectsLoading, setProjectsLoading] = useState(true);
  const [membersLoading, setMembersLoading] = useState(true);
  const [newsLoading, setNewsLoading] = useState(true);
  const [photosLoading, setPhotosLoading] = useState(true);

  async function getMembers() {
    const query = '*[_type == "members"]';
    await client.fetch(query).then((data) => {
      setMembers(data);
      setMembersLoading(false);
      // console.log(data);
    });
  }

  async function getProjects() {
    const query = '*[_type == "projects"]';
    await client.fetch(query).then((data) => {
      setProjects(data);
      setProjectsLoading(false);
      // console.log(data);
    });
  }

  async function getEvents() {
    const query = '*[_type == "events"]';
    await client.fetch(query).then((data) => {
      setEvents(data);
      setEventsLoading(false);
      // console.log(data);
    });
  }

  async function getNews() {
    const query = '*[_type == "blogs"]';
    await client.fetch(query).then((data) => {
      setNews(data);
      setNewsLoading(false);
      // console.log(data);
    });
  }

  async function getPhotos() {
    const query = '*[_type == "gallery"]';
    await client.fetch(query).then((data) => {
      setPhotos(data);
      setPhotosLoading(false);
      // console.log(data);
    });
  }
  

  useEffect(() => {
    getMembers();
    getProjects();
    getEvents();
    getNews();
    getPhotos();
  }, []);

  return (
    <RoboContext.Provider
      value={{
        members,
        membersLoading,
        projects,
        projectsLoading,
        events,
        eventsLoading,
        news,
        newsLoading,
        photos,
        photosLoading
      }}
    >
      {children}
    </RoboContext.Provider>
  );
};

export default RoboContext;
