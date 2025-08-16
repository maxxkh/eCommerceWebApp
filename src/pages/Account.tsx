import React, { useState } from 'react';
import { User, Package, Heart, Settings, LogOut, Edit, Eye } from 'lucide-react';

const Account: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', name: 'Profile', icon: User },
    { id: 'orders', name: 'Orders', icon: Package },
    { id: 'wishlist', name: 'Wishlist', icon: Heart },
    { id: 'settings', name: 'Settings', icon: Settings },
  ];

  const orders = [
    {
      id: 'ORD-001',
      date: '2025-01-15',
      status: 'Delivered',
      total: 2499,
      items: [
        { name: 'Quantum Resonance Headphones', price: 2499, quantity: 1 }
      ]
    },
    {
      id: 'ORD-002',
      date: '2025-01-10',
      status: 'In Transit',
      total: 3899,
      items: [
        { name: 'Infinity Display Watch', price: 3899, quantity: 1 }
      ]
    },
    {
      id: 'ORD-003',
      date: '2025-01-05',
      status: 'Processing',
      total: 4299,
      items: [
        { name: 'Cyber Vision Glasses', price: 4299, quantity: 1 }
      ]
    }
  ];

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            My Account
          </h1>
          <p className="text-gray-400">Manage your profile, orders, and preferences</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-6 border border-purple-500/20 backdrop-blur-sm">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">John Doe</h3>
                  <p className="text-gray-400 text-sm">Premium Member</p>
                </div>
              </div>

              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                        : 'text-gray-400 hover:text-white hover:bg-gray-700/30'
                    }`}
                  >
                    <tab.icon className="w-5 h-5" />
                    <span>{tab.name}</span>
                  </button>
                ))}
                
                <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all duration-300 mt-8">
                  <LogOut className="w-5 h-5" />
                  <span>Sign Out</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-8 border border-purple-500/20 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-white">Profile Information</h2>
                    <button className="flex items-center space-x-2 px-4 py-2 bg-blue-500/20 text-blue-400 rounded-xl hover:bg-blue-500/30 transition-colors">
                      <Edit className="w-4 h-4" />
                      <span>Edit</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 mb-2">First Name</label>
                      <input
                        type="text"
                        value="John"
                        readOnly
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">Last Name</label>
                      <input
                        type="text"
                        value="Doe"
                        readOnly
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-gray-300 mb-2">Email Address</label>
                      <input
                        type="email"
                        value="john.doe@example.com"
                        readOnly
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        value="+1 (555) 123-4567"
                        readOnly
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">Member Since</label>
                      <input
                        type="text"
                        value="January 2024"
                        readOnly
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-8 border border-purple-500/20 backdrop-blur-sm">
                  <h2 className="text-2xl font-bold text-white mb-6">Shipping Address</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-300 mb-2">Address</label>
                      <input
                        type="text"
                        value="123 Quantum Street"
                        readOnly
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-300 mb-2">City</label>
                        <input
                          type="text"
                          value="Neo Tokyo"
                          readOnly
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-300 mb-2">State</label>
                        <input
                          type="text"
                          value="CA"
                          readOnly
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-8 border border-purple-500/20 backdrop-blur-sm">
                <h2 className="text-2xl font-bold text-white mb-6">Order History</h2>
                
                <div className="space-y-6">
                  {orders.map((order) => (
                    <div key={order.id} className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-white font-semibold">Order {order.id}</h3>
                          <p className="text-gray-400 text-sm">Placed on {order.date}</p>
                        </div>
                        <div className="text-right">
                          <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            order.status === 'Delivered' ? 'bg-green-500/20 text-green-400' :
                            order.status === 'In Transit' ? 'bg-blue-500/20 text-blue-400' :
                            'bg-yellow-500/20 text-yellow-400'
                          }`}>
                            {order.status}
                          </div>
                          <div className="text-white font-bold mt-2">
                            ${order.total.toLocaleString()}
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2 mb-4">
                        {order.items.map((item, index) => (
                          <div key={index} className="flex justify-between text-sm">
                            <span className="text-gray-300">{item.name} × {item.quantity}</span>
                            <span className="text-white">${item.price.toLocaleString()}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex space-x-4">
                        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-500/20 text-blue-400 rounded-xl hover:bg-blue-500/30 transition-colors">
                          <Eye className="w-4 h-4" />
                          <span>View Details</span>
                        </button>
                        <button className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-xl hover:bg-purple-500/30 transition-colors">
                          Reorder
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Wishlist Tab */}
            {activeTab === 'wishlist' && (
              <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-8 border border-purple-500/20 backdrop-blur-sm">
                <h2 className="text-2xl font-bold text-white mb-6">My Wishlist</h2>
                
                <div className="text-center py-16">
                  <Heart className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-400 text-lg mb-2">Your wishlist is empty</p>
                  <p className="text-gray-500 text-sm">Save your favorite products for later</p>
                </div>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-8 border border-purple-500/20 backdrop-blur-sm">
                  <h2 className="text-2xl font-bold text-white mb-6">Account Settings</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-xl">
                      <div>
                        <h3 className="text-white font-semibold">Email Notifications</h3>
                        <p className="text-gray-400 text-sm">Receive updates about your orders</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                      </label>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-xl">
                      <div>
                        <h3 className="text-white font-semibold">Marketing Emails</h3>
                        <p className="text-gray-400 text-sm">Get notified about new products and offers</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                      </label>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-xl">
                      <div>
                        <h3 className="text-white font-semibold">Two-Factor Authentication</h3>
                        <p className="text-gray-400 text-sm">Add an extra layer of security</p>
                      </div>
                      <button className="px-4 py-2 bg-green-500/20 text-green-400 rounded-xl hover:bg-green-500/30 transition-colors">
                        Enable
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-8 border border-purple-500/20 backdrop-blur-sm">
                  <h2 className="text-2xl font-bold text-white mb-6">Privacy & Security</h2>
                  
                  <div className="space-y-4">
                    <button className="w-full text-left p-4 bg-gray-800/30 rounded-xl hover:bg-gray-700/30 transition-colors">
                      <h3 className="text-white font-semibold mb-1">Change Password</h3>
                      <p className="text-gray-400 text-sm">Update your account password</p>
                    </button>
                    
                    <button className="w-full text-left p-4 bg-gray-800/30 rounded-xl hover:bg-gray-700/30 transition-colors">
                      <h3 className="text-white font-semibold mb-1">Download Data</h3>
                      <p className="text-gray-400 text-sm">Get a copy of your account data</p>
                    </button>
                    
                    <button className="w-full text-left p-4 bg-red-500/10 border border-red-500/20 rounded-xl hover:bg-red-500/20 transition-colors">
                      <h3 className="text-red-400 font-semibold mb-1">Delete Account</h3>
                      <p className="text-gray-400 text-sm">Permanently delete your account and data</p>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;