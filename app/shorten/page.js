"use client"

import Link from 'next/link'
import React, { useState } from 'react'

const Shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setGenerated] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [copied, setCopied] = useState(false)

    const generate = async () => {
        if (!url.trim()) {
            alert("Please enter a URL to shorten")
            return
        }

        setIsLoading(true)
        
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        try {
            const response = await fetch("/api/generate", requestOptions)
            const result = await response.json()
            
            if (response.ok) {
                setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
                seturl("")
                setshorturl("")
                console.log(result)
            } else {
                alert(result.message || "An error occurred")
            }
        } catch (error) {
            console.error(error)
            alert("Network error. Please try again.")
        } finally {
            setIsLoading(false)
        }
    }

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(generated)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (err) {
            console.error('Failed to copy: ', err)
        }
    }
    
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 py-12 px-4">
            <div className="max-w-2xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full mb-6 shadow-lg">
                        <span className="text-2xl">🔗</span>
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Shorten Your URLs
                    </h1>
                    <p className="text-xl text-gray-600 max-w-md mx-auto">
                        Transform long URLs into short, memorable links in seconds
                    </p>
                </div>

                {/* Main Form Card */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                    <div className="p-8">
                        <div className="space-y-6">
                            {/* URL Input */}
                            <div>
                                <label htmlFor="url" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Original URL *
                                </label>
                                <div className="relative">
                                    <input
                                        id="url"
                                        type="text"
                                        value={url}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                                        placeholder="https://example.com/very/long/url"
                                        onChange={e => seturl(e.target.value)}
                                        disabled={isLoading}
                                    />
                                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Custom Short URL Input */}
                            <div>
                                <label htmlFor="shorturl" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Custom Short URL (Optional)
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <span className="text-gray-500 text-sm font-medium">bitlinks.com/</span>
                                    </div>
                                    <input
                                        id="shorturl"
                                        type="text"
                                        value={shorturl}
                                        className="w-full pl-28 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                                        placeholder="my-custom-link"
                                        onChange={e => setshorturl(e.target.value)}
                                        disabled={isLoading}
                                    />
                                </div>
                                <p className="text-xs text-gray-500 mt-1">Leave blank for auto-generated short URL</p>
                            </div>

                            {/* Generate Button */}
                            <button
                                onClick={generate}
                                disabled={isLoading || !url.trim()}
                                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                            >
                                {isLoading ? (
                                    <div className="flex items-center justify-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Generating...
                                    </div>
                                ) : (
                                    <div className="flex items-center justify-center">
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                        Generate Short URL
                                    </div>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Result Section */}
                    {generated && (
                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-t border-gray-100 p-8">
                            <div className="flex items-center mb-4">
                                <div className="flex items-center justify-center w-8 h-8 bg-green-100 rounded-full mr-3">
                                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900">Your shortened URL is ready!</h3>
                            </div>
                            
                            <div className="bg-white rounded-lg border border-gray-200 p-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex-1 min-w-0">
                                        <Link 
                                            href={generated} 
                                            target="_blank"
                                            className="block text-purple-600 hover:text-purple-700 font-mono text-lg break-all hover:underline transition-colors duration-200"
                                        >
                                            {generated}
                                        </Link>
                                    </div>
                                    <button
                                        onClick={copyToClipboard}
                                        className="ml-4 flex-shrink-0 bg-purple-100 hover:bg-purple-200 text-purple-700 px-4 py-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    >
                                        {copied ? (
                                            <div className="flex items-center">
                                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Copied!
                                            </div>
                                        ) : (
                                            <div className="flex items-center">
                                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                                </svg>
                                                Copy
                                            </div>
                                        )}
                                    </button>
                                </div>
                            </div>

                            <div className="mt-4 flex items-center text-sm text-gray-600">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Click the link to test it, or copy it to share anywhere
                            </div>
                        </div>
                    )}
                </div>

                {/* Features Section */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">Lightning Fast</h3>
                        <p className="text-gray-600 text-sm">Generate short URLs in milliseconds</p>
                    </div>
                    
                    <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">Secure & Reliable</h3>
                        <p className="text-gray-600 text-sm">Your links are safe and always accessible</p>
                    </div>
                    
                    <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a1 1 0 01-1-1V9a1 1 0 011-1h1a2 2 0 100-4H4a1 1 0 01-1-1V4a1 1 0 011-1h3a1 1 0 011 1v1z" />
                            </svg>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">Custom URLs</h3>
                        <p className="text-gray-600 text-sm">Create memorable, branded short links</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shorten