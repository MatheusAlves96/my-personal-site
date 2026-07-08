// src/data/navItems.js
import { FaHome, FaUser, FaFileAlt, FaFolderOpen, FaChartBar, FaEnvelope } from 'react-icons/fa';

export const navItems = [
  { id: 1, label: 'nav.home', href: '', icon: FaHome },
  { id: 2, label: 'nav.about', href: 'about', icon: FaUser },
  { id: 3, label: 'nav.resume', href: 'resume', icon: FaFileAlt },
  { id: 4, label: 'nav.projects', href: 'projects', icon: FaFolderOpen },
  { id: 5, label: 'nav.statistics', href: 'statistics', icon: FaChartBar },
  { id: 6, label: 'nav.contact', href: 'contact', icon: FaEnvelope },
];
