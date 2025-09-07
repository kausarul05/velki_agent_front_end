"use client";
import Image from "next/image";
import React from "react";
import img1 from "@/../../public/footer1.jpg"
import img2 from "@/../../public/footer2.jpg"
import img3 from "@/../../public/footer3.jpg"
import { CheckCircle, Pin, Lock, Mail, AlertTriangle } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-white text-black">
            <section className="bg-black text-white px-4 py-8 md:px-12 md:py-12">
                <div className="max-w-3xl mx-auto space-y-6 text-sm md:text-base leading-relaxed">

                    {/* Heading */}
                    <p className="flex items-start gap-2 text-gray-200 font-medium">
                        <AlertTriangle className="text-yellow-400 w-5 h-5 shrink-0 mt-1" />
                        <span>
                            এজেন্ট দের সাথে যোগাযোগ এর আগে ভেল্কির নিয়ম গুলো জেনে নিন!!
                        </span>
                    </p>

                    {/* Rule 1 */}
                    <p className="flex items-start gap-2">
                        <CheckCircle className="text-green-500 w-5 h-5 shrink-0 mt-1" />
                        <span>
                            প্রতারণার হাত থেকে বাঁচতে সবার আগে ভিজিট করুন ভেল্কি অফিসিয়াল সাইটঃ{" "}
                            <a
                                href="https://winpbu.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 underline hover:text-blue-300"
                            >
                                Winpbu.com
                            </a>
                        </span>
                    </p>

                    {/* Rule 2 */}
                    <p className="flex items-start gap-2">
                        <Pin className="text-red-400 w-5 h-5 shrink-0 mt-1" />
                        <span>
                            হোয়াটস্যাপ কোন এপ এর মাধ্যমে যোগাযোগ করা যাবে না। করলে তা গ্রহণযোগ্য হবে না।
                        </span>
                    </p>

                    {/* Rule 3 */}
                    <p className="flex items-start gap-2">
                        <Lock className="text-yellow-500 w-5 h-5 shrink-0 mt-1" />
                        <span>
                            পাসওয়ার্ড পরিবর্তন করে দিলে – আপনি একাউন্ট ঢুকে আবার পাসওয়ার্ড পরিবর্তন করে নেবেন।
                            এজেন্ট কোন ভাবেই আপনার পাসওয়ার্ড না জানে।
                        </span>
                    </p>

                    {/* Rule 4 */}
                    <p className="flex items-start gap-2">
                        <Mail className="text-blue-400 w-5 h-5 shrink-0 mt-1" />
                        <span>
                            প্রতিবার এজেন্ট এর কাছ থেকে তথ্য নেবার আগে, মেসেজের মাধ্যমে সেই এজেন্টের বর্তমান তথ্য জেনে নিন।
                        </span>
                    </p>

                    {/* Rule 5 */}
                    <p className="flex items-start gap-2">
                        <AlertTriangle className="text-red-500 w-5 h-5 shrink-0 mt-1" />
                        <span>
                            এজেন্ট এর বিরুদ্ধে অভিযোগ থাকলে নাম্বার এর শেষে{" "}
                            <span className="font-semibold text-red-400">অভিযোগ</span> বাটনে
                            ক্লিক করে হোয়াটস্যাপ-এ রিপোর্ট করুন।
                        </span>
                    </p>
                </div>

                {/* Footer */}
                <div className="mt-10 text-center text-xs text-gray-400 border-t border-gray-700 pt-4">
                    © 2025 Velki Agent Directory | This is not a gambling website. This site is
                    for listing verified agents only.
                </div>
            </section>
        </footer>
    );
};

export default Footer;
