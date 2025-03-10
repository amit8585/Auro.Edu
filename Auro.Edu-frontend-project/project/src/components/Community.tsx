import React, { useState } from 'react';
import { MessageSquare, PlusCircle, ThumbsUp, ThumbsDown } from 'lucide-react';

const Community = () => {
  const [activeTab, setActiveTab] = useState('posts');

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Community Engagement</h2>
          <button className="flex items-center bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
            <PlusCircle className="w-5 h-5 mr-2" />
            Create New
          </button>
        </div>

        <div className="border-b border-gray-200 mb-6">
          <nav className="flex space-x-8">
            <button
              className={`pb-4 px-1 ${
                activeTab === 'posts'
                  ? 'border-b-2 border-indigo-500 text-indigo-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('posts')}
            >
              Posts
            </button>
            <button
              className={`pb-4 px-1 ${
                activeTab === 'polls'
                  ? 'border-b-2 border-indigo-500 text-indigo-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('polls')}
            >
              Polls
            </button>
            <button
              className={`pb-4 px-1 ${
                activeTab === 'questions'
                  ? 'border-b-2 border-indigo-500 text-indigo-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('questions')}
            >
              Questions
            </button>
          </nav>
        </div>

        <div className="space-y-6">
          {/* Example Community Post */}
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="User avatar"
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-medium">John Doe</h3>
                  <p className="text-sm text-gray-500">2 hours ago</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="flex items-center text-gray-500 hover:text-green-500">
                  <ThumbsUp className="w-5 h-5 mr-1" />
                  <span>24</span>
                </button>
                <button className="flex items-center text-gray-500 hover:text-red-500">
                  <ThumbsDown className="w-5 h-5 mr-1" />
                  <span>2</span>
                </button>
              </div>
            </div>
            <p className="mt-4 text-gray-700">
              Just completed the JavaScript in Depth course! The advanced concepts covered were incredibly helpful.
              Looking forward to applying these skills in real-world projects.
            </p>
            <div className="mt-4 flex items-center text-gray-500">
              <MessageSquare className="w-5 h-5 mr-2" />
              <span>12 comments</span>
            </div>
          </div>

          {/* Placeholder for empty state */}
          <div className="text-center py-8">
            <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900">No more posts to show</h3>
            <p className="text-gray-500">Be the first to share your thoughts with the community</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;