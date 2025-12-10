import fs from 'fs';
import path from 'path';

import { Tutor } from './types';

const dataDirectory = path.join(process.cwd(), 'public/AllData');

export function getTutors(): Tutor[] {
  const tutorDir = path.join(dataDirectory, 'tutorData');
  if (!fs.existsSync(tutorDir)) {
    return [];
  }
  const fileNames = fs.readdirSync(tutorDir);
  const allTutorsData = fileNames.map((fileName) => {
    const fullPath = path.join(tutorDir, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    return JSON.parse(fileContents);
  });
  return allTutorsData;
}

export function getTutor(id: string): Tutor | undefined {
  const tutors = getTutors();
  return tutors.find((tutor) => tutor.id === id);
}

export function getNotes() {
  const notesDir = path.join(dataDirectory, 'notes');
  if (!fs.existsSync(notesDir)) return [];
  return fs.readdirSync(notesDir);
}

export function getVideos() {
  const videoDir = path.join(dataDirectory, 'demoVideos');
  if (!fs.existsSync(videoDir)) return [];
  return fs.readdirSync(videoDir);
}
