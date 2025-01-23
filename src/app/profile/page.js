import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
const {getUser} = getKindeServerSession();
const user = await getUser();

export default function ProfilePage() {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
        {/* Profile Card */}
        <div className="bg-white shadow-lg rounded-lg w-11/12 sm:w-1/2 p-6">
          {/* Profile Image */}
          <div className="flex flex-col items-center">
            <h2 className="mt-4 text-2xl font-bold text-gray-800">Welcome to your profile!</h2>
            <h2 className="mt-4 text-2xl font-bold text-gray-800"> {user?.given_name || 'Guest'}</h2>
          </div>
  
          {/* Profile Info */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-orange-500">About Me</h3>
            <p className="mt-2 text-gray-600">
              Hello! I’m a passionate frontend developer specializing in React, 
              Tailwind CSS, and JavaScript. I enjoy building modern, responsive, 
              and user-friendly web applications.
            </p>
          </div>
  
          {/* Contact Info */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-orange-500">Contact Info</h3>
            <ul className="mt-2 text-gray-600 space-y-2">
              <li>Email:  <span className="font-bold">Email:</span> {user?.email || 'N/A'}</li>
              <li>Phone: <span className="font-medium">+880 1234 567 890</span></li>
              <li>Location: <span className="font-medium">Dhaka, Bangladesh</span></li>
            </ul>
          </div>
  
          {/* Buttons */}
          <div className="mt-6 flex justify-evenly">
            <LogoutLink className="btn bg-[#FFA500] px-4 py-2 rounded-xl">Log out</LogoutLink>
          </div>
        </div>
      </div>
    );
  }
  