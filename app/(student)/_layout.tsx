import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function StudentLayout() {
  return (
    <Tabs 
      screenOptions={{ 
        headerStyle: { backgroundColor: '#1F3864' },
        headerTintColor: '#FFF',
        headerTitleStyle: { fontWeight: 'bold' },
        tabBarActiveTintColor: '#1F3864',
      }}
    >
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <Ionicons name="person" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="subject"
        options={{
          href: null,
          title: 'Subject Details',
        }}
      />
      <Tabs.Screen
        name="inbox"
        options={{
          title: 'Inbox',
          tabBarIcon: ({ color }) => <Ionicons name="notifications" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
