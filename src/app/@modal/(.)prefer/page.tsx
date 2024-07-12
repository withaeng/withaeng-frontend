import PreferModalPage from '@/app/(auth)/(component)/PreferModal';
import { UserStoreProvider } from '@/providers/UserStoreProvider';

export default function PreferPage() {
  return (
    <UserStoreProvider>
      <PreferModalPage />
    </UserStoreProvider>
  );
}
