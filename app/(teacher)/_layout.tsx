import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TeacherLayout() {
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
        name="students"
        options={{
          title: 'Students',
          tabBarIcon: ({ color }) => <Ionicons name="people" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
