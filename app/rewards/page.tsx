"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function RedeemPoints() {
    const [activeTab, setActiveTab] = useState('donations');
    const [userPoints, setUserPoints] = useState(2450);

    const tabs = [
        { id: 'donations', label: 'Donations' },
        { id: 'green-goods', label: 'Green Goods' },
        { id: 'merchandise', label: 'Merchandise' }
    ];

    const donations = [
        { id: 1, title: 'Plant 10 Trees', points: 500, image: 'https://www.vintagetreecare.com/wp-content/uploads/2023/06/planting-tree.jpg', impact: 'Offset 2.4 tons of CO2', description: '' },
        { id: 2, title: 'Clean Ocean Initiative', points: 750, image: 'https://www.oceanicsociety.org/wp-content/uploads/2024/07/global-ocean-cleanup-funzel-el-salvador-2.jpg', impact: 'Remove 15kg of plastic', description: '' },
        { id: 3, title: 'Wildlife Protection', points: 1000, image: 'https://www.green.earth/hubfs/endangered%20species_baby%20sumatran%20elephant_featured.png', impact: 'Support 5 endangered species', description: '' }
    ];

    const greenGoods = [
        { id: 4, title: 'Succulent Plant', points: 300, image: 'https://www.gardendesign.com/pictures/images/900x705Max/dream-team-s-portland-garden_6/beauty-star-calathea-calathea-ornata-pinstripe-calathea-proven-winners_17336.jpg', description: 'Indoor air purifying plant', impact: "" },
        { id: 5, title: 'Herb Garden Kit', points: 450, image: 'https://hips.hearstapps.com/hmg-prod/images/a-set-of-colorful-potted-plants-on-a-patterned-area-royalty-free-image-1716493110.jpg?crop=0.668xw:1.00xh;0.210xw,0&resize=1200:*', description: 'Grow your own herbs', impact: "" },
        { id: 6, title: 'Hanging Terrarium', points: 600, image: 'https://bonnieplants.com/cdn/shop/articles/windowsill-herb-garden-is_445ee5d4-3236-41dd-aade-373ba51508ad.jpg?v=1642541526', description: 'Decorative mini ecosystem', impact: "" }
    ];

    const merchandise = [
        { id: 7, title: 'Gojo T-Shirt', points: 400, image: '../../', description: 'Made from recycled materials', impact: "" },
        { id: 8, title: 'Reusable Water Bottle', points: 350, image: '/api/placeholder/150/150', description: 'Reduce plastic waste', impact: "" },
        { id: 9, title: 'Cap', points: 250, image: '/api/placeholder/150/150', description: 'Tailored cap for ', impact: '' }
    ];

    const renderItems = () => {
        let items = [];

        switch(activeTab) {
            case 'donations':
                items = donations;
                break;
            case 'green-goods':
                items = greenGoods;
                break;
            case 'merchandise':
                items = merchandise;
                break;
            default:
                items = donations;
        }

        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map(item => (
                        <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="relative">
                    <img
                        src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-0 right-0 bg-green-600 text-white px-3 py-1 rounded-bl-lg font-medium">
                        {item.points} pts
                        </div>
                </div>
                <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.description || item?.impact}</p>
            <button
        className={`mt-4 w-full py-2 rounded-md font-medium transition-colors ${
            userPoints >= item.points
                ? 'bg-green-600 hover:bg-green-700 text-white'
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
        }`}
        disabled={userPoints < item.points}
        >
        {userPoints >= item.points ? 'Redeem Now' : 'Not Enough Points'}
        </button>
        </div>
        </div>
    ))}
        </div>
    );
    };

    return (
        <div className="min-h-screen bg-green-50">
            {/* Navigation Bar */}
            <nav className="bg-green-700 text-white shadow-md">
    <div className="container mx-auto px-4 py-3 flex justify-between items-center">
    <Link href="/public">
    <div className="flex items-center space-x-2 cursor-pointer">
    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
    <span className="text-green-700 font-bold text-lg">G</span>
        </div>
        <span className="text-xl font-bold">Gojo</span>
        </div>
        </Link>
        <div className="flex items-center space-x-6">
    <Link href="/dashboard">
    <span className="hover:text-green-200 transition-colors cursor-pointer">Dashboard</span>
        </Link>
        <Link href="/activities">
    <span className="hover:text-green-200 transition-colors cursor-pointer">Activities</span>
        </Link>
        <Link href="/redeem-points">
    <span className="text-green-200 font-semibold cursor-pointer">Redeem</span>
        </Link>
        <div className="bg-green-600 px-3 py-1 rounded-full flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
        </svg>
        <span>{userPoints} points</span>
    </div>
    </div>
    </div>
    </nav>

    {/* Main Content */}
    <div className="container mx-auto px-4 py-8">
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
    <div className="flex items-center space-x-4">
    <div className="p-3 bg-green-100 rounded-full">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    </div>
    <div>
    <h1 className="text-2xl font-bold text-gray-800">Redeem Your Points</h1>
    <p className="text-gray-600">Turn your environmental actions into real impact</p>
    </div>
    </div>
    </div>

    {/* Tabs */}
    <div className="mb-8">
    <div className="flex space-x-1 bg-green-100 p-1 rounded-lg inline-block">
        {tabs.map(tab => (
                <button
                    key={tab.id}
            onClick={() => setActiveTab(tab.id)}
    className={`px-4 py-2 rounded-md font-medium transition-colors ${
        activeTab === tab.id
            ? 'bg-green-600 text-white'
            : 'text-green-800 hover:bg-green-200'
    }`}
>
    {tab.label}
    </button>
))}
    </div>
    </div>

    {/* Items Grid */}
    {renderItems()}

    {/* Impact Summary */}
    <div className="mt-12 bg-white rounded-xl shadow-md p-6">
    <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Environmental Impact</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="bg-green-50 rounded-lg p-4 flex items-center space-x-4">
    <div className="p-3 bg-green-100 rounded-full">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
    </div>
    <div>
    <div className="text-sm text-gray-600">Points Earned</div>
    <div className="text-xl font-semibold text-gray-800">3,720</div>
    </div>
    </div>
    <div className="bg-green-50 rounded-lg p-4 flex items-center space-x-4">
    <div className="p-3 bg-green-100 rounded-full">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
    </div>
    <div>
    <div className="text-sm text-gray-600">Activities Completed</div>
    <div className="text-xl font-semibold text-gray-800">28</div>
        </div>
        </div>
        <div className="bg-green-50 rounded-lg p-4 flex items-center space-x-4">
    <div className="p-3 bg-green-100 rounded-full">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
    </div>
    <div>
    <div className="text-sm text-gray-600">CO2 Offset</div>
    <div className="text-xl font-semibold text-gray-800">4.8 tons</div>
    </div>
    </div>
    </div>
    </div>
    </div>

    {/* Footer */}
    <footer className="bg-green-800 text-white mt-12 py-8">
    <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
    <div>
        <h3 className="text-lg font-semibold mb-4">About Gojo</h3>
    <p className="text-green-200">Empowering individuals to make a positive impact on our environment through everyday actions.</p>
    </div>
    <div>
    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
    <ul className="space-y-2">
    <li><Link href="/public"><span className="text-green-200 hover:text-white transition-colors">Home</span></Link></li>
    <li><Link href="/dashboard"><span className="text-green-200 hover:text-white transition-colors">Dashboard</span></Link></li>
    <li><Link href="/activities"><span className="text-green-200 hover:text-white transition-colors">Activities</span></Link></li>
    <li><Link href="/redeem"><span className="text-green-200 hover:text-white transition-colors">Redeem Points</span></Link></li>
    </ul>
    </div>
    <div>
    <h3 className="text-lg font-semibold mb-4">Help & Support</h3>
        <ul className="space-y-2">
    <li><Link href="/faq"><span className="text-green-200 hover:text-white transition-colors">FAQ</span></Link></li>
    <li><Link href="/contact"><span className="text-green-200 hover:text-white transition-colors">Contact Us</span></Link></li>
    <li><Link href="/privacy"><span className="text-green-200 hover:text-white transition-colors">Privacy Policy</span></Link></li>
    <li><Link href="/terms"><span className="text-green-200 hover:text-white transition-colors">Terms of Service</span></Link></li>
    </ul>
    </div>
    <div>
    <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
    <div className="flex space-x-4">
    <a href="#" className="text-green-200 hover:text-white transition-colors">
    <span className="sr-only">Facebook</span>
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
        </svg>
        </a>
        <a href="#" className="text-green-200 hover:text-white transition-colors">
    <span className="sr-only">Instagram</span>
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
        </svg>
        </a>
        <a href="#" className="text-green-200 hover:text-white transition-colors">
    <span className="sr-only">Twitter</span>
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
        </a>
        </div>
        </div>
        </div>
        <div className="mt-8 pt-8 border-t border-green-700 text-center text-green-200">
        <p>&copy; {new Date().getFullYear()} Gojo. All rights reserved.</p>
    </div>
    </div>
    </footer>
    </div>
);
}