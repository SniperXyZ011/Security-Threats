import React from 'react';
import { AlertTriangle, Ear, Edit, VenetianMask, Key, Activity, UserX, Unlock, Search, Server } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const AttackCard = ({ title, type, icon: Icon, children }) => (
    <div className="group relative bg-slate-900 border border-red-900/30 p-6 rounded-lg hover:bg-red-950/20 transition-colors">
        <div className="absolute top-4 right-4 text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
            {type}
        </div>
        <div className="mb-4 text-red-500 bg-red-950/30 w-12 h-12 rounded-full flex items-center justify-center">
            {Icon && <Icon className="w-6 h-6" />}
        </div>
        <h4 className="text-xl font-bold text-slate-100 mb-3">{title}</h4>
        <div className="text-slate-400 text-sm leading-relaxed space-y-2">
            {children}
        </div>
    </div>
);

const Threats = () => {
    return (
        <div className="animate-fade-in">
            <SectionTitle icon={AlertTriangle}>3. Types of Network Attacks</SectionTitle>
            <p className="mb-8 text-slate-400 max-w-3xl">
                Without proper security measures, data might be subjected to various kinds of attacks. Attacks are classified as passive attacks and active attack where information is altered with intent to corrupt or destroy the data or the network. Networks and data are vulnerable to any of the following types of attacks if one does not have a security plan in place.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                <AttackCard title="3.1 Eavesdropping" type="Passive" icon={Ear}>
                    <p>Network communication happens in unsecured or “clear text” format, which allows an attacker to “listen in” or interpret (read) the data which passes through the network if he/she get access to the network by wrong means.</p>
                    <p>When an attacker is eavesdropping, it is referred to as sniffing or snooping. This kind of eavesdropping is the biggest security problem that administrators face while managing the network. Eavesdropping can be avoided by using strong encryption services that are based on cryptography.</p>
                </AttackCard>

                <AttackCard title="3.2 Data Modification" type="Active" icon={Edit}>
                    <p>If an attacker gets access to someone’s data, the next logical step is to modify it. The smart attacker can even modify the data in the packet without the knowledge of the sender or receiver.</p>
                </AttackCard>

                <AttackCard title="3.3 Identity Spoofing" type="Active" icon={VenetianMask}>
                    <p>The identity of a user on a network is through the IP address assigned to the user while login into the network. An IP address is a valid and unique identity which gives authorisation for a user.</p>
                    <p>It is possible a smart attacker for an IP address to be falsely assumed, i.e. identity spoofing. An attacker can also use a special program to construct IP packets that appear to originate from valid addresses. After gaining access to the network with a valid IP address, the attacker can modify, reroute, or delete the data.</p>
                </AttackCard>

                <AttackCard title="3.4 Password-Based Attacks" type="Active" icon={Key}>
                    <p>Access rights to a computer and network resources are determined by the identity a user has normally a user name and password. When an attacker finds a valid user account and get the password, the attacker has the same rights as the real user.</p>
                    <p>It will be very dangerous, if the user has administrator-level rights. In such cases the attacker gets full access right to do anything in the system. After gaining access to a network with a valid account, an attacker can:</p>
                    <ul className="list-disc pl-4 mt-2 space-y-1">
                        <li>Obtain lists of valid user and computer names.</li>
                        <li>Modify server and network configurations (serious threat).</li>
                        <li>Modify, reroute, or delete data.</li>
                    </ul>
                </AttackCard>

                <AttackCard title="3.5 Denial-of-Service (DoS)" type="Active" icon={Activity}>
                    <p>Unlike a password-based attack, the denial-of-service attack prevents normal use of a computer or network by valid users.</p>
                    <p>DOS attack is generally caused by flooding a computer or the entire network with traffic until a shutdown occurs due to overload. DOS can also cause blocking the traffic, which results in a loss of access to network resources by authorized users.</p>
                </AttackCard>

                <AttackCard title="3.6 Man-in-the-Middle" type="Active" icon={UserX}>
                    <p>Man-in-the-middle attacks are like someone assuming the identity of a user in order to read his/her message.</p>
                    <p>The person on the other end might believe it is you, because the attacker might be actively replying you to keep the exchange going and gain more information.</p>
                </AttackCard>

                <AttackCard title="3.7 Compromised-Key Attack" type="Active" icon={Unlock}>
                    <p>A key is a secret code or number necessary to interpret secured information. After an attacker obtains a key, that key is referred to as a compromised key.</p>
                    <p>An attacker uses the compromised key to gain access to a secured communication without the sender or receiver being aware of the attack. With the compromised key, the attacker can decrypt or modify data, and tries to use the compromised key to compute additional keys.</p>
                </AttackCard>

                <AttackCard title="3.8 Sniffer Attack" type="Passive" icon={Search}>
                    <p>A sniffer is an application or device that can read, monitor, and capture network data exchanges and read network packets. If the packets are not encrypted, a sniffer provides a full view of the data inside the packet.</p>
                    <p>Even encapsulated packets can be broken open and read unless they are encrypted. Using a sniffer, an attacker can analyze the entire network and gain information to eventually cause the network to crash or to become corrupted.</p>
                </AttackCard>

                <AttackCard title="3.9 Application-Layer Attack" type="Active" icon={Server}>
                    <p>An application-layer attack targets application servers by causing a fault in the server’s operating system or applications. This results in the attacker gaining the ability to bypass normal access controls.</p>
                    <p>The attacker takes advantage of this situation, gaining control of your application, system, or network for introducing a virus Program or introduce a sniffer Program or disable other security controls to enable future attacks.</p>
                </AttackCard>

            </div>
        </div>
    );
};

export default Threats;
