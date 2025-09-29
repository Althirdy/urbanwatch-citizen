import { router } from 'expo-router';
import { useEffect } from 'react';

export default function AuthIndex() {
  useEffect(() => {
    // Redirect to login screen by default
    router.replace('/auth/login' as any);
  }, []);

  return null;
}