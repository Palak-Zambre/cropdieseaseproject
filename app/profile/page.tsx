"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Leaf, LogOut, Menu, X, User, Settings, Bell, Shield, HelpCircle } from "lucide-react"

export default function Profile() {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("profile")

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    if (!isLoggedIn) {
      router.push("/login")
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn")
    router.push("/login")
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
      {/* Navigation */}
      <header className="bg-gray-800 shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/welcome" className="flex items-center space-x-2">
            <div className="bg-green-900 p-1 rounded-full">
              <Leaf className="h-5 w-5 text-green-400" />
            </div>
            <span className="text-xl font-bold text-white">Crop Disease</span>
          </Link>

          {/* Mobile menu button */}
          <button className="md:hidden text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/welcome" className="text-gray-300 hover:text-white">
              Home
            </Link>
            <Link href="/dashboard" className="text-gray-300 hover:text-white">
              Diagnosis
            </Link>
            <Link href="/history" className="text-gray-300 hover:text-white">
              History
            </Link>
            <Link href="/profile" className="text-gray-300 hover:text-white">
              Profile
            </Link>
            <button onClick={handleLogout} className="flex items-center text-gray-300 hover:text-white">
              <LogOut className="h-4 w-4 mr-1" />
              Logout
            </button>
          </nav>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 px-4 py-2 pb-4">
            <nav className="flex flex-col space-y-3">
              <Link href="/welcome" className="text-gray-300 hover:text-white py-1">
                Home
              </Link>
              <Link href="/dashboard" className="text-gray-300 hover:text-white py-1">
                Diagnosis
              </Link>
              <Link href="/history" className="text-gray-300 hover:text-white py-1">
                History
              </Link>
              <Link href="/profile" className="text-gray-300 hover:text-white py-1">
                Profile
              </Link>
              <button onClick={handleLogout} className="flex items-center text-gray-300 hover:text-white py-1">
                <LogOut className="h-4 w-4 mr-1" />
                Logout
              </button>
            </nav>
          </div>
        )}
      </header>

      <main className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-3xl font-bold text-white mb-8">Account Settings</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <div className="flex flex-col items-center mb-6">
                <div className="relative h-24 w-24 mb-4">
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNtDLlrBMFIfaCTRvdz9_cOUqqhFYA2vmmWg&s"
                    alt="Profile"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h2 className="text-lg font-semibold text-white">John Farmer</h2>
                <p className="text-sm text-gray-400">john.farmer@example.com</p>
              </div>

              <nav className="space-y-1">
                <button
                  onClick={() => setActiveTab("profile")}
                  className={`w-full flex items-center px-4 py-2 text-sm rounded-md ${
                    activeTab === "profile" ? "bg-green-900/30 text-green-400" : "text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  <User className="h-4 w-4 mr-3" />
                  Profile Information
                </button>
                <button
                  onClick={() => setActiveTab("settings")}
                  className={`w-full flex items-center px-4 py-2 text-sm rounded-md ${
                    activeTab === "settings" ? "bg-green-900/30 text-green-400" : "text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  <Settings className="h-4 w-4 mr-3" />
                  Account Settings
                </button>
                <button
                  onClick={() => setActiveTab("notifications")}
                  className={`w-full flex items-center px-4 py-2 text-sm rounded-md ${
                    activeTab === "notifications" ? "bg-green-900/30 text-green-400" : "text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  <Bell className="h-4 w-4 mr-3" />
                  Notifications
                </button>
                <button
                  onClick={() => setActiveTab("privacy")}
                  className={`w-full flex items-center px-4 py-2 text-sm rounded-md ${
                    activeTab === "privacy" ? "bg-green-900/30 text-green-400" : "text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  <Shield className="h-4 w-4 mr-3" />
                  Privacy & Security
                </button>
                <button
                  onClick={() => setActiveTab("help")}
                  className={`w-full flex items-center px-4 py-2 text-sm rounded-md ${
                    activeTab === "help" ? "bg-green-900/30 text-green-400" : "text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  <HelpCircle className="h-4 w-4 mr-3" />
                  Help & Support
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">
            {activeTab === "profile" && (
              <div className="bg-gray-800 rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-white mb-6">Profile Information</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        defaultValue="John"
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        defaultValue="Farmer"
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      defaultValue="john.farmer@example.com"
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      defaultValue="+1 (555) 123-4567"
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-300 mb-1">
                      Farm Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      defaultValue="Midwest Region, USA"
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="bio" className="block text-sm font-medium text-gray-300 mb-1">
                      Bio
                    </label>
                    <textarea
                      id="bio"
                      rows={4}
                      defaultValue="Third-generation farmer specializing in wheat and corn cultivation. Using technology to improve crop yields and sustainability."
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>

                  <div className="flex justify-end">
                    <button type="submit" className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md">
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            )}

            {activeTab === "settings" && (
              <div className="bg-gray-800 rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-white mb-6">Account Settings</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-white mb-4">Change Password</h3>
                    <form className="space-y-4">
                      <div>
                        <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-300 mb-1">
                          Current Password
                        </label>
                        <input
                          type="password"
                          id="currentPassword"
                          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="newPassword" className="block text-sm font-medium text-gray-300 mb-1">
                          New Password
                        </label>
                        <input
                          type="password"
                          id="newPassword"
                          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-1">
                          Confirm New Password
                        </label>
                        <input
                          type="password"
                          id="confirmPassword"
                          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>
                      <div className="flex justify-end">
                        <button
                          type="submit"
                          className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md"
                        >
                          Update Password
                        </button>
                      </div>
                    </form>
                  </div>

                  <div className="pt-6 border-t border-gray-700">
                    <h3 className="text-lg font-medium text-white mb-4">Language & Region</h3>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="language" className="block text-sm font-medium text-gray-300 mb-1">
                          Language
                        </label>
                        <select
                          id="language"
                          defaultValue="en"
                          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                          <option value="en">English</option>
                          <option value="es">Spanish</option>
                          <option value="fr">French</option>
                          <option value="de">German</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="timezone" className="block text-sm font-medium text-gray-300 mb-1">
                          Timezone
                        </label>
                        <select
                          id="timezone"
                          defaultValue="america_chicago"
                          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                          <option value="america_new_york">America/New York (UTC-5)</option>
                          <option value="america_chicago">America/Chicago (UTC-6)</option>
                          <option value="america_denver">America/Denver (UTC-7)</option>
                          <option value="america_los_angeles">America/Los Angeles (UTC-8)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-700">
                    <h3 className="text-lg font-medium text-white mb-4">Danger Zone</h3>
                    <div className="bg-red-900/20 border border-red-800 rounded-md p-4">
                      <h4 className="text-red-400 font-medium mb-2">Delete Account</h4>
                      <p className="text-gray-300 text-sm mb-4">
                        Once you delete your account, there is no going back. Please be certain.
                      </p>
                      <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md">
                        Delete Account
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 mt-auto">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Crop Disease</h3>
              <p className="text-gray-400 text-sm">
                AI-powered crop disease detection and management platform for farmers worldwide.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/dashboard" className="text-gray-400 hover:text-green-400">
                    Disease Detection
                  </Link>
                </li>
                <li>
                  <Link href="/history" className="text-gray-400 hover:text-green-400">
                    Scan History
                  </Link>
                </li>
                <li>
                  <Link href="/marketplace" className="text-gray-400 hover:text-green-400">
                    Marketplace
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-green-400">
                    Disease Library
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-green-400">
                    Treatment Guides
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-green-400">
                    Farming Tips
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li className="text-gray-400">support@cropdisease.com</li>
                <li className="text-gray-400">+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Crop Disease. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
