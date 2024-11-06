import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code2, Trophy, Star, Target } from "lucide-react";
import { motion } from "framer-motion";

const platforms = [
  {
    name: "LeetCode",
    username: "shreyas_wagire",
    stats: [
      { label: "Problems Solved", value: "500+" },
      { label: "Contest Rating", value: "1800" },
      { label: "Global Rank", value: "Top 5%" },
    ],
    link: "https://leetcode.com/yourhandle",
    color: "from-yellow-500 to-orange-600",
    icon: Code2,
  },
  {
    name: "HackerRank",
    username: "yourhandle",
    stats: [
      { label: "Skills Verified", value: "15" },
      { label: "Badges", value: "20" },
      { label: "Certificates", value: "8" },
    ],
    link: "https://hackerrank.com/yourhandle",
    color: "from-green-500 to-emerald-600",
    icon: Trophy,
  },
  {
    name: "GeeksforGeeks",
    username: "yourhandle",
    stats: [
      { label: "Institute Rank", value: "#12" },
      { label: "Coding Score", value: "850" },
      { label: "Articles", value: "5" },
    ],
    link: "https://geeksforgeeks.org/user/yourhandle",
    color: "from-green-600 to-teal-600",
    icon: Target,
  },
  {
    name: "CodeChef",
    username: "yourhandle",
    stats: [
      { label: "Rating", value: "1950" },
      { label: "Division", value: "Div 2" },
      { label: "Problems", value: "300+" },
    ],
    link: "https://codechef.com/users/yourhandle",
    color: "from-brown-500 to-orange-700",
    icon: Star,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

export default function CodingPlatforms() {
  return (
    <section className="py-20 bg-black/90">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Coding Profiles
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Check out my problem-solving journey across various competitive programming platforms
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {platforms.map((platform) => (
            <motion.div key={platform.name} variants={item}>
              <Card className="relative overflow-hidden border border-white/10 bg-black/50 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br opacity-10" />
                <div className="p-6 relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <platform.icon className={`h-5 w-5 text-transparent bg-clip-text bg-gradient-to-r ${platform.color}`} />
                      <h3 className="font-semibold text-lg">{platform.name}</h3>
                    </div>
                    <Badge variant="outline" className="border-white/20 text-white/90">
                      {platform.username}
                    </Badge>
                  </div>

                  <div className="space-y-2 mb-4">
                    {platform.stats.map((stat) => (
                      <div key={stat.label} className="flex justify-between text-sm">
                        <span className="text-gray-400">{stat.label}</span>
                        <span className="font-medium text-white">{stat.value}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    asChild
                    variant="outline"
                    className={`w-full border-white/20 bg-gradient-to-r ${platform.color} text-white hover:opacity-90 transition-opacity`}
                  >
                    <a
                      href={platform.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      View Profile
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}