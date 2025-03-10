import React from 'react';
import { CheckCircle, Clock, Award } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Assessment Progress</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium mb-3">Task 1: Community Engagement</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                Create a Poll
              </li>
              <li className="flex items-center text-gray-700">
                <Clock className="w-5 h-5 text-yellow-500 mr-2" />
                Post Content
              </li>
              <li className="flex items-center text-gray-700">
                <Clock className="w-5 h-5 text-yellow-500 mr-2" />
                Ask a Question
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium mb-3">Task 2: Course Completion</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Course Progress</span>
                <span className="text-indigo-600 font-medium">0%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '0%' }}></div>
              </div>
              <p className="text-sm text-gray-600">Select and complete one course to proceed</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">Your Achievements</h2>
          <Award className="w-8 h-8 text-yellow-500" />
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="border border-gray-200 rounded-lg p-4 text-center">
            <p className="text-4xl font-bold text-indigo-600">0</p>
            <p className="text-gray-600">Completed Courses</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 text-center">
            <p className="text-4xl font-bold text-indigo-600">0</p>
            <p className="text-gray-600">Community Posts</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 text-center">
            <p className="text-4xl font-bold text-indigo-600">0</p>
            <p className="text-gray-600">Engagement Score</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;