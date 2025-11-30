import React from 'react';
import { Shield, Server, Cpu } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import FirewallSimulation from '../components/FirewallSimulation';

const Defense = () => {
    return (
        <div className="animate-fade-in">
            <SectionTitle icon={Shield}>5. Protection (UTM & Firewall)</SectionTitle>

            {/* Interactive Component */}
            <FirewallSimulation />

            <div className="space-y-8 mt-8">
                <Card title="5. Protection using UTM and Firewall">
                    <p className="mb-4">
                        We have learned how to protect the computers against unauthorised entry and also seen that whether a user is legitimate user or not with authentication. If unauthorised person can get access to a computer through network what she/he can do? Such unauthorized or illegitimate users are called hackers. Hackers use the vulnerability on a system. There could be loopholes in any software which allows to open ports (open entry) for entering data or programmes into the system. Such loopholes are called vulnerabilities in a system.
                    </p>
                    <p className="mb-4">
                        A Hacker or an unauthorized user can get access to system by any means. Computer programme generally works in a system by connecting to another system over the network so that it allows to access data. These relations are called connections in the network. These connections are generally open through some ports. Since ports are open to create some of the connections, security on this connection are compromised and through these open connections, unauthorised people can also get access to the computer.
                    </p>
                    <p className="mb-4">
                        There are more than 65000 ports which get opened on a system and some of them automatically open for services at the time of booting. A hacker can try to get access through this port into the computer and the process is called hacking attempt.
                    </p>
                    <p className="mb-4">
                        <strong>Firewall</strong> plays a role to protect the network where servers are connected. In organizational level, this protection can be introduced by using a checkpoint between the user and outside network. Such check/verification point is called firewall. Firewall is an intermediary layer which can be software or hardware or appliances, which can reside in between the user and outside network. Any request which go through this equipment will be scanned and filtered for the content at the firewall level.
                    </p>
                    <p>
                        Firewall works based on this principle. Firewall blocks all the ports and network admin has to open the valid port(s) for the user. As it is seen in the diagram, first deny all connections and allow only connections which are required for use.
                    </p>
                </Card>

                <div className="grid md:grid-cols-2 gap-6">
                    <Card title="6. DMZ for hosting and IDS">
                        <p className="mb-4">
                            In an organization, restriction on the server can be established by creating a special zone. First, allow only known used ports from the system which is to be used for service. In this context, there is an area in a normal network with a ‘de militarized zone’ (DMZ) which means to militarize the complete zone by denying all connections and allow only the known connections/ programmes to access the resource.
                        </p>
                        <p className="mb-4">
                            Any other attempt to access can be stopped at the firewall level. In addition to stopping such request, a firewall can also act as a tool for the content filtering or even restricted access to content (for example Child sites restriction). Firewall blocks unauthorized network connections to the PC or local area networks including the server if a user is hosting services in the public domain.
                        </p>
                        <p>
                            A firewall can also act as an <strong>Intrusion Detection System (IDS)</strong> which is a very common term used in network security to check any unauthorized entry into the system. Any attempt by a hacker for passive as well as active intrusion has to be monitored and detected. There are many popular firewalls which have the facility for IDS as well as IPS i.e.. Intrusion Prevention System.
                        </p>
                    </Card>

                    <Card title="Unified Threat Management (UTM)">
                        <p className="mb-4">
                            Now a days, all vendors come out with firewall products, which works as single UTM (Unified Threat Management system) so that UTM box or appliance available in the market can be procured directly and implement it in a network and configure the network so that every Internet connection or local connection for accessing outside or the internal data can be routed the traffic through this UTM (firewall).
                        </p>
                        <p className="mb-4">
                            Some of the popular names of firewall/UTMs available in the market are Fortigate, Sonicwall, Cyberoam etc. Firewall can filter the content as mentioned earlier, which can check the port number through which a programme is trying to access and deny any kind of access based on defined rules.
                        </p>
                        <p>
                            Firewall can protect these kind of attacks for chocking the network by the hacker by monitor the flooding (UDP as well as ICMP).
                        </p>
                    </Card>
                </div>

                <div className="bg-slate-900 border border-slate-700 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-white mb-4">Summary</h3>
                    <p className="text-slate-400">
                        It is important to take care of security of computer systems, information, data as well as network so that user will enjoy seamless access to information world. If the security is compromised at user level and organisation may not be aware who is using the resource since hacker generally will not reveal the identity. If an organisation is not protecting their system, it will not only damage but it will also work as platform for others to attack.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Defense;
