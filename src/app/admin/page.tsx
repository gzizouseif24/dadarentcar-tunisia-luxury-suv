"use client";

import { useState, useEffect } from "react";
import { useSession, authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { 
  Car, Users, DollarSign, Calendar, AlertTriangle, TrendingUp, 
  Bell, Settings, BarChart3, PieChart, Activity, Package,
  CheckCircle, Clock, XCircle, Wrench, CreditCard, FileText, LogOut
} from "lucide-react";

export default function AdminDashboard() {
  const { data: session, isPending } = useSession();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("overview");

  // Protect route - redirect if not authenticated
  useEffect(() => {
    if (!isPending && !session?.user) {
      router.push("/login");
    }
  }, [session, isPending, router]);

  const handleSignOut = async () => {
    const token = localStorage.getItem("bearer_token");
    
    const { error } = await authClient.signOut({
      fetchOptions: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    });
    
    if (error?.code) {
      toast.error(error.code);
    } else {
      localStorage.removeItem("bearer_token");
      toast.success("Signed out successfully");
      router.push("/");
    }
  };

  // Show loading state while checking authentication
  if (isPending) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  // Don't render anything if not authenticated (will redirect)
  if (!session?.user) {
    return null;
  }

  // Mock data
  const stats = {
    totalVehicles: 50,
    availableVehicles: 32,
    activeRentals: 18,
    totalClients: 1247,
    monthlyRevenue: 125400,
    pendingPayments: 8,
    maintenanceDue: 5,
    occupancyRate: 64,
  };

  const recentBookings = [
    { id: "B001", client: "Ahmed Ben Ali", vehicle: "BMW X5", date: "2024-01-15", status: "Active", amount: 5250 },
    { id: "B002", client: "Fatima Mansour", vehicle: "Mercedes GLE", date: "2024-01-14", status: "Pending", amount: 6000 },
    { id: "B003", client: "Mohamed Trabelsi", vehicle: "Nissan Patrol", date: "2024-01-14", status: "Completed", amount: 3750 },
    { id: "B004", client: "Leila Hamdi", vehicle: "Range Rover", date: "2024-01-13", status: "Active", amount: 5700 },
    { id: "B005", client: "Youssef Kacem", vehicle: "Toyota Land Cruiser", date: "2024-01-13", status: "Active", amount: 4800 },
  ];

  const vehicles = [
    { id: "V001", name: "BMW X5", category: "Luxury", status: "Available", mileage: 45230, nextService: "2024-02-15" },
    { id: "V002", name: "Mercedes GLE", category: "Luxury", status: "Rented", mileage: 38120, nextService: "2024-02-10" },
    { id: "V003", name: "Nissan Patrol", category: "SUV", status: "Available", mileage: 62340, nextService: "2024-01-20" },
    { id: "V004", name: "Range Rover", category: "Luxury", status: "Maintenance", mileage: 51200, nextService: "2024-01-18" },
    { id: "V005", name: "Jeep Wrangler", category: "SUV", status: "Available", mileage: 28900, nextService: "2024-03-05" },
  ];

  const alerts = [
    { type: "warning", message: "5 vehicles due for maintenance within 7 days", icon: Wrench },
    { type: "danger", message: "3 payments overdue by more than 5 days", icon: CreditCard },
    { type: "info", message: "Low occupancy rate (64%) - AI suggests promotion", icon: TrendingUp },
    { type: "success", message: "Monthly revenue target achieved (102%)", icon: DollarSign },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-black text-white py-6 border-b border-yellow/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
              <p className="text-gray-300">Welcome back, {session.user.name || session.user.email}</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 hover:bg-white/10 rounded-full transition-colors">
                <Bell className="w-6 h-6" />
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  4
                </span>
              </button>
              <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <Settings className="w-6 h-6" />
              </button>
              <button
                onClick={handleSignOut}
                className="flex items-center gap-2 bg-yellow text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow/90 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="flex gap-4 mb-8 overflow-x-auto">
          {[
            { id: "overview", label: "Overview", icon: Activity },
            { id: "vehicles", label: "Vehicles", icon: Car },
            { id: "bookings", label: "Bookings", icon: Calendar },
            { id: "clients", label: "Clients", icon: Users },
            { id: "analytics", label: "Analytics", icon: BarChart3 },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-yellow text-black shadow-lg"
                  : "bg-white text-black hover:bg-gray-100"
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Car className="w-6 h-6 text-blue-500" />
                  </div>
                  <span className="text-sm text-green-500 font-semibold">+3 this week</span>
                </div>
                <h3 className="text-3xl font-bold text-black mb-1">{stats.totalVehicles}</h3>
                <p className="text-gray-600">Total Vehicles</p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <span className="text-sm text-gray-500">{stats.occupancyRate}% occupied</span>
                </div>
                <h3 className="text-3xl font-bold text-black mb-1">{stats.availableVehicles}</h3>
                <p className="text-gray-600">Available Now</p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-yellow/20 p-3 rounded-full">
                    <Users className="w-6 h-6 text-yellow" />
                  </div>
                  <span className="text-sm text-green-500 font-semibold">+42 this month</span>
                </div>
                <h3 className="text-3xl font-bold text-black mb-1">{stats.totalClients}</h3>
                <p className="text-gray-600">Total Clients</p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <DollarSign className="w-6 h-6 text-purple-500" />
                  </div>
                  <span className="text-sm text-green-500 font-semibold">+12% vs last month</span>
                </div>
                <h3 className="text-3xl font-bold text-black mb-1">{stats.monthlyRevenue.toLocaleString()} DT</h3>
                <p className="text-gray-600">Monthly Revenue</p>
              </div>
            </div>

            {/* Alerts */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-yellow" />
                AI Supervision & Alerts
              </h2>
              <div className="space-y-3">
                {alerts.map((alert, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-4 p-4 rounded-lg ${
                      alert.type === "danger"
                        ? "bg-red-50 border border-red-200"
                        : alert.type === "warning"
                        ? "bg-yellow/10 border border-yellow"
                        : alert.type === "info"
                        ? "bg-blue-50 border border-blue-200"
                        : "bg-green-50 border border-green-200"
                    }`}
                  >
                    <alert.icon className={`w-5 h-5 ${
                      alert.type === "danger"
                        ? "text-red-500"
                        : alert.type === "warning"
                        ? "text-yellow"
                        : alert.type === "info"
                        ? "text-blue-500"
                        : "text-green-500"
                    }`} />
                    <p className="text-black font-medium flex-1">{alert.message}</p>
                    <button className="text-sm font-semibold text-black hover:underline">
                      View Details
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Bookings */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-black mb-4">Recent Bookings</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-black">Booking ID</th>
                      <th className="text-left py-3 px-4 font-semibold text-black">Client</th>
                      <th className="text-left py-3 px-4 font-semibold text-black">Vehicle</th>
                      <th className="text-left py-3 px-4 font-semibold text-black">Date</th>
                      <th className="text-left py-3 px-4 font-semibold text-black">Status</th>
                      <th className="text-left py-3 px-4 font-semibold text-black">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentBookings.map((booking) => (
                      <tr key={booking.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 font-mono text-sm">{booking.id}</td>
                        <td className="py-3 px-4">{booking.client}</td>
                        <td className="py-3 px-4">{booking.vehicle}</td>
                        <td className="py-3 px-4">{booking.date}</td>
                        <td className="py-3 px-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            booking.status === "Active"
                              ? "bg-green-100 text-green-700"
                              : booking.status === "Pending"
                              ? "bg-yellow/20 text-yellow"
                              : "bg-gray-100 text-gray-700"
                          }`}>
                            {booking.status}
                          </span>
                        </td>
                        <td className="py-3 px-4 font-semibold">{booking.amount} DT</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Vehicles Tab */}
        {activeTab === "vehicles" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-black">Vehicle Management</h2>
              <button className="bg-yellow text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow/90 transition-colors">
                Add New Vehicle
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {vehicles.map((vehicle) => (
                <div key={vehicle.id} className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="bg-gray-200 w-16 h-16 rounded-lg flex items-center justify-center">
                        <Car className="w-8 h-8 text-gray-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-black">{vehicle.name}</h3>
                        <p className="text-gray-600">{vehicle.category} • ID: {vehicle.id}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <p className="text-sm text-gray-500">Mileage</p>
                        <p className="font-semibold">{vehicle.mileage.toLocaleString()} km</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500">Next Service</p>
                        <p className="font-semibold">{vehicle.nextService}</p>
                      </div>
                      <span className={`px-4 py-2 rounded-lg font-semibold ${
                        vehicle.status === "Available"
                          ? "bg-green-100 text-green-700"
                          : vehicle.status === "Rented"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-orange-100 text-orange-700"
                      }`}>
                        {vehicle.status}
                      </span>
                      <button className="bg-gray-100 p-2 rounded-lg hover:bg-gray-200 transition-colors">
                        <Settings className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bookings Tab */}
        {activeTab === "bookings" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-black">Booking Management</h2>
              <div className="flex gap-2">
                <button className="bg-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Filter
                </button>
                <button className="bg-yellow text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow/90 transition-colors">
                  New Booking
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left py-4 px-6 font-semibold text-black">Booking ID</th>
                    <th className="text-left py-4 px-6 font-semibold text-black">Client</th>
                    <th className="text-left py-4 px-6 font-semibold text-black">Vehicle</th>
                    <th className="text-left py-4 px-6 font-semibold text-black">Period</th>
                    <th className="text-left py-4 px-6 font-semibold text-black">Status</th>
                    <th className="text-left py-4 px-6 font-semibold text-black">Amount</th>
                    <th className="text-left py-4 px-6 font-semibold text-black">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {recentBookings.map((booking) => (
                    <tr key={booking.id} className="border-t border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-6 font-mono text-sm">{booking.id}</td>
                      <td className="py-4 px-6">{booking.client}</td>
                      <td className="py-4 px-6">{booking.vehicle}</td>
                      <td className="py-4 px-6">{booking.date}</td>
                      <td className="py-4 px-6">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          booking.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : booking.status === "Pending"
                            ? "bg-yellow/20 text-yellow"
                            : "bg-gray-100 text-gray-700"
                        }`}>
                          {booking.status}
                        </span>
                      </td>
                      <td className="py-4 px-6 font-semibold">{booking.amount} DT</td>
                      <td className="py-4 px-6">
                        <button className="text-blue-500 hover:underline text-sm font-semibold">
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Clients Tab */}
        {activeTab === "clients" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-black">Client Management</h2>
              <div className="flex gap-2">
                <input
                  type="search"
                  placeholder="Search clients..."
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow"
                />
                <button className="bg-yellow text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow/90 transition-colors">
                  Export
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Ahmed Ben Ali", email: "ahmed@email.com", rentals: 8, loyalty: "Gold" },
                { name: "Fatima Mansour", email: "fatima@email.com", rentals: 3, loyalty: "Silver" },
                { name: "Mohamed Trabelsi", email: "mohamed@email.com", rentals: 15, loyalty: "Platinum" },
                { name: "Leila Hamdi", email: "leila@email.com", rentals: 5, loyalty: "Gold" },
                { name: "Youssef Kacem", email: "youssef@email.com", rentals: 2, loyalty: "Bronze" },
                { name: "Samira Abidi", email: "samira@email.com", rentals: 12, loyalty: "Platinum" },
              ].map((client, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-yellow/20 w-12 h-12 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-yellow" />
                    </div>
                    <div>
                      <h3 className="font-bold text-black">{client.name}</h3>
                      <p className="text-sm text-gray-600">{client.email}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-sm text-gray-500">Total Rentals</p>
                      <p className="font-bold text-black">{client.rentals}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      client.loyalty === "Platinum"
                        ? "bg-purple-100 text-purple-700"
                        : client.loyalty === "Gold"
                        ? "bg-yellow/20 text-yellow"
                        : client.loyalty === "Silver"
                        ? "bg-gray-200 text-gray-700"
                        : "bg-orange-100 text-orange-700"
                    }`}>
                      {client.loyalty}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === "analytics" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-black">Analytics & Reports</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Revenue Chart */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-black mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                  Revenue Trend
                </h3>
                <div className="h-64 flex items-end justify-between gap-2">
                  {[65, 78, 82, 95, 88, 102, 110, 98, 105, 112, 120, 125].map((value, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center">
                      <div
                        className="w-full bg-yellow rounded-t hover:bg-yellow/80 transition-colors"
                        style={{ height: `${(value / 125) * 100}%` }}
                      />
                      <span className="text-xs text-gray-500 mt-2">{["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"][index]}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Occupancy Rate */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-black mb-4 flex items-center gap-2">
                  <PieChart className="w-5 h-5 text-blue-500" />
                  Occupancy Rate
                </h3>
                <div className="flex items-center justify-center h-64">
                  <div className="relative w-48 h-48">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="96"
                        cy="96"
                        r="80"
                        stroke="#e5e7eb"
                        strokeWidth="20"
                        fill="none"
                      />
                      <circle
                        cx="96"
                        cy="96"
                        r="80"
                        stroke="oklch(0.85 0.15 85)"
                        strokeWidth="20"
                        fill="none"
                        strokeDasharray={`${(stats.occupancyRate / 100) * 502.65} 502.65`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-4xl font-bold text-black">{stats.occupancyRate}%</span>
                      <span className="text-sm text-gray-500">Occupied</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Top Vehicles */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-black mb-4">Top Performing Vehicles</h3>
                <div className="space-y-3">
                  {[
                    { name: "Mercedes GLE", bookings: 45, revenue: 18000 },
                    { name: "BMW X5", bookings: 38, revenue: 13300 },
                    { name: "Range Rover", bookings: 32, revenue: 12160 },
                    { name: "Nissan Patrol", bookings: 28, revenue: 7000 },
                  ].map((vehicle, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-semibold text-black">{vehicle.name}</p>
                        <p className="text-sm text-gray-500">{vehicle.bookings} bookings</p>
                      </div>
                      <p className="font-bold text-green-500">{vehicle.revenue.toLocaleString()} DT</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Payment Status */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-black mb-4">Payment Status</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Completed Payments</span>
                    <span className="font-bold text-green-500">142</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: "85%" }} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Pending Payments</span>
                    <span className="font-bold text-yellow">18</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow h-2 rounded-full" style={{ width: "10%" }} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Overdue Payments</span>
                    <span className="font-bold text-red-500">8</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{ width: "5%" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}