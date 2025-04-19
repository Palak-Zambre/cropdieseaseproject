"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { List, Search, Store, Leaf, LogOut, Menu, X, CloudUpload } from "lucide-react"

export default function Dashboard() {
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

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 overflow-auto">
      {/* Navigation */}
      <header className="bg-gray-800 shadow-md sticky top-0 z-10">
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
            <Link href="/marketplace" className="text-gray-300 hover:text-white">
              Marketplace
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white">
              About
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
              <Link href="/marketplace" className="text-gray-300 hover:text-white py-1">
                Marketplace
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white py-1">
                About
              </Link>
              <button onClick={handleLogout} className="flex items-center text-gray-300 hover:text-white py-1">
                <LogOut className="h-4 w-4 mr-1" />
                Logout
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Crop Image Collage */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-white mb-6">Revolutionize Your Crop Health</h1>

            <div className="grid grid-cols-3 gap-2 mb-6">
              <div className="aspect-square overflow-hidden rounded-lg">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZHPcAxjnFRV9TfTs3KLefcfnJwX-MS-O9FA&s"
                  alt="Healthy corn crop"
                  width={200}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=200&h=200&auto=format&fit=crop"
                  alt="Wheat field"
                  width={200}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDomxrAZzl5yGc59u9MnC82WgUbxoLg7Kbfw&s"
                  alt="Rice paddy"
                  width={200}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg">
                <Image
                  src="https://media.istockphoto.com/id/622925154/photo/ripe-rice-in-the-field-of-farmland.jpg?s=612x612&w=0&k=20&c=grtA7L3dm_SP80Fdt-PpIwu5GYacZygErTDUDNIKHwY="
                  alt="Soybean plants"
                  width={200}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTElvozsFLgeBgo-UwudZKTd-A7IW0BOTM5Nw&s"
                  alt="Cotton field"
                  width={200}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcT3rGgVTcN82El-AMpGWsdmwTUpk244871w&s"
                  alt="Vegetable garden"
                  width={200}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <p className="text-gray-300 mb-8">
              Our AI-powered crop disease prediction and management platform helps you identify and address issues
              before they become problems.
            </p>

            <div className="flex space-x-4">
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded">Get Started</button>
              <button className="border border-gray-600 text-gray-300 px-6 py-2 rounded hover:bg-gray-800">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Column - Upload Section */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-white mb-2">Upload Image</h2>
            <p className="text-gray-300 mb-6">Detect crop diseases by uploading an image.</p>

            <div className="border-2 border-dashed border-gray-600 rounded-lg py-16 px-4 flex flex-col items-center justify-center mb-8">
              <div className="bg-gray-700 p-4 rounded-full mb-4">
                <CloudUpload className="h-10 w-10 text-gray-400" />
              </div>
              <span className="text-gray-400 text-lg">Upload Image</span>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <button className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-md flex items-center justify-center text-base">
                <CloudUpload className="h-5 w-5 mr-2" />
                Select Image
              </button>
              <button className="border border-gray-600 text-gray-300 py-3 rounded-md hover:bg-gray-700 text-base">
                Predict
              </button>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {/* Card 1 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <div className="bg-green-900/50 p-4 rounded-full mb-4">
              <Search className="h-6 w-6 text-green-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Accurate Diagnosis</h3>
            <p className="text-gray-300 mb-4">
              Our advanced AI models can accurately identify crop diseases from uploaded images.
            </p>
            <Link href="#" className="text-green-400 hover:text-green-300 mt-auto">
              Learn More
            </Link>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <div className="bg-green-900/50 p-4 rounded-full mb-4">
              <List className="h-6 w-6 text-green-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Personalized Recommendations</h3>
            <p className="text-gray-300 mb-4">Get detailed management recommendations for identified crop diseases.</p>
            <Link href="#" className="text-green-400 hover:text-green-300 mt-auto">
              Learn More
            </Link>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <div className="bg-green-900/50 p-4 rounded-full mb-4">
              <Store className="h-6 w-6 text-green-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Marketplace Integration</h3>
            <p className="text-gray-300 mb-4">
              Discover and purchase high-quality crop supplements to address specific issues.
            </p>
            <Link href="#" className="text-green-400 hover:text-green-300 mt-auto">
              Visit Marketplace
            </Link>
          </div>
        </div>

        {/* Crop Supplement Marketplace Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Crop Supplement Marketplace</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Product 1 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <h3 className="text-lg font-semibold text-white mb-2">Fungicide for Powdery Mildew</h3>
              <p className="text-gray-300 mb-6">Organic fungicide to treat powdery mildew on crops.</p>
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded mt-auto">Buy Now</button>
            </div>

            {/* Product 2 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <h3 className="text-lg font-semibold text-white mb-2">Insecticide for Aphids</h3>
              <p className="text-gray-300 mb-6">Natural insecticide to control aphid infestations.</p>
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded mt-auto">Buy Now</button>
            </div>

            {/* Product 3 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <h3 className="text-lg font-semibold text-white mb-2">Fertilizer for Nutrient Deficiency</h3>
              <p className="text-gray-300 mb-6">Balanced fertilizer to address nutrient deficiencies.</p>
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded mt-auto">Buy Now</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
