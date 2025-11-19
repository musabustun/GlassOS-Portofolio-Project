import React from 'react';
import { RESUME_DATA } from '../../constants';
import { Download, Mail, MapPin, Github, Linkedin, Award, Briefcase, GraduationCap } from 'lucide-react';

const Resume: React.FC = () => {
  return (
    <div className="h-full overflow-y-auto text-gray-800 p-6 md:p-10 bg-gradient-to-br from-gray-50/50 to-blue-50/50 dark:from-gray-900/50 dark:to-black/50">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header Card */}
        <div className="bg-white/60 dark:bg-gray-800/40 backdrop-blur-md rounded-2xl p-8 shadow-sm border border-white/20">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">{RESUME_DATA.name}</h1>
                    <p className="text-xl text-blue-600 dark:text-blue-400 font-medium">{RESUME_DATA.role}</p>
                    <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-500 dark:text-gray-400">
                        <span className="flex items-center gap-1.5 bg-black/5 dark:bg-white/5 px-3 py-1 rounded-full"><MapPin size={14} /> San Francisco, CA</span>
                        <span className="flex items-center gap-1.5 bg-black/5 dark:bg-white/5 px-3 py-1 rounded-full"><Mail size={14} /> musabyusufustun@outlook.com</span>
                    </div>
                </div>
                <div className="flex gap-3">
                    <button className="p-2.5 rounded-xl bg-white/80 dark:bg-white/10 hover:bg-blue-50 dark:hover:bg-white/20 text-gray-700 dark:text-gray-200 transition-all border border-white/20 shadow-sm">
                    <Github size={20} />
                    </button>
                    <button className="p-2.5 rounded-xl bg-white/80 dark:bg-white/10 hover:bg-blue-50 dark:hover:bg-white/20 text-blue-600 dark:text-blue-400 transition-all border border-white/20 shadow-sm">
                    <Linkedin size={20} />
                    </button>
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 dark:bg-blue-600 text-white rounded-xl hover:opacity-90 transition-all shadow-lg shadow-gray-900/20 dark:shadow-blue-600/20">
                    <Download size={16} />
                    <span>CV</span>
                    </button>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-6">
                {/* Summary */}
                <div className="bg-white/60 dark:bg-gray-800/40 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-white/20">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                            <Award size={20} />
                        </div>
                        <h2 className="text-lg font-bold uppercase tracking-wider text-gray-700 dark:text-gray-200">About</h2>
                    </div>
                    <p className="leading-relaxed text-gray-600 dark:text-gray-300">{RESUME_DATA.summary}</p>
                </div>

                {/* Experience */}
                <div className="bg-white/60 dark:bg-gray-800/40 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-white/20">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400">
                            <Briefcase size={20} />
                        </div>
                        <h2 className="text-lg font-bold uppercase tracking-wider text-gray-700 dark:text-gray-200">Experience</h2>
                    </div>
                    
                    <div className="space-y-8">
                        {RESUME_DATA.experience.map((job, idx) => (
                        <div key={idx} className="relative pl-8 before:absolute before:left-[9px] before:top-2 before:bottom-0 before:w-0.5 before:bg-gray-200 dark:before:bg-gray-700 last:before:hidden">
                            <div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-white dark:bg-gray-800 border-4 border-purple-200 dark:border-purple-900"></div>
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{job.role}</h3>
                                <span className="text-sm font-mono text-gray-500 dark:text-gray-400 bg-white/50 dark:bg-black/20 px-2 py-1 rounded">{job.period}</span>
                            </div>
                            <div className="text-purple-600 dark:text-purple-400 font-medium mb-3">{job.company}</div>
                            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{job.description}</p>
                        </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
                {/* Skills */}
                <div className="bg-white/60 dark:bg-gray-800/40 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-white/20">
                    <div className="flex items-center gap-2 mb-4">
                         <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600 dark:text-green-400">
                            <GraduationCap size={20} />
                        </div>
                        <h2 className="text-lg font-bold uppercase tracking-wider text-gray-700 dark:text-gray-200">Skills</h2>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {RESUME_DATA.skills.map((skill) => (
                        <span key={skill} className="px-3 py-1.5 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg text-xs font-semibold border border-black/5 shadow-sm">
                            {skill}
                        </span>
                        ))}
                    </div>
                </div>

                {/* Education Placeholder */}
                 <div className="bg-white/60 dark:bg-gray-800/40 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-white/20">
                    <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Education</h2>
                    <div className="space-y-3">
                        <div>
                            <div className="font-bold text-gray-800 dark:text-white">B.S. Computer Science</div>
                            <div className="text-xs text-gray-500">University of Technology</div>
                            <div className="text-xs text-gray-400">2014 - 2018</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;