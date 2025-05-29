"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaUserAlt } from "react-icons/fa";
import { TUser } from "@/app/constants/type";
import { profile } from "@/app/constants/types/userProfile";
import ViewProfile from "./ViewProfile";

interface UserCardProps {
  user: TUser | null; // Pass the logged-in user as a prop
}

function UserCard({ user }: UserCardProps) {
  // State for dropdown menu and ViewProfile modal
  const [showMenu, setShowMenu] = useState(false);
  const [showViewProfile, setShowViewProfile] = useState(false);

  // Toggle dropdown menu
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Handle View Profile click
  const handleViewProfile = () => {
    setShowViewProfile(true); // Open the ViewProfile modal
    setShowMenu(false); // Close the dropdown menu
  };

  // Close ViewProfile modal
  const closeViewProfile = () => {
    setShowViewProfile(false); // Close the ViewProfile modal
  };

  return (
    <div className="relative">
      <div className="flex items-center space-x-2 relative">
        {/* User Info */}
        <div className="text-right">
          <p className="text-title">
            {profile?.name?.split(" ")[0] || profile.name.split(" ")[0]}
          </p>
          <p className="text-sm">{profile?.role || profile.role}</p>
        </div>

        {/* Profile Image (Persist from constants if user.profileImage is not available) */}
        <div className="w-9 h-9 rounded-lg overflow-hidden border-2 border-gray-300">
          {profile?.profileImage ? (
            <Image
              src={profile.profileImage}
              alt="User Profile"
              width={36}
              height={36}
              className="object-cover cursor-pointer"
              onClick={toggleMenu}
            />
          ) : (
            < FaUserAlt  size={30}/>
          )}
        </div>
      </div>

      {/* Dropdown Menu */}
      {showMenu && (
        <div className="absolute top-12 left-0 bg-white border rounded-lg shadow-lg p-2 z-10">
          <p
            className="px-1 hover:text-primary cursor-pointer"
            onClick={handleViewProfile}
          >
            View Profile
          </p>
        </div>
      )}
      {/* ViewProfile Modal */}
      {showViewProfile && user && (
        <ViewProfile
          user={profile}
          closeViewUser={closeViewProfile}
        />
      )}
    </div>
  );
}

export default UserCard;