import React from 'react';

import campwithusImg from '@/../public/images/camp-with-us.png';
import carcatalogImg from '@/../public/images/car-catalog.png';
import filedriveImg from '@/../public/images/file-drive.png';
import projectmanagementImg from '@/../public/images/project-management.png';
import reactfoodImg from '@/../public/images/react-food.png';
import surgeImg from '@/../public/images/surge.png';
import portfolioImg from '@/../public/images/portfolio.png';
import auditMasterImg from '@/../public/images/audit-master.png';
import accountingImg from '@/../public/images/accounting.jpg';
import { BookIcon, BriefcaseBusinessIcon } from 'lucide-react';

export const links = [
  {
    name: 'Home',
    id: 'home',
  },
  {
    name: 'About',
    id: 'about',
  },
  {
    name: 'Projects',
    id: 'projects',
  },
  {
    name: 'Experience',
    id: 'experience',
  },
  {
    name: 'Skills',
    id: 'skills',
  },
  {
    name: 'Contact',
    id: 'contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'AytaSense Technologies',
    location: 'India',
    description:
      'Backend Developer. Building scalable microservices, integrating third-party APIs, and managing cloud-based deployments.',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Oct 2024 - Present',
  },
  {
    title: 'REAN Foundation',
    location: 'India',
    description:
      'Software Engineer. Developed and maintained healthcare applications, including real-time data processing and report generation.',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Jun 2023 - Sep 2024',
  },
  {
    title: 'Pune University',
    location: 'India',
    description: `Bachelor's degree in Computer Science.`,
    icon: React.createElement(BookIcon),
    date: 'July 2017 - July 2021',
  },
] as const;

export const images = {
  campwithusImg,
  carcatalogImg,
  filedriveImg,
  projectmanagementImg,
  reactfoodImg,
};

export const projectsData = [
  {
    title: 'Healthcare Device SDK',
    description: `Developed a third-party SDK for organizations to integrate healthcare device testing, vitals monitoring, and report generation into their software.`,
    tags: ['Node.js', 'TypeScript', 'Express', 'MongoDB', 'AWS S3'],
    imageUrl: auditMasterImg,
    link: 'https://github.com/yourprofile/healthcare-sdk',
  },
  {
    title: 'Sense Enterprise Backend',
    description:
      'Created and managed enterprise-level backend services for device connectivity, usage tracking, and admin functionalities.',
    tags: ['Node.js', 'Express', 'TypeScript', 'MERN', 'Docker'],
    imageUrl: accountingImg,
    link: 'https://github.com/yourprofile/sense-enterprise',
  },
  {
    title: 'LMS System',
    description:
      'Built a Learning Management System (LMS) with features like course creation, user management, and notifications.',
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'MongoDB',
      'Tailwind',
    ],
    imageUrl: filedriveImg,
    link: 'https://github.com/yourprofile/lms-system',
  },
  {
    title: 'Portfolio Website',
    description: `A personal portfolio showcasing my projects, skills, and experience in software development.`,
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'Framer Motion',
      'Tailwind',
    ],
    imageUrl: portfolioImg,
    link: 'https://github.com/yourprofile/portfolio',
  },
  {
    title: 'Video Call Service',
    description:
      'Developed a peer-to-peer video call service using WebRTC, Node.js, and Express.',
    tags: [
      'Node.js',
      'WebRTC',
      'Express',
      'Socket.io',
      'MongoDB',
    ],
    imageUrl: surgeImg,
    link: 'https://github.com/yourprofile/video-call-service',
  },
] as const;

export const skillsData = [
  ['JavaScript', '/svgs/javascript-js.svg'],
  ['TypeScript', '/svgs/typescript-icon.svg'],
  ['React', '/svgs/react.svg'],
  ['Next.js', '/svgs/nextjs.svg'],
  ['Node.js', '/svgs/node-js.svg'],
  ['Express', '/svgs/express-original.svg'],
  ['Tailwind', '/svgs/tailwind-css.svg'],
  ['MongoDB', '/svgs/mongodb-original.svg'],
  ['PostgreSQL', '/svgs/postgresql.svg'],
  ['MySQL', '/svgs/MySQL.svg'],
  ['Docker', '/svgs/Docker.svg'],
  ['AWS S3', '/svgs/aws.svg'],
  ['WebRTC', '/svgs/webrtc.svg'],
  ['Socket.io', '/svgs/socketio.svg'],
  ['Git', '/svgs/git.svg'],
  ['GitHub', '/svgs/github.svg'],
  ['', '/svgs/etc.svg'],
] as const;
