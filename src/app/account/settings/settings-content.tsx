'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, CreditCard, Globe, HelpCircle, Key, Lock, Mail, Moon, Save, Shield, Sun, Trash2, User, Zap } from 'lucide-react';
import Link from 'next/link';
export default function AccountSettingsContent() {
  const [activeTab, setActiveTab] = useState<'general' | 'security' | 'notifications' | 'billing'>('general');
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState({
    marketing: true,
    updates: true,
    bountyMatches: true,
    messages: true
  });
  const [language, setLanguage] = useState('en');
  return <div className="grid grid-cols-1 md:grid-cols-4 gap-6" data-unique-id="5353c0ec-8f31-4bb2-bb91-9fcb786b0f98" data-file-name="app/account/settings/settings-content.tsx" data-dynamic-text="true">
      {/* Sidebar */}
      <div className="md:col-span-1" data-unique-id="3df6fa29-0105-452e-ba64-76b854a397e1" data-file-name="app/account/settings/settings-content.tsx">
        <Card className="sticky top-8" data-unique-id="e462e99e-8d9b-4a63-a601-6a3f7e8eb684" data-file-name="app/account/settings/settings-content.tsx">
          <CardContent className="pt-6" data-unique-id="ba2b1db1-8bac-4300-9dc0-69fa46daaa9c" data-file-name="app/account/settings/settings-content.tsx">
            <nav className="space-y-2" data-unique-id="db9bd44c-5638-4bc2-a034-2eface8c8e4f" data-file-name="app/account/settings/settings-content.tsx" data-dynamic-text="true">
              {[{
              id: 'general',
              label: 'General',
              icon: <User className="h-4 w-4" />
            }, {
              id: 'security',
              label: 'Security',
              icon: <Shield className="h-4 w-4" />
            }, {
              id: 'notifications',
              label: 'Notifications',
              icon: <Bell className="h-4 w-4" />
            }, {
              id: 'billing',
              label: 'Billing',
              icon: <CreditCard className="h-4 w-4" />
            }].map(item => <button key={item.id} onClick={() => setActiveTab(item.id as any)} className={`flex items-center w-full p-3 rounded-md transition-colors ${activeTab === item.id ? 'bg-accent text-accent-foreground font-medium' : 'text-muted-foreground hover:bg-accent/50'}`} data-unique-id="16611b22-ea1a-4a5e-ae6e-da1347ab78ce" data-file-name="app/account/settings/settings-content.tsx" data-dynamic-text="true">
                  {item.icon}
                  <span className="ml-3" data-unique-id="7361cb0f-47e8-4181-9379-84b168704d5a" data-file-name="app/account/settings/settings-content.tsx" data-dynamic-text="true">{item.label}</span>
                </button>)}
            </nav>
            
            <div className="mt-6 pt-6 border-t border-border" data-unique-id="70bec204-144d-4167-9ed8-526cd89f61ab" data-file-name="app/account/settings/settings-content.tsx">
              <Link href="/profile" className="text-sm text-chart-1 hover:underline flex items-center" data-unique-id="42305fff-35ee-4be6-a48e-a3e8455d8d8b" data-file-name="app/account/settings/settings-content.tsx">
                <User className="h-4 w-4 mr-2" /><span className="editable-text" data-unique-id="87660821-ea41-4287-850d-93edb1de7ca1" data-file-name="app/account/settings/settings-content.tsx">
                Edit Profile
              </span></Link>
              
              <Button variant="destructive" className="mt-4 w-full" data-unique-id="20148572-d251-4a4e-9d62-5dd2416726de" data-file-name="app/account/settings/settings-content.tsx">
                <Trash2 className="h-4 w-4 mr-2" /><span className="editable-text" data-unique-id="646debe4-9e1c-414c-8b47-171341458a79" data-file-name="app/account/settings/settings-content.tsx">
                Delete Account
              </span></Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Main Content */}
      <div className="md:col-span-3" data-unique-id="b11caa88-031b-4f9a-81fa-f20df5c9728c" data-file-name="app/account/settings/settings-content.tsx">
        <motion.div key={activeTab} initial={{
        opacity: 0,
        x: 20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.3
      }} data-unique-id="e3f2a7c4-c59f-4ea4-aad8-7d6c9a3c9bb2" data-file-name="app/account/settings/settings-content.tsx" data-dynamic-text="true">
          {/* General Settings */}
          {activeTab === 'general' && <Card data-unique-id="70b07efc-517d-4578-8961-ac1ebe2a7ffb" data-file-name="app/account/settings/settings-content.tsx">
              <CardContent className="pt-6" data-unique-id="d711ab7b-6604-44b0-8b37-0d03b7b7e509" data-file-name="app/account/settings/settings-content.tsx">
                <h2 className="text-xl font-semibold mb-6" data-unique-id="b90800eb-9ede-4610-82b7-23e481769437" data-file-name="app/account/settings/settings-content.tsx"><span className="editable-text" data-unique-id="7dcd7c6d-7216-4dfd-90ad-cdfc682af978" data-file-name="app/account/settings/settings-content.tsx">General Settings</span></h2>
                
                <div className="space-y-6" data-unique-id="63dc92bf-324f-42b7-8ab3-8550f434f6b4" data-file-name="app/account/settings/settings-content.tsx" data-dynamic-text="true">
                  {/* Language */}
                  <div data-unique-id="21482537-b468-47ed-856c-92d51ebefae9" data-file-name="app/account/settings/settings-content.tsx">
                    <h3 className="text-base font-medium mb-2 flex items-center" data-unique-id="2a5a9dcb-4a82-4df4-9224-1d0b2370f28a" data-file-name="app/account/settings/settings-content.tsx">
                      <Globe className="h-4 w-4 mr-2" /><span className="editable-text" data-unique-id="210f0da2-d1ec-487b-8633-f4fa18ed4af0" data-file-name="app/account/settings/settings-content.tsx">
                      Language
                    </span></h3>
                    <select value={language} onChange={e => setLanguage(e.target.value)} className="w-full md:w-1/3 p-2 rounded-md border border-input bg-background" data-unique-id="ffeda2d3-524d-43a3-83b2-6d89d658020c" data-file-name="app/account/settings/settings-content.tsx">
                      <option value="en" data-unique-id="cd992244-3941-4010-82e5-f3a0594f337e" data-file-name="app/account/settings/settings-content.tsx"><span className="editable-text" data-unique-id="016bb65d-e0ff-4bec-a283-715db57e8b18" data-file-name="app/account/settings/settings-content.tsx">English</span></option>
                      <option value="es" data-unique-id="7a47b5f5-3c67-4cbf-b67c-8c23261e7b58" data-file-name="app/account/settings/settings-content.tsx"><span className="editable-text" data-unique-id="2c100967-b0cd-4035-9c81-975ddd406775" data-file-name="app/account/settings/settings-content.tsx">Español</span></option>
                      <option value="fr" data-unique-id="a87d89f5-56e2-4ccf-a189-692c05dca921" data-file-name="app/account/settings/settings-content.tsx"><span className="editable-text" data-unique-id="315bc061-5398-4f8b-a25a-5e1dbf19337d" data-file-name="app/account/settings/settings-content.tsx">Français</span></option>
                      <option value="de" data-unique-id="3e1e5a8c-5a92-491e-8451-0620a80e88f6" data-file-name="app/account/settings/settings-content.tsx"><span className="editable-text" data-unique-id="08f833e1-5b3b-4e5a-808b-4c1d5888a064" data-file-name="app/account/settings/settings-content.tsx">Deutsch</span></option>
                      <option value="ja" data-unique-id="7ea7e801-c82e-44ea-8c0e-3c889824ed4e" data-file-name="app/account/settings/settings-content.tsx"><span className="editable-text" data-unique-id="00c55bc9-8a57-4112-93ee-544885b85960" data-file-name="app/account/settings/settings-content.tsx">日本語</span></option>
                    </select>
                  </div>
                  
                  {/* Theme */}
                  <div data-unique-id="ff5c2d80-247c-48d1-ab64-360a605b9036" data-file-name="app/account/settings/settings-content.tsx">
                    <h3 className="text-base font-medium mb-2 flex items-center" data-unique-id="f18432c7-3652-4a88-a49b-93b36b48b5ae" data-file-name="app/account/settings/settings-content.tsx" data-dynamic-text="true">
                      {darkMode ? <Moon className="h-4 w-4 mr-2" /> : <Sun className="h-4 w-4 mr-2" />}<span className="editable-text" data-unique-id="16903a71-0728-4c4b-9abe-0f42bf82cfd8" data-file-name="app/account/settings/settings-content.tsx">
                      Theme
                    </span></h3>
                    <div className="flex items-center" data-unique-id="97b6c7a9-d69b-4f14-84e3-e8f86ec5cf41" data-file-name="app/account/settings/settings-content.tsx">
                      <button onClick={() => setDarkMode(false)} className={`px-4 py-2 rounded-l-md border ${!darkMode ? 'bg-primary text-primary-foreground border-primary' : 'bg-background border-input text-muted-foreground'}`} data-unique-id="a7f57f8e-4d34-4c17-8182-cb45d2288127" data-file-name="app/account/settings/settings-content.tsx"><span className="editable-text" data-unique-id="f680fd8a-a99c-4bf6-b1d7-5c367cc676b9" data-file-name="app/account/settings/settings-content.tsx">
                        Light
                      </span></button>
                      <button onClick={() => setDarkMode(true)} className={`px-4 py-2 rounded-r-md border ${darkMode ? 'bg-primary text-primary-foreground border-primary' : 'bg-background border-input text-muted-foreground'} border-l-0`} data-unique-id="22b0cea1-990e-47cb-988c-cf097eafa0ef" data-file-name="app/account/settings/settings-content.tsx"><span className="editable-text" data-unique-id="9df4d6c9-4485-4a60-a77d-c9c6302a7442" data-file-name="app/account/settings/settings-content.tsx">
                        Dark
                      </span></button>
                    </div>
                  </div>
                  
                  {/* Email Settings */}
                  <div data-unique-id="c992248c-17df-4a80-92ff-ac2200b81cba" data-file-name="app/account/settings/settings-content.tsx">
                    <h3 className="text-base font-medium mb-2 flex items-center" data-unique-id="cfb0be61-978f-4229-b5d3-d00ccf295b67" data-file-name="app/account/settings/settings-content.tsx">
                      <Mail className="h-4 w-4 mr-2" /><span className="editable-text" data-unique-id="6864dedf-fb78-467f-bbe6-7ed6ef1b8f0d" data-file-name="app/account/settings/settings-content.tsx">
                      Email Address
                    </span></h3>
                    <div className="flex items-center gap-2" data-unique-id="a870c8c4-1289-4b15-86ac-aabf95d13656" data-file-name="app/account/settings/settings-content.tsx">
                      <input type="email" value="alex.johnson@example.com" className="flex-grow p-2 rounded-md border border-input bg-background" readOnly data-unique-id="15a48d3d-17f1-4ed9-884f-0f32e9c3afa9" data-file-name="app/account/settings/settings-content.tsx" />
                      <Button size="sm" data-unique-id="076af675-0894-46ba-950f-e0a9bd0dbf98" data-file-name="app/account/settings/settings-content.tsx"><span className="editable-text" data-unique-id="0f5ab9d4-2096-4514-991a-d8fb8521aae9" data-file-name="app/account/settings/settings-content.tsx">Change</span></Button>
                    </div>
                  </div>
                  
                  {/* Timezone */}
                  <div data-unique-id="5bb480ba-1763-42fa-a85c-3feb867cb27e" data-file-name="app/account/settings/settings-content.tsx">
                    <h3 className="text-base font-medium mb-2 flex items-center" data-unique-id="09234a57-a19e-414a-b820-0223b27c07bb" data-file-name="app/account/settings/settings-content.tsx">
                      <Globe className="h-4 w-4 mr-2" /><span className="editable-text" data-unique-id="621c175a-d87a-45c2-9652-d36a7ad96d4f" data-file-name="app/account/settings/settings-content.tsx">
                      Timezone
                    </span></h3>
                    <select className="w-full md:w-2/3 p-2 rounded-md border border-input bg-background" data-unique-id="867705d3-5e1b-4fe4-9f0a-707472d18927" data-file-name="app/account/settings/settings-content.tsx">
                      <option data-unique-id="6ffda4e1-e25d-4dc9-937f-b70bae6fa1e6" data-file-name="app/account/settings/settings-content.tsx"><span className="editable-text" data-unique-id="2a42cf73-1c30-46d7-95ee-851ff941751c" data-file-name="app/account/settings/settings-content.tsx">Pacific Time (UTC-08:00)</span></option>
                      <option data-unique-id="96039c32-fe54-4edc-9dbe-947880593090" data-file-name="app/account/settings/settings-content.tsx"><span className="editable-text" data-unique-id="ecc0ce24-7ca4-4f22-87e5-1cfc22227e1c" data-file-name="app/account/settings/settings-content.tsx">Mountain Time (UTC-07:00)</span></option>
                      <option data-unique-id="69defd90-0b21-4932-af08-ee5565bf67c2" data-file-name="app/account/settings/settings-content.tsx"><span className="editable-text" data-unique-id="5581b883-1ea8-4c42-946e-58fbdbb8f1b5" data-file-name="app/account/settings/settings-content.tsx">Central Time (UTC-06:00)</span></option>
                      <option data-unique-id="50ea3bc8-abc3-41bc-8d5f-0383b1481325" data-file-name="app/account/settings/settings-content.tsx"><span className="editable-text" data-unique-id="ec4f3076-5add-4cc3-a342-43ae48388ae1" data-file-name="app/account/settings/settings-content.tsx">Eastern Time (UTC-05:00)</span></option>
                      <option data-unique-id="6032fdf8-4dbb-466c-8fb2-e2e3a390b53a" data-file-name="app/account/settings/settings-content.tsx"><span className="editable-text" data-unique-id="22922c97-1790-4639-a3ec-42689227244d" data-file-name="app/account/settings/settings-content.tsx">GMT (UTC+00:00)</span></option>
                      <option data-unique-id="58e0dfd4-ad45-49ff-b089-26e6d773d297" data-file-name="app/account/settings/settings-content.tsx"><span className="editable-text" data-unique-id="4ff2c1ec-8f19-45ee-80f7-426ee8aba8b8" data-file-name="app/account/settings/settings-content.tsx">Central European Time (UTC+01:00)</span></option>
                      <option data-unique-id="ace3c683-7597-4054-912c-020a566f896b" data-file-name="app/account/settings/settings-content.tsx"><span className="editable-text" data-unique-id="8b59dd0a-2c24-4dc3-9940-b44af25497e6" data-file-name="app/account/settings/settings-content.tsx">Eastern European Time (UTC+02:00)</span></option>
                      <option data-unique-id="485ed21d-a844-4512-9d03-8a5982804dda" data-file-name="app/account/settings/settings-content.tsx"><span className="editable-text" data-unique-id="2e16e7f7-45a4-4724-8e2c-1a9e4ee69dd0" data-file-name="app/account/settings/settings-content.tsx">India (UTC+05:30)</span></option>
                      <option data-unique-id="c2b7a2dc-b150-4101-8fc7-b0bdf4792aeb" data-file-name="app/account/settings/settings-content.tsx"><span className="editable-text" data-unique-id="ff067093-6674-409c-9003-3b221cda3437" data-file-name="app/account/settings/settings-content.tsx">Japan (UTC+09:00)</span></option>
                    </select>
                  </div>
                </div>
                
                <div className="flex justify-end mt-6 pt-6 border-t border-border" data-unique-id="2370c9b5-313d-4d3b-8a76-985adf84bacb" data-file-name="app/account/settings/settings-content.tsx">
                  <Button data-unique-id="064aa339-014b-412b-8163-e3a7608a0527" data-file-name="app/account/settings/settings-content.tsx">
                    <Save className="h-4 w-4 mr-2" /><span className="editable-text" data-unique-id="cad000cc-e38a-47c4-8257-9c19bd8d5e47" data-file-name="app/account/settings/settings-content.tsx">
                    Save Changes
                  </span></Button>
                </div>
              </CardContent>
            </Card>}
          
          {/* Security Settings */}
          {activeTab === 'security' && <Card data-unique-id="2c814e96-ed91-4d14-9aa5-147713f1228c" data-file-name="app/account/settings/settings-content.tsx">
              <CardContent className="pt-6" data-unique-id="d28ea9a0-e5a1-44b2-99d1-05002b9e9369" data-file-name="app/account/settings/settings-content.tsx">
                <h2 className="text-xl font-semibold mb-6 flex items-center" data-unique-id="6568dad5-3e75-478e-9bfe-55ef0556f687" data-file-name="app/account/settings/settings-content.tsx">
                  <Shield className="h-5 w-5 mr-2" /><span className="editable-text" data-unique-id="1ba75ce8-45c1-4bb8-addf-9719b001a63b" data-file-name="app/account/settings/settings-content.tsx">
                  Security Settings
                </span></h2>
                
                <div className="space-y-6" data-unique-id="680619c6-79da-4493-a871-792ca461aa51" data-file-name="app/account/settings/settings-content.tsx" data-dynamic-text="true">
                  {/* Password */}
                  <div data-unique-id="1295ab5f-cd82-400a-b6a3-9482efafe1e5" data-file-name="app/account/settings/settings-content.tsx">
                    <h3 className="text-base font-medium mb-2" data-unique-id="6a061d2a-a71c-41c3-929c-6f8d38eac2a3" data-file-name="app/account/settings/settings-content.tsx"><span className="editable-text" data-unique-id="1fb70056-eac6-4ae2-9059-4afa1af662a7" data-file-name="app/account/settings/settings-content.tsx">Change Password</span></h3>
                    <div className="space-y-3" data-unique-id="5548825a-59f4-4c15-8cf4-625ac99c4101" data-file-name="app/account/settings/settings-content.tsx">
                      <input type="password" placeholder="Current Password" className="w-full md:w-2/3 p-2 rounded-md border border-input bg-background" data-unique-id="fdcc432a-b088-4059-b9df-79bbd22c67d4" data-file-name="app/account/settings/settings-content.tsx" />
                      <input type="password" placeholder="New Password" className="w-full md:w-2/3 p-2 rounded-md border border-input bg-background" data-unique-id="29f59037-3756-4b6d-868c-4b0e6464fec2" data-file-name="app/account/settings/settings-content.tsx" />
                      <input type="password" placeholder="Confirm New Password" className="w-full md:w-2/3 p-2 rounded-md border border-input bg-background" data-unique-id="3965adeb-2fca-4091-8427-5f4ea80999b1" data-file-name="app/account/settings/settings-content.tsx" />
                    </div>
                    <Button className="mt-3" data-unique-id="dd3500d3-781b-4831-a5f6-587e25e7c0eb" data-file-name="app/account/settings/settings-content.tsx"><span className="editable-text" data-unique-id="af010da1-5c10-44d0-83df-ce6bf91b9902" data-file-name="app/account/settings/settings-content.tsx">Update Password</span></Button>
                  </div>
                  
                  {/* Two-Factor Authentication */}
                  <div className="pt-6 border-t border-border" data-unique-id="3d25e569-c08f-4059-8f39-9ab3106a456f" data-file-name="app/account/settings/settings-content.tsx">
                    <div className="flex justify-between items-start mb-4" data-unique-id="76311ed3-a64d-4481-be45-7a5c87703eb5" data-file-name="app/account/settings/settings-content.tsx">
                      <div data-unique-id="fb1f5f86-9d93-4963-9f6a-6f499e3abbf9" data-file-name="app/account/settings/settings-content.tsx">
                        <h3 className="text-base font-medium mb-1 flex items-center" data-unique-id="d0b63d3a-8469-4029-827b-b89a9e2c45c1" data-file-name="app/account/settings/settings-content.tsx">
                          <Lock className="h-4 w-4 mr-2" /><span className="editable-text" data-unique-id="3f329b4e-4c0b-493e-979c-364131782885" data-file-name="app/account/settings/settings-content.tsx">
                          Two-Factor Authentication
                        </span></h3>
                        <p className="text-sm text-muted-foreground" data-unique-id="2fc8561f-e5c6-46b8-8e8b-924627c32426" data-file-name="app/account/settings/settings-content.tsx"><span className="editable-text" data-unique-id="12c52456-d546-45e4-9ce4-4978653584e9" data-file-name="app/account/settings/settings-content.tsx">
                          Add an extra layer of security to your account
                        </span></p>
                      </div>
                      <Badge variant="outline" className="bg-chart-2/10 text-chart-2 border-chart-2/30" data-unique-id="bedf61d6-1159-4639-b0d5-1acf87ae034b" data-file-name="app/account/settings/settings-content.tsx"><span className="editable-text" data-unique-id="391c71a4-0b32-49a7-bf49-1e13e3f19ad0" data-file-name="app/account/settings/settings-content.tsx">
                        Recommended
                      </span></Badge>
                    </div>
                    <Button variant="outline" data-unique-id="21597f1a-5cba-4179-8ad1-e8fc83a76fa1" data-file-name="app/account/settings/settings-content.tsx"><span className="editable-text" data-unique-id="a22049f3-d537-430b-811c-c51fd8b989d5" data-file-name="app/account/settings/settings-content.tsx">Enable 2FA</span></Button>
                  </div>
                  
                  {/* Active Sessions */}
                  <div className="pt-6 border-t border-border" data-unique-id="3b66b667-0697-4fc4-bbc9-a49ea44d26ba" data-file-name="app/account/settings/settings-content.tsx">
                    <h3 className="text-base font-medium mb-3" data-unique-id="1de7bd53-8e61-40be-bfec-5af47bfaa91f" data-file-name="app/account/settings/settings-content.tsx"><span className="editable-text" data-unique-id="5891e556-3491-4a14-8bec-5530f65f3477" data-file-name="app/account/settings/settings-content.tsx">Active Sessions</span></h3>
                    <div className="space-y-3" data-unique-id="9636ad1e-9070-4db7-a68c-c8e942c0ef07" data-file-name="app/account/settings/settings-content.tsx">
                      <div className="flex justify-between items-center p-3 bg-accent rounded-md" data-unique-id="f10923ea-f897-4076-93bd-3fa434193a1b" data-file-name="app/account/settings/settings-content.tsx">
                        <div data-unique-id="99f8f8c4-f529-4fb4-8a57-9c2f8eddb0dd" data-file-name="app/account/settings/settings-content.tsx">
                          <div className="font-medium" data-unique-id="5aa0b465-7ba8-4241-bd6b-f46975e0ce1a" data-file-name="app/account/settings/settings-content.tsx"><span className="editable-text" data-unique-id="43fa65cd-efa1-4d33-82b5-4bfed87851d2" data-file-name="app/account/settings/settings-content.tsx">Current Session</span></div>
                          <div className="text-sm text-muted-foreground" data-unique-id="44db34a5-d787-4d50-8c0c-3f29b7b45ce5" data-file-name="app/account/settings/settings-content.tsx"><span className="editable-text" data-unique-id="59d5df8d-7b36-4e82-b070-399fa8b97eda" data-file-name="app/account/settings/settings-content.tsx">
                            Mac OS • San Francisco, USA • 192.168.1.1
                          </span></div>
                        </div>
                        <Badge data-unique-id="d9d257f3-bfcb-4350-833b-1d5286017ba7" data-file-name="app/account/settings/settings-content.tsx"><span className="editable-text" data-unique-id="29ae7c7f-1347-401a-9798-315c77ed018e" data-file-name="app/account/settings/settings-content.tsx">Active Now</span></Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-card border border-border rounded-md" data-unique-id="722e90a4-5759-4b45-8334-59ab3fc8a5b0" data-file-name="app/account/settings/settings-content.tsx">
                        <div data-unique-id="cddb9b02-297c-49f0-896c-c6aa0464e757" data-file-name="app/account/settings/settings-content.tsx">
                          <div className="font-medium" data-unique-id="33edb4d9-233a-41af-9bee-534aa75416ff" data-file-name="app/account/settings/settings-content.tsx"><span className="editable-text" data-unique-id="9655ba91-48ff-4215-8a82-c40e92208361" data-file-name="app/account/settings/settings-content.tsx">Chrome on Windows</span></div>
                          <div className="text-sm text-muted-foreground" data-unique-id="2cc240cd-a347-4806-85f0-25e27dd93527" data-file-name="app/account/settings/settings-content.tsx"><span className="editable-text" data-unique-id="4aedad5a-76ee-4657-9684-dc788a14cba2" data-file-name="app/account/settings/settings-content.tsx">
                            Windows 10 • New York, USA • Last active 2 days ago
                          </span></div>
                        </div>
                        <Button size="sm" variant="outline" data-unique-id="658e8b07-be83-46ea-ae5a-aac86314721a" data-file-name="app/account/settings/settings-content.tsx"><span className="editable-text" data-unique-id="9af546ab-663e-4c99-ac6a-2612b508dfb6" data-file-name="app/account/settings/settings-content.tsx">Sign Out</span></Button>
                      </div>
                    </div>
                    <Button variant="outline" className="mt-3 text-destructive" data-unique-id="3331065f-6e51-4f1a-b290-bb3beb6a2e54" data-file-name="app/account/settings/settings-content.tsx"><span className="editable-text" data-unique-id="3d699507-b45a-4e17-b829-225166de789e" data-file-name="app/account/settings/settings-content.tsx">
                      Sign Out All Other Sessions
                    </span></Button>
                  </div>
                  
                  {/* API Keys */}
                  <div className="pt-6 border-t border-border" data-unique-id="ca362e4e-7ba0-4058-9711-3e28b300b75e" data-file-name="app/account/settings/settings-content.tsx">
                    <h3 className="text-base font-medium mb-3 flex items-center" data-unique-id="676be087-e62a-45b8-8d16-628324e47be5" data-file-name="app/account/settings/settings-content.tsx">
                      <Key className="h-4 w-4 mr-2" /><span className="editable-text" data-unique-id="61b38ad7-a088-42fe-9ce9-1469b61ba2ca" data-file-name="app/account/settings/settings-content.tsx">
                      API Keys
                    </span></h3>
                    <p className="text-sm text-muted-foreground mb-3" data-unique-id="b993fa44-fe39-410d-875a-c6776b6024fc" data-file-name="app/account/settings/settings-content.tsx"><span className="editable-text" data-unique-id="234c558b-d929-4562-a5bc-e2de499f45e9" data-file-name="app/account/settings/settings-content.tsx">
                      Manage API keys to interact with our services programmatically
                    </span></p>
                    <Button data-unique-id="d3948f86-a0bc-46a2-99f0-221a837f2812" data-file-name="app/account/settings/settings-content.tsx"><span className="editable-text" data-unique-id="24dcb81f-8ba3-41c7-9878-196b02a01c40" data-file-name="app/account/settings/settings-content.tsx">Generate New API Key</span></Button>
                  </div>
                </div>
              </CardContent>
            </Card>}
          
          {/* Notification Settings */}
          {activeTab === 'notifications' && <Card data-unique-id="257caaa1-e810-4316-9d42-85c5d5a5db12" data-file-name="app/account/settings/settings-content.tsx">
              <CardContent className="pt-6" data-unique-id="feff4af8-2542-4a51-9e1d-dfc1d3ce83b1" data-file-name="app/account/settings/settings-content.tsx">
                <h2 className="text-xl font-semibold mb-6 flex items-center" data-unique-id="01382709-7938-4e61-8582-aaff5f3a5115" data-file-name="app/account/settings/settings-content.tsx">
                  <Bell className="h-5 w-5 mr-2" /><span className="editable-text" data-unique-id="b68179aa-66cf-41e7-b58d-2bde51ef30f1" data-file-name="app/account/settings/settings-content.tsx">
                  Notification Settings
                </span></h2>
                
                <div className="space-y-6" data-unique-id="6a114801-c399-40a7-b7ac-42fa5c1e3bca" data-file-name="app/account/settings/settings-content.tsx">
                  <div data-unique-id="b026e089-eee7-4022-96d4-bdcc8bf4bff0" data-file-name="app/account/settings/settings-content.tsx">
                    <h3 className="text-base font-medium mb-4" data-unique-id="762e93e8-eb18-408d-a650-451e72ed5c1a" data-file-name="app/account/settings/settings-content.tsx"><span className="editable-text" data-unique-id="490acb6a-c426-4e25-bb23-b4fef8921e4b" data-file-name="app/account/settings/settings-content.tsx">Email Notifications</span></h3>
                    <div className="space-y-3" data-unique-id="1c1d6338-227b-4fc7-9e1f-9e6efc3ef758" data-file-name="app/account/settings/settings-content.tsx" data-dynamic-text="true">
                      {[{
                    id: 'marketing',
                    label: 'Marketing emails and newsletters'
                  }, {
                    id: 'updates',
                    label: 'Platform updates and new features'
                  }, {
                    id: 'bountyMatches',
                    label: 'Bounties that match your skills'
                  }, {
                    id: 'messages',
                    label: 'Messages from clients and hunters'
                  }].map(item => <div key={item.id} className="flex items-center justify-between p-3 border border-border rounded-md" data-unique-id="5fa10da6-b57f-4695-9922-37e5b41e64f9" data-file-name="app/account/settings/settings-content.tsx">
                          <div data-unique-id="0520de5e-9428-4afa-957f-1a87b47e221d" data-file-name="app/account/settings/settings-content.tsx" data-dynamic-text="true">{item.label}</div>
                          <label className="relative inline-flex items-center cursor-pointer" data-unique-id="2f56cc3b-5ee8-4905-a515-b8a85802d6dc" data-file-name="app/account/settings/settings-content.tsx">
                            <input type="checkbox" checked={emailNotifications[item.id as keyof typeof emailNotifications]} onChange={() => {
                        setEmailNotifications({
                          ...emailNotifications,
                          [item.id]: !emailNotifications[item.id as keyof typeof emailNotifications]
                        });
                      }} className="sr-only peer" data-unique-id="61000120-d6b9-46e9-8f7e-d02eb7c97704" data-file-name="app/account/settings/settings-content.tsx" />
                            <div className="w-11 h-6 bg-muted peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary" data-unique-id="102561ab-64e2-4861-b272-767c76e6bb46" data-file-name="app/account/settings/settings-content.tsx"></div>
                          </label>
                        </div>)}
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-border" data-unique-id="6e5f8ff0-c1cf-49af-a1d1-a0ebeaaced9d" data-file-name="app/account/settings/settings-content.tsx">
                    <h3 className="text-base font-medium mb-4" data-unique-id="7c123423-1425-4556-bfec-291d6861cad9" data-file-name="app/account/settings/settings-content.tsx"><span className="editable-text" data-unique-id="44f918d9-3b21-47ca-b56f-339e71a3bc35" data-file-name="app/account/settings/settings-content.tsx">In-App Notifications</span></h3>
                    <div className="space-y-3" data-unique-id="28c8c6bf-b0aa-454e-b696-c07ef6863ff3" data-file-name="app/account/settings/settings-content.tsx" data-dynamic-text="true">
                      {[{
                    id: 'bountyUpdates',
                    label: 'Bounty status updates',
                    checked: true
                  }, {
                    id: 'applicationUpdates',
                    label: 'Application status changes',
                    checked: true
                  }, {
                    id: 'paymentNotifications',
                    label: 'Payment notifications',
                    checked: true
                  }, {
                    id: 'systemAnnouncements',
                    label: 'System announcements',
                    checked: false
                  }].map(item => <div key={item.id} className="flex items-center justify-between p-3 border border-border rounded-md" data-unique-id="40e6dbb9-98f2-4a6f-ac30-16c320809f6f" data-file-name="app/account/settings/settings-content.tsx">
                          <div data-unique-id="f2a9231a-d9ef-4e08-8d41-6a882f762f4b" data-file-name="app/account/settings/settings-content.tsx" data-dynamic-text="true">{item.label}</div>
                          <label className="relative inline-flex items-center cursor-pointer" data-unique-id="59990267-d65a-47e1-b57c-b91c51a056a1" data-file-name="app/account/settings/settings-content.tsx">
                            <input type="checkbox" defaultChecked={item.checked} className="sr-only peer" data-unique-id="60bcaea5-4450-436a-823b-1228a9aaf093" data-file-name="app/account/settings/settings-content.tsx" />
                            <div className="w-11 h-6 bg-muted peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary" data-unique-id="f2df8c24-7540-4ccd-8ed2-635cb035e3aa" data-file-name="app/account/settings/settings-content.tsx"></div>
                          </label>
                        </div>)}
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end mt-6 pt-6 border-t border-border" data-unique-id="75d0996b-2f63-4a9b-8aa3-ad160193ab71" data-file-name="app/account/settings/settings-content.tsx">
                  <Button data-unique-id="c5f64487-9558-47f8-bf43-5a17a3166fde" data-file-name="app/account/settings/settings-content.tsx">
                    <Save className="h-4 w-4 mr-2" /><span className="editable-text" data-unique-id="678e174e-f1d7-41bf-afcf-008c18f069f6" data-file-name="app/account/settings/settings-content.tsx">
                    Save Preferences
                  </span></Button>
                </div>
              </CardContent>
            </Card>}
          
          {/* Billing Settings */}
          {activeTab === 'billing' && <Card data-unique-id="2e6df433-4126-4abd-bcc8-deacfb23961a" data-file-name="app/account/settings/settings-content.tsx">
              <CardContent className="pt-6" data-unique-id="b5fb362d-bdd2-4a63-a646-0fd2ec9596a2" data-file-name="app/account/settings/settings-content.tsx">
                <h2 className="text-xl font-semibold mb-6 flex items-center" data-unique-id="8e2590a2-ddc2-4351-952e-780a18930128" data-file-name="app/account/settings/settings-content.tsx">
                  <CreditCard className="h-5 w-5 mr-2" /><span className="editable-text" data-unique-id="5bd9f04d-304d-4989-87b2-7d914540d1cd" data-file-name="app/account/settings/settings-content.tsx">
                  Billing Settings
                </span></h2>
                
                <div className="mb-8" data-unique-id="fdce5c39-80bb-45ab-869c-de246b991290" data-file-name="app/account/settings/settings-content.tsx">
                  <h3 className="text-base font-medium mb-3" data-unique-id="0ca0f25b-b37c-4614-b415-8b7d341975c7" data-file-name="app/account/settings/settings-content.tsx"><span className="editable-text" data-unique-id="3e574bb5-4107-4796-8113-ac7187865cb6" data-file-name="app/account/settings/settings-content.tsx">Current Plan</span></h3>
                  <div className="border border-border rounded-lg overflow-hidden" data-unique-id="a5d7f1a1-fb17-4135-aefb-cf5eabcb09bf" data-file-name="app/account/settings/settings-content.tsx">
                    <div className="bg-accent p-4" data-unique-id="f6a8208e-affd-4bf6-8314-188e2c0fb683" data-file-name="app/account/settings/settings-content.tsx">
                      <div className="flex justify-between items-center" data-unique-id="98bd9639-3d05-483c-9bca-63ce83e6ab34" data-file-name="app/account/settings/settings-content.tsx">
                        <div data-unique-id="89a3e0b6-fa04-4892-bdfe-d3c26413717c" data-file-name="app/account/settings/settings-content.tsx">
                          <span className="text-lg font-medium" data-unique-id="d65ee314-08b0-4028-a82e-34458403be31" data-file-name="app/account/settings/settings-content.tsx"><span className="editable-text" data-unique-id="a2dcb173-d45c-4ab6-8a37-dd9b8703a682" data-file-name="app/account/settings/settings-content.tsx">Pro Plan</span></span>
                          <Badge className="ml-3 bg-chart-1" data-unique-id="d5eedd07-748e-4e19-ba0a-583bb9f7e368" data-file-name="app/account/settings/settings-content.tsx"><span className="editable-text" data-unique-id="f64c5adc-4b24-4572-b14e-dc5bfa8e27ee" data-file-name="app/account/settings/settings-content.tsx">Current</span></Badge>
                        </div>
                        <span className="text-xl font-bold" data-unique-id="a8a1d96f-6deb-4c94-92e4-dd583e3e5fd2" data-file-name="app/account/settings/settings-content.tsx"><span className="editable-text" data-unique-id="a9da222d-7ff2-4c07-a41b-e89a4b2fb0e7" data-file-name="app/account/settings/settings-content.tsx">$24</span><span className="text-sm font-normal text-muted-foreground" data-unique-id="44393ab7-8738-44b2-9a0b-3de495e048a8" data-file-name="app/account/settings/settings-content.tsx"><span className="editable-text" data-unique-id="b710a3fc-352e-4481-9621-7d5a27021bb4" data-file-name="app/account/settings/settings-content.tsx">/month</span></span></span>
                      </div>
                    </div>
                    <div className="p-4 space-y-3" data-unique-id="4683370e-06a3-4ab0-ad3c-3b54c2b9d2fa" data-file-name="app/account/settings/settings-content.tsx">
                      <div className="flex items-center" data-unique-id="22de9145-b8fb-4839-a631-3cb3f8b36ff2" data-file-name="app/account/settings/settings-content.tsx">
                        <Zap className="h-4 w-4 text-chart-1 mr-2" />
                        <span data-unique-id="80d8d994-4dcd-493a-8c50-e4b370f74287" data-file-name="app/account/settings/settings-content.tsx"><span className="editable-text" data-unique-id="8900c9c8-e183-413c-ab67-073ce0042d3a" data-file-name="app/account/settings/settings-content.tsx">Unlimited bounty applications</span></span>
                      </div>
                      <div className="flex items-center" data-unique-id="ea2a4e52-a4e1-454c-aadc-f3918c023409" data-file-name="app/account/settings/settings-content.tsx">
                        <Zap className="h-4 w-4 text-chart-1 mr-2" />
                        <span data-unique-id="f62566e0-b731-48fa-b6fd-0c33e66844da" data-file-name="app/account/settings/settings-content.tsx"><span className="editable-text" data-unique-id="9626f8b1-fbb7-4c57-9ced-293a9eb6feed" data-file-name="app/account/settings/settings-content.tsx">Featured profile for 2 weeks/month</span></span>
                      </div>
                      <div className="flex items-center" data-unique-id="a5a0fa6c-3e9d-48a6-a808-4e724645722a" data-file-name="app/account/settings/settings-content.tsx">
                        <Zap className="h-4 w-4 text-chart-1 mr-2" />
                        <span data-unique-id="94438208-7fa3-41ce-8a4b-29d491eb2781" data-file-name="app/account/settings/settings-content.tsx"><span className="editable-text" data-unique-id="e5c7483c-147e-41d2-9f26-652e6c061738" data-file-name="app/account/settings/settings-content.tsx">Early access to premium bounties</span></span>
                      </div>
                      <div className="flex items-center" data-unique-id="3a1ab333-2bd1-4523-a031-2cc9bce8d77e" data-file-name="app/account/settings/settings-content.tsx">
                        <Zap className="h-4 w-4 text-chart-1 mr-2" />
                        <span data-unique-id="e1e7255e-6239-4900-b955-5177ffb2edad" data-file-name="app/account/settings/settings-content.tsx"><span className="editable-text" data-unique-id="53eb57c0-6034-4cd0-aedc-63de8c4a399e" data-file-name="app/account/settings/settings-content.tsx">5% lower platform fees</span></span>
                      </div>
                      
                      <div className="flex gap-3 pt-3" data-unique-id="5efebeb7-cabc-4e8d-916c-d00ac542f735" data-file-name="app/account/settings/settings-content.tsx">
                        <Button variant="outline" data-unique-id="517d9fef-96d8-4e93-a5e8-df9708424660" data-file-name="app/account/settings/settings-content.tsx"><span className="editable-text" data-unique-id="9c1b7029-2389-45cd-8bac-6f2f2038b821" data-file-name="app/account/settings/settings-content.tsx">Change Plan</span></Button>
                        <Button variant="outline" className="text-destructive" data-unique-id="d17b196b-3392-480a-a708-9cb0ce22f558" data-file-name="app/account/settings/settings-content.tsx"><span className="editable-text" data-unique-id="959283a5-9110-4c7f-a2d1-44813b6a40a3" data-file-name="app/account/settings/settings-content.tsx">Cancel Subscription</span></Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8" data-unique-id="378e8865-aa16-4c17-b20b-0e91581d5e12" data-file-name="app/account/settings/settings-content.tsx">
                  <h3 className="text-base font-medium mb-3" data-unique-id="9f57a99f-104d-44d3-ad31-a8c2e3280e41" data-file-name="app/account/settings/settings-content.tsx"><span className="editable-text" data-unique-id="c89cf6ab-2a6d-4808-b1e4-fc99fe08c46e" data-file-name="app/account/settings/settings-content.tsx">Payment Methods</span></h3>
                  <div className="space-y-3" data-unique-id="7a17aa41-f65b-40ba-9f90-64fb729b5a85" data-file-name="app/account/settings/settings-content.tsx">
                    <div className="flex justify-between items-center p-4 border border-border rounded-md" data-unique-id="82c960f0-e78c-413f-baa0-dc4691ca1cb2" data-file-name="app/account/settings/settings-content.tsx">
                      <div className="flex items-center" data-unique-id="4add405f-02cc-4048-b319-b8db62c2e977" data-file-name="app/account/settings/settings-content.tsx">
                        <div className="bg-muted h-10 w-14 rounded flex items-center justify-center mr-4" data-unique-id="c0ce38ab-253e-4102-9a32-2eb636f017e5" data-file-name="app/account/settings/settings-content.tsx">
                          <span className="font-semibold text-xs" data-unique-id="900718ee-22a8-46b5-a5f6-3a86e97ad9d7" data-file-name="app/account/settings/settings-content.tsx"><span className="editable-text" data-unique-id="e8ef33f6-6dbf-416a-a925-50e47150ac83" data-file-name="app/account/settings/settings-content.tsx">VISA</span></span>
                        </div>
                        <div data-unique-id="4921a549-cd8b-48ba-944d-799e9e775800" data-file-name="app/account/settings/settings-content.tsx">
                          <div data-unique-id="4ecea7ab-6092-4382-b071-199a19e89306" data-file-name="app/account/settings/settings-content.tsx"><span className="editable-text" data-unique-id="784cc04c-ec1f-4213-a8f8-59e6c2950ca5" data-file-name="app/account/settings/settings-content.tsx">Visa ending in 4242</span></div>
                          <div className="text-xs text-muted-foreground" data-unique-id="49146f64-de23-43f3-85d1-4114b0b1526e" data-file-name="app/account/settings/settings-content.tsx"><span className="editable-text" data-unique-id="61c45593-ec47-4268-8db1-35ef4e519576" data-file-name="app/account/settings/settings-content.tsx">Expires 12/2025</span></div>
                        </div>
                      </div>
                      <div className="flex gap-2" data-unique-id="ce3658bd-720a-40f7-a790-1e973a1d56ce" data-file-name="app/account/settings/settings-content.tsx">
                        <Badge data-unique-id="a2a9076f-1939-408e-882f-d266c60414be" data-file-name="app/account/settings/settings-content.tsx"><span className="editable-text" data-unique-id="0deff0c2-934a-483b-bee2-98bffd1f2b25" data-file-name="app/account/settings/settings-content.tsx">Default</span></Badge>
                        <Button size="sm" variant="ghost" data-unique-id="da242c67-ae15-48db-a029-4fb465b58299" data-file-name="app/account/settings/settings-content.tsx"><span className="editable-text" data-unique-id="141d894a-7af6-4feb-8e27-dde693d821a7" data-file-name="app/account/settings/settings-content.tsx">Edit</span></Button>
                      </div>
                    </div>
                    
                    <Button variant="outline" className="w-full" data-unique-id="c7e0c5da-f9e2-46fb-96a0-6094f45689c9" data-file-name="app/account/settings/settings-content.tsx"><span className="editable-text" data-unique-id="894fced6-3879-473e-9a60-a1112fa740b7" data-file-name="app/account/settings/settings-content.tsx">
                      Add Payment Method
                    </span></Button>
                  </div>
                </div>
                
                <div className="mb-8" data-unique-id="99a7ae69-416a-495a-9682-d836e74f78ec" data-file-name="app/account/settings/settings-content.tsx">
                  <h3 className="text-base font-medium mb-3" data-unique-id="b178a184-4d3a-4d58-ac04-ab61dbdf5c0d" data-file-name="app/account/settings/settings-content.tsx"><span className="editable-text" data-unique-id="35b28de0-7235-43f2-b0b1-f1f7dd741c6d" data-file-name="app/account/settings/settings-content.tsx">Billing History</span></h3>
                  <div className="relative overflow-x-auto" data-unique-id="fba89c6d-f5ab-4a94-bc9d-225deac28ed0" data-file-name="app/account/settings/settings-content.tsx">
                    <table className="w-full text-sm text-left" data-unique-id="627b5df7-eaf1-409e-b1f7-d613bc837f8c" data-file-name="app/account/settings/settings-content.tsx">
                      <thead className="bg-accent text-muted-foreground" data-unique-id="dc24a317-5c9e-4602-8a4b-65ce175da47d" data-file-name="app/account/settings/settings-content.tsx">
                        <tr data-unique-id="e7f871d0-bf14-412f-afc3-a29ed04f61d6" data-file-name="app/account/settings/settings-content.tsx">
                          <th className="px-4 py-3" data-unique-id="df90943d-4050-40d4-9850-f65146796654" data-file-name="app/account/settings/settings-content.tsx"><span className="editable-text" data-unique-id="fa323df8-f754-4830-b910-9553c8b20833" data-file-name="app/account/settings/settings-content.tsx">Date</span></th>
                          <th className="px-4 py-3" data-unique-id="325186d4-650b-4e11-a9ab-8992993dae49" data-file-name="app/account/settings/settings-content.tsx"><span className="editable-text" data-unique-id="df07cc6f-0771-4eb1-809b-1437ac02c12f" data-file-name="app/account/settings/settings-content.tsx">Description</span></th>
                          <th className="px-4 py-3" data-unique-id="c0f49297-29fc-491f-b10a-ccf794e0eb6d" data-file-name="app/account/settings/settings-content.tsx"><span className="editable-text" data-unique-id="2f2ff185-8c49-4544-b02c-c136d8f250b2" data-file-name="app/account/settings/settings-content.tsx">Amount</span></th>
                          <th className="px-4 py-3" data-unique-id="42828c92-6b8f-487d-bbd7-1493685d7e01" data-file-name="app/account/settings/settings-content.tsx"><span className="editable-text" data-unique-id="f9ec5a07-847d-4b29-a6aa-a2628c90ab81" data-file-name="app/account/settings/settings-content.tsx">Status</span></th>
                          <th className="px-4 py-3" data-unique-id="876a7cf3-2510-4d1a-8f82-a5fc82713024" data-file-name="app/account/settings/settings-content.tsx"></th>
                        </tr>
                      </thead>
                      <tbody data-unique-id="3ebe0090-e871-4401-80f9-3c14eb2e77d0" data-file-name="app/account/settings/settings-content.tsx" data-dynamic-text="true">
                        {[{
                      date: 'May 1, 2025',
                      desc: 'Pro Plan - Monthly',
                      amount: '$24.00',
                      status: 'Paid'
                    }, {
                      date: 'Apr 1, 2025',
                      desc: 'Pro Plan - Monthly',
                      amount: '$24.00',
                      status: 'Paid'
                    }, {
                      date: 'Mar 1, 2025',
                      desc: 'Pro Plan - Monthly',
                      amount: '$24.00',
                      status: 'Paid'
                    }].map((invoice, i) => <tr key={i} className="border-b border-border" data-unique-id="5c67f7f9-49d1-4693-bdc2-ba780c970a3e" data-file-name="app/account/settings/settings-content.tsx">
                            <td className="px-4 py-3" data-unique-id="e6f34132-b79b-4f08-b181-26b67edfedf4" data-file-name="app/account/settings/settings-content.tsx" data-dynamic-text="true">{invoice.date}</td>
                            <td className="px-4 py-3" data-unique-id="8f717bdc-33d0-417b-9679-2d24e8df0932" data-file-name="app/account/settings/settings-content.tsx" data-dynamic-text="true">{invoice.desc}</td>
                            <td className="px-4 py-3" data-unique-id="e0b35511-bdbc-4dd8-b176-82cfdb6cba69" data-file-name="app/account/settings/settings-content.tsx" data-dynamic-text="true">{invoice.amount}</td>
                            <td className="px-4 py-3" data-unique-id="221ab064-106d-4b2b-8a68-8813d7aa488d" data-file-name="app/account/settings/settings-content.tsx">
                              <Badge variant="outline" className="bg-chart-2/10 text-chart-2 border-chart-2/30" data-unique-id="926f61e0-b265-4cb3-8a02-ef03954bec15" data-file-name="app/account/settings/settings-content.tsx" data-dynamic-text="true">
                                {invoice.status}
                              </Badge>
                            </td>
                            <td className="px-4 py-3" data-unique-id="f8ee4188-bb22-4461-90cd-b56868063188" data-file-name="app/account/settings/settings-content.tsx">
                              <Button size="sm" variant="ghost" data-unique-id="2886411b-8be5-44c2-9744-5899bb9d7ae2" data-file-name="app/account/settings/settings-content.tsx"><span className="editable-text" data-unique-id="474aa77b-8506-4298-82c0-39de32c63912" data-file-name="app/account/settings/settings-content.tsx">Download</span></Button>
                            </td>
                          </tr>)}
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardContent>
            </Card>}
        </motion.div>
      </div>
    </div>;
}