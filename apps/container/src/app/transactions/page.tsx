'use client';

import RemoteLoader from '@/components/RemoteLoader';

export default function Page() {
  return (
    <main>
      <h1>Transactions</h1>
      <RemoteLoader remote="transactions/App" />
    </main>
  );
}