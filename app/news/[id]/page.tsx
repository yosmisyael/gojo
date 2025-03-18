import Image from 'next/image';

export async function generateStaticParams() {
        const ids = ['1', '2', '3'];

        return ids.map(id => ({
                id: id.toString(),
        }));
}

export default function ArticlePage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Image */}
            <div className="relative w-full h-[400px]">
            <Image
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2013&q=80"
                alt="Tree planting initiative"
                fill
                className="object-cover"
            />
            </div>

            {/* Article Content */}
            <article className="max-w-4xl mx-auto px-4 py-8">
            <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Restoring Our Planet: One Tree at a Time
            </h1>

            <div className="flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center">
            <Image
                src="https://api.dicebear.com/6.x/initials/svg?seed=JD"
            alt="John Doe"
            width={40}
            height={40}
            className="rounded-full"
            />
            <span className="ml-2">John Doe</span>
            </div>
            <span>|</span>
            <span>Published on August 25, 2023</span>
            </div>
            </div>

            <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
                At Gojo Environmental Initiative, we believe that every small action counts towards creating a sustainable future. Our recent tree plantation drive in the heart of the city marks another milestone in our journey towards environmental conservation.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
                The initiative saw participation from over 200 volunteers who helped plant 1,000 native trees. These trees will not only help reduce carbon emissions but also provide habitat for local wildlife and improve air quality for our community.
            </p>
            </div>

            {/* Reactions and Comments Section */}
            <div className="mt-12 border-t pt-8">
            <div className="flex items-center space-x-8 mb-8">
            <button className="flex items-center space-x-2 text-green-600 hover:text-green-700">
            {/*<FaHeart className="text-xl" />*/}
                <span>245 Reactions</span>
            </button>
            <button className="flex items-center space-x-2 text-green-600 hover:text-green-700">
            {/*<FaComment className="text-xl" />*/}
                <span>23 Comments</span>
            </button>
            </div>

            {/* Comments Section */}
            <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">Comments</h3>

                <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
            <Image
                src="https://api.dicebear.com/6.x/initials/svg?seed=JS"
            alt="Jane Smith"
            width={32}
            height={32}
            className="rounded-full"
            />
            <span className="ml-2 font-medium">Jane Smith</span>
            </div>
            <p className="text-gray-700">
                This is such an inspiring initiative! I&apos;d love to participate in the next plantation drive.
            </p>
            </div>
            </div>
            </div>
            </article>
    </main>
);
}