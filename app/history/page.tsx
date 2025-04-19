"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Leaf, LogOut, Menu, X, Search, Filter, Calendar, ArrowUpDown } from "lucide-react"

export default function History() {
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

  // Sample scan history data
  const scanHistory = [
    {
      id: 1,
      date: "July 15, 2023",
      cropType: "Wheat",
      disease: "Powdery Mildew",
      severity: "High",
      status: "Treated",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDomxrAZzl5yGc59u9MnC82WgUbxoLg7Kbfw&s",
    },
    {
      id: 2,
      date: "June 28, 2023",
      cropType: "Corn",
      disease: "Leaf Rust",
      severity: "Medium",
      status: "Monitoring",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZHPcAxjnFRV9TfTs3KLefcfnJwX-MS-O9FA&s",
    },
    {
      id: 3,
      date: "June 10, 2023",
      cropType: "Rice",
      disease: "Blast",
      severity: "Low",
      status: "Resolved",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcT3rGgVTcN82El-AMpGWsdmwTUpk244871w&s",
    },
    {
      id: 4,
      date: "May 22, 2023",
      cropType: "Soybean",
      disease: "None Detected",
      severity: "N/A",
      status: "Healthy",
      image:
        "https://media.istockphoto.com/id/622925154/photo/ripe-rice-in-the-field-of-farmland.jpg?s=612x612&w=0&k=20&c=grtA7L3dm_SP80Fdt-PpIwu5GYacZygErTDUDNIKHwY=",
    },
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
        <h1 className="text-3xl font-bold text-white mb-8">Scan History</h1>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by crop type or disease..."
              className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white hover:bg-gray-700">
              <Filter className="h-4 w-4" />
              Filter
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white hover:bg-gray-700">
              <Calendar className="h-4 w-4" />
              Date
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white hover:bg-gray-700">
              <ArrowUpDown className="h-4 w-4" />
              Sort
            </button>
          </div>
        </div>

        {/* Scan History Table */}
        <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-700">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Image
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Crop Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Disease
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Severity
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {scanHistory.map((scan) => (
                  <tr key={scan.id} className="hover:bg-gray-750">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="relative h-12 w-12">
                        <Image
                          src={scan.image || "/placeholder.svg"}
                          alt={scan.cropType}
                          fill
                          className="object-cover rounded-md"
                        />
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{scan.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{scan.cropType}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{scan.disease}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          scan.severity === "High"
                            ? "bg-red-900/30 text-red-400"
                            : scan.severity === "Medium"
                              ? "bg-yellow-900/30 text-yellow-400"
                              : scan.severity === "Low"
                                ? "bg-blue-900/30 text-blue-400"
                                : "bg-gray-700 text-gray-400"
                        }`}
                      >
                        {scan.severity}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          scan.status === "Treated"
                            ? "bg-green-900/30 text-green-400"
                            : scan.status === "Monitoring"
                              ? "bg-blue-900/30 text-blue-400"
                              : scan.status === "Resolved"
                                ? "bg-purple-900/30 text-purple-400"
                                : "bg-green-900/30 text-green-400"
                        }`}
                      >
                        {scan.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      <Link href={`/results?id=${scan.id}`} className="text-green-400 hover:text-green-300">
                        View Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-6">
          <div className="text-sm text-gray-400">
            Showing <span className="font-medium">1</span> to <span className="font-medium">4</span> of{" "}
            <span className="font-medium">4</span> results
          </div>
          <div className="flex gap-2">
            <button
              className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-md text-gray-400 hover:bg-gray-700 disabled:opacity-50"
              disabled
            >
              Previous
            </button>
            <button className="px-3 py-1 bg-gray-700 border border-gray-600 rounded-md text-white">1</button>
            <button
              className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-md text-gray-400 hover:bg-gray-700 disabled:opacity-50"
              disabled
            >
              Next
            </button>
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
