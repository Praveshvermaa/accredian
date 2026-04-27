import { NextResponse } from 'next/server';

export async function GET() {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "VP of Engineering, TechCorp",
      content: "The corporate training program from Accredian has been a game-changer for our data science team. The curriculum is practical and industry-aligned.",
      avatar: "https://i.pravatar.cc/150?u=1"
    },
    {
      id: 2,
      name: "Sneha Sharma",
      role: "L&D Manager, Global Solutions",
      content: "Accredian's approach to skill gap analysis helped us identify exactly where our teams needed upskilling. The results have been phenomenal.",
      avatar: "https://i.pravatar.cc/150?u=2"
    },
    {
      id: 3,
      name: "Amit Patel",
      role: "CTO, FinTech Innovations",
      content: "Excellent mentorship and hands-on projects. Our employees are much more confident in handling complex AI and Machine Learning tasks now.",
      avatar: "https://i.pravatar.cc/150?u=3"
    },
    {
      id: 4,
      name: "Priya Das",
      role: "Head of Product, Innovate Hub",
      content: "The flexibility of the programs allowed our busy product managers to learn without disrupting their workflow. Highly recommended!",
      avatar: "https://i.pravatar.cc/150?u=4"
    }
  ];

  return NextResponse.json(testimonials);
}
