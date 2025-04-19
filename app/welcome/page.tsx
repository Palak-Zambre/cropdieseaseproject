"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Camera, Search, History, Leaf, LogOut, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function Welcome() {
  const router = useRouter()

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

  const handleStartDiagnosis = () => {
    router.push("/dashboard")
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
      </header>

      <main className="container mx-auto px-4 py-12 flex-grow">
        {/* Welcome Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Welcome to Crop Disease!</h1>
          <p className="text-xl text-gray-300 mb-8">Empowering Farmers with AI-Driven Disease Detection</p>

          <div className="relative h-40 md:h-60 mb-8">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNtDLlrBMFIfaCTRvdz9_cOUqqhFYA2vmmWg&s"
              alt="Healthy crops"
              fill
              className="object-cover rounded-lg opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <p className="text-white text-xl font-medium italic">"Healthy Crops, Happy Harvests!"</p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="bg-gray-800 p-4 rounded-lg shadow-md text-center">
            <p className="text-green-400 text-3xl font-bold">On Testing</p>
            <p className="text-gray-300 text-sm">Farmers Helped</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-md text-center">
            <p className="text-green-400 text-3xl font-bold">98%</p>
            <p className="text-gray-300 text-sm">Detection Accuracy</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-md text-center">
            <p className="text-green-400 text-3xl font-bold">10+</p>
            <p className="text-gray-300 text-sm">Crop Diseases</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-md text-center">
            <p className="text-green-400 text-3xl font-bold">30%</p>
            <p className="text-gray-300 text-sm">Yield Improvement</p>
          </div>
        </div>

        {/* Features Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Feature 1 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <div className="bg-green-900/50 p-4 rounded-full mb-4">
              <Camera className="h-8 w-8 text-green-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Upload Crop Image</h3>
            <p className="text-gray-300">Take or upload photos of your crops to analyze for potential diseases.</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <div className="bg-green-900/50 p-4 rounded-full mb-4">
              <Search className="h-8 w-8 text-green-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Detect Diseases Instantly</h3>
            <p className="text-gray-300">Our AI analyzes your images and provides accurate disease identification.</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <div className="bg-green-900/50 p-4 rounded-full mb-4">
              <History className="h-8 w-8 text-green-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Track Previous Scans</h3>
            <p className="text-gray-300">Keep a history of all your crop scans and monitor disease progression.</p>
          </div>

          {/* Feature 4 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <div className="bg-green-900/50 p-4 rounded-full mb-4">
              <BarChart3 className="h-8 w-8 text-green-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Data Analytics</h3>
            <p className="text-gray-300">View trends and insights about your crop health over time.</p>
          </div>
        </div>

        {/* Start Button */}
        <div className="text-center">
          <button
            onClick={handleStartDiagnosis}
            className="bg-green-600 hover:bg-green-700 text-white text-lg font-medium px-10 py-4 rounded-lg shadow-lg transition-all hover:shadow-xl transform hover:-translate-y-1"
          >
            Start Diagnosis
          </button>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-400">
            Our AI-powered platform has helped thousands of farmers identify and treat crop diseases early.
          </p>
          <p className="text-gray-400 mt-2">Join them in protecting your harvest and maximizing your yield.</p>
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
