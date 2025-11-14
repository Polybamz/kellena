// firebase.ts

import { create } from "domain";
import { initializeApp } from "firebase/app";

import {
  getFirestore,
  collection,
  onSnapshot,
  query,
  getDoc,
  setDoc,
  doc,
  orderBy,
  addDoc,
  Timestamp
} from "firebase/firestore";



// volunteers
export type VolunteerType = {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  skills: string[];
  interests: string[];
  availability: string[];
  languages: string[];
  notes: string;
  createdAt: string;
};

// event
export type EventType = {
  name: string;
  date: string;
  time: string;
  description: string;
  status: 'upcoming' | 'past' | 'current';
  type: string;
  gallery: string[]; // optional if uploaded separately
  location: string;
  attendees: number | null; // optional if added separately
};
// programs
export type ProgramType = {
  title: string;
  description: string;
  image: string;
  duration: string;
  startDate: string;
  endDate: string;
  status: 'active' | 'completed' | 'proposed';
  budget: number;
  spent: number;
  beneficiaries: number,
  progress: number,
}
/// impact story

 type ImpactStoryType = {
  id?: string;
  title: string;
  description: string;
  beneficiary: string;
  program: string;
  date: string;
  status: 'published' | 'draft';
  metrics: {
    livesImpacted: number;
    communityReach: number;
  };
  image: File | string | null;
};

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDrLqVdFd__ev_ukeasHmq-MROf5080xBM",
  authDomain: "kellena-7fe21.firebaseapp.com",
  projectId: "kellena-7fe21",
  storageBucket: "kellena-7fe21.appspot.com", // fixed domain
  messagingSenderId: "1044230705313",
  appId: "1:1044230705313:web:cca9eb29bd3cca6f5a20e0",
  measurementId: "G-K7R9J3YEHX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// get all events kkk
export const streamEvents = (
  onUpdate: (events: any[]) => void,
  onError?: (error: unknown) => void
) => {
  const eventsQuery = query(
    collection(db, 'events'),
    orderBy('createdAt', 'desc')
  );

  const unsubscribe = onSnapshot(
    eventsQuery,
    (snapshot) => {
      const events = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      localStorage.setItem('events', JSON.stringify(events));
      onUpdate(events);
    },
    (error) => {
      console.error('Stream Events Error:', error);
      if (onError) onError(error);
    }
  );

  return unsubscribe; // Use to stop listening when no longer needed
};

// get progarms
export const streamPrograms = (
  onUpdate: (programs: any[]) => void,
  onError?: (error: unknown) => void
) => {
  const programsQuery = query(
    collection(db, 'programs'),
    orderBy('createdAt', 'desc')
  );

  const unsubscribe = onSnapshot(
    programsQuery,
    (snapshot) => {
      const programs = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      localStorage.setItem('programs', JSON.stringify(programs));
      onUpdate(programs);
    },
    (error) => {
      console.error('Stream Programs Error:', error);
      if (onError) onError(error);
    }
  );

  return unsubscribe; // Must be called to stop listening
};

// 📌 Get All Impact Stories
export const streamImpactStories = (
  onUpdate: (stories: ImpactStoryType[]) => void,
  onError?: (error: unknown) => void
) => {
  const unsubscribe = onSnapshot(
    collection(db, 'impactStories'),
    (snapshot) => {
      const stories = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as ImpactStoryType[];
       localStorage.setItem('impactStories', JSON.stringify(stories));
      onUpdate(stories);
    },
    (error) => {
      console.error('Stream Impact Stories Error:', error);
      if (onError) onError(error);
    }
  );

  return unsubscribe; // Caller must use this to stop listening
};

/// register for newsletter
export const registerForNewsletter = async (email: string) => {
  try {
    const docRef = doc(db, "newsletter", email);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return true;
    } else {
      await setDoc(docRef, { email, createdAt: new Date().toISOString() });
      return {sucess: true};
    }
  } catch (error) {
    console.error("Failed to register for newsletter:", error.message);
    throw new Error("Failed to register for newsletter",);
  }
};
/// register for event
export const registerForEvent = async (eventId: string, email: string) => {
  try {
    const docRef = doc(db, "events", eventId, "attendees", email);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return true;
    } else {
      await setDoc(docRef, { email });
      return {sucess: true};
    }
  } catch (error) {
    console.error("Failed to register for event:", error.message);
    return {success:false};
  }
};
/// become a beneficiary
export const becomeABeneficiary = async (programId: string, email: string) => {
  try {
    const docRef = doc(db, "programs", programId, "beneficiaries", email);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return true;
    } else {
      await setDoc(docRef, { email });
      return {sucess: true};
    }
  } catch (error) {
    console.error("Failed to become a beneficiary:", error.message);
    return {success:false};
  }
};

// become a volunteer
export const createVolunteer = async (volunteer: VolunteerType) => {
  try {
    const response = await addDoc(collection(db, "volunteers"), {
      ...volunteer,
      createdAt: Timestamp.now(),
    })
    return {success: true, id: response.id};
  } catch (er) {
    return {success: false, message: er.message}
   }
}






