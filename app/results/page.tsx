"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Leaf, LogOut, Menu, X, ArrowLeft, Download, Share2, AlertCircle } from "lucide-react"
import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"

export default function Results() {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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

  // Sample data for the charts
  const diseaseData = [
    { name: "Powdery Mildew", value: 75 },
    { name: "Leaf Rust", value: 15 },
    { name: "Healthy", value: 10 },
  ]

  const COLORS = ["#ff5252", "#ffb142", "#4aca64"]

  const treatmentEffectivenessData = [
    { day: 1, effectiveness: 20 },
    { day: 3, effectiveness: 35 },
    { day: 7, effectiveness: 60 },
    { day: 14, effectiveness: 85 },
    { day: 21, effectiveness: 95 },
  ]

  const cropHealthHistoryData = [
    { month: "Jan", health: 85 },
    { month: "Feb", health: 80 },
    { month: "Mar", health: 75 },
    { month: "Apr", health: 65 },
    { month: "May", health: 60 },
    { month: "Jun", health: 70 },
    { month: "Jul", health: 80 },
  ]

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
        {/* Back button */}
        <div className="mb-6">
          <button
            onClick={() => router.push("/dashboard")}
            className="flex items-center text-gray-300 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Diagnosis
          </button>
        </div>

        <h1 className="text-3xl font-bold text-white mb-8">Analysis Results</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Image and Disease Info */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-6">
              <h2 className="text-xl font-semibold text-white mb-4">Uploaded Image</h2>
              <div className="relative aspect-square w-full mb-4">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDomxrAZzl5yGc59u9MnC82WgUbxoLg7Kbfw&s"
                  alt="Crop image"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex justify-between">
                <button className="text-gray-300 hover:text-white flex items-center text-sm">
                  <Download className="h-4 w-4 mr-1" />
                  Download
                </button>
                <button className="text-gray-300 hover:text-white flex items-center text-sm">
                  <Share2 className="h-4 w-4 mr-1" />
                  Share
                </button>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-white mb-4">Disease Information</h2>
              <div className="mb-4 p-3 bg-red-900/30 border border-red-700 rounded-md flex items-start">
                <AlertCircle className="h-5 w-5 text-red-400 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-red-400">Powdery Mildew Detected</h3>
                  <p className="text-sm text-gray-300">Severity: High (75% confidence)</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Powdery mildew is a fungal disease that affects a wide range of plants. It appears as a white to gray
                powdery growth on leaf surfaces, stems, and sometimes fruit.
              </p>
              <h3 className="font-medium text-white mb-2">Recommended Actions:</h3>
              <ul className="text-sm text-gray-300 space-y-2 list-disc list-inside">
                <li>Apply fungicide specifically designed for powdery mildew</li>
                <li>Improve air circulation around plants</li>
                <li>Avoid overhead watering to keep foliage dry</li>
                <li>Remove and destroy severely infected plant parts</li>
              </ul>
            </div>
          </div>

          {/* Right Column - Charts and Analysis */}
          <div className="lg:col-span-2">
            {/* Disease Probability Chart */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-6">
              <h2 className="text-xl font-semibold text-white mb-4">Disease Probability</h2>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={diseaseData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {diseaseData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Treatment Effectiveness Chart */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-6">
              <h2 className="text-xl font-semibold text-white mb-4">Treatment Effectiveness Over Time</h2>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={treatmentEffectivenessData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                    <XAxis
                      dataKey="day"
                      label={{ value: "Days", position: "insideBottom", offset: -5, fill: "#aaa" }}
                    />
                    <YAxis label={{ value: "Effectiveness (%)", angle: -90, position: "insideLeft", fill: "#aaa" }} />
                    <Tooltip contentStyle={{ backgroundColor: "#333", borderColor: "#555" }} />
                    <Line type="monotone" dataKey="effectiveness" stroke="#4aca64" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Crop Health History Chart */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-white mb-4">Crop Health History</h2>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={cropHealthHistoryData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                    <XAxis dataKey="month" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip contentStyle={{ backgroundColor: "#333", borderColor: "#555" }} />
                    <Line type="monotone" dataKey="health" stroke="#4aca64" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        {/* Treatment Recommendations */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-white mb-6">Treatment Recommendations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Recommendation 1 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-white mb-2">Fungicide Application</h3>
              <p className="text-gray-300 mb-4">Apply a sulfur-based fungicide or neem oil to affected areas.</p>
              <Link href="#" className="text-green-400 hover:text-green-300 text-sm">
                View recommended products →
              </Link>
            </div>

            {/* Recommendation 2 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-white mb-2">Cultural Practices</h3>
              <p className="text-gray-300 mb-4">Improve air circulation and reduce humidity around plants.</p>
              <Link href="#" className="text-green-400 hover:text-green-300 text-sm">
                Learn more about cultural practices →
              </Link>
            </div>

            {/* Recommendation 3 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-white mb-2">Preventive Measures</h3>
              <p className="text-gray-300 mb-4">Plant resistant varieties and maintain proper plant spacing.</p>
              <Link href="#" className="text-green-400 hover:text-green-300 text-sm">
                Explore resistant varieties →
              </Link>
            </div>
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
