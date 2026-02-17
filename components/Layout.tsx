
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { LayoutDashboard, Zap, Calculator, Settings, LogOut, ShieldCheck, Menu, X, Rocket } from 'lucide-react';

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  onClick: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon: Icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
      active ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
    }`}
  >
    <Icon size={20} />
    <span class="font-medium">{label}</span>
  </button>
);

export const DashboardLayout: React.FC<{ children: React.ReactNode, activeTab: string, setActiveTab: (t: string) => void }> = ({ children, activeTab, setActiveTab }) => {
  const { user, logout, isAdmin } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-50">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex flex-col w-64 border-r border-slate-800 p-6 fixed h-full bg-slate-950/50 backdrop-blur-xl">
        <div className="flex items-center space-x-2 mb-10 px-2">
          <div className="p-2 bg-indigo-600 rounded-lg">
            <Zap className="text-white" size={24} />
          </div>
          <span className="text-xl font-bold tracking-tight">Winning AI</span>
        </div>

        <nav className="flex-1 space-y-2">
          <SidebarItem icon={LayoutDashboard} label="Winning Products" active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} />
          <SidebarItem icon={Rocket} label="AI Ad Tools" active={activeTab === 'ai-tools'} onClick={() => setActiveTab('ai-tools')} />
          <SidebarItem icon={Calculator} label="Margin Calc" active={activeTab === 'calculator'} onClick={() => setActiveTab('calculator')} />
          {isAdmin && (
            <SidebarItem icon={ShieldCheck} label="Admin Panel" active={activeTab === 'admin'} onClick={() => setActiveTab('admin')} />
          )}
          <SidebarItem icon={Settings} label="Settings" active={activeTab === 'settings'} onClick={() => setActiveTab('settings')} />
        </nav>

        <div className="pt-6 border-t border-slate-800">
          <div className="flex items-center space-x-3 mb-6 px-2">
            <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold border border-slate-700">
              {user?.email[0].toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{user?.name}</p>
              <p className="text-xs text-slate-500 truncate capitalize">{user?.subscriptionStatus}</p>
            </div>
          </div>
          <button
            onClick={logout}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-slate-400 hover:bg-red-500/10 hover:text-red-400 transition-colors"
          >
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Mobile Nav */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-slate-950 border-b border-slate-800 px-4 flex items-center justify-between z-50">
        <div className="flex items-center space-x-2">
          <Zap className="text-indigo-500" size={24} />
          <span className="text-lg font-bold">Winning AI</span>
        </div>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-400">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Main Content */}
      <main className="flex-1 lg:ml-64 pt-16 lg:pt-0">
        <div className="max-w-7xl mx-auto p-4 md:p-8">
          {children}
        </div>
      </main>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-slate-950 z-40 p-6 pt-20">
          <nav className="space-y-4">
             <SidebarItem icon={LayoutDashboard} label="Winning Products" active={activeTab === 'dashboard'} onClick={() => {setActiveTab('dashboard'); setMobileMenuOpen(false)}} />
             <SidebarItem icon={Rocket} label="AI Ad Tools" active={activeTab === 'ai-tools'} onClick={() => {setActiveTab('ai-tools'); setMobileMenuOpen(false)}} />
             <SidebarItem icon={Calculator} label="Margin Calc" active={activeTab === 'calculator'} onClick={() => {setActiveTab('calculator'); setMobileMenuOpen(false)}} />
             {isAdmin && (
               <SidebarItem icon={ShieldCheck} label="Admin Panel" active={activeTab === 'admin'} onClick={() => {setActiveTab('admin'); setMobileMenuOpen(false)}} />
             )}
             <button onClick={logout} className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-red-400">
                <LogOut size={20} />
                <span className="font-medium">Logout</span>
             </button>
          </nav>
        </div>
      )}
    </div>
  );
};
