import React from 'react';
import { Terminal, Key, Globe, UserCheck, Activity } from 'lucide-react';
import Card from '../components/Card';
import SectionTitle from '../components/SectionTitle';

const Overview = ({ onNavigate }) => {
    return (
        <div className="animate-fade-in space-y-8">
            <div className="text-center py-12 bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl border border-slate-800">
                <div className="inline-flex p-3 rounded-full bg-cyan-500/10 mb-4">
                    <Terminal className="w-8 h-8 text-cyan-400" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Network Security</h1>
                <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                    Objectives, Threats, and Protection Mechanisms
                </p>
            </div>

            <div className="grid md:grid-cols-1 gap-6">
                <Card title="1. Introduction">
                    <p className="mb-4">
                        Security is a global issue and one need to protect his valuables, data and information, even our home and nation with proper security. Physical security can be easily achieved by safeguarding it by physical means such as lock and key, fencing, creating walls, making compartments, etc. Physical security of computer system also can be attained by placing it in a safe place or put it in a lock and key or inside a compartment with proper security. But network security is a challenge since it involves interconnections of computers for resource sharing.
                    </p>
                    <p className="mb-4">
                        Security for computer networks and information is to be implemented at various levels in order to protect data and information. The objective of this module is to discuss threats and challenges towards network security, such as hacking, phishing attempt, virus, trojan, spyware, etc. over the network and various measures and methods of protection against these threats.
                    </p>
                    <p className="mb-4">
                        The prime objective of network security is to protect the confidentiality of data by keeping the integrity and correctness of data and make the availability of data for use over the network on 24 × 7 basis. Everyone would like to get seamless and uninterrupted access to the resources over the network. Since computer networks are technically a cluster of interconnections of computers, with the heterogeneous nature in its content and technology, ensuring security for the network is a major challenging task.
                    </p>
                    <p>
                        The threats to the network may appear from both internal and external. The scope and function of network has grown into a bigger magnitude with worldwide connections of computers i.e. Internet. Since, each computer is getting connected to a global network, security is to be ensured for every user and machines. The security has to be implemented at various levels, such as user level, organizational level and national level. Security also needs to be enforced for network of computers as well as information. Once the network is protected, information is also automatically getting protected to a great extent.
                    </p>
                </Card>

                <Card title="2. Network Authentication">
                    <p className="mb-4">
                        In a network, if a user is allowed to access information from his/her computer, one can ensure that he/she is a legitimate user on the network. This is established by using or by giving an identity for the user in the network system. Checking of such valid identity is called authentication. Authentication can be established on computer networks by providing a username and password or store IP address of the machine in advance in a centralised server. The IP address is a unique ID for a user over a network. It can be a local IP address (example 192.168.x.x or 172.16.x.x) or global IP address or public IP address (example 14.139.x.x or 8.8.8.8).
                    </p>
                    <p className="mb-4">
                        In addition to these mechanisms of authentication, one can also have recent techniques such as biometric, fingerprint, face reading software, voice recognition, etc. for making valid entry into a system.
                    </p>

                    <div className="grid md:grid-cols-3 gap-4 my-6">
                        <div className="bg-slate-900 p-4 rounded border border-slate-800 flex flex-col items-center text-center">
                            <Key className="text-cyan-400 mb-2 w-8 h-8" />
                            <h4 className="font-bold text-white mb-1">Credentials</h4>
                            <p className="text-xs text-slate-400">Username & Password. Avoid dictionary words; use alphanumeric combos.</p>
                        </div>
                        <div className="bg-slate-900 p-4 rounded border border-slate-800 flex flex-col items-center text-center">
                            <Globe className="text-cyan-400 mb-2 w-8 h-8" />
                            <h4 className="font-bold text-white mb-1">IP Identity</h4>
                            <p className="text-xs text-slate-400">Unique Local (192.168.x.x) or Public (8.8.8.8) addresses.</p>
                        </div>
                        <div className="bg-slate-900 p-4 rounded border border-slate-800 flex flex-col items-center text-center">
                            <UserCheck className="text-cyan-400 mb-2 w-8 h-8" />
                            <h4 className="font-bold text-white mb-1">Biometrics</h4>
                            <p className="text-xs text-slate-400">Fingerprint, face reading, and voice recognition.</p>
                        </div>
                    </div>

                    <p className="mb-4">
                        These kind of tools are used for authenticating simple ‘login’ into the computer systems with his user name and password, a user can get his/her credentials for authenticating with the network. Unauthorized users can be denied access to information by providing a valid authentication for each and every user in the network. But, no one can create user names and passwords for all users over a wide network like Internet. It is possible to provide service level passwords similar to assigning passwords for email services (example Gmail) as well as a user can have password for accessing e-resources, user can have different passwords for login purpose, but not easy to assign a single password for all services.
                    </p>
                    <p>
                        It is suggested to create users with authentication at different level and every organization must have their own authentication policy for it. This level of authentication can protect the network from unauthorised user or strange user while trying to access resources. If a user is denied access into the network, he/she cannot access other resources as well. Therefore, authentication is the mechanism by which one generally prevent illegitimate user to access the resources. As mentioned, a good password is a secured mechanism for a user to log in to a network. It is suggested not to use simple words or dictionary words for passwords, instead one should use alphanumeric characters along with combination of special characters for password. Banking sectors and other financial services over the Internet do not accept simple passwords. It is also suggested to change password at least once in three or six months so that even some inexperienced person cannot hack the system and get access to the data temporarily, the password change will help to retrieve the access. Authenticated systems are also vulnerable for threats from outside as well as from inside.
                    </p>
                </Card>
            </div>

            <div className="flex justify-center mt-8">
                <button
                    onClick={() => onNavigate("threats")}
                    className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold"
                >
                    Explore Threats <Activity className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
};

export default Overview;
