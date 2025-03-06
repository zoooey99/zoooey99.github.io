import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface TeamMember {
  name: string
  linkedin: string
}

interface ProjectCardProps {
  name: string
  hackathon: string
  description: string
  techStack: string[]
  role: string
  demoLink: string
  githubLink: string
  submissionLink: string
  teamMembers: TeamMember[]
}

export default function ProjectCard({
  name,
  hackathon,
  description,
  techStack,
  role,
  demoLink,
  githubLink,
  submissionLink,
  teamMembers,
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg bg-gray-800 border-gray-700 flex flex-col h-full">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-bold text-white">{name}</CardTitle>
        <CardDescription className="text-gray-400">{hackathon}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 flex-grow">
        <p className="text-sm text-gray-300 min-h-[60px]">{description}</p>

        <div>
          <p className="mb-1 text-sm font-medium text-gray-300">Tech Stack:</p>
          <div className="flex flex-wrap gap-1">
            {techStack.map((tech) => (
              <Badge key={tech} variant="secondary" className="font-normal bg-gray-700 text-gray-200">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-1 text-sm font-medium text-gray-300">Role:</p>
          <p className="text-sm text-gray-400">{role}</p>
        </div>

        <div>
          <p className="mb-1 text-sm font-medium text-gray-300">Team:</p>
          <div className="flex flex-wrap gap-2">
            {teamMembers.map((member) => (
              <Link
                key={member.name}
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-rose-400 hover:text-rose-300 hover:underline"
              >
                {member.name}
              </Link>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2 pt-4 border-t border-gray-700 mt-auto">
        <Link
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm text-gray-300 hover:text-white"
        >
          <ExternalLink className="w-4 h-4 mr-1" /> Demo
        </Link>
        <Link
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm text-gray-300 hover:text-white"
        >
          <Github className="w-4 h-4 mr-1" /> Code
        </Link>
        <Link
          href={submissionLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm text-gray-300 hover:text-white"
        >
          <ExternalLink className="w-4 h-4 mr-1" /> Submission
        </Link>
      </CardFooter>
    </Card>
  )
}

