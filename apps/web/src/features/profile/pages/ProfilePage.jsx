import React, { useState } from 'react';
import ProfileHeader from '../components/ProfileHeader';
import TabMenu from '../components/TabMenu';
import Overview from '../components/Overview';
import ProjectsTab from '../components/ProjectsTab';
import FeedbackTab from '../components/FeedbackTab';
import EditProfileModal from '../components/EditProfileModal';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="p-6 w-full mr-5">
      <ProfileHeader onEdit={() => setModalOpen(true)} />
      <TabMenu activeTab={activeTab} onChange={setActiveTab} />
      <div className="mt-6">
        {activeTab === 'overview' && <Overview />}
        {activeTab === 'projects' && <ProjectsTab />}
        {activeTab === 'feedback' && <FeedbackTab />}
      </div>
      {modalOpen && <EditProfileModal onClose={() => setModalOpen(false)} />}
    </div>
);
}

export default ProfilePage;
